<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <title>Booolean class#8 - Music cards con PHP</title>
</head>

<body>

    <header>
        <div class="container header-container">
            <img src="images/logo.png" alt="logo spotify">
        </div>
    </header>

    <main>

        <div class="container select-container">
            <select id="card-genre">
                <option value="all">All</option>
                <option value="pop">Pop</option>
                <option value="jazz">Jazz</option>
                <option value="metal">Metal</option>
                <option value="rock">Rock</option>
            </select>

            <!-- iconcine di fontawesome -->
            <i class="fas fa-drum fa-2x" data-genre="rock"></i>
            <i class="fas fa-bolt fa-2x" data-genre="metal"></i>
            <i class="fas fa-music fa-2x" data-genre="jazz"></i>
            <i class="fas fa-guitar fa-2x" data-genre="pop"></i>

        </div>

        <div class="container cards-container">
            <!-- cards musicali generate dinamicamente con i dati recuperati tramite chiamate AJAX -->
        </div>
    </main>

    <script id="music-card-template" type="text/x-handlebars-template">
        <div class="card" data-genre="{{ genre }}">
            {{!-- template per la creazione di una singola card musicale --}}
            <img src="{{ poster }}" alt="{{ title }} di {{ author }}">
            <h3>{{ title }}</h3>
            <p>{{ author }}</p>
            <p>{{ year }}</p>
        </div>
    </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="public/js/main.js"></script>

</body>

</html>
