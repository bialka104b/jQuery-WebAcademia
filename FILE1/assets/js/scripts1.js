// Zadanie 1 (5 minut)
// Napisz skrypt jQuery, który po załadowaniu kompletnej strony WWW wyświetli komunikat powitalny “Witaj”. Do wyświetlenia komunikatu użyj funkcji alert().
// Pamiętaj o zastosowaniu funkcji o nazwie $ z parametrem document. Wynikiem będzie obiekt, na którym należy zastosować metodę ready().

//alternatywa 1
$(document).ready(function(){
     alert("Witaj 1 skrypt1") 
});

//alternatywa 2
$(window).load(function(){
     alert("Witaj 2 skrypt1") 
});