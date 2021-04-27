// 轮播图
// 获取轮播图盒子
var slider=document.getElementById('slider');
        // 获取图片列表
        var imgList=document.getElementById('imgList');
        // 获取向前按钮
        var prev=document.getElementById('prev');
        // 获取向后按钮
        var next=document.getElementById('next');
        // 获取图片列表中的图片数组
        var items = imgList.getElementsByClassName('item-img');
        // 获取图片数量
        var imgCount=items.length;
        // 定义图片索引
        var index=0;
        // 获取按钮盒子
        var buttons=document.getElementById('buttons');
        // 获取按钮数组
        var buts=buttons.getElementsByTagName('li');
        // 向前点击函数
        prev.onclick=function(){
            index--;
            if(index<0){
                index=imgCount-1;
            }
            move(index);
        }
        // 向后点击函数
        next.onclick=function(){
            index++;
            if(index>imgCount-1){
                index=0;
            }
            move(index);
        }
        // 移动函数
        function move(index){
            console.log(index);
            var postLeft=-index*740;
            imgList.style.marginLeft=postLeft+'px';
            setButton(index);
        }
        // 鼠标进入函数
        slider.onmouseover=function(){
            // 按键出现，自动切换停止
            prev.style.display='block';
            next.style.display='block';
            clearInterval(tiemIndex);
        }
        // 鼠标移出函数
        slider.onmouseout=function(){
            // 按键消失，自动切换开始
            prev.style.display='none';
            next.style.display='none';
            autoPlay();
        }
        // 自动切换函数
        function autoPlay(){
            tiemIndex=setInterval('next.onclick()',3000);
        }
        // 自动切换执行
        autoPlay();

        console.log('按钮个数'+buts.length);
        // 点击按钮跳转图片
        for(var i=0;i<buts.length;i++){
            // 遍历所有按钮
            var but=buts[i];
            // 按钮点击函数
            but.onclick=function(){
                // 获取下标，调用move()函数
                var dataIndex=this.getAttribute('data-index');
                index= dataIndex;
                console.log('按钮下标'+dataIndex);
                move(index);
            }
        }
        
        // 按钮设置函数
        function setButton(index){
            for (var i = 0; i < buts.length; i++) {
                buts[i].style.backgroundColor='#fff';
            }
            buts[index].style.backgroundColor='red';  
        }