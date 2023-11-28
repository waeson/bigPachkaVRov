var APP_DATA = {
  "scenes": [
    {
      "id": "0--1",
      "name": "Куст 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.9024696981216032,
        "pitch": 0.5043470173386027,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0210901063632853,
          "pitch": -0.07203292777534998,
          "rotation": 0,
          "target": "1--2--"
        },
        {
          "yaw": -3.022063868730159,
          "pitch": -0.021447862187841338,
          "rotation": 3.141592653589793,
          "target": "2--2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1--2--",
      "name": "Куст 2 с высоты",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.113816333098054,
        "pitch": 0.24265138717827028,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3275051219153173,
          "pitch": 0.008632683432962196,
          "rotation": 3.141592653589793,
          "target": "0--1"
        },
        {
          "yaw": -1.9142215108415463,
          "pitch": 1.271159302310668,
          "rotation": 3.141592653589793,
          "target": "2--2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--2",
      "name": "Куст 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.033827902639949,
        "pitch": 0.9585548308824237,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7939795838747026,
          "pitch": -1.4957040313020524,
          "rotation": 0,
          "target": "1--2--"
        },
        {
          "yaw": -0.8210621326134966,
          "pitch": -0.02347761043280272,
          "rotation": 3.141592653589793,
          "target": "0--1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Болтное",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
