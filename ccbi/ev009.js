{
    "autoPlaySequenceId": 1,
    "rootNode": {
        "displayName": "EnemyBattleEvoSpSkillCutinNode",
        "memberVarAssignmentName": "",
        "memberVarAssignmentType": 0,
        "animatedProperties": {
            "0": {}
        },
        "properties": [
            {
                "type": "Size",
                "name": "contentSize",
                "value": [
                    100.0,
                    100.0,
                    1
                ]
            },
            {
                "type": "Point",
                "name": "anchorPoint",
                "value": [
                    0.5,
                    0.5
                ]
            },
            {
                "type": "ScaleLock",
                "name": "scale",
                "value": [
                    1.0,
                    1.0,
                    0
                ]
            },
            {
                "type": "Check",
                "name": "ignoreAnchorPointForPosition",
                "value": true
            },
            {
                "type": "Check",
                "platform": "iOS",
                "name": "touchEnabled",
                "value": true
            },
            {
                "type": "Check",
                "platform": "Mac",
                "name": "mouseEnabled",
                "value": true
            }
        ],
        "children": [
            {
                "displayName": "CCNode",
                "memberVarAssignmentName": "",
                "memberVarAssignmentType": 0,
                "animatedProperties": {},
                "properties": [
                    {
                        "type": "Point",
                        "name": "anchorPoint",
                        "value": [
                            0.0,
                            0.0
                        ]
                    },
                    {
                        "type": "ScaleLock",
                        "name": "scale",
                        "value": [
                            1.0,
                            1.0,
                            0
                        ]
                    },
                    {
                        "type": "Integer",
                        "name": "tag",
                        "value": 1
                    },
                    {
                        "type": "Check",
                        "name": "ignoreAnchorPointForPosition",
                        "value": false
                    }
                ],
                "children": [
                    {
                        "displayName": "CCLayerColor",
                        "memberVarAssignmentName": "filterLayer",
                        "memberVarAssignmentType": 1,
                        "animatedProperties": {
                            "0": {
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": 255,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 8.566666603088379,
                                            "value": 255,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 9.266666412353516,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Size",
                                "name": "contentSize",
                                "value": [
                                    640.0,
                                    1136.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": true
                            },
                            {
                                "type": "Check",
                                "platform": "iOS",
                                "name": "touchEnabled",
                                "value": true
                            },
                            {
                                "type": "Check",
                                "platform": "Mac",
                                "name": "mouseEnabled",
                                "value": true
                            },
                            {
                                "type": "Color3",
                                "name": "color",
                                "value": [
                                    0,
                                    0,
                                    0
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    770,
                                    771
                                ]
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": [
                                                320.0,
                                                1000.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": [
                                                320.0,
                                                600.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 6.300000190734863,
                                            "value": [
                                                320.0,
                                                600.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 6.4666666984558105,
                                            "value": [
                                                320.0,
                                                600.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 0.20000000298023224,
                                            "value": 255,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 8.199999809265137,
                                            "value": 255,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 8.933333396911621,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                },
                                "scale": {
                                    "name": "scale",
                                    "type": "ScaleLock",
                                    "keyframes": [
                                        {
                                            "time": 6.300000190734863,
                                            "value": [
                                                2.5,
                                                2.5
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        },
                                        {
                                            "time": 6.4666666984558105,
                                            "value": [
                                                2.0,
                                                2.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    320.0,
                                    648.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    2.0,
                                    2.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_back1.png"
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {},
                        "properties": [
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {},
                        "properties": [
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 0.6666666865348816,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 1.0,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 1.6666666269302368,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 2.0,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 2.6666667461395264,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 3.0,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 3.6666667461395264,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 4.0,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": -25.000003814697266,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 5.666666507720947,
                                                    "value": -25.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 6.0,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 6.333333492279053,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 7.0,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 7.333333492279053,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 8.0,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        },
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 8.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 0.3333333432674408,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 0.6666666865348816,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.3333333730697632,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.6666666269302368,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.3333332538604736,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.6666667461395264,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.3333332538604736,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.6666667461395264,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 4.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 5.666666507720947,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.333333492279053,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.666666507720947,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.333333492279053,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.666666507720947,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            600.5963134765625,
                                            1360.1348876953125,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            1.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            5.0,
                                            5.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": -20.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_shine2.png"
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 0.3333333432674408,
                                                    "value": 75.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 1.0,
                                                    "value": 70.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 1.3333333730697632,
                                                    "value": 75.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 2.0,
                                                    "value": 70.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 2.3333332538604736,
                                                    "value": 75.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 3.0,
                                                    "value": 70.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 3.3333332538604736,
                                                    "value": 75.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 4.0,
                                                    "value": 70.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 5.666666507720947,
                                                    "value": 75.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 6.333333492279053,
                                                    "value": 70.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 6.666666507720947,
                                                    "value": 75.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 7.333333492279053,
                                                    "value": 70.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 7.666666507720947,
                                                    "value": 75.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 8.333333015441895,
                                                    "value": 70.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        },
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 0.3333333432674408,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 8.333333015441895,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 0.3333333432674408,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 0.6666666865348816,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.3333333730697632,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.6666666269302368,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.3333332538604736,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.6666667461395264,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.3333332538604736,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.6666667461395264,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 4.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 5.666666507720947,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.0,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.333333492279053,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.666666507720947,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.0,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.333333492279053,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.666666507720947,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.0,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.333333015441895,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            722.22216796875,
                                            1444.4444580078125,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            1.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            -5.0,
                                            5.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 70.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_shine2.png"
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 0.6666666865348816,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 1.3333333730697632,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 1.6666666269302368,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 2.3333332538604736,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 2.6666667461395264,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 3.3333332538604736,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 3.6666667461395264,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 6.0,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 6.666666507720947,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 7.0,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 7.666666507720947,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 8.0,
                                                    "value": -20.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 8.666666984558105,
                                                    "value": -30.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        },
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 0.6666666865348816,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 8.666666984558105,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 0.6666666865348816,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.0,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.3333333730697632,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 1.6666666269302368,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.0,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.3333332538604736,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 2.6666667461395264,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.0,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.3333332538604736,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 3.6666667461395264,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 4.0,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.333333492279053,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.666666507720947,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.333333492279053,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.666666507720947,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.0,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.333333015441895,
                                                    "value": 100,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.666666984558105,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            685.1851806640625,
                                            1504.629638671875,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            1.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            5.0,
                                            5.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": -20.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_shine2.png"
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 0.20000000298023224,
                                            "value": [
                                                90.0,
                                                1250.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 2.7666666507720947,
                                            "value": [
                                                90.0,
                                                -700.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 0.20000000298023224,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    0.0,
                                    0.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 0.20000000298023224,
                                                    "value": 0.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 3.4666666984558105,
                                                    "value": 360.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            3.5,
                                            3.5,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_kira1.png"
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCParticleSystemQuad",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {}
                                },
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "emitterMode",
                                        "value": 0
                                    },
                                    {
                                        "type": "Point",
                                        "name": "posVar",
                                        "value": [
                                            40.0,
                                            20.0
                                        ]
                                    },
                                    {
                                        "type": "Float",
                                        "name": "emissionRate",
                                        "value": 10.0
                                    },
                                    {
                                        "type": "Float",
                                        "name": "duration",
                                        "value": 5.0
                                    },
                                    {
                                        "type": "Integer",
                                        "name": "totalParticles",
                                        "value": 200
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "life",
                                        "value": [
                                            3.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSize",
                                        "value": [
                                            170.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSize",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "angle",
                                        "value": [
                                            90.0,
                                            10.0
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "startColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "endColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "gravity",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "speed",
                                        "value": [
                                            170.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "tangentialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "radialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "Texture",
                                        "name": "texture",
                                        "value": "cocos_builder/png/evolve_spskill_cutin/ev009/particle/ev009_kira2.png"
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 0.7333333492279053,
                                            "value": [
                                                500.0,
                                                1250.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 3.700000047683716,
                                            "value": [
                                                500.0,
                                                -700.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 0.7333333492279053,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    500.0,
                                    1190.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 0.8333333134651184,
                                                    "value": 0.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 3.700000047683716,
                                                    "value": 360.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            3.0,
                                            3.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_kira1.png"
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCParticleSystemQuad",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {},
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "emitterMode",
                                        "value": 0
                                    },
                                    {
                                        "type": "Point",
                                        "name": "posVar",
                                        "value": [
                                            40.0,
                                            20.0
                                        ]
                                    },
                                    {
                                        "type": "Float",
                                        "name": "emissionRate",
                                        "value": 10.0
                                    },
                                    {
                                        "type": "Float",
                                        "name": "duration",
                                        "value": 6.0
                                    },
                                    {
                                        "type": "Integer",
                                        "name": "totalParticles",
                                        "value": 200
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "life",
                                        "value": [
                                            3.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSize",
                                        "value": [
                                            130.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSize",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "angle",
                                        "value": [
                                            90.0,
                                            10.0
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "startColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "endColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "gravity",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "speed",
                                        "value": [
                                            170.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "tangentialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "radialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "Texture",
                                        "name": "texture",
                                        "value": "cocos_builder/png/evolve_spskill_cutin/ev009/particle/ev009_kira2.png"
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 1.2333333492279053,
                                            "value": [
                                                250.0,
                                                1250.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": [
                                                250.0,
                                                -700.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 1.2333333492279053,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    0.0,
                                    0.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 1.2333333492279053,
                                                    "value": 0.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": 360.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.5,
                                            1.5,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_kira1.png"
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCParticleSystemQuad",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {},
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "emitterMode",
                                        "value": 0
                                    },
                                    {
                                        "type": "Point",
                                        "name": "posVar",
                                        "value": [
                                            40.0,
                                            20.0
                                        ]
                                    },
                                    {
                                        "type": "Float",
                                        "name": "emissionRate",
                                        "value": 10.0
                                    },
                                    {
                                        "type": "Float",
                                        "name": "duration",
                                        "value": 6.0
                                    },
                                    {
                                        "type": "Integer",
                                        "name": "totalParticles",
                                        "value": 200
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "life",
                                        "value": [
                                            3.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSize",
                                        "value": [
                                            100.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSize",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "angle",
                                        "value": [
                                            90.0,
                                            10.0
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "startColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "endColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "gravity",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "speed",
                                        "value": [
                                            100.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "tangentialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "radialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "Texture",
                                        "name": "texture",
                                        "value": "cocos_builder/png/evolve_spskill_cutin/ev009/particle/ev009_kira2.png"
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 1.5333333015441895,
                                            "value": [
                                                600.0,
                                                1250.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 4.066666603088379,
                                            "value": [
                                                600.0,
                                                -700.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 1.5333333015441895,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    400.0,
                                    1190.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 1.5333333015441895,
                                                    "value": 0.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 4.066666603088379,
                                                    "value": 180.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            2.799999952316284,
                                            2.799999952316284,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_kira1.png"
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCParticleSystemQuad",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {},
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "emitterMode",
                                        "value": 0
                                    },
                                    {
                                        "type": "Point",
                                        "name": "posVar",
                                        "value": [
                                            40.0,
                                            20.0
                                        ]
                                    },
                                    {
                                        "type": "Float",
                                        "name": "emissionRate",
                                        "value": 10.0
                                    },
                                    {
                                        "type": "Float",
                                        "name": "duration",
                                        "value": 6.0
                                    },
                                    {
                                        "type": "Integer",
                                        "name": "totalParticles",
                                        "value": 200
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "life",
                                        "value": [
                                            3.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSize",
                                        "value": [
                                            150.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSize",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "angle",
                                        "value": [
                                            90.0,
                                            10.0
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "startColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "endColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "gravity",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "speed",
                                        "value": [
                                            150.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "tangentialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "radialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "Texture",
                                        "name": "texture",
                                        "value": "cocos_builder/png/evolve_spskill_cutin/ev009/particle/ev009_kira2.png"
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 1.8666666746139526,
                                            "value": [
                                                150.0,
                                                1250.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 4.0333333015441895,
                                            "value": [
                                                150.0,
                                                -700.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 1.8666666746139526,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    150.0,
                                    1190.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 1.8666666746139526,
                                                    "value": 0.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 4.0333333015441895,
                                                    "value": 180.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            2.9000000953674316,
                                            2.9000000953674316,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_kira1.png"
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCParticleSystemQuad",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {},
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "emitterMode",
                                        "value": 0
                                    },
                                    {
                                        "type": "Point",
                                        "name": "posVar",
                                        "value": [
                                            40.0,
                                            20.0
                                        ]
                                    },
                                    {
                                        "type": "Float",
                                        "name": "emissionRate",
                                        "value": 10.0
                                    },
                                    {
                                        "type": "Float",
                                        "name": "duration",
                                        "value": 7.0
                                    },
                                    {
                                        "type": "Integer",
                                        "name": "totalParticles",
                                        "value": 200
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "life",
                                        "value": [
                                            3.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSize",
                                        "value": [
                                            100.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSize",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "angle",
                                        "value": [
                                            90.0,
                                            10.0
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "startColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "endColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "gravity",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "speed",
                                        "value": [
                                            130.0,
                                            50.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "tangentialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "radialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "Texture",
                                        "name": "texture",
                                        "value": "cocos_builder/png/evolve_spskill_cutin/ev009/particle/ev009_kira2.png"
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 2.2666666507720947,
                                            "value": [
                                                400.0,
                                                1250.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 4.266666889190674,
                                            "value": [
                                                400.0,
                                                -700.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 2.2666666507720947,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    0.0,
                                    0.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 2.2666666507720947,
                                                    "value": 0.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 4.266666889190674,
                                                    "value": 180.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            3.200000047683716,
                                            3.200000047683716,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_kira1.png"
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCParticleSystemQuad",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {},
                                "properties": [
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "emitterMode",
                                        "value": 0
                                    },
                                    {
                                        "type": "Point",
                                        "name": "posVar",
                                        "value": [
                                            40.0,
                                            20.0
                                        ]
                                    },
                                    {
                                        "type": "Float",
                                        "name": "emissionRate",
                                        "value": 10.0
                                    },
                                    {
                                        "type": "Float",
                                        "name": "duration",
                                        "value": 8.0
                                    },
                                    {
                                        "type": "Integer",
                                        "name": "totalParticles",
                                        "value": 200
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "life",
                                        "value": [
                                            3.0,
                                            1.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSize",
                                        "value": [
                                            150.0,
                                            10.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSize",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "startSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "endSpin",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "angle",
                                        "value": [
                                            90.0,
                                            10.0
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "startColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Color4FVar",
                                        "name": "endColor",
                                        "value": [
                                            [
                                                1.0,
                                                1.0,
                                                1.0,
                                                1.0
                                            ],
                                            [
                                                0.0,
                                                0.0,
                                                0.0,
                                                0.0
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "gravity",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "speed",
                                        "value": [
                                            200.0,
                                            20.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "tangentialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "FloatVar",
                                        "name": "radialAccel",
                                        "value": [
                                            0.0,
                                            0.0
                                        ]
                                    },
                                    {
                                        "type": "Texture",
                                        "name": "texture",
                                        "value": "cocos_builder/png/evolve_spskill_cutin/ev009/particle/ev009_kira2.png"
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 6.366666793823242,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 7.099999904632568,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                },
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 6.833333492279053,
                                            "value": 255,
                                            "easing": {
                                                "type": 3,
                                                "opt": 2.0
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 7.099999904632568,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                },
                                "scale": {
                                    "name": "scale",
                                    "type": "ScaleLock",
                                    "keyframes": [
                                        {
                                            "time": 6.366666793823242,
                                            "value": [
                                                0.0,
                                                0.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        },
                                        {
                                            "time": 6.5,
                                            "value": [
                                                4.5,
                                                4.5
                                            ],
                                            "easing": {
                                                "type": 3,
                                                "opt": 2.0
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        },
                                        {
                                            "time": 7.099999904632568,
                                            "value": [
                                                7.0,
                                                7.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    320.0,
                                    640.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_shock1.png"
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 6.300000190734863,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 7.300000190734863,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                },
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 6.300000190734863,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 6.4666666984558105,
                                            "value": 255,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 6.833333492279053,
                                            "value": 255,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 7.300000190734863,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    320.0,
                                    470.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    6.5,
                                    6.5,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_cross1.png"
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 5.766666889190674,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 6.433333396911621,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                },
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 6.333333492279053,
                                            "value": 255,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 6.433333396911621,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                },
                                "scale": {
                                    "name": "scale",
                                    "type": "ScaleLock",
                                    "keyframes": [
                                        {
                                            "time": 5.766666889190674,
                                            "value": [
                                                1.0,
                                                1.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        },
                                        {
                                            "time": 6.433333396911621,
                                            "value": [
                                                30.0,
                                                30.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    320.0,
                                    640.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_sphere1.png"
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 6.133333206176758,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 7.800000190734863,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": 0.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 8.933333396911621,
                                                    "value": -45.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        },
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 6.133333206176758,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 7.800000190734863,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.4666666984558105,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.800000190734863,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.133333206176758,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.4666666984558105,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.800000190734863,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.133333206176758,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.466666221618652,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.800000190734863,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.933333396911621,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        },
                                        "scale": {
                                            "name": "scale",
                                            "type": "ScaleLock",
                                            "keyframes": [
                                                {
                                                    "time": 6.133333206176758,
                                                    "value": [
                                                        4.0,
                                                        4.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 6.800000190734863,
                                                    "value": [
                                                        6.5,
                                                        6.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 7.133333206176758,
                                                    "value": [
                                                        4.0,
                                                        4.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 7.800000190734863,
                                                    "value": [
                                                        6.5,
                                                        6.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 8.133333206176758,
                                                    "value": [
                                                        4.0,
                                                        4.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 8.800000190734863,
                                                    "value": [
                                                        6.5,
                                                        6.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            320.0,
                                            680.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            6.0,
                                            6.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_shine1.png"
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": 180.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 8.933333396911621,
                                                    "value": 135.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        },
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 7.4666666984558105,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 6.4666666984558105,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.800000190734863,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.133333206176758,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.4666666984558105,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.800000190734863,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.133333206176758,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.466666221618652,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.800000190734863,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.933333396911621,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        },
                                        "scale": {
                                            "name": "scale",
                                            "type": "ScaleLock",
                                            "keyframes": [
                                                {
                                                    "time": 6.4666666984558105,
                                                    "value": [
                                                        3.5,
                                                        3.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 7.133333206176758,
                                                    "value": [
                                                        6.0,
                                                        6.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 7.4666666984558105,
                                                    "value": [
                                                        3.5,
                                                        3.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 8.133333206176758,
                                                    "value": [
                                                        6.0,
                                                        6.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 8.466666221618652,
                                                    "value": [
                                                        3.5,
                                                        3.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 8.933333396911621,
                                                    "value": [
                                                        6.0,
                                                        6.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            320.0,
                                            680.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            6.0,
                                            6.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_shine1.png"
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "rotation": {
                                            "name": "rotation",
                                            "type": "Degrees",
                                            "keyframes": [
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": -90.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                },
                                                {
                                                    "time": 8.933333396911621,
                                                    "value": -135.0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "rotation",
                                                    "type": "Degrees"
                                                }
                                            ]
                                        },
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 7.4666666984558105,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 6.800000190734863,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.133333206176758,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.4666666984558105,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 7.800000190734863,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.133333206176758,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.466666221618652,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.800000190734863,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 8.933333396911621,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        },
                                        "scale": {
                                            "name": "scale",
                                            "type": "ScaleLock",
                                            "keyframes": [
                                                {
                                                    "time": 6.800000190734863,
                                                    "value": [
                                                        4.5,
                                                        4.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 7.4666666984558105,
                                                    "value": [
                                                        7.0,
                                                        7.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 7.800000190734863,
                                                    "value": [
                                                        4.5,
                                                        4.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 8.466666221618652,
                                                    "value": [
                                                        7.0,
                                                        7.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 8.800000190734863,
                                                    "value": [
                                                        4.5,
                                                        4.5
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                },
                                                {
                                                    "time": 8.933333396911621,
                                                    "value": [
                                                        7.0,
                                                        7.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "scale",
                                                    "type": "ScaleLock"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            320.0,
                                            680.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Degrees",
                                        "name": "rotation",
                                        "value": 0.0
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_shine1.png"
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCParticleSystemQuad",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 6.300000190734863,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 8.933333396911621,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    320.0,
                                    900.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Degrees",
                                "name": "rotation",
                                "value": 180.0
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "IntegerLabeled",
                                "name": "emitterMode",
                                "value": 0
                            },
                            {
                                "type": "Point",
                                "name": "posVar",
                                "value": [
                                    400.0,
                                    400.0
                                ]
                            },
                            {
                                "type": "Float",
                                "name": "emissionRate",
                                "value": 150.0
                            },
                            {
                                "type": "Float",
                                "name": "duration",
                                "value": 2.0
                            },
                            {
                                "type": "Integer",
                                "name": "totalParticles",
                                "value": 150
                            },
                            {
                                "type": "FloatVar",
                                "name": "life",
                                "value": [
                                    5.0,
                                    3.0
                                ]
                            },
                            {
                                "type": "FloatVar",
                                "name": "startSize",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "FloatVar",
                                "name": "endSize",
                                "value": [
                                    200.0,
                                    100.0
                                ]
                            },
                            {
                                "type": "FloatVar",
                                "name": "startSpin",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "FloatVar",
                                "name": "endSpin",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "FloatVar",
                                "name": "angle",
                                "value": [
                                    90.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "Color4FVar",
                                "name": "startColor",
                                "value": [
                                    [
                                        1.0,
                                        1.0,
                                        1.0,
                                        1.0
                                    ],
                                    [
                                        0.0,
                                        0.0,
                                        0.0,
                                        0.0
                                    ]
                                ]
                            },
                            {
                                "type": "Color4FVar",
                                "name": "endColor",
                                "value": [
                                    [
                                        0.0,
                                        0.0,
                                        0.0,
                                        255.0
                                    ],
                                    [
                                        0.0,
                                        0.0,
                                        0.0,
                                        0.0
                                    ]
                                ]
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "gravity",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "FloatVar",
                                "name": "speed",
                                "value": [
                                    100.0,
                                    20.0
                                ]
                            },
                            {
                                "type": "FloatVar",
                                "name": "tangentialAccel",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "FloatVar",
                                "name": "radialAccel",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "Texture",
                                "name": "texture",
                                "value": "cocos_builder/png/evolve_spskill_cutin/ev009/particle/ev009_kira3.png"
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 6.9666666984558105,
                                            "value": [
                                                420.0,
                                                1100.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": [
                                                420.0,
                                                1000.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 6.9666666984558105,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                },
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 6.9666666984558105,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 7.266666889190674,
                                            "value": 255,
                                            "easing": {
                                                "type": 2,
                                                "opt": 2.0
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    426.39862060546875,
                                    1103.6199951171875,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    2.0,
                                    2.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_aura2.png"
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 7.266666889190674,
                                            "value": [
                                                100.0,
                                                850.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": [
                                                100.0,
                                                750.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 7.266666889190674,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                },
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 7.266666889190674,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 7.599999904632568,
                                            "value": 255,
                                            "easing": {
                                                "type": 2,
                                                "opt": 2.0
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    487.3127136230469,
                                    766.8008422851562,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    -3.0,
                                    2.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_aura2.png"
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "position": {
                                    "name": "position",
                                    "type": "Position",
                                    "keyframes": [
                                        {
                                            "time": 7.599999904632568,
                                            "value": [
                                                690.0,
                                                460.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": [
                                                690.0,
                                                300.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "position",
                                            "type": "Position"
                                        }
                                    ]
                                },
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 7.599999904632568,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                },
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 7.599999904632568,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 7.933333396911621,
                                            "value": 255,
                                            "easing": {
                                                "type": 2,
                                                "opt": 2.0
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 8.433333396911621,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    690.0,
                                    460.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    3.5,
                                    2.5,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_aura2.png"
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.333333492279053,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 6.199999809265137,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                },
                                "opacity": {
                                    "name": "opacity",
                                    "type": "Byte",
                                    "keyframes": [
                                        {
                                            "time": 4.333333492279053,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 4.733333110809326,
                                            "value": 255,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 5.733333110809326,
                                            "value": 255,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        },
                                        {
                                            "time": 6.199999809265137,
                                            "value": 0,
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "opacity",
                                            "type": "Byte"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    320.0,
                                    970.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_img_sskillname_s6.png"
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 255
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCLabelTTF",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 6.199999809265137,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 4.733333110809326,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 5.733333110809326,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.199999809265137,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            227.0,
                                            28.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "FontTTF",
                                        "name": "fontName",
                                        "value": "Helvetica"
                                    },
                                    {
                                        "type": "FloatScale",
                                        "name": "fontSize",
                                        "value": [
                                            23.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Color3",
                                        "name": "color",
                                        "value": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Size",
                                        "name": "dimensions",
                                        "value": [
                                            0.0,
                                            0.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "horizontalAlignment",
                                        "value": 1
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "verticalAlignment",
                                        "value": 0
                                    },
                                    {
                                        "type": "Text",
                                        "name": "string",
                                        "value": "\u30bb\u30a4\u30af\u30ea\u30c3\u30c9\u30d6\u30ec\u30a4\u30e0"
                                    }
                                ],
                                "children": []
                            },
                            {
                                "displayName": "CCLabelTTF",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 6.199999809265137,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 4.733333110809326,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 5.733333110809326,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.199999809265137,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            225.0,
                                            30.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "FontTTF",
                                        "name": "fontName",
                                        "value": "Helvetica"
                                    },
                                    {
                                        "type": "FloatScale",
                                        "name": "fontSize",
                                        "value": [
                                            23.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Size",
                                        "name": "dimensions",
                                        "value": [
                                            0.0,
                                            0.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "horizontalAlignment",
                                        "value": 1
                                    },
                                    {
                                        "type": "IntegerLabeled",
                                        "name": "verticalAlignment",
                                        "value": 0
                                    },
                                    {
                                        "type": "Text",
                                        "name": "string",
                                        "value": "\u30bb\u30a4\u30af\u30ea\u30c3\u30c9\u30d6\u30ec\u30a4\u30e0"
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCLayerColor",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "color": {
                                    "name": "color",
                                    "type": "Color3",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": [
                                                255,
                                                255,
                                                255
                                            ],
                                            "easing": {
                                                "type": 3,
                                                "opt": 2.0
                                            },
                                            "name": "color",
                                            "type": "Color3"
                                        },
                                        {
                                            "time": 1.4333332777023315,
                                            "value": [
                                                0,
                                                0,
                                                0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "color",
                                            "type": "Color3"
                                        },
                                        {
                                            "time": 7.933333396911621,
                                            "value": [
                                                0,
                                                0,
                                                0
                                            ],
                                            "easing": {
                                                "type": 2,
                                                "opt": 2.0
                                            },
                                            "name": "color",
                                            "type": "Color3"
                                        },
                                        {
                                            "time": 8.566666603088379,
                                            "value": [
                                                255,
                                                255,
                                                255
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "color",
                                            "type": "Color3"
                                        },
                                        {
                                            "time": 9.033333778381348,
                                            "value": [
                                                255,
                                                255,
                                                255
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "color",
                                            "type": "Color3"
                                        },
                                        {
                                            "time": 9.266666412353516,
                                            "value": [
                                                0,
                                                0,
                                                0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "color",
                                            "type": "Color3"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    270.0,
                                    520.0,
                                    0
                                ]
                            },
                            {
                                "type": "Size",
                                "name": "contentSize",
                                "value": [
                                    100.0,
                                    100.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    7.0,
                                    12.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": true
                            },
                            {
                                "type": "Check",
                                "platform": "iOS",
                                "name": "touchEnabled",
                                "value": true
                            },
                            {
                                "type": "Check",
                                "platform": "Mac",
                                "name": "mouseEnabled",
                                "value": true
                            },
                            {
                                "type": "Color3",
                                "name": "color",
                                "value": [
                                    255,
                                    255,
                                    255
                                ]
                            },
                            {
                                "type": "Byte",
                                "name": "opacity",
                                "value": 0
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            }
                        ],
                        "children": []
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {},
                        "properties": [
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": []
                    }
                ]
            },
            {
                "displayName": "CCNode",
                "memberVarAssignmentName": "",
                "memberVarAssignmentType": 0,
                "animatedProperties": {},
                "properties": [
                    {
                        "type": "Point",
                        "name": "anchorPoint",
                        "value": [
                            0.0,
                            0.0
                        ]
                    },
                    {
                        "type": "ScaleLock",
                        "name": "scale",
                        "value": [
                            1.0,
                            1.0,
                            0
                        ]
                    },
                    {
                        "type": "Integer",
                        "name": "tag",
                        "value": 0
                    },
                    {
                        "type": "Check",
                        "name": "ignoreAnchorPointForPosition",
                        "value": false
                    }
                ],
                "children": [
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.5,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 6.300000190734863,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    640.0,
                                    640.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "position": {
                                            "name": "position",
                                            "type": "Position",
                                            "keyframes": [
                                                {
                                                    "time": 4.5,
                                                    "value": [
                                                        -320.0,
                                                        70.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "position",
                                                    "type": "Position"
                                                },
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": [
                                                        -320.0,
                                                        100.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "position",
                                                    "type": "Position"
                                                }
                                            ]
                                        },
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 4.5,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 4.5,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 5.166666507720947,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.099999904632568,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 6.300000190734863,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            -320.0,
                                            100.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.0,
                                            1.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_cut2.png"
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            770,
                                            771
                                        ]
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCNode",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {}
                        },
                        "properties": [
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    320.0,
                                    600.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.0,
                                    0.0
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    1.0,
                                    1.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            }
                        ],
                        "children": [
                            {
                                "displayName": "CCSprite",
                                "memberVarAssignmentName": "",
                                "memberVarAssignmentType": 0,
                                "animatedProperties": {
                                    "0": {
                                        "position": {
                                            "name": "position",
                                            "type": "Position",
                                            "keyframes": [
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": [
                                                        0.0,
                                                        -100.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "position",
                                                    "type": "Position"
                                                },
                                                {
                                                    "time": 5.599999904632568,
                                                    "value": [
                                                        0.0,
                                                        0.0
                                                    ],
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "position",
                                                    "type": "Position"
                                                }
                                            ]
                                        },
                                        "visible": {
                                            "name": "visible",
                                            "type": "Check",
                                            "keyframes": [
                                                {
                                                    "time": 0.0,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 4.366666793823242,
                                                    "value": true,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                },
                                                {
                                                    "time": 5.599999904632568,
                                                    "value": false,
                                                    "easing": {
                                                        "type": 0
                                                    },
                                                    "name": "visible",
                                                    "type": "Check"
                                                }
                                            ]
                                        },
                                        "opacity": {
                                            "name": "opacity",
                                            "type": "Byte",
                                            "keyframes": [
                                                {
                                                    "time": 4.333333492279053,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 4.699999809265137,
                                                    "value": 255,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                },
                                                {
                                                    "time": 5.599999904632568,
                                                    "value": 0,
                                                    "easing": {
                                                        "type": 1
                                                    },
                                                    "name": "opacity",
                                                    "type": "Byte"
                                                }
                                            ]
                                        }
                                    }
                                },
                                "properties": [
                                    {
                                        "type": "Check",
                                        "name": "visible",
                                        "value": true
                                    },
                                    {
                                        "type": "Position",
                                        "name": "position",
                                        "value": [
                                            0.0,
                                            0.0,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Point",
                                        "name": "anchorPoint",
                                        "value": [
                                            0.5,
                                            0.5
                                        ]
                                    },
                                    {
                                        "type": "ScaleLock",
                                        "name": "scale",
                                        "value": [
                                            1.5,
                                            1.5,
                                            0
                                        ]
                                    },
                                    {
                                        "type": "Check",
                                        "name": "ignoreAnchorPointForPosition",
                                        "value": false
                                    },
                                    {
                                        "type": "SpriteFrame",
                                        "name": "displayFrame",
                                        "value": [
                                            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                            "ev009_cut3.png"
                                        ]
                                    },
                                    {
                                        "type": "Byte",
                                        "name": "opacity",
                                        "value": 255
                                    },
                                    {
                                        "type": "Blendmode",
                                        "name": "blendFunc",
                                        "value": [
                                            1,
                                            1
                                        ]
                                    }
                                ],
                                "children": []
                            }
                        ]
                    },
                    {
                        "displayName": "CCSprite",
                        "memberVarAssignmentName": "",
                        "memberVarAssignmentType": 0,
                        "animatedProperties": {
                            "0": {
                                "visible": {
                                    "name": "visible",
                                    "type": "Check",
                                    "keyframes": [
                                        {
                                            "time": 0.0,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 4.800000190734863,
                                            "value": true,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        },
                                        {
                                            "time": 5.166666507720947,
                                            "value": false,
                                            "easing": {
                                                "type": 0
                                            },
                                            "name": "visible",
                                            "type": "Check"
                                        }
                                    ]
                                },
                                "scale": {
                                    "name": "scale",
                                    "type": "ScaleLock",
                                    "keyframes": [
                                        {
                                            "time": 4.800000190734863,
                                            "value": [
                                                10.0,
                                                10.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        },
                                        {
                                            "time": 5.166666507720947,
                                            "value": [
                                                0.0,
                                                0.0
                                            ],
                                            "easing": {
                                                "type": 1
                                            },
                                            "name": "scale",
                                            "type": "ScaleLock"
                                        }
                                    ]
                                }
                            }
                        },
                        "properties": [
                            {
                                "type": "Check",
                                "name": "visible",
                                "value": true
                            },
                            {
                                "type": "Position",
                                "name": "position",
                                "value": [
                                    330.0,
                                    740.0,
                                    0
                                ]
                            },
                            {
                                "type": "Point",
                                "name": "anchorPoint",
                                "value": [
                                    0.5,
                                    0.5
                                ]
                            },
                            {
                                "type": "ScaleLock",
                                "name": "scale",
                                "value": [
                                    6.0,
                                    6.0,
                                    0
                                ]
                            },
                            {
                                "type": "Check",
                                "name": "ignoreAnchorPointForPosition",
                                "value": false
                            },
                            {
                                "type": "SpriteFrame",
                                "name": "displayFrame",
                                "value": [
                                    "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090.plist",
                                    "ev009_cycle1.png"
                                ]
                            },
                            {
                                "type": "Blendmode",
                                "name": "blendFunc",
                                "value": [
                                    1,
                                    1
                                ]
                            }
                        ],
                        "children": []
                    }
                ]
            }
        ]
    },
    "sequences": [
        {
            "autoPlay": false,
            "chainedSequenceId": -1,
            "length": 9.333333015441895,
            "name": "cutin",
            "offset": 0.0,
            "position": 0.0,
            "resolution": 30,
            "scale": 128,
            "sequenceId": 0,
            "callbackChannel": {
                "keyframes": [
                    {
                        "time": 0.0,
                        "type": 10,
                        "value": [
                            "enemyFadeOut_5",
                            1
                        ],
                        "easing": {
                            "type": 0
                        }
                    },
                    {
                        "time": 0.0,
                        "type": 10,
                        "value": [
                            "seplay_ev009_se",
                            1
                        ],
                        "easing": {
                            "type": 0
                        }
                    },
                    {
                        "time": 0.9666666388511658,
                        "type": 10,
                        "value": [
                            "voiceplay_est_sy_este_001_a",
                            1
                        ],
                        "easing": {
                            "type": 0
                        }
                    },
                    {
                        "time": 4.800000190734863,
                        "type": 10,
                        "value": [
                            "seplay_ev009_se_b",
                            1
                        ],
                        "easing": {
                            "type": 0
                        }
                    },
                    {
                        "time": 5.5333333015441895,
                        "type": 10,
                        "value": [
                            "voiceplay_est_sy_este_001_b",
                            1
                        ],
                        "easing": {
                            "type": 0
                        }
                    },
                    {
                        "time": 6.300000190734863,
                        "type": 10,
                        "value": [
                            "seplay_ev009_se_c",
                            1
                        ],
                        "easing": {
                            "type": 0
                        }
                    },
                    {
                        "time": 8.666666984558105,
                        "type": 10,
                        "value": [
                            "enemyFadeIn_1",
                            1
                        ],
                        "easing": {
                            "type": 0
                        }
                    }
                ],
                "type": 10
            },
            "soundChannel": {
                "keyframes": [],
                "type": 9
            }
        }
    ],
    "endTime": 9.266666412353516,
    "resources": {
        "atlas": [
            "cocos_builder/texture_atlas/evolve_spskill_cutin/ev009/ev0090"
        ],
        "sfx": [
            "ev009_se_c",
            "ev009_se_b",
            "ev009_se"
        ],
        "voice": [
            "est/sy_este_001_b",
            "est/sy_este_001_a"
        ]
    }
}

