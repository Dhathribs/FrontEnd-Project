
    function check(phno){
      var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
      if(reg.test(phno.phone.value)){
      return true;
      }
      else{
        alert("Enter mobile number in XXX-XXX-XXXX format");
        return false;
    }
    }
 
