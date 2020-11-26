// Zadanie 14 (20 minut)
// Dokument HTML zawiera element div o identyfikatorze #names. W kodzie JS stwórz zmienną names będącą tablicą zawierającą imiona. Stwórz skrypt, który doda do div#names tabelę z listą imion.


$(document).ready(function(){
    let names = ["Ania", "Tomek", "Lisa"];
    $("div#names").click(function(){
        $(this).append("<ul></ul>")
        names.forEach((index, element) => {
            console.log(index, element);
            $("ul").append(`<li>${index}</li>`);
        });
    })
});
