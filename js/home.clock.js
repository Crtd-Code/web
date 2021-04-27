var time=document.getElementById('time');
    function getTime(){
        var date=new Date();
        // 获取小时数
        var hour=date.getHours();
        // 获取分钟数
        var minute=date.getMinutes();
        // 获取秒数
        var second=date.getSeconds();
        if(hour<10){
            hour='0'+hour;
        }
        if(minute<10){
            minute='0'+minute;
        }
        if(second<10){
            second='0'+second;
        }
        
        console.log(hour+':'+minute+':'+second);
        document.getElementById('hour').innerHTML=hour;
        document.getElementById('minute').innerHTML=minute;
        document.getElementById('second').innerHTML=second;
    }
    
    setInterval('getTime()',1000);