
//�ֲ�ͼ------------------------��ʼ
function $id(id){
    return document.getElementById(id);
}
var mvDrop=$id("mvDrop");
var mv=$id("mv");
mv.onmouseover=function(){
    animate_v4(mvDrop,{height:"180",opacity:"1"},10);
}
mv.onmouseout=function(){
    animate_v4(mvDrop,{height:"0",opacity:"0"},10);
}
var appDrop=$id("appDrop");
var appBox=$id("appBox");
appBox.onmouseover=function(){
    animate_v4(appDrop,{height:"108",opacity:"1"},10);
}

appBox.onmouseout=function(){
    animate_v4(appDrop,{height:"0",opacity:"0"},10);
}
var lunbo=$(".lunbo");
console.log(lunbo);
var lbul=$('.lunboimg');
var yuandian=$('.points i');
console.log(yuandian);
var spanL=$('.arrow-left');
var spanR=$('.arrow-right');
var sw=0;
var oneWidth=$('.lunboimg').find('li').eq(0).width();
console.log(oneWidth);

//СԲ���¼�
yuandian.on("click",function () {
    $(this).addClass("current").siblings("").removeClass("current");
    sw=$(this).index();
   lbul.animate({
        "left":oneWidth*-sw
    });
})
//���Ұ�ť�Ŀ���Ч��
spanL.stop(true,true).click(function () {
    sw++;
    if(sw==yuandian.length){
        sw=0;
    }
    yuandian.eq(sw).trigger('click');
})
spanR.stop(true,true).click(function () {
    sw++;
    if(sw==yuandian.length){
        sw=0;
    }
    yuandian.eq(sw).trigger('click');
})
//�����Զ�����
timer = setInterval(function (){
    sw++;
    if(sw==yuandian.length){sw=0};
    yuandian.eq(sw).trigger("click");
},3000);

//�ֲ�ͼ------------------------����


//�������ı�ͼƬ��С-------------��ʼ
var tuijian = document.getElementsByClassName("tuijian");
    lis.mousehover = function(){

    }

//�������ı�ͼƬ��С-------------����
