// validate thongtincanhan



function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
      document.getElementById("admin").style.display = "block";
      document.getElementById("admin-ad").style.display = "none";
      document.form1.text1.focus();
      return true;
    } else if(inputText.value == ''){
        document.getElementById("so").innerHTML = "Bạn chưa nhập email xác thực";
        document.getElementById("so").style.color = "red";
        return false;
    }
    else {
        document.getElementById("so").innerHTML = "Định dạng email chưa chính xác";
        document.getElementById("so").style.color = "red";
      return false;
 
    }
    }
    
  

  
  