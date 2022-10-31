// validate thongtincanhan



function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.getElementById("admin").style.display = "block";
    document.getElementById("admin-ad").style.display = "none";
    document.form1.text1.focus();
    // focus:tiêu điểm
    return true;
    // cho phép sự kiện xảy ra.
  } else if (inputText.value == '') {
    document.getElementById("so").innerHTML = "Bạn chưa nhập email xác thực";
    // 13. innerHTML ở đây là thay đổi nội dung của html
    document.getElementById("so").style.color = "red";
    return false;
    // không cho phép sự kiện xảy ra
  }
  else {
    document.getElementById("so").innerHTML = "Định dạng email chưa chính xác";
    document.getElementById("so").style.color = "red";
    return false;

  }

}

// hienthontin-kinhnghiem

var flag = true;
let html = document.getElementById("showproject").innerHTML;
let html1 = document.getElementById("showproject1").innerHTML;
let html2 = document.getElementById("showproject2").innerHTML;
let html3 = document.getElementById("showproject3").innerHTML;
let html4 = document.getElementById("showproject4").innerHTML;
let html5 = document.getElementById("showproject5").innerHTML;
function to(x) {
  document.getElementById("show").style.display = "block";
}
function to1(x) {
  document.getElementById("show1").style.display = "block";
}
function to2(x) {
  document.getElementById("show2").style.display = "block";
}
function to3(x) {
  document.getElementById("show3").style.display = "block";
}
function to4(x) {
  document.getElementById("show4").style.display = "block";
}
function to5(x) {
  document.getElementById("show5").style.display = "block";
}
function be(x) {
  document.getElementById("show").style.display = "none";
}
function be1(x) {
  document.getElementById("show1").style.display = "none";
}
function be2(x) {
  document.getElementById("show2").style.display = "none";
}
function be3(x) {
  document.getElementById("show3").style.display = "none";
}
function be4(x) {
  document.getElementById("show4").style.display = "none";
}
function be5(x) {
  document.getElementById("show5").style.display = "none";
}
function showContent() {
  if (flag) {
    document.getElementById("showproject").innerHTML = html;
    document.getElementById("showproject").style.display = "block";
    document.getElementById("show").innerHTML = "view less";
    flag = false;
  } else {
    document.getElementById("showproject").innerHTML = html1;
    document.getElementById("showproject").style.display = "none";
    document.getElementById("show").innerHTML = "View more";
    flag = true;
  }
}
function showContent1() {
  if (flag) {
    document.getElementById("showproject1").innerHTML = html1;
    document.getElementById("showproject1").style.display = "block";
    document.getElementById("show1").innerHTML = "view less";
    flag = false;
  } else {
    document.getElementById("showproject1").innerHTML = html1;
    document.getElementById("showproject1").style.display = "none";
    document.getElementById("show1").innerHTML = "View more";
    flag = true;
  }
}
function showContent2() {
  if (flag) {
    document.getElementById("showproject2").innerHTML = html2;
    document.getElementById("showproject2").style.display ="block";
    document.getElementById("show2").innerHTML = "view less";
    flag = false;
  } else {
    document.getElementById("showproject2").innerHTML = html2;
    document.getElementById("showproject2").style.display = "none";
    document.getElementById("show2").innerHTML = "View more";
    flag = true;
  }
}
function showContent3() {
  if (flag) {
    document.getElementById("showproject3").innerHTML = html3;
   document.getElementById("showproject3").style.display = "block";
    document.getElementById("show3").innerHTML = "view less";
    flag = false;
  } else {
    document.getElementById("showproject3").innerHTML = html3;
    document.getElementById("showproject3").style.display = "none";
    document.getElementById("show3").innerHTML = "View more";
    flag = true;
  }
}
function showContent4() {
  if (flag) {
    document.getElementById("showproject4").innerHTML = html4;
    document.getElementById("showproject4").style.display = "block";
    document.getElementById("show4").innerHTML = "view less";
    flag = false;
  } else {
    document.getElementById("showproject4").innerHTML = html4;
    document.getElementById("showproject4").style.display = "none";
    document.getElementById("show4").innerHTML = "View more";
    flag = true;
  }
}
function showContent5() {
  if (flag) {
    document.getElementById("showproject5").innerHTML = html5;
    document.getElementById("showproject5").style.display = "block";
    document.getElementById("show5").innerHTML = "view less";
    flag = false;
  } else {
    document.getElementById("showproject5").innerHTML = html5;
    document.getElementById("showproject5").style.display = "none";
    document.getElementById("show5").innerHTML = "View more";
    flag = true;
  }
}




