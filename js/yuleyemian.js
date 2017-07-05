
        //head


var logo = $id("logo");
var minxin = $id("minxin");
var minxin1 = $id("minxin1");
timer = setInterval(function(){
    var x = Math.random() * 5+10;
    var y = Math.random() * 15+5;
    logo.style.left = x +"px";
    logo.style.top = y +"px";
    minxin.style.left = y +"px";
    minxin1.style.left = y +"px";
},150);


var hul = $id("hul");
var lis = hul.children[0];
var a = lis.children[0];
hul.onmouseover = function(){
    hul.children[0].children[0].children[0].src = "images/yule/ylym3.png";
    hul.children[1].children[0].children[0].src = "images/yule/mx2.png";
    hul.children[2].children[0].children[0].src = "images/yule/ys2.png";
    hul.children[3].children[0].children[0].src = "images/yule/zt1.png";
}
hul.onmouseout = function(){
    hul.children[0].children[0].children[0].src = "images/yule/ylym1.png";
    hul.children[1].children[0].children[0].src = "images/yule/mx1.png" ;
    hul.children[2].children[0].children[0].src = "images/yule/ys1.png" ;
    hul.children[3].children[0].children[0].src = "images/yule/zt2.png" ;
}


//        new-main
/*产生随机数函数*/
function getColor(j){
    /*十六进制中可能包含的字符*/
    var s="abcdef0123456789";
    var col="#";  //保存生成的颜色编码
    /*利用循环，随机产生生验证码中的每个字符*/
    for(var i=0;i<j;i++)
    {
        var index=Math.floor(Math.random()*s.length);  //随机产生一个0-62之间的数字
        col+=s.charAt(index);   //将随机产生的数字当作字符串的位置下标，在字符串s中取出该字符，并入ret中
    }

    return col;   //返回产生的验证码
}
/*显示随机颜色函数*/
var list = document.getElementById("new-mainr-one").children;
//var yt = document.getElementById("yuantu");
function show(){
    for(var i=0;i<list.length;i++){
        if(i%2 == 0){
            list[i].style.color=getColor(6);   //在id为msg的对象中显示16进制码
            list[i].style.backgroundColor=getColor(6);   //在id为msg的对象中显示16进制码
        }else {
            list[i].style.color = getColor(3);   //在id为msg的对象中显示16进制码
            list[i].style.backgroundColor = getColor(3);   //在id为msg的对象中显示16进制码
        }
    }
}
show();
setInterval(function(){
    show()
    //yt.style.borderBottomColor =getColor(6);
    //yt.style.borderLeftColor =getColor(6);
    //yt.style.borderRightColor =getColor(6);
    //yt.style.borderTopColor =getColor(6);
},1000); //鼠标悬停时时执行函数show
var lis = document.getElementById("wd").children;
function show1(){
    for(var i=0;i<lis.length;i++){
        if(i%2 == 0){
            lis[i].children[0].style.color=getColor(6);   //在id为msg的对象中显示16进制码
            lis[i].children[0].style.backgroundColor=getColor(6);   //在id为msg的对象中显示16进制码
        }else {
            lis[i].children[0].style.color = getColor(6);   //在id为msg的对象中显示16进制码
            lis[i].children[0].style.backgroundColor = getColor(6);   //在id为msg的对象中显示16进制码
        }
    }
}
show1();
var  timer;
window.onload = function(){
        timer = setInterval(function(){
            show1()
            for(var j=0;j<lis.length;j++){
                var cd = Math.floor(Math.random()*470)
                lis[j].children[0].style.width = cd +"px";
            };
        },1000);
        document.getElementById("wd").onmouseover = function(){
            clearInterval(timer);
            for(var j=0;j<lis.length;j++){
                lis[j].children[0].style.width = 472+"px";
            };
        };
        document.getElementById("wd").onmouseout = function(){
            clearInterval(timer);
            show1();
            timer = setInterval(function(){
                show1()
                for(var j=0;j<lis.length;j++){
                    var cd = Math.floor(Math.random()*470)
                    lis[j].children[0].style.width = cd +"px";
                };
            },1000);
        };
}


    //明星圈图片
    var mxqtone = $id("mxqtone").children;
    var mxqttwo = $id("mxqttwo").children;
    var mxqtthree = $id("mxqtthree").children;
    var mxqtfour = $id("mxqtfour").children;
setInterval(function(){
   var x =Math.ceil(Math.random()*2);
    mxqtone[0].src = "images/yule/mxqt"+ x +".jpg";
},2000);
setInterval(function(){
    var x =Math.ceil(Math.random()*2);
    mxqtone[1].src = "images/yule/mxqt"+12+ x +".jpg";
},2000);
setInterval(function(){
    var x =Math.ceil(Math.random()*2);
    mxqttwo[0].src = "images/yule/mxqt"+21+ x +".jpg";
},2000);
setInterval(function(){
    var x =Math.ceil(Math.random()*2);
    mxqttwo[1].src = "images/yule/mxqt"+22+ x +".jpg";
},2000);
setInterval(function(){
    var x =Math.ceil(Math.random()*2);
    mxqtthree[0].src = "images/yule/mxqt"+31+ x +".jpg";
},2000);
setInterval(function(){
    var x =Math.ceil(Math.random()*2);
    mxqtthree[1].src = "images/yule/mxqt"+32+ x +".jpg";
},2000);
setInterval(function(){
    var x =Math.ceil(Math.random()*2);
    mxqtfour[0].src = "images/yule/mxqt"+41+x +".jpg";
},2000);
setInterval(function(){
    var x =Math.ceil(Math.random()*2);
    mxqtfour[1].src = "images/yule/mxqt"+42+ x +".jpg";
},2000);


//图片突出显示
$(function(){
    $(".item").hover(function () {
        $(this).children().eq(0).css("width",400).css("height",250).css("left","-50px").css("top","-50px");
    },function () {
        $(this).children().eq(0).css("width",330).css("height",190).css("left","0").css("top","0");
    });
});

//图片闪烁
    setInterval(function(){
        $(function(){
            $("#imgs").children().fadeTo(500,.3);
            $("#imgs").children().fadeTo(500,1);
        });
    },100);

$(function(){
    $(".item2").hover(function(){
        $(this).children($(".vbo")).css("display","inline-block");
        $(this).children($(".vbo1")).css("display","inline-block");
    },function(){
        $(".vbo").css("display","none");
        $(".vbo1").css("display","none");
    })
})

     //舞动区

        var wdImg = $id("wudong");
        var i=0;
        setInterval(function(){
            i++;
            console.log(i);
            if(i == 8){
                i=0;
            }
            wdImg.src = "images/yule/Md1" +i+".jpg";
            console.log(wdImg.src);
        },2000);
