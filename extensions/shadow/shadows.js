function drawCaveCover(player, lights) {
    var can = document.getElementById("cover");
    if (!can) {
        can = document.createElement("canvas");
        can.setAttribute("id", "cover");
        can.style.display = "none";
        can.width = 2048;
        can.height = 2048;
        document.body.appendChild(can);
    }
    var c = can.getContext("2d");
    c.clearRect(0, 0, 2048, 2048);
    c.fillStyle = "black";
    c.fillRect(0, 0, 2048, 2048);
    c.globalCompositeOperation = "destination-out";
    var playerX = parseInt(player.substring(0, player.indexOf(" ")));
    var playerY = parseInt(player.substring(player.indexOf(" ") + 1, player.length));
    var light = new Array();
    while (lights.length > 0) {
        light.push(new Array(2));
        for (var i = 0; i < 2; i++) {
            light[light.length - 1][i] = parseInt(lights.substring(0, lights.indexOf(" ")));
            lights = lights.substring(lights.indexOf(" ") + 1, lights.length);
        }
    }
    c.beginPath();
    c.arc(playerX, playerY, 100, 0, 2 * Math.PI, false);
    c.fill();
    for (i = 0; i < light.length; i++) {
        c.beginPath();
        c.arc(light[i][0], light[i][1], 200, 0, 2 * Math.PI, false);
        c.fill();
    }
    c.globalCompositeOperation = "source-over";
    var canvas = document.getElementById("canvas");
    var c2 = canvas.getContext("2d");
    c2.drawImage(can, 0, 0); 
    return true;
}

function drawShadows(walls, lights, change) {
    var can = document.getElementById("shadows");
    if (!can) {
        change = true;
        can = document.createElement("canvas");
        can.setAttribute("id", "shadows");
        can.style.display = "none";
        can.width = 2048;
        can.height = 2048;
        document.body.appendChild(can);
    }
    var temp = document.getElementById("current");
    if (!temp) {
        temp = document.createElement("canvas");
        temp.setAttribute("id", "current");
        temp.style.display = "none";
        temp.width = 2048;
        temp.height = 2048;
        document.body.appendChild(temp);
    }
    var c = can.getContext("2d");
    c.fillStyle = "black";
    var d = temp.getContext("2d");
    c.fillStyle = "black";
    if (change) {
        c.clearRect(0, 0, 2048, 2048);
        var wall = new Array();
        while (walls.length > 0) {
            wall.push(new Array(4));
            for (var i = 0; i < 4; i++) {
                wall[wall.length - 1][i] = parseInt(walls.substring(0, walls.indexOf(" ")));
                walls = walls.substring(walls.indexOf(" ") + 1, walls.length);
            }
        }
        var light = new Array();
        while (lights.length > 0) {
            light.push(new Array(2));
            for (var i = 0; i < 2; i++) {
                light[light.length - 1][i] = parseInt(lights.substring(0, lights.indexOf(" ")));
                lights = lights.substring(lights.indexOf(" ") + 1, lights.length);
            }
        }
        for (var i = 0; i < wall.length; i++) {
            c.fillRect(wall[i][0], wall[i][1], wall[i][2] - wall[i][0] + 1, 2048);
        }
        for (var i = 0; i < light.length; i++) {
            d.clearRect(0, 0, 2048, 2048);
            for (var j = 0; j < wall.length; j++) {
                //From top edge
                var m = 0, dist = new Array(2), dest = new Array(2);
                if (light[i][1] !== wall[j][1]) {
                    m = (wall[j][0] - light[i][0]) / (wall[j][1] - light[i][1]);
                } else {
                    m = 0;
                }
                if (light[i][1] < wall[j][1]) {
                    dist[0] = (2048 - wall[j][1]) * m;
                    dest[0] = 2048;
                } else if (light[i][1] > wall[j][1]) {
                    dist[0] = wall[j][1] * -m;
                    dest[0] = 0;
                } else {
                    dist[0] = 0;
                    dest[0] = wall[j][1];
                }
                if (light[i][1] !== wall[j][1]) {
                    m = ((wall[j][2] + 1) - light[i][0]) / (wall[j][1] - light[i][1]);
                } else {
                    m = 0;
                }
                if (light[i][1] < wall[j][1]) {
                    dist[1] = (2048 - wall[j][1]) * m;
                    dest[1] = 2048;
                } else if (light[i][1] > wall[j][1]) {
                    dist[1] = wall[j][1] * -m;
                    dest[1] = 0;
                } else {
                    dist[1] = 0;
                    dest[1] = wall[j][1];
                }
                draw_quad(wall[j][0], wall[j][1], (wall[j][2] + 1), wall[j][1], (wall[j][2] + 1) + dist[1], dest[1], wall[j][0] + dist[0], dest[0], d);

                //From bottom edge
                if (light[i][1] !== (wall[j][3] + 1)) {
                    m = (wall[j][0] - light[i][0]) / ((wall[j][3] + 1) - light[i][1]);
                } else {
                    m = 0;
                }
                if (light[i][1] < (wall[j][3] + 1)) {
                    dist[0] = (2048 - (wall[j][3] + 1)) * m;
                    dest[0] = 2048;
                } else if (light[i][1] > (wall[j][3] + 1)) {
                    dist[0] = (wall[j][3] + 1) * -m;
                    dest[0] = 0;
                } else {
                    dist[0] = 0;
                    dest[0] = (wall[j][3] + 1);
                }
                if (light[i][1] !== (wall[j][3] + 1)) {
                    m = ((wall[j][2] + 1) - light[i][0]) / ((wall[j][3] + 1) - light[i][1]);
                } else {
                    m = 0;
                }
                if (light[i][1] < (wall[j][3] + 1)) {
                    dist[1] = (2048 - (wall[j][3] + 1)) * m;
                    dest[1] = 2048;
                } else if (light[i][1] > (wall[j][3] + 1)) {
                    dist[1] = (wall[j][3] + 1) * -m;
                    dest[1] = 0;
                } else {
                    dist[1] = 0;
                    dest[1] = (wall[j][3] + 1);
                }
                draw_quad(wall[j][0], (wall[j][3] + 1), (wall[j][2] + 1), (wall[j][3] + 1), (wall[j][2] + 1) + dist[1], dest[1], wall[j][0] + dist[0], dest[0], d);

                //From left side
                if (light[i][0] !== wall[j][0]) {
                    m = (wall[j][1] - light[i][1]) / (wall[j][0] - light[i][0]);
                } else {
                    m = 0;
                }
                if (light[i][0] < wall[j][0]) {
                    dist[0] = (2048 - wall[j][0]) * m;
                    dest[0] = 2048;
                } else if (light[i][0] > wall[j][0]) {
                    dist[0] = wall[j][0] * -m;
                    dest[0] = 0;
                } else {
                    dist[0] = 0;
                    dest[0] = wall[j][0];
                }

                if (light[i][0] !== wall[j][0]) {
                    m = ((wall[j][3] + 1) - light[i][1]) / (wall[j][0] - light[i][0]);
                } else {
                    m = 0;
                }
                if (light[i][0] < wall[j][0]) {
                    dist[1] = (2048 - wall[j][0]) * m;
                    dest[1] = 2048;
                } else if (light[i][0] > wall[j][0]) {
                    dist[1] = wall[j][0] * -m;
                    dest[1] = 0;
                } else {
                    dist[1] = 0;
                    dest[1] = wall[j][0];
                }
                draw_quad(wall[j][0], wall[j][1], wall[j][0], (wall[j][3] + 1), dest[1], (wall[j][3] + 1) + dist[1], dest[0], wall[j][1] + dist[0], d);

                //From right side
                if (light[i][0] !== (wall[j][2] + 1)) {
                    m = (wall[j][1] - light[i][1]) / ((wall[j][2] + 1) - light[i][0]);
                } else {
                    m = 0;
                }
                if (light[i][0] < (wall[j][2] + 1)) {
                    dist[0] = (2048 - (wall[j][2] + 1)) * m;
                    dest[0] = 2048;
                } else if (light[i][0] > (wall[j][2] + 1)) {
                    dist[0] = (wall[j][2] + 1) * -m;
                    dest[0] = 0;
                } else {
                    dist[0] = 0;
                    dest[0] = (wall[j][2] + 1);
                }
                if (light[i][0] !== (wall[j][2] + 1)) {
                    m = ((wall[j][3] + 1) - light[i][1]) / ((wall[j][2] + 1) - light[i][0]);
                } else {
                    m = 0;
                }
                if (light[i][0] < (wall[j][2] + 1)) {
                    dist[1] = (2048 - (wall[j][2] + 1)) * m;
                    dest[1] = 2048;
                } else if (light[i][0] > (wall[j][2] + 1)) {
                    dist[1] = (wall[j][2] + 1) * -m;
                    dest[1] = 0;
                } else {
                    dist[1] = 0;
                    dest[1] = (wall[j][2] + 1);
                }
                draw_quad((wall[j][2] + 1), wall[j][1], (wall[j][2] + 1), (wall[j][3] + 1), dest[1], (wall[j][3] + 1) + dist[1], dest[0], wall[j][1] + dist[0], d);
            }
            c.globalCompositeOperation = "source-in";
            c.drawImage(temp, 0, 0);
            c.globalCompositeOperation = "source-over";
        }
    }
    var canvas = document.getElementById("canvas");
    var c2 = canvas.getContext("2d");
    c2.globalAlpha = 0.3;
    c2.drawImage(can, 0, 0);
    c2.globalAlpha = 1;
    return true;
}

function draw_quad(x1, y1, x2, y2, x3, y3, x4, y4, c) {
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.lineTo(x3, y3);
    c.lineTo(x4, y4);
    c.lineTo(x1, y1);
    c.fill();
}