// Zadanie 11 (10 minut)
// Stwórz dokument HTML z przyciskiem rozwijającym menu w wersji mobilnej.

// I METODA
// $(document).ready(function(){
//     let btn = $("button");
//     let nav = $("nav");
//     btn.click(function() {
//         nav.toggleClass('active');
//     })
// });

// II METODA
$(document).ready(function(){
    let btn = $("button");
    let nav = $("nav");
    btn.click(function() {
        nav.slideToggle();
    })
    //mozna zastosowac jeszcze
    //slideUp(), slideDown()
});