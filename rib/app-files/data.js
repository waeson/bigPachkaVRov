var APP_DATA = {
  "scenes": [
    {
      "id": "0---1--",
      "name": "Кустовая площадка №1 с высоты",
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
        "yaw": 0.42570533570094504,
        "pitch": 1.3182099106796805,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.103669050765383,
          "pitch": -0.05281885509794648,
          "rotation": 0,
          "target": "2---2--"
        },      
        {
          "yaw": -1.5367763660081408,
          "pitch": -0.056188668996490776,
          "rotation": 3.141592653589793,
          "target": "6---4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2---2--",
      "name": "Кустовая площадка №2 с высоты",
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
        "yaw": 2.5668982359264465,
        "pitch": 0.718856393028112,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [        
        {
          "yaw": 2.306624188585854,
          "pitch": 0.004156413326233732,
          "rotation": 0,
          "target": "0---1--"
        },
              {
          "yaw": -1.6042515907118648,
          "pitch": -0.026271807892172205,
          "rotation": 3.141592653589793,
          "target": "6---4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6---4",
      "name": "Кустовая площадка №4",
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
        "yaw": -1.5228850659687652,
        "pitch": 0.5405152774599493,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.560119219726186,
          "pitch": -0.170055290168321,
          "rotation": 0,
          "target": "0---1--"
        },
        {
          "yaw": -2.388238748554148,
          "pitch": -0.14916855494527503,
          "rotation": 0,
          "target": "2---2--"
        }      
      ],
      "infoHotspots": []
    }
  ],
  "name": "Рыбальное НМ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
