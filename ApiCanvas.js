"use strict";
/*(*)
Legenda durante desenvolvimento
(*) - Comando usado para teste e deve ser excluido depois do desenvolvimento
(-) - Falta implementar
(!) - Código teste, não definitivo, necessita de adequações.
(#) - Código de Debug
(x) - código com erros
*/

var debug = "none"; //(*) Variavel usada para exibir mensagens de debug

//**************************Prototipo Screen***************************************************
//  nome: Screen
//  recebe: canvas = uma tela canvas,
//          container = A div que contem o canvas,
//          ...propriedades = todas as propriedades de ajuste disponiveis
//            [0] = ativar mouse tracker ( Padrão = Ativado)
//            [1] = ativar keyboard tracker ( Padrão = Desativado)
//  retorna: depende da função chamada
//  função: é o objeto canvas, controla todas as funções relacionadas a ele
//*****************************************************************************
function Screen(canvas, container, ...properties) {
    //*****************
    //****Atributos****
    //*****************
    //****Essenciais****
    this.canvas = canvas;
    this.container = container;
    this.context = null;
    this.objects = []; // variavel responsavel por armazenar todos os objetos que serão exibidos no canvas
    this.scale = 1;//Escala = 1 > scale > 0 *Padrão deve ser 1
    //****Opcionais****
    //****Mouse****
    this.mouseTracker = properties[0];// (-)falta fazer ser opcional e não precisar ser informado no construtor
    this.mouseTrackerObj = null;
    this.mouseX = 0;
    this.mouseY = 0;
    //****Keyboard****
    this.keyTracker = properties[1] || false;//(-)falta implementar e deixar padrão false

    //*****************
    //*****Métodos*****
    //*****************

    //-----------------------------------------------
    //----nome: set2dContext
    //----recebe: void
    //----retorna: void
    //----função: seta o context do canvas para 2d

    this.set2dContext = function () {
        this.context = this.canvas.getContext("2d");
        //(-)falta fazer retornar true se deu certo ou 0 se erro
    }
    //-----------------------------------------------

    //-----------------------------------------------
    //----nome: adjust
    //----recebe: void
    //----retorna: void
    //----função:ajusta a tela do mesmo tamanho da div mãe denominada container

    this.adjust = function () {
        let width = this.container.clientWidth;
        let height = this.container.clientHeight;
        this.canvas.setAttribute("width", width);
        this.canvas.setAttribute("height", height);
    }
    //-----------------------------------------------

    //-----------------------------------------------
    //----nome: getMouseX
    //----recebe: void
    //----retorna: posição x do mouse
    //----função: retorna a posição x do mouse

    this.getMouseX = function () {
        return this.mouseTrackerObj.getX();
    }
    //-----------------------------------------------

    //-----------------------------------------------
    //----nome: getMouseY
    //----recebe: void
    //----retorna: posição y do mouse
    //----função: retorna a posição y do mouse

    this.getMouseY = function () {
        return this.mouseTrackerObj.getY();
    }
    //-----------------------------------------------
    //-----------------------------------------------
    //----nome: ativador do mouse tracker
    //----recebe: void
    //----retorna: void
    //----função: inicia o rastreamento do mouse se mouseTracker = true, padrão sempre habilitado
    if (this.mouseTracker !== false) {
        this.mouseTrackerObj = this.mouseTrackerObj || new MouseTracker(this);
        doError("MouseTracker succesfully activated!");//(*)
    }
    //-----------------------------------------------

    //-----------------------------------------------
    //----nome: addObj
    //----recebe: Object
    //----retorna: sucesso
    //----função: adiciona um objeto ao objeto canvas

    this.addObj = function (obj) {
        //(!)
        this.objects.push({
		obj:obj
	});
    }
    //-----------------------------------------------

    //-----------------------------------------------
    //----nome: deletObj
    //----recebe: Object
    //----retorna: sucesso
    //----função: remove um objeto do objeto canvas

    this.deletObj = function (){
        //(-)Falta implementar
    }

    //-----------------------------------------------
    //----nome: Render
    //----recebe: void
    //----retorna: sucesso
    //----função: renderiza todos os objetos existentes no canvas

    this.rende = function (){
        //(-)Falta implementar
    }
    //-----------------------------------------------

}
//***************FIM do Objeto Screen ******************************************

//***************Prototipo MouseTracker *******************************************
//nome: MouseTracker,
//recebe: Objeto canvas,
//retorna: a posição x e y do mouse em tempo real
//função: é o objeto MouseTracker, quando instanciado retorna a posição do mouse em tempo real
//*****************************************************************************
function MouseTracker(screen) {
    //*****************
    //****Atributos****
    //*****************
    this.canvas = screen.canvas;
    this.X = 0;
    this.Y = 0;

    //*****************
    //*****Métodos*****
    //*****************

    //-----------------------------------------------
    //----nome: mouseTrackerActiver
    //----recebe: void
    //----retorna: void
    //----função: ajusta a tela do mesmo tamanho da div mãe denominada container

    let that = this; //variavel usada para manter o escopo do this no that
    screen.canvas.onmousemove = function (ev) {
        that.X = ev.pageX - this.offsetLeft;
        that.Y = ev.pageY - this.offsetTop;
    }
    //-----------------------------------------------

    //-----------------------------------------------
    //----nome: getX
    //----recebe: void
    //----retorna: posição X do mouse
    //----função:retornar a posição x do mouse

    this.getX = function () {
        return this.X;
    }
    //-----------------------------------------------

    //-----------------------------------------------
    //----nome: getY
    //----recebe: void
    //----retorna: posição Y do nome
    //----função:ajusta a tela do mesmo tamanho da div mãe denominada container

    this.getY = function () {
        return this.Y;
    }
    //-----------------------------------------------
}
//***************FIM do Objeto MouseTracker ************************************

//***************Prototipo Object *************************************************
//nome: CanvasObject,
//recebe: todas as caracteristicas que permitam renderizar o objeto na tela canvas é a classe objeto genérica com os metodos comuns a todos os objetos, cada tipo de objeto tem seu próprio prototipo
//retorna: define como um objeto deve ser renderizado e como deve se comportar
//função: É o objeto da tela canvas nenhum objeto pode ser instanciado diretamente como CanvasObject
//******************************************************************************
function CanvasObject(type, draggable, colisionDect, content, ...properties) {
    //*****************
    //****Atributos****
    //*****************
    this.type = type;//(-) Falta implementar
    //****Diferentes tipos de objetos conforme segue
    //****Retangulo
    //****Arco
    //****Linha
    //****Objeto DOM
    //****Lápis
    //****Imagem
    //*******************************************************
    this.draggable = draggable;
    this.colisionDetect = colisionDetect;
    this.content = content;//Varia de acordo com o tipo do desenho

    //*****************
    //*****Métodos*****
    //*****************
    //(-)

}
//***************FIM do Objeto Object ******************************************

//***************Prototipo Object *************************************************
//nome: Rect,
//recebe: todas as caracteristicas de um triangulo,  deve ser uma classe fliha da CanvasObject
//retorna: a posição x e y do mouse em tempo real
//função: É o objeto especifico da tela canvas
//******************************************************************************
function Rect(color, position, width, height, ...properties) {
    //*****************
    //****Atributos****
    //*****************
    this.color = color;
    this.position = position[2];
    this.width = width;
    this.weight = weight;
    //*******************************************************

    //*****************
    //*****Métodos*****
    //*****************
    //(-) Esses métodos provavelmente devem estar no objeto genérico

    //-----------------------------------------------
    //----nome: draw
    //----recebe: void
    //----retorna: posição Y do nome
    //----função:ajusta a tela do mesmo tamanho da div mãe denominada container

    this.draw = function(ctx){
        ctxBefore = ctx;
        ctx.fillStyle = color;
        ctx.fillRect(this.position[0], this.position[1],this.width, this.height)
    }
    //-----------------------------------------------


}
//***************FIM do Objeto Object ******************************************

//***************Função de Debug *************************************************
//nome: doError,
//recebe: String
//retorna: exibe a mensage no console
//função: Recebe mensagem de erro e exibe na tela se o debug estiver habilitado
//******************************************************************************
function doError(message,...option) {//(x)
    if (debug == "light"){
        console.log(message);
    } else if (debug = "breaker" && option[0] == "forcelight"){
        console.log(message);
    } else if (debug = "breaker"){
        alert(message);
    }
}
