document.addEventListener('DOMNodeInserted', function() {
    var items = document.querySelectorAll('.Style_Div_ItemResultado > a.Style_Label_TituloItem');

    for(var i = 0; i < items.length; i++) {
        var link = items[i].getAttribute('href');
        if(link.split(",").length > 5) {
            items[i].setAttribute('href',(link.split(",")[4]).replace(/\"/g,''));
        }
    }
});

