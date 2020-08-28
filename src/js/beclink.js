document.addEventListener('DOMNodeInserted', function() {
    var items = document.querySelectorAll('.Style_Div_ItemResultado > a.Style_Label_TituloItem');

    for(var i = 0; i < items.length; i++) {
        var link = items[i].getAttribute('href');
        if(link.split(",").length > 5) {
            items[i].setAttribute('href',(link.split(",")[4]).replace(/\"/g,''));
        }
    }
    
    var secoes = ['Grupo','Classe','Material'];

    for(var i = 0; i < secoes.length; i++) {
        let links = document.querySelectorAll('#ContentPlaceHolder1_gvFiltro' + secoes[i] + ' a');
        for(var j = 0; j < links.length; j++) {
            links[j].addEventListener('mousedown', targetBlank);
        }
    }

    function targetBlank(e) {
        if(e.button == 1) {
            document.forms['form1'].setAttribute('target', '_blank');
        }
    }
});




// https://www.bec.sp.gov.br/BEC_Catalogo_ui/CatalogoPesquisa3.aspx?chave=&pesquisa=Y&cod_id=&ds_item=papel
// https://www.bec.sp.gov.br/BEC_Catalogo_ui/CatalogoPesquisa3.aspx?chave=&pesquisa=Y&cod_id=&ds_item=papel