function verificationFormulaire()                                    
{ 
    let firstName = document.forms["RegForm"]["name"]; 
    let lastName =  document.forms["RegForm"]["lastname"];                
    let address = document.forms["RegForm"]["address"]; 
    let zipcode = document.forms["RegForm"]["postal"];   
    let city = document.forms["RegForm"]["city"];   
    let email = document.forms["RegForm"]["email"];    
    let phone = document.forms["RegForm"]["phone"];

    if (firstName.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        firstName.focus(); 
        return false; 
    }    
    if (lastName .value == "")                                  
    { 
        alert("Mettez votre nom."); 
        lastName.focus(); 
        return false; 
    }  
    if (address.value == "")                               
    { 
        alert("Mettez votre adresse."); 
        address.focus(); 
        return false; 
    }        
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (phone.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        phone.focus(); 
        return false; 
    }    
    if (zipcode.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        zipcode.focus(); 
        return false; 
    } 
    if (city.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        city.focus(); 
        return false; 
    }   
    return true; } 