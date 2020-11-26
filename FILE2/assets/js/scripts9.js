// Zadanie 9 (15 minut)
// - Dokument HTML zawiera akapit tekstu oraz trzy kwadraty w kolorach: czerwony, zielony oraz niebieski.
// - Kolorowe kwadraty zostały wykonane jako elementy span ozdobione odpowiednimi stylami CSS. 
// - Napisz skrypt jQuery, który oprogramuje zdarzenie onclick w taki sposób, by po naciśnięciu kolorowego kwadratu jego kolor został przypisany jako kolor tła akapitu.


$(document).ready(function(){
    let akapit = $('p.tekst');
    $('.kwadrat.czerwony').click(function(){//wywołuje zdarzenie mouse down na obojetnie ktorym kwadracie
        akapit.removeAttr('class');
        akapit.addClass("tekst czerwony");
    });
    $('.kwadrat.zielony').click(function(){
        akapit.removeAttr('class');
        akapit.addClass("tekst zielony");
    });
    $('.kwadrat.niebieski').click(function(){
        akapit.removeAttr('class');
        akapit.addClass("tekst niebieski");
    });
    $('.kwadrat.zolty').click(function(){
        akapit.removeAttr('class');
        akapit.addClass("tekst zolty");
    });
});

// $(document).ready(function(){ 
//     $('.kwadrat.czerwony').mousemove(function(){
//         e.preventDefault;
//         $('p.tekst').css({'background': 'yellow', 'color':'black'})
//     });
// });