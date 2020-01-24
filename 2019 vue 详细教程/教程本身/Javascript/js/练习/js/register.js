window.onload = checkForm;

function checkForm() {
    var ousername = document.getElementById("user_name");
    var opwd = document.getElementById("pwd");
    var ocpwd = document.getElementById("cpwd");
    var oemail = document.getElementById("email");
    var oallow = document.getElementById("allow");
    var osubmit = document.querySelector("input[type=submit]");

    // 设置记录是否正确的变量
    var fusername = false;
    var fpwd = false;
    var fcpwd = false;
    var femail = false;


    // 找出所有的错误提示元素
    var otips = document.getElementsByClassName("error_tip");

    // 校验用户名
    ousername.onblur = checkUsername;

    // 校验密码
    opwd.onblur = checkPwd;

    ocpwd.onblur = checkCpwd;

    // 校验邮箱 
    oemail.onblur = checkEmail;

    // 是否同意的处理
    oallow.onclick = checkAllow;

    // 表单的提交事件
    document.forms[0].onsubmit = function () {
        checkUsername();
        checkPwd();
        checkCpwd();
        checkEmail();
        checkAllow();
        if(fusername && fpwd && fcpwd && femail) {
            alert(ousername.value + "," +  opwd.value + "," + ocpwd.value + "," + oemail.value);
            return true;
        }
        return false;
    };


    // 对应的事件处理函数
    function checkUsername() {
        if (ousername.value === '') {  // 未输入任何内空
            // 提示错误信息
            otips[0].innerHTML = "用户名不能为空";
            otips[0].style.display = "block";
        } else if (!isValid(ousername.value)) {   // 说明内容不正确
            otips[0].innerHTML = "内容不正确有非法字符";
            otips[0].style.display = "block";
        } else {
            otips[0].innerHTML = "";
            otips[0].style.display = "none";
            fusername = true;
        }
    }

    function checkPwd() {
        if (opwd.value === '') {  // 未输入任何内空
            // 提示错误信息
            otips[1].innerHTML = "密码不能为空";
            otips[1].style.display = "block";
        } else if (opwd.value.length < 6) {   // 说明长度不够
            otips[1].innerHTML = "长度不够";
            otips[1].style.display = "block";
        } else {
            otips[1].innerHTML = "";
            otips[1].style.display = "none";
            fpwd = true;
        }
    }

    function checkCpwd() {
        if (ocpwd.value !== opwd.value) {  // 说明两次密码不一致
            otips[2].innerHTML = "两次密码不一致";
            otips[2].style.display = "block";
        } else {
            otips[2].innerHTML = "";
            otips[2].style.display = "none";
            fcpwd = true;
        }
    }


    function checkEmail() {
        if (oemail.value === '') {  // 未输入任何内空
            // 提示错误信息
            otips[3].innerHTML = "邮箱不能为空";
            otips[3].style.display = "block";
        } else if (!isEmail(oemail.value)) {   // 说明格式不正确
            otips[3].innerHTML = "格式不正确";
            otips[3].style.display = "block";
        } else {
            otips[3].innerHTML = "";
            otips[3].style.display = "none";
            femail = true;
        }
    }

    function checkAllow() {
        if (oallow.checked) {
            // osubmit.disabled = false;
            osubmit.removeAttribute("disabled");
        } else {
            osubmit.disabled = "disabled";
        }
    }
}



// 工具函数
function isValid(s) {
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z' || c >= '0' && c <= '9') {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function isEmail(e) {
    return e.indexOf(".") !== -1 && e.indexOf("@") !== -1
}