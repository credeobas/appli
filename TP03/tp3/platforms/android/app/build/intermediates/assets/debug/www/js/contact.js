document.addEventListener("deviceready", contact, false);
function contact() {
    navigator.contactsPhoneNumbers.list(function(contacts) {
      //alert(contacts.length + ' trouvé');
      for(var i = 0; i < contacts.length; i++) {
         for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
            var contactName = contacts[i].displayName;            
            var phone = contacts[i].phoneNumbers[j];
            var res = res +
               "<a href=\"contact_detail.html\">\
               <li class=\"contactList\">\
                     <i class=\"fas fa-minus-circle\"></i>\
                     <a href=\"tel:"+phone.number+"\"><i class=\"fas fa-phone\"></i>\
                     <span>"+contactName+" "+phone.number+"</span></a>\
               </li>\
               </a>";
            //phone.type + phone.normalizedNumber
         }
      }
   document.getElementById("contacts").innerHTML=res;
   }, function(error) {
      console.error(error);
   });
}
