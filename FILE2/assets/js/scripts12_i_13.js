// Zadanie 12 (10 minut) 
// Przygotuj dokument HTML, który będzie zawierać pusty akapit ```<p>``` o ```id="tresc"```. 
// Stwórz skrypt jQuery, który wypełni element #tresc dowolną treścią.

$(document).ready(function(){
    $("#tresc").click(function() {
        $(this).text(prompt("wprowadz tresc"));
    })
});

// Zadanie 13 (5 min) 
// Zmodyfikuj powyższy skrypt tak aby wykorzystać element <button> oraz metodę click() do wypełnienia elementu #tresc.

$(document).ready(function(){
    $("button#tresc1").click(function() {
        $("#tresc").text(prompt("wprowadz tresc"));
    })
});