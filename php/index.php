<!-- Replichiamo l'esercizio dei dischi musicali, questa volta però gestendo noi i dati.
Creiamo un array di array che rappresentano dei dischi musicali. Se volete, potete usare gli stessi dati che trovate sulla api di boolean: https://flynn.boolean.careers/exercises/api/array/music facendo attenzione però che qui i dati sono in formato json!
Dobbiamo quindi stampare a schermo i dischi musicali in due modi diversi:
utilizzando solo php: facciamo include del file php con i dati e stampiamo le card con un foreach
utilizzando ajax: al caricamento della pagina facciamo una chiamata ajax al file php che contiene i dati e stampiamo le card con handlebars.
Potete riciclare buona parte del codice che avete scritto nella versione precedente dell'esercizio, magari sforzatevi un pochino di tradurre un po' di css in sass :innocent:
C'è poi un BONUS: aggiungiamo una select con i generi musicali e quando l'utente effettua una scelta, filtriamo gli album per genere, attraverso un'altra chiamata ajax.
Nome repo: php-ajax-dischi
Create due sottocartelle:
versione php (con index.php che fa include di un file dischi.php)
versione ajax (con main.js che con una chiamata ajax recupera i dati dal file dischi.php) -->
<!-- *********************************************************************** -->

<!-- includo i dati su cui lavorare leggendo un file .php  -->
<?php include 'dischi.php'; ?>

<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" crossorigin="anonymous">
    <!-- <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script> -->
    <title>Booolean class#8 - Music cards con PHP</title>
</head>

<body>

    <header>
        <div class="container header-container">
            <img src="images/logo.png" alt="logo spotify">
        </div>
    </header>

    <main>

        <!-- <div class="container select-container">
            <select id="card-genre">
                <option value="all">All</option>
                <option value="pop">Pop</option>
                <option value="jazz">Jazz</option>
                <option value="metal">Metal</option>
                <option value="rock">Rock</option>
            </select> -->

            <!-- iconcine di fontawesome -->
            <!-- <i class="fas fa-drum fa-2x" data-genre="rock"></i>
            <i class="fas fa-bolt fa-2x" data-genre="metal"></i>
            <i class="fas fa-music fa-2x" data-genre="jazz"></i>
            <i class="fas fa-guitar fa-2x" data-genre="pop"></i> -->

        <!-- </div> -->

        <div class="container cards-container">
            <!-- cards musicali generate dinamicamente da php -->

            <?php foreach ($records as $key => $value) { ?>

                <div class="card" data-genre="<?php echo $value['genre'] ?>">
                <!-- singola card musicale -->
                <img src="<?php echo $value['poster'] ?>" alt="<?php echo $value['title'] ?> di <?php echo $value['author'] ?>">
                <h3><?php echo $value['title'] ?></h3>
                <p><?php echo $value['author'] ?></p>
                <p><?php echo $value['year'] ?></p>
                </div>

            <?php } ?>

        </div>
    </main>

    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
    <!-- <script src="public/js/main.js"></script> -->

</body>

</html>
