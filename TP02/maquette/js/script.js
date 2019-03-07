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



function init()
{
	if (window.DeviceOrientationEvent) {
		
		window.addEventListener("deviceorientation", function(event) 
		{
			document.getElementById("y").style.webkitTransform = "scaleY("+(Math.round(event.beta))+")";  
			document.getElementById("x").style.webkitTransform = "scaleX("+(Math.round(event.gamma))+")";
			document.getElementById("angle").style.webkitTransform = "rotateZ("+(Math.round(event.alpha))+"deg)";  
		}, true);
		
		
		
	} else {
  	alert("Sorry, your browser doesn't support Device Orientation");
	} 
}