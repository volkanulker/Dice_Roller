var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

function generateRandomSource(rnd_numb){
  var randomDiceImage="dice"+rnd_numb+".png";
  return randomImageSource="images/" + randomDiceImage;
}

function setSource(imgIndex,rnd_numb){
  var image= document.querySelectorAll("img")[imgIndex];
  image.setAttribute("src",generateRandomSource(rnd_numb));
}

function findWinner(randomNumber1,randomNumber2){
  if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
  }

  else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }
}


setSource(0,randomNumber1);
setSource(1,randomNumber2);
findWinner(randomNumber1,randomNumber2);
