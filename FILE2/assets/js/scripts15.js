// Zadanie 15 (5 minut)
// Stwórz dokument ze znacznikiem ```<img>```, po kliknięciu którego będzie podmieniane zdjęcie na inne.

$(document).ready(function(){
    $("[src]").click(function(){
        const alt = $(this).attr("alt");
        if(alt === "foto1") {
            $(this).attr("src", "./images/pies2.jpg");
            $(this).attr("alt", "foto2");
        } else if(alt === "foto2"){
            $(this).attr("src", "./images/pies1.jpg");
            $(this).attr("alt", "foto1");
        }
    })
});


