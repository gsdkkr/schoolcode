console.log($().jquery);
var speler = document.getElementById("speler");
var bal = document.getElementById("bal");
var lemming1 = document.getElementById("lemming");
var lemming2 = document.getElementById("lemming2");
var lemming3 = document.getElementById("lemming3");
var lemming4 = document.getElementById("lemming4");
var lemming5 = document.getElementById("lemming5");
var lemming6 = document.getElementById("lemming6");

var position = 150;
var balPos = 50;
ballfire = false;
i = 0;

$(document).ready(function () {
  setInterval(() => {
    if (lemming1.style.display === "none") {
      if (lemming2.style.display === "none") {
        if (lemming3.style.display === "none") {
          if (lemming4.style.display === "none") {
            if (lemming5.style.display === "none") {
              if (lemming6.style.display === "none") {
                if (i === 1) return;
                i++;
                alert("Game Over (gewonnen).");
              };
            };
          };
        };
      };
    };
  }, 100);
  bal.style.top = position + "px";
  $(document).bind("keypress", function (event) {
    var keyCode = event.keyCode || event.which;
    console.log(keyCode);
    if (keyCode == 119) {
      if (position === 50) return;
      position -= 50;
      speler.style.marginTop = position + "px";
      if (!ballfire) {
        bal.style.top = position + "px";
      }
    }
    if (keyCode == 115) {
      if (position === 300) return;
      position += 50;
      speler.style.marginTop = position + "px";
      if (!ballfire) {
        bal.style.top = position + "px";
      }
    }
    if (keyCode == 32 && !ballfire) {
      ballfire = true;
      bal.style.marginLeft = 900 + "px";
      setTimeout(() => {
        bal.style.display = "none";
        ballfire = false;
        balPos = 50;
        bal.style.marginLeft = balPos + "px";
        bal.style.top = position + "px";
        setTimeout(() => {
          bal.style.display = "block";
        }, 50);
      }, 1150);

      if (position == 50) {
        setTimeout(() => {
          lemming1.style.display = "none";
        }, 1100);
      }
      if (position == 100) {
        setTimeout(() => {
          lemming2.style.display = "none";
        }, 1100);
      }
      if (position == 150) {
        setTimeout(() => {
          lemming3.style.display = "none";
        }, 1100);
      }
      if (position == 200) {
        setTimeout(() => {
          lemming4.style.display = "none";
        }, 1100);
      }
      if (position == 250) {
        setTimeout(() => {
          lemming5.style.display = "none";
        }, 1100);
      }
      if (position == 300) {
        setTimeout(() => {
          lemming6.style.display = "none";
        }, 1100);
      }
    }
  });
});

function windClick() {
  bal.style.backgroundColor = "blue";
}
function earthClick() {
  bal.style.backgroundColor = "brown";
}
function fireClick() {
  bal.style.backgroundColor = "red";
}
function iceClick() {
  bal.style.backgroundColor = "white";
}