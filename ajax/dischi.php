<?php
$records = [
[
"poster" => "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
"title" => "New Jersey",
"author" => "Bon Jovi",
"genre" => "Rock",
"year" => "1988"
],
[
"poster" => "https://images.pyramidshop.com/images/_popup/ACPPR48056.jpg",
"title" => "Live at Wembley 86",
"author" => "Queen",
"genre" => "Pop",
"year" => "1992"
],
[
"poster" => "https://images-na.ssl-images-amazon.com/images/I/41JD3CW65HL.jpg",
"title" => "Ten's Summoner's Tales",
"author" => "Sting",
"genre" => "Pop",
"year" => "1993"
],
[
"poster" => "https://cdn2.jazztimes.com/2018/05/SteveGadd-800x723.jpg",
"title" => "Steve Gadd Band",
"author" => "Steve Gadd Band",
"genre" => "Jazz",
"year" => "2018"
],
[
"poster" => "https://images-na.ssl-images-amazon.com/images/I/810nSIQOLiL._SY355_.jpg",
"title" => "Brave new World",
"author" => "Iron Maiden",
"genre" => "Metal",
"year" => "2000"
],
[
"poster" => "https://upload.wikimedia.org/wikipedia/en/9/97/Eric_Clapton_OMCOMR.jpg",
"title" => "One more car, one more raider",
"author" => "Eric Clapton",
"genre" => "Rock",
"year" => "2002"
],
[
"poster" => "https://images-na.ssl-images-amazon.com/images/I/51rggtPgmRL.jpg",
"title" => "Made in Japan",
"author" => "Deep Purple",
"genre" => "Rock",
"year" => "1972"
],
[
"poster" => "https://images-na.ssl-images-amazon.com/images/I/81r3FVfNG3L._SY355_.jpg",
"title" => "And Justice for All",
"author" => "Metallica",
"genre" => "Metal",
"year" => "1988"
],
[
"poster" => "https://img.discogs.com/KOBsqQwKiNKH-q927oHMyVdDzSo=/fit-in/596x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6406665-1418464475-6120.jpeg.jpg",
"title" => "Hard Wired",
"author" => "Dave Weckl",
"genre" => "Jazz",
"year" => "1994"
],
[
"poster" => "https://m.media-amazon.com/images/I/71K9CbNZPsL._SS500_.jpg",
"title" => "Bad",
"author" => "Michael Jackson",
"genre" => "Pop",
"year" => "1987"
]
];

// verifico se c'è una query string
if (empty($_GET) || ($_GET['query'] == 'all')) {
    // non c'è la query string, o la richiesta è per tutti i generi ('all)')
    // trasformo la struttura dati in un formato stringa JSON
    // e restituisco, con una echo, il DB completo
    echo json_encode($records);

} else {
    // costruisco una struttura dati che contiene solo i generi richiesti

    // recupero il genere richiesto
    $genre_selected = $_GET['query'];

    // preparo un array per memorizzare i dichi del genere selezionato
    $records_by_genre=[];
    // scorro il DB e seleziono i dischi che appartengono al genere selezionato
    foreach ($records as $record) {

        if (strtolower($record['genre']) == $genre_selected) {
            // creo un nuovo array con soli i dischi del genere selezionato
            array_push($records_by_genre, $record);
        }
    }

    // trasformo la struttura dati in un formato stringa JSON e la restituisco con una echo
    echo json_encode($records_by_genre);
}
?>
