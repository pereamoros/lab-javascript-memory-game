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
  $('.back').on('click', function (event) {

    var $that = $(this);
    
    if(memoryGame.pickedCards.length < 2) {

      var currentCard = $(this).attr('name');
      memoryGame.pickedCards.push(this) ;
      $(this).hide();
      $(this).next().show();

    }
    else if(memoryGame.pickedCards.length === 2){
      
      var $firstCard = $(memoryGame.pickedCards[0]);
      var $secondCard = $(memoryGame.pickedCards[1]);
      var $firstCardName = $firstCard.attr('name');
      var $secondCardName = $secondCard.attr('name');
      //Score Pairs Clicked
      var scorePairsClicked = memoryGame.pairsClicked + 1 ;
      $('#pairs_clicked').html(scorePairsClicked);

      if(memoryGame.checkIfPair($firstCardName, $secondCardName)){

        //Score Pairs Guessed
        var scorePairsGuessed = memoryGame.pairsGuessed;
        $('#pairs_guessed').html(scorePairsGuessed);
        memoryGame.pickedCards = [];

      }
      else{
        
        // setTimeout(function () {
          $firstCard.show();
          $firstCard.next().hide();
          $secondCard.show();
          $secondCard.next().hide();
          memoryGame.pickedCards = [];
        // }, 800);
        
      }
    }
    memoryGame.finished();
  });
});