/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Replichiamo l'esercizio dei dischi musicali, questa volta però gestendo noi i dati.
// Creiamo un array di array che rappresentano dei dischi musicali.
//Se volete, potete usare gli stessi dati che trovate sulla api di boolean:
// https://flynn.boolean.careers/exercises/api/array/music facendo attenzione però che qui i dati sono in formato json!
// Dobbiamo quindi stampare a schermo i dischi musicali in due modi diversi:
// utilizzando solo php: facciamo include del file php con i dati e stampiamo le card con un foreach
// utilizzando ajax: al caricamento della pagina facciamo una chiamata ajax al file php che contiene i dati e stampiamo le card con handlebars.
// Potete riciclare buona parte del codice che avete scritto nella versione precedente dell'esercizio, magari sforzatevi un pochino di tradurre un po' di css in sass :innocent:
// C'è poi un BONUS: aggiungiamo una select con i generi musicali e quando l'utente effettua una scelta, filtriamo gli album per genere, attraverso un'altra chiamata ajax.
// Nome repo: php-ajax-dischi
// Create due sottocartelle:
// versione php (con index.php che fa include di un file dischi.php)
// versione ajax (con main.js che con una chiamata ajax recupera i dati dal file dischi.php)
// -----------------------------------------------------------------------------
$(document).ready(function () {
  // chiamata AJAX per recuperare dati dal DB virtuale records_db.php
  $.ajax({
    url: 'dischi.php',
    method: 'get',
    success: function success(musicCardsData) {
      handleResponseData(musicCardsData);
    },
    error: function error() {
      alert("ERRORE! non sono riuscito a recuperare i dati...");
    }
  }); // BONUS - permettere selezione del genere della music card
  // ascolto evento .change sul tag 'select' per intercettare la selezione dell'utente
  // $('#card-genre').change(function() {
  //
  //     // mi salvo il genere selezionato dall'utente
  //     var genreSelected = $('#card-genre').val();
  //
  //     $('.select-container i').fadeOut(); // nascondo tutte le icone
  //
  //     // cambio il colore di sfondo della barra di selezione genere e visualizzo icona associata
  //     switch (genreSelected) {
  //         case "pop":
  //             $('.select-container').addClass("bgc-blue").removeClass("bgc-purple bgc-red bgc-green bgc-none");
  //             $('[data-genre=pop]').fadeIn();
  //             break;
  //         case "jazz":
  //             $('.select-container').addClass("bgc-green").removeClass("bgc-purple bgc-blue bgc-red bgc-none");
  //             $('[data-genre=jazz]').fadeIn();
  //             break;
  //         case "metal":
  //             $('.select-container').addClass("bgc-purple").removeClass("bgc-red bgc-blue bgc-green bgc-none");
  //             $('[data-genre=metal]').fadeIn();
  //             break;
  //         case "rock":
  //             $('.select-container').addClass("bgc-red").removeClass("bgc-purple bgc-blue bgc-green bgc-none");
  //             $('[data-genre=rock]').fadeIn();
  //             break;
  //         default:
  //             $('.select-container').addClass("bgc-none").removeClass("bgc-purple bgc-blue bgc-green bgc-red");
  //             $('.select-container i').fadeIn(); // visualizzo tute le icone
  //     }
  //
  //     // parto sempre da una situazione in cui tutte le card non sono visibili
  //     $('.card').fadeOut();
  //     // scorro tutte le card con un ciclo 'each'
  //     $('.card').each(function() {
  //         // uso  l'attributo data-genre per individuare le card che vuol vedere l'utente
  //         if (($(this).attr("data-genre").toLowerCase() == genreSelected.toLowerCase()) ||
  //             (genreSelected.toLowerCase() == "all")) {
  //
  //             // rendo visibili le card selezionate dall'utente
  //             $(this).fadeIn();
  //         }
  //     }); // end each
  //
  // }); // end evento change
}); // fine document ready
// ---------------------------- FUNCTIONs --------------------------------------

function handleResponseData(cardsData) {
  // NOTA:
  // i dati in ingresso sono già in formato JSON
  // li ho codificati con una chiamata a json_encode() nel file .php
  // console.log(cardsData);
  // cardsData = JSON.parse(cardsData);
  // recupero il codice html dal template HANDLEBARS
  var cardTemplate = $('#music-card-template').html(); // compilo il template HANDLEBARS, lui mi restituisce un funzione

  var cardFunction = Handlebars.compile(cardTemplate); // ciclo su tutto l'array composto dai dati ricevuti dal server

  for (var i = 0; i < cardsData.length; i++) {
    // creo un oggetto con i dati da inserire nella singola card
    var context = {
      'author': cardsData[i].author,
      'genre': cardsData[i].genre,
      'poster': cardsData[i].poster,
      'title': cardsData[i].title,
      'year': cardsData[i].year
    }; // chiamo la funzione generata da HANDLEBARS per popolare il template
    // passo alla funzione l'oggetto che contiene i valori che andranno a sostituire i placeholder,

    var card = cardFunction(context); // aggiungo nella mia pagina il codice HTML generato da HANDLEBARS

    $('.cards-container').append(card);
  } // end for

}

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\boolean\esercizi\039\php-ajax-dischi\ajax\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! D:\boolean\esercizi\039\php-ajax-dischi\ajax\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });