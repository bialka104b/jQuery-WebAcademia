// Zadanie 10 (10 minut) 
// Rozwiąż powyższe zadanie jeszcze raz, z tą różnicą aby zastosować zdarzenie mouseover() dla zmiany koloru akapitu oraz mouseout() aby na powrót ustawić domyślny kolor tła(np. biały).

//I METODA
// $(document).ready(function(){
//     let akapit = $('p.tekst');
//     $('.kwadrat.czerwony').mouseover(function(){//wywołuje zdarzenie mouse down na obojetnie ktorym kwadracie
//         akapit.removeAttr('class');
//         akapit.addClass("tekst czerwony");
//     }).mouseout(function(){
//         akapit.removeClass('czerwony');
//     });

//     $('.kwadrat.zielony').mouseover(function(){
//         akapit.removeAttr('class');
//         akapit.addClass("tekst zielony");
//     }).mouseout(function(){
//         akapit.removeClass('zielony');
//     });

//     $('.kwadrat.niebieski').mouseover(function(){
//         akapit.removeAttr('class');
//         akapit.addClass("tekst niebieski");
//     }).mouseout(function(){
//         akapit.removeClass('niebieski');
//     });

//     $('.kwadrat.zolty').mouseover(function(){
//         akapit.removeAttr('class');
//         akapit.addClass("tekst zolty");
//     }).mouseout(function(){
//         akapit.removeClass('zolty');
//     });
// });

//II METODA
$(document).ready(function(){
    $(".kwadrat").mouseover(function(){
        if( $(this).hasClass("czerwony") ){
            $("p.tekst").addClass("czerwony");
        } 
        else if ( $(this).hasClass("zielony") ) {
            $("p.tekst").addClass("zielony");
        }
        else if ( $(this).hasClass("niebieski") ) {
            $("p.tekst").addClass("niebieski");
        }
        else {
            $("p.tekst").addClass("zolty");
        }
    });
    $(".kwadrat").mouseout(function(){
        $("p.tekst").removeClass("zolty czerwony zielony niebieski");
    });
});