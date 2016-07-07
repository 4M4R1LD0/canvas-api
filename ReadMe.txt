******** ApiCanvas ********

Teste do git
É uma API baseada na orientação a objetos destinada a facilitar os trabalhos com canvas.

Composta por objetos que devem ser instanciados, e manipulados sem a necessidade de manipular diretamente a tela de desenho canvas

Objeto Screen - É o principal objeto da API, é responsável por relacionar o objeto html <canvas> com a API e assim permitir sua manipulação

CanvasObject

Construtor:
    Screen(Canvas, Container,...properties);
        canvas = Objeto DOM Canvas
        Container = Div que contem o objeto cavas
        ...properties = diversas configurações opicionais que devem ser descritas em ordem sendo
            [0] -> mouseTracker = true ou false (Padrão true)
                habilitar ou desabilitar a função de seguir o mouse em tempo real
            [1] -> keyTracker = true ou false (Padrão false)
                habilitar ou desabilitar a função de rastrear teclas precionadas no teclado

Métodos:
    this.set2dContext()
        função: seta o contexto do canvas para 2d
        recebe: null;
