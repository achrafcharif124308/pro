var trans = document.getElementsByName("mode_transfert");
	var check =0;
	for (var i = 0; i < trans.length; i++){
		trans[i].addEventListener("change", function (e) {
		if(e.target.value==='m2')  check = 1 ;
		if(e.target.value==='m1')  check = 0 ;
    });} 
	
	
	
var gb = document.getElementsByName("nb-de-gb");
	var check1 =0;
	for (var i = 0; i < gb.length; i++) {
		gb[i].addEventListener("change", function (e) {
		if(e.target.value==='g1')  check1 = 1 ;
	}); }
	
	for (var i = 0; i < gb.length; i++) {
		gb[i].addEventListener("change", function (e) {
		if(e.target.value==='g2')  check1 = 2 ;
	});} 
		
	for (var i = 0; i < gb.length; i++) {
		gb[i].addEventListener("change", function (e) {
		if(e.target.value==='g3')  check1 = 3 ;
	});} 
		
	for (var i = 0; i < gb.length; i++) {
		gb[i].addEventListener("change", function (e) {
		if(e.target.value==='g4')  check1 = 4 ; 
    }); }


var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
	var total =1000 ;
	var distance = form.elements.distance.value;
	var nb = form.elements.count.value;
	if (check === 1 ) total = total+ 60 ;
	 else  total = total ;
	if (check1 === 1 ) total = total + 0 ;
	if (check1 === 2 ) total = total + 50 ;
	if (check1 === 3 ) total = total + 100 ;
	if (check1 === 4 ) total = total + 150 ;

	total = total + distance * 0.5 ;
	total = total * nb;
    form.elements.total.value = total;
	
	e.preventDefault();
}); 

document.getElementById("count").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("count").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow';  
});

document.getElementById("distance").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("distance").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow';  
});

document.getElementById("distance").addEventListener('blur', function(e) {
  document.getElementById("erreur7").textContent="";
  e.target.style.background = 'yellow';
  if (e.target.value==="")
  {
	  document.getElementById("erreur7").textContent="Entrer la distance";
	  e.target.style.background = 'red';
      document.getElementById("erreur7").style="color:red;font-size:150%";	  
  }
  else{
	  var regex = /^[0-9]{1,}$/;
      var regex1 = /^[A-Z a-z]{1,}$/;
	  if (!regex.test(e.target.value)||regex1.test(e.target.value))
	  {
		  document.getElementById("erreur7").textContent="La distance doit être numérique";
		  e.target.style.background = 'red';
		  document.getElementById("erreur7").style="color:red;font-size:150%";
	  }
  }
});

document.getElementById("nm").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("nm").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow';  
});

document.getElementById("pr").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("pr").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow';  
});

document.getElementById("date").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("date").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow';  
});

document.getElementById("mail").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("mail").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow';  
});

document.getElementById("nb").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("nb").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow';  
});

document.getElementById("card").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("card").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow';  
});


document.getElementById("lien").addEventListener('focus', function(e) {
  e.target.style.background = 'pink';
});

document.getElementById("lien").addEventListener('blur', function(e) {
  e.target.style.background = 'yellow'; 
});


document.getElementById("nm").addEventListener('blur', function(e) {
  document.getElementById("erreur1").textContent="";
  e.target.style.background = 'yellow';
  if (e.target.value==="")
  {
	  document.getElementById("erreur1").textContent="Enter votre nom";
	  e.target.style.background = 'red';
      document.getElementById("erreur1").style="color:red;font-size:150%";	  
  }
  else{
	  var regex = /^[A-Z]/;
	  var regex1 = /[0-9]+/;
	  if (!regex.test(e.target.value) || regex1.test(e.target.value))
	  {
		  document.getElementById("erreur1").textContent="Le nom doit commencer par majuscule et contient uniquement des lettres";
		  e.target.style.background = 'red';
		  document.getElementById("erreur1").style="color:red;font-size:150%";
	  }
  }
});


document.getElementById("pr").addEventListener('blur', function(e) {
  document.getElementById("erreur2").textContent="";
  e.target.style.background = 'yellow';
  if (e.target.value==="")
  {
	  document.getElementById("erreur2").textContent="Enter votre prenom";
	  e.target.style.background = 'red'; 
      document.getElementById("erreur2").style="color:red;font-size:150%";	  
  }
  else{
	  var regex = /^[A-Z]/;
	  var regex1 = /[0-9]+/;
	  if (!regex.test(e.target.value) || regex1.test(e.target.value))
	  {
		  document.getElementById("erreur2").textContent="Le prenom doit commencer par majuscule et contient uniquement des lettres";
		  e.target.style.background = 'red';
		  document.getElementById("erreur2").style="color:red;font-size:150%";
	  }
	  
  }
});



document.getElementById("mail").addEventListener('blur', function(e) {
  document.getElementById("erreur3").textContent="";
  e.target.style.background = 'yellow';
  if (e.target.value==="")
  {
	  document.getElementById("erreur3").textContent="Enter votre adress email";
	  e.target.style.background = 'red';  
	  document.getElementById("erreur3").style="color:red;font-size:150%";
  }
  else{
	  var regexmail = /.+@.+\..+/;
	  if (!regexmail.test(e.target.value))
	  {
		  document.getElementById("erreur3").textContent="Adress email invalide";
		  e.target.style.background = 'red';
		  document.getElementById("erreur3").style="color:red;font-size:150%";
	  }
	  
  }
});
document.getElementById("date").addEventListener('blur', function(e) {
  document.getElementById("erreur8").textContent="";
  e.target.style.background = 'yellow';
  if (e.target.value==="")
  {
	  document.getElementById("erreur8").textContent="Enter votre date de naissance";
	  e.target.style.background = 'red'; 
      document.getElementById("erreur8").style="color:red;font-size:150%";	  
  }
  
});


document.getElementById("nb").addEventListener('blur', function(e) {
  document.getElementById("erreur4").textContent="";
  e.target.style.background = 'yellow';
  if (e.target.value==="")
  {
	  document.getElementById("erreur4").textContent="Enter votre numéro de téléphone";
	  e.target.style.background = 'red';
      document.getElementById("erreur4").style="color:red;font-size:150%";	  
  }
  else{
	 /* var regexnb = /^[0-9]{8}$/;*/
	  var regexnb = /^[0,1,6,7,3]{2}\-[0-9]{6}$/;
	  if (!regexnb.test(e.target.value))
	  {
		  document.getElementById("erreur4").textContent="Le numéro doit contient umiquement 8 chiffres (après la première 2 chiffres on a un tiret -)";
		  e.target.style.background = 'red';
		  document.getElementById("erreur4").style="color:red;font-size:150%";
	  }
	  
  }
});


document.getElementById("card").addEventListener('blur', function(e) {
  document.getElementById("erreur5").textContent="";
  e.target.style.background = 'yellow';
  if (e.target.value==="")
  {
	  document.getElementById("erreur5").textContent="Enter le numéro de votre card";
	  e.target.style.background = 'red'; 
      document.getElementById("erreur5").style="color:red;font-size:150%";	  
  }
  else{
	  var regexnb = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/;
	  if (!regexnb.test(e.target.value))
	  {
		  document.getElementById("erreur5").textContent="Le numéro doit contient umiquement 16 chiffres (chaque 4 chiffres est séparés par des tirets -)";
		  e.target.style.background = 'red';
		  document.getElementById("erreur5").style="color:red;font-size:150%";
	  }
	  
  }
});



document.getElementById("lien").addEventListener('blur', function(e) {
  document.getElementById("erreur6").textContent="";
  e.target.style.background = 'yellow';
  if (e.target.value==="")
  {
	  document.getElementById("erreur6").textContent="Enter le lien de google maps de votre lieu";
	  e.target.style.background = 'red'; 
      document.getElementById("erreur6").style="color:red;font-size:150%";	  
  }
  else{
	
  var regexlien = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%\+.~#?&//=]*)/;
	  if (!regexlien.test(e.target.value))
	  {
		  document.getElementById("erreur6").textContent="Lien invalide";
		  e.target.style.background = 'red';
		  document.getElementById("erreur6").style="color:red;font-size:150%";
	  }
	  
  }
});
let days = 2; //starting number of days
let hours = 0; // starting number of hours
let minutes = 2; // starting number of minutes
let seconds = 5; // starting number of seconds

// converts all to seconds
let totalSeconds =
days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
} else {
    return 0;
}
};

//sets seconds
const setSeconds = (s) => {
document.querySelector("#seconds").textContent = s + "s";
};

//sets minutes
const setMinutes = (m) => {
document.querySelector("#minutes").textContent = m + "m";
};

//sets hours
const setHours = (h) => {
document.querySelector("#hours").textContent = h + "h";
};

//sets Days
const setDays = (d) => {
document.querySelector("#days").textContent = d + "d";
};

// Update the count down every 1 second
var x = setInterval(() => {
//clears countdown when all seconds are counted
if (totalSeconds <= 0) {
    clearInterval(x);
}
setDays(convert(tempSeconds, 24 * 60 * 60));
setHours(convert(tempSeconds, 60 * 60));
setMinutes(convert(tempSeconds, 60));
setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
totalSeconds--;
tempSeconds = totalSeconds;
}, 1000);


function refresh(){
             var t = 1000; // rafraîchissement en millisecondes
             setTimeout('showDate()',t)
         }
         
         function showDate() {
             var date = new Date()
             var h = date.getHours();
             var m = date.getMinutes();
             var s = date.getSeconds();
             if( h < 10 ){ h = '0' + h; }
             if( m < 10 ){ m = '0' + m; }
             if( s < 10 ){ s = '0' + s; }
             var time = h + ':' + m + ':' + s
             document.getElementById('horloge').innerHTML = time;
             refresh();
          }

