function validateJobApplicationForm(){
    const name=document.getElementById("name").value.trim();
    const qualification=document.querySelector('input[name="qualification"]:checked');
    const gender=document.querySelector('input[name="gender"]:checked');
    const applyFor=document.getElementById("applyFor").value;
    const errorMessage=document.getElementById("errorMessage");
    errorMessage.textContent="";
    if(name===""){
        errorMessage.textContent="Please enter your name.";
        return false;
    }
    if(!qualification){
        errorMessage.textContent="Please select your educational qualification.";
        return false;
    }
    if(!gender){
        errorMessage.textContent="Please select your gender.";
        return false;
    }
    if(applyFor===""){
        errorMessage.textContent="Please select a position you are applying for.";
        return false;
    }
    alert("Job application submitted successfully!");
    return true;
}
