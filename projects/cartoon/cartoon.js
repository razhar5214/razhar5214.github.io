function draw() {
    var canvas = document.getElementById('canvas');
    var y = 30;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.font = "50px";
        ctx.strokeText("Boat In Pond", 150, 95);
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 250, 500, 100);
        
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "green"; // Green path
        ctx.moveTo(195, 205);
        ctx.lineTo(210, 165);
        ctx.stroke(); // Draw it

        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "green"; // Green path
        ctx.moveTo(210, 165);
        ctx.lineTo(215, 205);
        ctx.stroke(); // Draw it

        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black"; 
        ctx.moveTo(215, 205);
        ctx.lineTo(130, 205);
        ctx.stroke(); 

        ctx.beginPath();
        ctx.arc(170, 200, 40, 3, 2* Math.PI,true);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(50, 50, 40, 0, 2* Math.PI);
        ctx.fillStyle='yellow';
        ctx.stroke();
        ctx.fill();
        for(var i = 0; i<10; i++){
            y = 275;
            x = 275;
            ctx.strokeStyle='black';
            ctx.fillStyle='black';
            ctx.moveTo(270,270);
            ctx.lineTo(275,y);
            ctx.moveTo(275,275);
            ctx.lineTo(300,280);
            ctx.moveTo(300,280);
            ctx.lineTo(320,270);
            ctx.moveTo(320,270);
            ctx.lineTo(270,270);
            ctx.stroke();
            y = y+5;
            x=x+20;
        }
    }
  }
  
  