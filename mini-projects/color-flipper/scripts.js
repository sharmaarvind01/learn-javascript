/**
*Color flipper Scripts
*/

const body = document.body;
const button = document.querySelector('.color-button');
// body.style.backgroundColor = "red";
const displayName = document.querySelector('#color-name');  
const colorNames = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond",
    "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki",
    "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",
    "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow",
    "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon",
    "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon",
    "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen",
    "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen",
    "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream",
    "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid",
    "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum",
    "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown",
    "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue",
    "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
  ];

  // change color on button click
if(button != null){
    button.addEventListener('click',(e)=>{
        e.preventDefault;
        let rand = Math.floor(Math.random()*141);
        displayName.textContent = colorNames[rand].toUpperCase();
        displayName.style.color = colorNames[Math.floor(Math.random()*141)];
        body.style.backgroundColor = colorNames[rand];
    })
}

const hexButton = document.querySelector('.hex-btn');
if(hexButton != null){
    hexButton.addEventListener('click',(e)=>{
        e.preventDefault; 
        let rand = randomHexColor();
        displayName.textContent = rand;
        displayName.style.color = rand;
        body.style.backgroundColor = rand;
    })
}

function randomHexColor(){
    const hexString = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6 ; i++){
        let random = Math.floor(Math.random()*16)
        color += hexString[random];
    }
    return color
}

/* Auto color change
setInterval((e)=>{
    let rand = Math.floor(Math.random()*141);
    displayName.textContent = colorNames[rand].toUpperCase();
    body.style.backgroundColor = colorNames[rand];
    button.style.borderColor = colorNames[rand+1];
},1000)

*/