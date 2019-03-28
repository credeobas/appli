document.addEventListener("offline", checkConnection, false);
document.addEventListener("online", checkConnection, false);
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    //alert('Connection type: ' + states[networkState]);
    //var res = '<div class="descritpion"> '"Connection type:" + states[networkState] '</div>';
    document.getElementById("network").innerHTML = "Connection type:" + states[networkState];
}


document.addEventListener("deviceready", checkInfo, false);
function checkInfo() {
    document.getElementById("info").innerHTML = "uuid: "+device.uuid+"\nmodele: "+device.manufacturer+"\nversion: "+device.version;
    /* changer la couleur du status bar
    if (cordova.platformId == 'android') {
        StatusBar.backgroundColorByHexString("#ff0000");
    }*/

}


window.addEventListener("batterystatus", onBatteryStatus, false);
function onBatteryStatus(status) {
    alert("Niveau: " + status.level + " est branché: " + status.isPlugged);
}

window.addEventListener("batterycritical", onBatteryCritical, false);
function onBatteryCritical(status) {
    alert("Niveau de batterie critique " + status.level + "%");
}

window.addEventListener('statusTap', function() {
    alert("statu tap")
    document.body.scrollTop = 0;
});



