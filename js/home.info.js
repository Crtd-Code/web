// 个人信息js
// 获取tag列表
var pc_tag=document.getElementById('pc_tag');
// 获取tag数组
var tags=pc_tag.getElementsByTagName('a');
// 获取个人信息数组
var author_infos=document.getElementsByClassName('author_info');

// console.log(pc_tag);
for(var i=0;i<tags.length;i++){
    // var info_tag=tags[i];
    // console.log(info_tag.innerHTML);

    tags[i].onmouseover=function(){
        // 获取tag索引
        var tagIndex=this.getAttribute('tag_index');
        // 所有信息消失
        for(var j=0;j<author_infos.length;j++){
            author_infos[j].style.display='none';
        }
        // 对应tag信息显示
        author_infos[tagIndex].style.display='block';
    }
}