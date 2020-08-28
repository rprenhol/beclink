document.addEventListener('DOMNodeInserted', function() {
    var items = document.querySelectorAll('.Style_Div_ItemResultado > a.Style_Label_TituloItem');

    for(var i = 0; i < items.length; i++) {
        var link = items[i].getAttribute('href');
        if(link.split(",").length > 5) {
            items[i].setAttribute('href',(link.split(",")[4]).replace(/\"/g,''));
        }
    }
});

// Seleciona links elegíveis para manipulação
window.onload = function() {
    // Painel de filtros por seções
    var secoes = ['Grupo','Classe','Material'];

    // Varre links do painel de filtro
    for(var i = 0; i < secoes.length; i++) {
        let links = document.querySelectorAll('#ContentPlaceHolder1_gvFiltro' + secoes[i] + ' a');
        for(var j = 0; j < links.length; j++) {
            links[j].addEventListener('mousedown', targetBlank); // atribui evento
        }
    }
}

// Action de formulário é executado em nova aba com botão do meio
// ou com a tecla Ctrl pressionada
function targetBlank(e) {
    var target = e.target || e.srcElement;
    console.log(e.button + ' | ' + e.ctrlKey + ' | ' + target.toString().split('\'')[1]);
    if(e.button == 1 || e.ctrlKey) {
        document.forms['form1'].setAttribute('target', '_blank');
        document.forms['form1'].__EVENTTARGET.value = target.toString().split('\'')[1];
        document.forms['form1'].__EVENTARGUMENT.value = '';
        document.forms['form1'].submit();
        e.preventDefault();
    } else {
        document.forms['form1'].removeAttribute('target');
    }
    return false;
}