window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    text = `{
    "center": {
        "rad": "486.6",
        "x": "960.5",
        "y": "592.5"
    },
    "red": [
        {
            "color": "red",
            "rad": "35.431202",
            "x": "-57.0",
            "y": "-205.0"
        },
        {
            "color": "red",
            "rad": "37.962",
            "x": "17.0",
            "y": "-33.0"
        },
        {
            "color": "red",
            "rad": "36.8964",
            "x": "607.0",
            "y": "130.0"
        }
    ],
    "yellow": [
        {
            "color": "yellow",
            "rad": "41.292",
            "x": "-565.0",
            "y": "308.0"
        },
        {
            "color": "yellow",
            "rad": "39.0276",
            "x": "-264.0",
            "y": "-374.0"
        }
    ]
}
`;
    var pos = JSON.parse(text);
    centerX = 400
    centerY = 250
    radius = pos.center.rad/2
    drawHouse(centerX,centerY,radius,ctx);


    for (var key in pos.red) {
        x = centerX + parseInt(pos.red[key].x)/2
        y = centerY + parseInt(pos.red[key].y)/2
        drawStone(x,y, "#FF0000", ctx)
    }
    for (var key in pos.yellow) {
        x = centerX + parseInt(pos.yellow[key].x)/2
        y = centerY + parseInt(pos.yellow[key].y)/2
        drawStone(x,y, "#FFFF00", ctx)
    }

    //drawStone(50,50,"#FF0000",ctx);
    //drawStone(200,200,"#FFFF00",ctx);
}

function drawStone(X,Y,clr,ctx) {
    const radius = 35/2;

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(X,Y,radius*1.332, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = clr;
    ctx.beginPath();
    ctx.arc(X,Y,radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();
}

function drawHouse(X,Y,radius,ctx){
    ctx.fillStyle = "#00FF00";
    ctx.beginPath();
    ctx.arc(X,Y,radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(X,Y,radius*2/3, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "#0000FF";
    ctx.beginPath();
    ctx.arc(X,Y,radius/3, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(X,Y,radius/6, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();
}
