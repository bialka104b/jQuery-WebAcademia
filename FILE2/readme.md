# Zadanie 9 (15 minut)
- Dokument HTML zawiera akapit tekstu oraz trzy kwadraty w kolorach: czerwony, zielony oraz niebieski.
- Kolorowe kwadraty zostały wykonane jako elementy span ozdobione odpowiednimi stylami CSS. 
- Napisz skrypt jQuery, który oprogramuje zdarzenie onclick w taki sposób, by po naciśnięciu kolorowego kwadratu jego kolor został przypisany jako kolor tła akapitu.

# Zadanie 10 (10 minut) 
- Rozwiąż powyższe zadanie jeszcze raz, z tą różnicą aby zastosować zdarzenie mouseover() dla zmiany koloru akapitu 
- oraz mouseout() aby na powrót ustawić domyślny kolor tła(np. biały).

# Zadanie 11 (10 minut)
- Stwórz dokument HTML z przyciskiem rozwijającym menu w wersji mobilnej.
- Ps: Pamiętaj o rozdzieleniu HTML, CSS i JS na oddzielne pliki.

________________________________________________________________________________________________________
# TEORIA
## Odczyt  i modyfikacja treści elementów
Dostęp do treści elementów HTML można uzyskać po zastosowaniu metody ```text()``` oraz ```html()```. Pierwsza z nich operuje tylko tekstem, natomiast druga kodem HTML. Mogą one być wywoływane bezparametrowo lub z jednym parametrem. Wywołanie bezparametrowo zwraca obecną zawartość elementu, zaś wywołanie z parametrem ustawia nową zawartość.

- ```$('selektor').text()``` - zwraca tekst danego elementu.
- ```$('selektor').text('Lorem ipsum...')``` - dodaje tekst do wskazanego elementu.

# Zadanie 12 (10 minut) 
- Przygotuj dokument HTML, który będzie zawierać pusty akapit ```<p>``` o ```id="tresc"```. 
- Stwórz skrypt jQuery, który wypełni element #tresc dowolną treścią.

# Zadanie 13 (5 min) 
- Zmodyfikuj powyższy skrypt tak aby wykorzystać element ```<button>``` oraz metodę ```click()``` do wypełnienia elementu ```#tresc```.

# Zadanie 14 (20 minut)
- Dokument HTML zawiera element div o identyfikatorze ```#names```. 
- W kodzie JS stwórz zmienną ```names``` będącą tablicą zawierającą imiona. 
- Stwórz skrypt, który doda do ```div#names``` tabelę z listą imion.

________________________________________________________________________________________________________
# TEORIA
## Odczyt i modyfikacja atrybutów
Elementy HTML mogą mieć różne atrybuty:
- ```<div id='tresc'></div>```
- ```<p class='opis'></p>```
- ```<a href='lorem.html'>lorem</a>```
- ```<img src='obrazek.jpg' alt='opis obrazka' />```

Dostęp do atrybutów zapewnia metoda ```attr()```. Wywołana z jednym parametrem zwraca wartość, zaś z dwoma parametrami ustala podaną wartość atrybutu.
Wykorzystując metodę ```attr()```, możemy:
- wymienić obrazy wyświetlane przez znacznik img,
- opracować wskaźnik wybranej opcji zależny od adresu URL dokumentu,
- na bieżąco odczytywać treści wpisywane do formularzy,
- modyfikować działanie linków tak, by powodowały otwieranie nowego okna.

# Zadanie 15 (5 minut)
- Stwórz dokument ze znacznikiem ```<img>```, po kliknięciu którego będzie podmieniane zdjęcie na inne.

# Zadanie 16 (5 minut)
- Stwórz w tekście kilka linków z atrybutem ```target='blank'```. 
- Stwórz skrypt, który doda atrybut ```title``` z informacją o otwarciu takich linków w nowej karcie.

# Zadanie 17 (20 minut)
- Stwórz dokument z 3 zakładkami(tabami). 
- Ostyluj je a następnie stwórz skrypt do przełączania się pomiędzy nimi.
- Zastosuj import ```<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>```

________________________________________________________________________________________________________
# TEORIA
## Dodawanie i usuwanie węzłów drzewa DOM
Poza wspomnianymi wcześniej metodami ```text()``` oraz ```html()``` istnieje wiele innych metod do tworzenia nowych węzłów w drzewie DOM.
- ```append()``` wstawianie do jakiegoś elementu rodzica, jakiegoś dziecka w postaci html lub tekstu
- ```appendTo()```
- ```prepend()```
- ```prependTo()```
- ```after()```
- ```insertAfter()```
- ```before()```
- ```wrap()```
- ```wrapInner()```
Metody ```append()``` oraz ```appendTo()```, a także ```prepend()``` i ```prependTo()``` dodają do drzewa DOM nowo utworzony element. Metoda ```append()``` oraz ```appendTo()``` umieszczają nowy element drzewa jako ostatnie dziecko podanego elementu, zaś metody ```prepend()``` i ```prependTo()``` dodają element jako pierwsze dziecko elementu.

# LINKI
- https://gomakethings.com/how-to-access-and-use-data-attributes-in-your-css/
- https://css-tricks.com/almanac/properties/t/text-shadow/
