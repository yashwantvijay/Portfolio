function SendMail()
{
    
    var params={
        from_name:document.getElementById("fullName").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_fawfsm2","template_n779uve",params).then
    (function(res){
        alert("Message Sent!");
    }
    // ,
    // function(error) {
    //     alert('FAILED...', error);}
    )
}