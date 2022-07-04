const username = $ ("#username");
const email = $ ("#email");
const buttonBigin = $("#buttonBegin");
const errName = $("#erreurNom");
const errMail = $("#erreurMail");

buttonBigin.click(() => {
    let moncontenu = username.val().trim();
    let monCOntenu = email.val().trim();
    const validEmail = /^[a-zA-Z0-9_.]{3,25}@[a-z]{5,}\.[a-z]{2,10}$/;
    
    if(moncontenu.length < 3){
        errName.text("N’oubliez pas de renseigner votre nom avant de commencer le Quiz.");  
    } else {
        errName.text("");  
    }
    if(monCOntenu.length==0){
        errMail.text("N’oubliez pas de renseigner votre email avant de commencer le Quiz");
        
    } else if(!validEmail.test(monCOntenu)){
        
        errMail.text("entrez un email correcte");

    }else{
        errMail.text("");
    }
    
});









