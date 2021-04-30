
function check(){
    // 用户名
    var username=account.username.value;
    // 邮箱
    var email=account.email.value;
    // 兴趣爱好
    var favours=document.getElementsByClassName("favour");
    // 自我介绍
    var selfin=account.selfin.value;
    var isCommit = true;
    // 复选框选择数量
    var checkbox_num=0;

    // 用户名检查
    if(username.length==0){
        alert("用户名不能为空");
        isCommit=false;
    }

    // 邮箱检查
    if(email.length==0){
        alert("邮箱不能为空");
        isCommit=false;
    }else if(!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email))){
        alert("邮箱格式错误，请重新输入");
        isCommit=false;
    }
    // 兴趣爱好检查
    for(var i=0;i<favours.length;i++){
        if(favours[i].checked==true){
            checkbox_num++;
        }
    }

    if(checkbox_num==0){
        alert("兴趣爱好不能为空");
        isCommit=false;
    }
    console.log(checkbox_num);

    // 自我介绍检查
    if(selfin.length==0){
        alert("自我介绍不能为空");
        isCommit=false;
    }

    return isCommit;
}