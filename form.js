function validate(){
    var userid=document.getElementById('userid');
    var password=document.getElementById('password') ;
    var name=document.getElementById('name');
    var add=document.getElementById("address");
    var zipcode=document.getElementById('zip Code');
    var email=document.getElementById('Email');
    var gender=document.getElementsByName('sex');
    var language=document.getElementsByName('language');
    if(!userid.nodeValue){
        alert("length of userid greater or less than specified");
    }
    else
     if(userid.nodeValue.length>5 && userid.nodeValue.length<12){
        alert("length of userid greater or less than specified");
    }
    
}