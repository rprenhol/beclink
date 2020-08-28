document.addEventListener('DOMNodeInserted', function() {
    var items = document.querySelectorAll('.Style_Div_ItemResultado > a.Style_Label_TituloItem');

    for(var i = 0; i < items.length; i++) {
        var link = items[i].getAttribute('href');
        if(link.split(",").length > 5) {
            items[i].setAttribute('href',(link.split(",")[4]).replace(/\"/g,''));
        }
    }

    // Nova aba com clique primário e Ctrl
    // var ctrlDown = false;
    
    // window.addEventListener('keydown', function(e) {
    //     ctrlDown = e.ctrlKey; // Ctrl abaixado
    // });
    // window.addEventListener('keyup', function(e) {
    //     ctrlDown = e.ctrlKey; // Ctrl levantado
    // });

    // Painel de filtros por seções
    var secoes = ['Grupo','Classe','Material'];

    // Varre links do painel de filtro
    for(var i = 0; i < secoes.length; i++) {
        let links = document.querySelectorAll('#ContentPlaceHolder1_gvFiltro' + secoes[i] + ' a');
        for(var j = 0; j < links.length; j++) {
            links[j].addEventListener('mousedown', targetBlank); // atribui evento
        }
    }

    // Action de formulário é executado em nova aba com botão do meio
    function targetBlank(e) {
        if(e.button == 1 || e.ctrlKey) {
            document.forms['form1'].setAttribute('target', '_blank');
        } else {
            document.forms['form1'].removeAttribute('target');
        }
    }
});