var kong = document.getElementById("dk");
var banaan = document.getElementById("banaan")
var position = 650;

document.addEventListener("keypress", myFunction);
document.addEventListener("keypress", myFunction2);


function myFunction(event) {
  var x = event.which || event.keyCode;
  if (x == 97) {
    position -= 20;
    kong.style.left = position + "px";
  }
  if (x == 100) {
    position += 20;
    kong.style.left = position + "px";
  }
}

function impact(vipe) {
  var stijf = vipe.getBoundingClientRect();
  x = stijf.left;
  y = stijf.right;
  w = stijf.width;
  h = stijf.height;
  return stijf;
  }

function myFunction2() {
  var div = document.getElementById("dk");
  var div2 = document.getElementById("banaan");
  var rect = div.getBoundingClientRect();
  var rect2 = div2.getBoundingClientRect();
  x = rect.left;
  i = rect2.left;
  var punten = 0
  console.log(x + " & " + i);
  var donkeyBox = impact(kong);
  var banaanBox = impact(banaan);
  if (donkeyBox.x + donkeyBox.width >= banaanBox.x && donkeyBox.x <= banaanBox.x + banaanBox.width){ 
    var banaan2 = document.getElementById("banaan")
    console.log('impact')
    banaan2.styleLeft = Math.floor(Math.random() * 1400 ) +'px';
    punten ++;
    document.getElementById('countertxt').innerHTML = punten;
    console.log(punten);
  }
}