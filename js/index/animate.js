

function getStyle(element,attr){
    if (window.getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}


function animate3(element,json,time,callback){
    clearInterval(element.timer);
    element.timer=setInterval(function(){
        var flag=true;
        for (var key in json){
            if (key=="opacity"){                   //  设置opacity属性
                var current=parseFloat(getStyle(element,key));
                current*=100;
                var target = json[key] * 100;
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[key]=current/100;
            }else if (key=="zIndex"){              // 设置zIndex属性
                var target=json[key];
                var current=target;
                element.style[key]=json[key];
            }else {
                var current = parseInt(getStyle(element, key));// 设置px为单位的属性
                var target = parseInt(json[key]);
                var step=(target-current)/10;
                step=target>current?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[key]=current+"px";
            }
            if (current!=target){
                flag=false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            callback  && callback();     //回调函数，动画完成再触发执行。逻辑与短路，callback存在返回callback（），callback不存在，返回callback。
        }
    },time)
}