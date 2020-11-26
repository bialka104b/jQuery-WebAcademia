// Zadanie 5 (10 minut) 
// Przygotuj dokument HTML zawierający listę ul/li. Oprogramuj zdarzenie onclick elementów listy. Kliknięcie elementu ma powodować wyświetlenie komunikatu. Zadanie rozwiąż, przygotowywując trzy pliki: index.html, styles.css, scripts.js.

// $(document).ready(function(){ 
//     jQuery('li').click(function(){
//         alert("Witaj SKRYPT5");
//     });
// });

// Zadanie 6 (5 minut) 
// Wykonaj powyższe zadanie bez zastosowania jQuery.
$(document).ready(function(){ 
    $('li').click(function(){
        alert("Witaj SKRYPT6");
    });
});