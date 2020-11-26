// Zadanie 8 (10 minut)
// Stwórz dokument HTML, który zawiera trzy elementy div, jeden z nich jest oznaczony identyfikatorem #tresc, drugi jest oznaczony klasą .klik a trzeci posiada atrybut data-info.
// Każdemu z selektorów przypisz inne zdarzenie wywołujące różne komunikaty.

$(document).ready(function(){
    $("#tresc").click(function(){
        alert("to jest element div o id 'tresc'");
    });
    $(".klik").dblclick(function(){
        alert("to jest element div o klasie klik");
    });
    $("[data-info]").mouseover(function(){
        alert("to jest element div o atrybucie data info");
    });
});