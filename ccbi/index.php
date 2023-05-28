<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Asteria CCBI Player</title>
</head>
<body>
    <script>let viewname = "<?php echo preg_replace("/[^a-z0-9_]/", "", $_GET["id"]); ?>";</script>
    <script src="<?php echo preg_replace("/[^a-z0-9_]/", "", $_GET["id"]); ?>.js" charset="utf-8"></script>
    <script src="phaser.js" charset="utf-8"></script>
    <script src="maviewer.js" charset="utf-8"></script>
    <div style="display:flex;width:100%">
        <div id="maviewer"></div>
        <div style="padding-left: 1em">
	        <button onClick="play();">Play</button>
	        <button onClick="stop();">Pause</button>
	        <button onClick="save();">Save Screenshot</button><br>
	        Jump to Time (in seconds): <input type="number" id="jumptime" value="0"> <button onClick="jump(parseFloat(document.getElementById('jumptime').value));">Jump</button><br><br>
	        This player is not based on the original engine, it's an attempt at a recreation. That means animations are presented on a best-effort basis. Several things are unimplemented. Feel free to share screenshots of the funniest errors.<br>
	        Use your browser's zoom function to scale the player window to your screen size.<br>
	        <a href="#" onClick="document.getElementById('res').style.display='block'">Show Resource Links</a><br><br>
	        <div id="res" style="display:none">
	            <div id="res-atlas"><b>Sprite Atlases</b></div>
	            <div id="res-sounds"><b>Sound Effects</b></div>
	            <div id="res-voice"><b>Voice Lines</b></div>
	        </div>
	    </div>
	</div>
</body>
</html>
