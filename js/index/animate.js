

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
            if (key=="opacity"){                   //  ����opacity����
                var current=parseFloat(getStyle(element,key));
                current*=100;
                var target = json[key] * 100;
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[key]=current/100;
            }else if (key=="zIndex"){              // ����zIndex����
                var target=json[key];
                var current=target;
                element.style[key]=json[key];
            }else {
                var current = parseInt(getStyle(element, key));// ����pxΪ��λ������
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
            callback  && callback();     //�ص���������������ٴ���ִ�С��߼����·��callback���ڷ���callback������callback�����ڣ�����callback��
        }
    },time)
}