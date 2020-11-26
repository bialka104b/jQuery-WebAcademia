// Zadanie 18 (20 minut)
// Sprawdź w praktyce użycie każdej z wyżej wymienionych metod.
// append() - wstawianie do jakiegoś elementu rodzica, jakiegoś dziecka w postaci html lub tekstu
// appendTo() - działa tak samo tylko mozna to zapisać odwrotnie
// prepend() - działa tak jak append() ale dodaje na początek listy elementów
// prependTo()
// after() - wstawi jeden tekst lub element htmla po każdym elemencie z wybranym selektorem, z tym że jeżeli taki element już istnieje w określonym rodzicu to zostanie on wycięty a wstawiony tam gdzie tego chcemy
// insertAfter() - działa tak samo jak after tylko ma inny zapis
// before() - wstawi jeden tekst lub element htmla przed każdym elementm z wybranym selektorem
// wrap() - owinie każdy element(tag) o wybranym selektorze jakiś innym podanym elementem podanym w argumencie
// wrapInner() - owinie każdą zawartość elementu(tagów) o wybranym selektorze, szczególnie przydatny gdy trzeba owinąć wiecej niż 1 tag

$(document).ready(function(){
    $(".zad18").append("<div>cosik 2</div>");
    $(".zad18").append($("#names"));
    $(".zad18").append("tekst append");
    $( "<p>Test appendTo</p><br>" ).appendTo( ".zad18" );
    $(".zad18").prepend("<div>cosik 3</div>");
    $( "<p>Test prepend To</p><br>" ).prependTo( ".zad18" );
    $( "#zad18" ).after( "<p>Test after</p>" );
    $("#zad18").after($("#names"));
    $( "<p>Test insertAfter</p><br>" ).insertAfter( ".zad18" );
    $( "p" ).wrap( "<div class='new'></div>" );
    $( "p" ).wrapInner( "<div class='new__inner'></div>");
});