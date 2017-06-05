var aIput = document.getElementsByTagName("input");
var aTd = document.getElementsByClassName("prompt");
var oBtn = document.getElementById("sub");

aIput[0].onfocus = function () {
  promptPtxtFocus(aTd[0], 0, "gray");
  this.style.borderColor = "gray";
};

aIput[1].onfocus = function () {
  promptPtxtFocus(aTd[1], 1, "gray");
  this.style.borderColor = "gray";
};

aIput[2].onfocus = function () {
  promptPtxtFocus(aTd[2], 2, "gray");
  aIput[2].style.borderColor = "#62ADEE";
  aIput[2].style.boxShadow="0.5px 0.5px 5px #62ADEE";
};

aIput[3].onfocus = function () {
  promptPtxtFocus(aTd[3], 3, "gray");
  this.style.borderColor = "gray";
};

aIput[4].onfocus = function () {
  promptPtxtFocus(aTd[4], 4, "gray");
  this.style.borderColor = "gray";
};

aIput[0].onblur = function () {
  var val = aIput[0].value.replace(/^\s+|\s$/g, "").replace(/[]\u0391-\uFFE5]/g, "O");
  if (val.length < 4 || val.length > 16) {
      promptPtxtOblur(aTd[0], 0, "red");
  } else {
      promptPtxtOblur(aTd[0], 1, "#65BC4B")
  }
};

aIput[1].onblur = function () {
  var val = aIput[1].value;
  if (val.length < 4 || val.length > 16) {
      promptPtxtOblur(aTd[1], 2, "red");
  } else {
      promptPtxtOblur(aTd[1], 3, "#65BC4B")
  }
};

aIput[2].onblur = function () {
  var val1 = aIput[1].value;
  var val2 = aIput[2].value;
  if (!(val2 === val1)) {
      promptPtxtOblur(aTd[2], 4, "red");
  } else if (val2.length === 0) {
      promptPtxtOblur(aTd[2], 4, "red");
  } else {
      promptPtxtOblur(aTd[2], 5, "#65BC4B")
  }
};

aIput[3].onblur = function () {
  var val = aIput[3].value;
  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
  var mail = reg.test(val);
  if (mail == false) {
      promptPtxtOblur(aTd[3], 6, "red");
  } else {
      promptPtxtOblur(aTd[3], 7, "#65BC4B")
  }
};

aIput[4].onblur = function () {
  var val = aIput[4].value;
  var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
  var phone = reg.test(val);
  if (phone == false) {
      promptPtxtOblur(aTd[4], 8, "red");
  } else {
      promptPtxtOblur(aTd[4], 9, "#65BC4B")
  }
};

function promptPtxtFocus(obj, state, color) {
  if (state == 0) {
      obj.innerHTML = "必填，长度为4~16个字符";
      obj.style.color = color;
  }
  if (state == 1) {
      obj.innerHTML = "必填，长度为4~16个字符";
      obj.style.color = color;
  }
  if (state == 2) {
      obj.innerHTML = "再次输入相同密码";
      obj.style.color = color;
  }
  if (state == 3) {
      obj.innerHTML = "输入邮箱";
      obj.style.color = color;
  }
  if (state == 4) {
      obj.innerHTML = "输入手机号";
      obj.style.color = color;
  }
}

function promptPtxtOblur(obj, state, color) {
  if (state == 0) {
      obj.innerHTML = "名称不能为空";
      obj.style.color = color;
      aIput[0].style.border = `1px solid ${color}`;
  }
  if (state == 1) {
      obj.innerHTML = "名称可用";
      obj.style.color = color;
      aIput[0].style.border = `1px solid ${color}`;
  }
  if (state == 2) {
      obj.innerHTML = "密码不能为空";
      obj.style.color = color;
      aIput[1].style.border = `1px solid ${color}`;
  }
  if (state == 3) {
      obj.innerHTML = "密码可用";
      obj.style.color = color;
      aIput[1].style.border = `1px solid ${color}`;
  }
  if (state == 4) {
      obj.innerHTML = "输入相同的密码";
      obj.style.color = color;
      aIput[2].style.border = `1px solid ${color}`;
  }
  if (state == 5) {
      obj.innerHTML = "密码可用";
      obj.style.color = color;
      aIput[2].style.border = `1px solid ${color}`;
  }
  if (state == 6) {
      obj.innerHTML = "请输入正确的邮箱";
      obj.style.color = color;
      aIput[3].style.border = `1px solid ${color}`;
  }
  if (state == 7) {
      obj.innerHTML = "邮箱地址可用";
      obj.style.color = color;
      aIput[3].style.border = `1px solid ${color}`;
  }
  if (state == 8) {
      obj.innerHTML = "请输入正确的手机号";
      obj.style.color = color;
      aIput[4].style.border = `1px solid ${color}`;
  }
  if (state == 9) {
      obj.innerHTML = "手机格式正确可用";
      obj.style.color = color;
      aIput[4].style.border = `1px solid ${color}`;
  }
}

oBtn.onclick=function (event) {
  for(var i=0;i<aTd.length;i++) {
      if (aTd[i].style.color == "red") {
          event.preventDefault();
          return false;
      }
  }
}