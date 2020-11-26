// Zadanie 7 (15 minut)
// Na bazie wcześniejszych szablonów stwórz dokument z kilkoma akapitami(<p>), przyciskami(<button>), oraz polami polami formularza (<input>). Każdemu z elementów dodaj klasy lub identyfikatory i przetestuj działanie każdego z powyższych zdarzeń.

// ●	click(),
// ●	dblclick(),
// ●	mousedown(),
// ●	mouseup(),
// ●	mouseover(),
// ●	mousemove(),
// ●	mouseout(),
// ●	keypress(),
// ●	keydown(),
// ●	keyup().

$(document).ready(function(){ 
    $('.klasa1').find('.klasa3').click(function(){
        alert("element o klasie1 w którym jest element o klasie klasa3");
    });
    $('#Id').click(function(){
        alert("element o id 'Id'");
    });
    $('li').click(function(){
        alert("element li");
    });
    $('.klasa1, .klasa2').click(function(){
        alert("Element o klasie klasa1 lub klasa2");
    });
    $('[href], [data-info="true"]').click(function(){
        alert("element z atrybutem href lub atrybutem data-info='true'");
    });
    $('[data-info="true"]').click(function(){
        alert("element z atrybutem data-info='true'");
    });
    $('*').dblclick(function(){
        alert("wszystkie elementy po double click");
    });
    $('[target="_blank"]').click(function(){
        return false;
    });
});