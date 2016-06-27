"use strict";

/*** Funções iniciadas por eventos externos***/

//Variavel Screen da ApiCanvas deve ser global
var screenCanvas;
var screenCanvas2;
window.onload = function() {

	//Buscando os objetos Screen e Container no DOM
	let Canvas = document.getElementById("screen");
	let Container = document.getElementById("container");

	let Canvas2 = document.getElementById("screen2");
	let Container2 = document.getElementById("container2");

	//Instancia um novo objeto Canvas coma ApiCanvas usa se o var, pois nesse caso a variave precisa ser criada no espaço global
	screenCanvas = screenCanvas || new Screen(Canvas, Container, true);
	screenCanvas2 = screenCanvas2 || new Screen(Canvas2, Container2, true);
	//Seta o context c=do canvas para 2d
	screenCanvas.set2dContext();
	screenCanvas2.set2dContext();
	//Ajusta o tamanho do canvas ao iniciar
	screenCanvas.adjust();
	screenCanvas2.adjust();



	//***Testes, deixar todos os testesaqui dentro

	//teste de mostrar a posição do mouse no console
	Container.onmousemove = function (ev){
		let positionX = screenCanvas.getMouseX();
		let positionY = screenCanvas.getMouseY();
		console.log("x = " + positionX + ", y = " + positionY);
	}

	Container2.onmousemove = function (ev){
		let positionX = screenCanvas2.getMouseX();
		let positionY = screenCanvas2.getMouseY();
		console.log("x2 = " + positionX + ", y2 = " + positionY);
	}
	//***Testes, deixar todos os testesaqui dentro
}

window.onresize = function() {
	//Ajusta o tamanho do canvas ao redimensionar
	screenCanvas.adjust();//configura o tamanho do canvas a partir da div mãe
	screenCanvas2.adjust();//configura o tamanho do canvas a partir da div mãe
}



/*
	prjObjects = [];

	adjustScreen();

	//testDraw(ctx);//usado para teste de desenho

	prepareProjectTable(prjTable, ctx);
	refreshProjectTable(prjTable, ctx);
	prjTableMouseEvents(prjTable, ctx);

	drawImage(ctx);
}

drawImage = function(ctx){
	var image = document.getElementById("cameraItem");
	ctx.rotate(20*Math.PI/180);// rotaciona o contexto depois é só desenhar no contexto virado
	ctx.drawImage(image, 0, 0, 40, 40);
}
// Ajusta o tamanho do canvas ao redimensionar a tela
window.onresize = function() {

	adjustCanvas();//configurando tamanho do canvas a partir da div mãe
}

prjTableMouseEvents = function(prjTable, ctx){
	var currentObject;
	prjTable.onmousedown = function (event){
		for(var i = 0; i < prjObjects.length; i++){
			if	(prjObjects[i].x < event.clientX
				&& (prjObjects[i].width + prjObjects[i].x > event.clientX)
				&& prjObjects[i].x < event.clientY
				&& (prjObjects[i].height + prjObjects[i].y > event.clientY)) {
				currentObject = prjObjects[i];
				break;
			}
		}
	};


	prjTable.onmousemove = function (event){
		if (currentObject != null){
			currentObject.x = event.clientX;
			currentObject.y = event.clientY;
		}
		refreshProjectTable(prjTable, ctx);
	};

	prjTable.onmouseup = function (event){
		currentObject = null;
	};
}
// Funções iniciadas por eventos internos


// Configura o tamanho do body quando necessário - Não esta funcionando
adjustBodyWidth = function(divTable){
	//configura o tamanho do body ao iniciar ****não esta funcionando
		var bodyHeight = window.innerHeight;
		divTable.setAttribute("height", bodyHeight);
	//configura o tamanho do body ao iniciar
}

// Configura o tamanho do canvas de desenho quando necessário

adjustCanvas = function(){
	//configurando tamanho do canvas a partir da div mãe
	var prjTable = document.getElementById("prjTable");
	var divTable = document.getElementById("table");
	width = divTable.clientWidth;
	height = divTable.clientHeight;
	prjTable.setAttribute("width", width);
	prjTable.setAttribute("height", height);
	//configurando tamanho do canvas a partir da div mãe
}

/*** Usado para testes de desenho
testDraw = function(ctx){

	//Ajuste do mouse para desenhar *** falta deixar automatico
	var adjX = 90;
	var adjY = 120;
	//ajuste do mouse para desenhar
	//var ctx = prjTable.getContext("2d");
	var drawing = false;

	prjTable.onmousedown = function (evt){
		ctx.moveTo(evt.clientX - adjX,evt.clientY - adjY);
		drawing = true;
	}

  prjTable.onmouseup = function (){
    drawing = false;
  }

  prjTable.onmousemove = function (evt){

    if (drawing){
      ctx.lineTo(evt.clientX - adjX, evt.clientY - adjY);
      ctx.stroke();
    }
  }
}


// Preparação do da mesa de projeto canvas
prepareProjectTable = function(prjTable, ctx){
	prjObjects.push({
		x: 100, y: 200,
		width: 100, height: 200,
		color: '#f00'
	});
	prjObjects.push({
		x: 300, y: 250,
		width: 200, height: 100,
		color: '#00f'
	});
}

refreshProjectTable = function(prjTable, ctx){
	ctx.fillStyle = 'beige';
	ctx.fillRect(0, 0, width, height);
	for( var i = 0; i < prjObjects.length; i++){
		ctx.fillStyle = prjObjects[i].color;
		ctx.fillRect(prjObjects[i].x, prjObjects[i].y, prjObjects[i].width, prjObjects[i].height);
	};
}
*/
