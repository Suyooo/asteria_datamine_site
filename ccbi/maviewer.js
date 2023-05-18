var game = new Phaser.Game(640, 1136, Phaser.WEBGL, 'maviewer', { preload: preload, create: create, update: update, render: render });

var rootNode;
var prevtime = 0;
var time = 0;
var blendModeCounter = 17;
var blendModeLookup = {};
var sounds = undefined;

function preload() {
	game.load.image('maviewer_enemy', 'image/battle/boss/battle_boss_0084.png');
	
	for (let i = 0; i < ccb.resources.atlas.length; i++) {
		game.load.atlas(ccb.resources.atlas[i] + ".plist", ccb.resources.atlas[i] + ".png", ccb.resources.atlas[i] + ".json");
	    document.getElementById("res-atlas").innerHTML += "<br><a href='" + ccb.resources.atlas[i] + ".png'>" + ccb.resources.atlas[i] + "</a>";
	}
	for (let i = 0; i < ccb.resources.sfx.length; i++) {
		game.load.audio("seplay_" + ccb.resources.sfx[i], "sound/se/battle/" + ccb.resources.sfx[i] + ".ogg");
	    document.getElementById("res-sounds").innerHTML += "<br><a href='sound/se/battle/" + ccb.resources.sfx[i] + ".ogg'>" + ccb.resources.sfx[i] + "</a>";
	}
	for (let i = 0; i < ccb.resources.voice.length; i++) {
		game.load.audio("voiceplay_" + ccb.resources.voice[i].replace("/", "_"), "sound/voice/" + ccb.resources.voice[i] + ".ogg");
	    document.getElementById("res-voice").innerHTML += "<br><a href='sound/voice/" + ccb.resources.voice[i] + ".ogg'>" + ccb.resources.voice[i] + "</a>";
	}
}

let centerOrigin = viewname.startsWith("my") || (viewname.startsWith("hm") && viewname !== "hm800");
function create() {
	game.world.removeAll();
	if (sounds === undefined) {
		sounds = {};
		for (let i = 0; i < ccb.resources.sfx.length; i++) {
			sounds["seplay_" + ccb.resources.sfx[i]] = game.add.audio("seplay_" + ccb.resources.sfx[i]);
		}
		for (let i = 0; i < ccb.resources.voice.length; i++) {
			sounds["voiceplay_" + ccb.resources.voice[i].replace("/", "_")] = game.add.audio("voiceplay_" + ccb.resources.voice[i].replace("/", "_"));
		}
	}
	
	let rootgroup = game.add.group(undefined, "ROOT");
	rootgroup.ignorePivotForPos = false;
	rootgroup.nodeSize = new Phaser.Point(640,1136);
	if (centerOrigin) {
	    rootgroup.x = 320;
	    rootgroup.y = 480;
	} else {
	    rootgroup.x = 0;
	    rootgroup.y = 0;
	}
	rootNode = createNode(ccb["rootNode"], rootgroup);
	//game.add.graphics(0,0).lineStyle(10,0xFF0000).drawRect(0,0,640,1136);
	if (playing) handleCallbacks(prevtime, time);
	prevtime = time;
}

var fps = 0;
var playing = false;
var end = false;

function update() {
	if (playing && time < ccb.endTime) {
		time += game.time.elapsed / 1000;
		fps = 0.9 * fps + 0.1 * (1000 / game.time.elapsed);
		create();
	} else {
	    playing = false;
	    end = true;
    }
}

function render() {
	if (saveNext) {
		saveNext = false;
		var link = document.createElement('a');
		link.download = "screenshot.png";
		link.href = game.canvas.toDataURL("image/png");
		link.click();
		link.remove();
	}
	//game.debug.text("FPS: "+Math.round(fps), 32, 32);
}

function stop() {
	playing = false;
}
function play() {
    if (end) jump(0);
	playing = true;
    end = false;
}
function jump(t) {
	prevtime = time = t;
	playing = false;
	create();
}
var saveNext=false;
function save() {
	saveNext=true;
}

function changeCenter() {
    centerOrigin = !centerOrigin;
    jump(0);
}

function createNode(node, parent) {
	let n = game.add.group(parent, node.displayName);
	n.y = n.parent.nodeSize.y;
	n.flip = [false, false];
	
	n.properties = {}
	for (let i = 0; i < node.properties.length; i++) {
		n.properties[node.properties[i].name] = node.properties[i].value;
		handleProp(n, node.properties[i]);
	}
	
	if (node.displayName == "CCLabelTTF") {
		if (! n.properties.color) n.properties.color = [255,255,255];
		let t = game.add.text(0, n.properties.fontSize[0]/3, n.properties.string, {
			"font": n.properties.fontName,
			"fontSize": n.properties.fontSize[0],
			"align": (n.properties.horizontalAlignment == 0) ? "left" : ((n.properties.horizontalAlignment == 1) ? "center" : "right"),
			"fill": "rgb(" + n.properties.color[0] + "," + n.properties.color[1] + "," + n.properties.color[2] + ")"
		}, n);
		n.nodeSize = new Phaser.Point(t.width, t.height);
	} else if (node.displayName == "CCLayerColor") {
		n.tintGraphic = game.add.graphics(0,0,n).beginFill(n.tint).drawRect(0,0,n.nodeSize.x-1,n.nodeSize.y-1).endFill();
	} else if (node.memberVarAssignmentName == "enemyAddNode") {
		let enemySprite = game.add.sprite(0,0,"maviewer_enemy",undefined,n);
		enemySprite.x = 320 - enemySprite.width / 2;
		enemySprite.y = -1136;
	}
	
	if (! n.nodeSize) {
		n.nodeSize = parent.nodeSize;
		n.nodeSize = new Phaser.Point(0,0);
	}
	n.pivot.x = n.pivot.x * n.nodeSize.x;
	n.pivot.y = -(n.pivot.y - 1) * n.nodeSize.y;
	if (n.ignorePivotForPos) {
		n.x += n.pivot.x;
		n.y -= n.pivot.y;
	}
	
	for (let i = 0; i < node.children.length; i++) {
		createNode(node.children[i], n);
	}
	
	for(let key in node.animatedProperties) {
		if (! node.animatedProperties.hasOwnProperty(key)) continue;
		for(let prop in node.animatedProperties[key]){
			if (! node.animatedProperties[key].hasOwnProperty(prop)) continue;
			handleAnimProp(n, node.animatedProperties[key][prop]);
		}
	}
	
	// TODO: can't stack these
	if (n.tint) {
		n.setAllChildren("tint", n.tint, false, false, 0, true);
		if (n.tintGraphic) n.tintGraphic.tint = 0xFFFFFF;
	}
	if (n.blendMode) {
		n.setAllChildren("blendMode", n.blendMode, false, false, 0, true);
	}
	
	if (n.flip.x || n.flip.y) {
		let inner = game.add.group(undefined, "inner");
		n.moveAll(inner);
		n.add(inner);
		inner.pivot.x = inner.x = inner.width / 2;
		inner.pivot.y = inner.y = inner.height / 2;
		if (n.flip[0]) inner.scale.x = -1;
		if (n.flip[1]) inner.scale.y = -1;
	}
	
	//game.add.graphics(0,0,n).lineStyle(1,0xFFFFFF).drawRect(0,0,n.nodeSize.x-1,n.nodeSize.y-1);
	return n;
}

function handleProp(group, prop) {
	if (prop.name === "position") {
		if (prop.value[2] == 0) {
			group.x = prop.value[0] - (group.parent.ignorePivotForPos ? group.parent.pivot.x : 0);
			group.y = group.parent.nodeSize.y - prop.value[1] - (group.parent.ignorePivotForPos ? group.parent.pivot.y : 0);
		} else {
			console.log("Unimplemented position type " + prop.value[2]);
			console.log(prop);
		}
	} else if (prop.name === "contentSize") {
		if (prop.value[2] == 0) {
			group.nodeSize = new Phaser.Point(prop.value[0],prop.value[1]);
		} else if (prop.value[2] == 1) {
			group.nodeSize = new Phaser.Point(group.parent.nodeSize.x*prop.value[0]/100.0,group.parent.nodeSize.y*prop.value[1]/100.0);
		} else {
			console.log("Unimplemented size type " + prop.value[2]);
			console.log(prop);
		}
	} else if (prop.name === "anchorPoint") {
		group.pivot.x = prop.value[0];
		group.pivot.y = prop.value[1];
	} else if (prop.name === "scale") {
		if (prop.value[2] == 0 || prop.value[2] == 1) {
			group.scale.x = prop.value[0];
			group.scale.y = prop.value[1];
		} else {
			console.log("Unimplemented scale type " + prop.value[2]);
			console.log(prop);
		}
	} else if (prop.name === "skew") {
		group.skew.x = prop.value[0] / 720.0 * Phaser.Math.PI2;
		group.skew.y = prop.value[1] / 720.0 * Phaser.Math.PI2;
	} else if (prop.name === "flip") {
		group.flip = prop.value;
	} else if (prop.name === "ignoreAnchorPointForPosition") {
		// TODO: will break if this prop is true and position is changed later
		group.ignorePivotForPos = prop.value;
	} else if (prop.name === "visible") {
		group.visible = prop.value;
	} else if (prop.name === "displayFrame") {
		let s = game.add.sprite(1,1,prop.value[0],prop.value[1],group);
		group.nodeSize = new Phaser.Point(s.width, s.height);
	} else if (prop.name === "rotation") {
		group.angle = prop.value;
	} else if (prop.name === "blendFunc") {
		if (blendModeLookup[prop.value] === undefined) {
			PIXI.blendModesWebGL[blendModeCounter] = prop.value;
			blendModeLookup[prop.value] = blendModeCounter;
			blendModeCounter++;
		} else {
			group.blendMode = blendModeLookup[prop.value];
		}
	} else if (prop.name === "opacity") {
		group.alpha = prop.value/255.0;
	} else if (prop.name === "color") {
		group.tint = (Math.round(prop.value[0]) * 256 + Math.round(prop.value[1])) * 256 + Math.round(prop.value[2]);
	} else if (prop.name === "touchEnabled" || prop.name === "mouseEnabled" || prop.name === "tag" || prop.name === "string" || prop.name === "fontSize" || prop.name === "fontName" || prop.name === "horizontalAlignment" || (prop.name === "verticalAlignment" && prop.value === 0) || (prop.name === "dimensions" && prop.value[0] === 0 && prop.value[1] === 0 && prop.value[2] === 0)) {
		// ignore
	} else {
		console.log("Unimplemented prop \"" + prop.name + "\"");
		console.log(prop);
	}
}

function handleAnimProp(group, prop) {
	let next = 0;
	while (next < prop.keyframes.length && prop.keyframes[next].time < time) {
		next++;
	}
	let prev = next - 1;
	
	let val = -1;
	if (prev == -1) {
		val = prop.keyframes[next].value;
	} else if (next == prop.keyframes.length || prop.keyframes[prev].easing.type == 0) {
		val = prop.keyframes[prev].value;
	} else {
		let t = (time - prop.keyframes[prev].time) / (prop.keyframes[next].time - prop.keyframes[prev].time);
		if (Array.isArray(prop.keyframes[prev].value)) {
			val = [];
			for (let i = 0; i < prop.keyframes[prev].value.length; i++) {
				val.push(ease(prop.keyframes[prev].value[i], prop.keyframes[next].value[i], t, prop.keyframes[prev].easing.type));
			}
		} else {
			val = ease(prop.keyframes[prev].value, prop.keyframes[next].value, t, prop.keyframes[prev].easing.type);
		}
	}
	
	if (prop.name === "position") {
		group.x = val[0] - (group.ignorePivotForPos ? group.pivot.x : 0);
		group.y = group.parent.nodeSize.y - val[1] - (group.ignorePivotForPos ? group.pivot.y : 0);
	} else if (prop.name === "scale") {
		group.scale.x = val[0];
		group.scale.y = val[1];
	} else if (prop.name === "visible") {
		group.visible = val;
	} else if (prop.name === "rotation") {
		group.angle = val;
	} else if (prop.name === "opacity") {
		group.alpha = val/255.0;
	} else if (prop.name === "color") {
		group.tint = Math.round(val[0]) << 16 | Math.round(val[1]) << 8 | Math.round(val[2]);
		if (group.tintGraphic) {
			group.tintGraphic.graphicsData[0].fillColor = group.tint;
		}
	} else {
		console.log("Unimplemented animated prop \"" + prop.name + "\"");
		console.log(prop);
	}
}

function ease(a,b,t,type) {
	if (type == 1) {
		return a + (b - a) * t;
	} else if (type == 2) {
		return (b - a) * t * t * t + a;
	} else if (type == 3) {
		t--;
		return (b - a) * (t * t * t + 1) + a;
	} else if (type == 4) {
		t *= 2;
		if (t < 1) return (b - a) / 2 * t * t * t + a;
		t -= 2;
		return (b - a) / 2 * (t * t * t + 2) + a;
	} else {
		console.log("Unimplemented keyframe easing type \"" + type + "\"");
		return undefined;
	}
}

function handleCallbacks(prev, now) {
	let i = 0;
	while (i < ccb.sequences[0].callbackChannel.keyframes.length && ccb.sequences[0].callbackChannel.keyframes[i].time <= time) {
		i++;
	}
	i -= 1;
	if (i < 0 || i >= ccb.sequences[0].callbackChannel.keyframes.length || prevtime > ccb.sequences[0].callbackChannel.keyframes[i].time) return;
	
	initialTime = ccb.sequences[0].callbackChannel.keyframes[i].time;
	while (i >= 0 && ccb.sequences[0].callbackChannel.keyframes[i].time == initialTime) {
		let val = ccb.sequences[0].callbackChannel.keyframes[i].value;
		if (val[0].startsWith("voiceplay") || val[0].startsWith("seplay")) {
			sounds[val[0]].play();
		}
		i--;
	}
}
