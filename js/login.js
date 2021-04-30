
function check() {
    var username = myform.username.value;
    var pwd = myform.pwd.value;
    var isCommit = true;
    // console.log(username,pwd);

    if (username.length == 0) {
        alert("用户名不能为空");
        isCommit=false;
    }

    if (pwd.length == 0) {
        alert("密码不能为空");
        isCommit=false;
    }

    return isCommit;
}
