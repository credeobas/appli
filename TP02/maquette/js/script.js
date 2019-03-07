function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
		initMap(46.139023,-2.435386, 6);
        break;
    case error.POSITION_UNAVAILABLE:
		initMap(46.139023,-2.435386, 6);
        break;
    case error.TIMEOUT:
    	initMap(46.139023,-2.435386, 6);
        break;
    case error.UNKNOWN_ERROR:
    	initMap(46.139023,-2.435386, 6);
		break;	
  }
} 
function showPosition(position) {
	initMap(position.coords.latitude, position.coords.longitude, 12);
}

function initMap(latitude, longitude, leZoom) { 
	var position = {lat: latitude, lng: longitude};
	// map centré
	var map = new google.maps.Map(
	document.getElementById('map'), {zoom: leZoom, center: position});
	// le marker rouge à quel endroit
	var marker = new google.maps.Marker({position: position, map: map});
}
function Envoyer(formulaire) {
	var nbChampsPasOk = 0;
	var champsRequis = "";

	$("input, textarea").each(function( ) {
		if( ($(this).attr("required")=="required") && ($(this).val() =="") ) {
			if (nbChampsPasOk == 0 ) { //pour le 1er element
				$(this).focus();
			}
			nbChampsPasOk++;
			champsRequis += "\n" + $(this).attr("name") ;
			this.style.backgroundColor = "#ff4c4c"; 
			//console.log("this " + champsRequis );
		}
	});


    var prenom = document.contact.prenom.value;
	var nom = document.contact.nom.value;
    var naissance = document.contact.naissance.value;
	var ville = document.contact.ville.value;
    var mail = document.contact.mail.value;

    var personnePrenom = '<div>Prenom: ' + prenom + '</div>';
    var personneNom = '<div>NOM: ' + nom + '</div>';
    var personneNaissance = '<div>naissance: ' + naissance + '</div>';
	var personneVille = '<div>Mail: ' + ville + '</div>';
	var personneMail = '<div>Mail: ' + mail + '</div>';
	champsRequis  = '<div>Elements à revoir: ' + champsRequis + '</div>';

	document.getElementById("personnePrenom").innerHTML = personnePrenom;
	document.getElementById("personneNom").innerHTML = personneNom;
	document.getElementById("personneNaissance").innerHTML = personneNaissance;
	document.getElementById("personneVille").innerHTML = personneVille;
	document.getElementById("personneMail").innerHTML = personneMail;
	document.getElementById("champsRequis").innerHTML = champsRequis;
}


	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition,showError);
	}
	else
		alert("maps n'est pas supporté par votre navigateur");
	    //initMap(46.139023,-2.435386, 6);

function deviceOrientationListener(event) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#FF7777";
        ctx.font = "14px Verdana";
        ctx.fillText("Alpha: " + Math.Round(event.alpha), 10, 20);
        ctx.beginPath();
        ctx.moveTo(180, 75);
        ctx.lineTo(210, 75);
        ctx.arc(180, 75, 60, 0, event.alpha * Math.PI / 180);
        ctx.fill();

        ctx.fillStyle = "#FF6600";
        ctx.fillText("Beta: " + Math.round(event.beta), 10, 140);
        ctx.beginPath();
        ctx.fillRect(180, 150, event.beta, 90);

        ctx.fillStyle = "#FF0000";
        ctx.fillText("Gamma: " + Math.round(event.gamma), 10, 270);
        ctx.beginPath();
        ctx.fillRect(90, 340, 180, event.gamma);
      }

      if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", deviceOrientationListener);
      } else {
        alert("Sorry, your browser doesn't support Device Orientation");
      }