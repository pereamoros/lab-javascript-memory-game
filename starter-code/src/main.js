'user strict';
var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain-america', img: 'captain-america.jpg' },
  { name: 'fantastic-four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green-arrow',     img: 'green-arrow.jpg' },
  { name: 'greenlantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the-avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain-america', img: 'captain-america.jpg' },
  { name: 'fantastic-four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green-arrow',     img: 'green-arrow.jpg' },
  { name: 'green-lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the-avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCard(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  $('.back').on('click', function () {

    var $that = $(this);
    var currentCard = $(this).attr('name');
    memoryGame.pickedCards.push(currentCard) ;
    var firstCard = memoryGame.pickedCards[0];
    var secondCard = memoryGame.pickedCards[1];
    $(this).hide();
    $(this).next().show();
    if(memoryGame.pickedCards.length === 2){

      //Score Pairs Clicked
      var scorePairsClicked = memoryGame.pairsClicked + 1 ;
      $('#pairs_clicked').html(scorePairsClicked);

      if(memoryGame.checkIfPair(firstCard, secondCard)){

        //Score Pairs Guessed
        var scorePairsGuessed = memoryGame.pairsGuessed;
        $('#pairs_guessed').html(scorePairsGuessed);
        memoryGame.pickedCards = [];

      }
      else{
        
        setTimeout(function () {
          $that.show();
          $that.next().hide();
          $("[name = '" + firstCard + "']").next().hide();
          $("[name = '" + firstCard + "']").show();
        }, 1000);
        
        memoryGame.pickedCards = [];
      }
    }
    memoryGame.finished();
  });
});

