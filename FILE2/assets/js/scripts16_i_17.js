// Zadanie 16 (5 minut)
// - Stwórz w tekście kilka linków z atrybutem ```target='blank'```. 
// - Stwórz skrypt, który doda atrybut ```title``` z informacją o otwarciu takich linków w nowej karcie.

$(document).ready(function(){
    $("[target='blank']").click(function(){
        $(this).attr("title", "otwarta");
    });
});

// Zadanie 17 (20 minut)
// Stwórz dokument z 3 zakładkami(tabami). Ostyluj je a następnie stwórz skrypt do przełączania się pomiędzy nimi.
$( function() {
    $( "#tabs" ).tabs();
});
