# TEORIA
## 1. Co to jest jQuery i do czego służy</b>

jQuery jest biblioteką dla języka JavaScript, której pierwsze wydanie pojawiło się 26 sierpnia 2006 roku. Kosztem niewielkiego spadku wydajności(praktycznie niezauważalnego) ułatwia korzystanie i tworzenie efektów animacji, dodawanie dynamicznych zmian strony, wczytywanie elementów strony bez potrzeby przeładowania(AJAX) itd.
Od 18 kwietnia 2013(wersja 2.0) porzucono obsługę przestarzałych przeglądarek IE 6-8.
Najnowsza stabilna wersja jQuery oznaczona jest numerem 3.5.1(https://jquery.com/).
jQuery umożliwia korzystanie z takich funkcjonalności jak:
- selektorów
- atrybutów
- modyfikowaniem drzewa DOM
- zmieniania stylów elementów
- obsługa zdarzeń
- efektów
- AJAX


# Zadanie 1 (5 minut)
- Napisz skrypt jQuery, który po załadowaniu kompletnej strony WWW wyświetli komunikat powitalny “Witaj”. Do wyświetlenia komunikatu użyj funkcji alert().
- Pamiętaj o zastosowaniu funkcji o nazwie $ z parametrem document. Wynikiem będzie obiekt, na którym należy zastosować metodę ready().

# Zadanie 2 (5 minut)
- Wykonaj zadanie 1 za pomocą skróconej notacji do obsługi zdarzeń.

# Zadanie 3 (5 minut) 
- Napisz skrypt jQuery(plik zewnętrzny, dołączony do pliku HTML), który spowoduje, że po kliknięciu akapitu Lorem ipsum zostanie wyświetlone okno informacyjne z komunikatem Witaj.

# Zadanie 4 (5 minut) 
- Wykonaj powyższe zadanie bez użycia jQuery.
- ZADANIE WYKONANO W HTMLu

# Zadanie 5 (10 minut) 
- Przygotuj dokument HTML zawierający listę ul/li. 
- Oprogramuj zdarzenie onclick elementów listy. 
- Kliknięcie elementu ma powodować wyświetlenie komunikatu. 
- Zadanie rozwiąż, przygotowywując trzy pliki: index.html, styles.css, scripts.js.

# Zadanie 6 (5 minut) 
- Wykonaj powyższe zadanie bez zastosowania jQuery.

# Zadanie 7 (15 minut)
- Na bazie wcześniejszych szablonów stwórz dokument z kilkoma akapitami ```<p>```, przyciskami ```<button>```, oraz polami polami formularza ```<input>```. 
- Każdemu z elementów dodaj klasy lub identyfikatory i przetestuj działanie każdego z powyższych zdarzeń.
    ## ZDARZENIA:
    - ```click()``` - pojedyncze kliknięcie myszą,
    - ```dblclick()``` - podwójne klikniecie myszą,
    - ```mousedown()``` - przycisk myszy wciśnięty,
    - ```mouseup()``` - przycisk myszy puszczony,
    - ```mouseover()``` - myszka najechana na element lub zjechała z elementu, poruszanie myszą,
    - ```mousemove()``` - pozycja myszki w układzie X Y nad elementem,
    - ```mouseout()``` - myszka zjechała z elementu,
    - ```keypress()``` - wciśnięcie i puszczenie dowolnego klawisza klawiatury,
    - ```keydown()``` - przycisk klawiatury wciśnięty,
    - ```keyup()``` - przycisk klawiatury puszczony.
    ## Dla każdego z tych zdarzeń w HTML zaimplementowano metody o takiej samej nazwie, ale z przedrostkiem 'on':
    - ```onclick```,
    - ```ondblclick```,
    - ```onmousedown```,
    - ```onmouseup```,
    - ```onmouseover```,
    - ```onmousemove```,
    - ```onmouseout```,
    - ```onkeypress```,
    - ```onkeydown```,
    - ```onkeyup```
    

# Zadanie 8 (10 minut)
- Stwórz dokument HTML, który zawiera trzy elementy div,
- jeden z nich jest oznaczony identyfikatorem ```#tresc```, 
- drugi jest oznaczony klasą ```.klik``` 
- a trzeci posiada atrybut ```data-info```.
- Każdemu z selektorów przypisz inne zdarzenie wywołujące różne komunikaty.

