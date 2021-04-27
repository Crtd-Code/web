// 导航栏js
// 页面加载
window.onload=function(){
// 获取每个菜单项
var items=document.querySelectorAll('#nav>li');
// 遍历菜单项
for(var i=0;i<items.length;i++){
    // 鼠标进入函数，修改subNav为block
    items[i].onmouseover=function(){
        var subNav=this.getElementsByTagName('ul')[0];
        if(subNav){
            subNav.style.display='block';
        }
    }
    // 鼠标移出函数，修改subNav为none 
    items[i].onmouseout=function(){
        var subNav=this.getElementsByTagName('ul')[0];
        if(subNav){
            subNav.style.display='none';
        }
    }
    }
}