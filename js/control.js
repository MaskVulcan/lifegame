var virus = new Array(1500);
var width = 50;
var height = 30;
var id = 0; //for interval

function showData (arg) {
    var alive = 0;
    for (var i = 0; i < arg.data.virus.length; i++) {
        if (arg.data.virus[i]!=0) {
            alive = alive + 1;
        }
    }
    var word = "Total: 1500     alive:"+ alive + "    "+alive/(arg.data.width*arg.data.height);
    $("#data").html(word);
    return alive;
}

function UpdateStatus (arg) {
	var life;
	for (var i = 0; i < arg.data.virus.length; i++) {
		if (i % arg.data.width == 0) {
			if (i / arg.data.width == 0) {
				life = arg.data.virus[i+1] + arg.data.virus[i+arg.data.width] + arg.data.virus[i+arg.data.width+1];
			}
			else if (i / arg.data.width == arg.data.height - 1) {
				life = arg.data.virus[i+1] + arg.data.virus[i-arg.data.width] + arg.data.virus[i-arg.data.width+1];
			}
			else {
				life = arg.data.virus[i+1] + arg.data.virus[i-arg.data.width] + arg.data.virus[i-arg.data.width+1] + 
				arg.data.virus[i+arg.data.width] + arg.data.virus[i+arg.data.width+1];
			}
		}
		else if (i%arg.data.width == arg.data.width - 1) {
			if (parseInt(i / arg.data.width) == 0) {
				life = arg.data.virus[i-1] + arg.data.virus[i + arg.data.width] + arg.data.virus[i+arg.data.width-1];
			}
			else if (parseInt(i / arg.data.width) == arg.data.height - 1) {
				life = arg.data.virus[i-1] + arg.data.virus[i-arg.data.width] + arg.data.virus[i-arg.data.width-1];
			}
			else {
				life = arg.data.virus[i-1] + arg.data.virus[i-arg.data.width] + arg.data.virus[i-arg.data.width-1] + 
				arg.data.virus[i+arg.data.width] + arg.data.virus[i+arg.data.width-1];
			}
		}
		else {
			life = arg.data.virus[i+1] + arg.data.virus[i-arg.data.width] + arg.data.virus[i-arg.data.width+1] + arg.data.virus[i+arg.data.width] +
			arg.data.virus[i+arg.data.width+1] + arg.data.virus[i-1] + arg.data.virus[i-arg.data.width-1] + arg.data.virus[i+arg.data.width-1];
		}
		if (life == 3) {
			arg.data.virus[i] = 1;
		}
		else if (life == 2) {}
		else {
			arg.data.virus[i]=0;
		}
	}
	return arg.data.virus;
}

function Update (arg) {
	if (id != 0) {
		return false;
	}
	id = setInterval(function  () {
		UpdateStatus(arg);
		drawCanvas(arg);
		showData(arg);
	},1000);
	return true;
}

function drawCanvas (arg) {
	var canvas = $("#interface")[0];
	var w = Math.floor(canvas.width/(arg.data.width));
	var h = Math.floor(canvas.height/(arg.data.height));
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="white";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	for (var i = 0; i < arg.data.virus.length; i++) {
		ctx.lineWidth = 0.2;
		if (arg.data.virus[i]==0) {
			ctx.beginPath();
			ctx.strokeStyle="gray";
			ctx.rect((i%arg.data.width)*w,parseInt(i/arg.data.width)*h,w,h);
			ctx.fillStyle="black";
			ctx.fill();
			ctx.stroke();
		}
		else {
			ctx.beginPath();
			ctx.strokeStyle="gray";
			ctx.rect((i%arg.data.width)*w,parseInt(i/arg.data.width)*h,w,h);
			ctx.fillStyle="white";
			ctx.fill();
			ctx.stroke();
		}
	}
}
//generate random array,1 is alive,0 is dead
function Start (arg) {
	for (var i = 0; i < (arg.data.virus).length; i++) {
		arg.data.virus[i] = Math.floor(Math.random()*2);
		if (arg.data.virus[i]>1){
			arg.data.virus[i]=1;
		}
	}
	Update(arg);
	drawCanvas(arg);
}

function Stop (arg) {
	clearInterval(id);
	id = 0;
	return 0;
}

$("#start").bind("click",{"virus":virus,"width":width,"height":height,"id":id},Start);
$("#restart").bind("click",{"virus":virus,"width":width,"height":height,"id":id},Update);
$("#stop").bind("click",{"virus":virus,"width":width,"height":height,"id":id},Stop);