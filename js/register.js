
function check() {
    console.log(213);
    // 手机号
    var number = myform.tel.value;
    // 短信验证码
    var code = myform.phoneCode.value;
    // 密码
    var pwd = myform.pwd.value;
    // 确认密码
    var repwd = myform.repwd.value;
    var isCommit = true;

    // 检测手机号
    if(number.length==0){
        alert("手机号不能为空");
        isCommit=false;
    }else if(!(/^1[3|4|5|7|8]\d{9}$/.test(number))) {
        alert("手机号码有误，请重填");
        isCommit = false;
    }

    // 检测验证码
    if (code.length == 0) {
        alert("验证码不能为空");
        isCommit= false;
    }

    // 密码检测
    if(pwd.length==0){
        alert("密码不能为空");
        isCommit=false;
    }else if(!(/^(?![^a-zA-Z]+$)(?!\\D+$).{8,16}$/.test(pwd))){
        alert("密码有误，请重填");
        isCommit = false;
    }
    if(pwd!=repwd){
        alert("密码和确认密码必须相同");
        isCommit=false;
    }
    // console.log(number, code, pwd, repwd);
    return isCommit;
}