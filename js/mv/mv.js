/**
 * Created by Le on 2017/5/17.
 */
//轮播图
var lbt = $("#lbt");
var ulLb = lbt.children("ul");
var currentWidth=$('#lbt ul').find('li').eq(0).width();
console.log(currentWidth);
var spanL = $("#lbtleft");
var spanR = $("#lbtright");
var lbtbox = $("#lbtbox");
var currentIndex = 0;
var cur = $(".cur-count");
//克隆第一张图片放到最后
var clone=$('#lbt ul').find('li').eq(0).clone();
$('#lbt ul').append(clone);
var len=$('#lbt ul').children('li').length;
console.log(len);
// // 开启自动轮播
var lbTimer=setInterval(function () {
    currentIndex++;
    move();
},3000);
function move() {

    if (currentIndex==len) {

        lbt.css({left:0});
        currentIndex=1;

    }
    if (currentIndex==-1) {
    		lbt.css({left:(len-1)*-currentWidth});
    		currentIndex=len-2;
    		// cur.text(len-3);
    	}
   lbt.stop().animate({left: currentIndex * -currentWidth}, 500);
    if (currentIndex==len-1) {
        cur.text(1);
    }else {
        cur.text(currentIndex+1);
    }

}
// 向左
spanL.on("click",function () {
    clearInterval(lbTimer);
    currentIndex--;
    move();
})
//向右
spanR.on("click",function () {
    clearInterval(lbTimer);
    currentIndex++;
    move();
})

lbt.hover(function () {
    clearInterval(lbTimer);
},function () {
    lbTimer=setInterval(function () {
        currentIndex++;
        move();
    },2000);
})







// //注册鼠标点击事件
//
// spanR.on("click", moveRight);
// function moveRight() {
//     currentIndex++;
//     currentIndex %= 3;
//     var target = currentIndex * 811 * -1;
//     $("#lbt").animate({left: target + "px"});
//     $(".cur-count").text(currentIndex+1);
// }
// spanL.on("click", function () {
//     clearInterval(lbt.timer);
//     if (currentIndex == 0) {
//         currentIndex = 3;
//         $("#lbt").css("left", currentIndex * -811 + "px");
//     }
//     currentIndex--;
//     var target = currentIndex * 811 * -1;
//     $("#lbt").animate({left: target + "px"});
//     $(".cur-count").text(Math.abs(currentIndex)+1);
//
// });
//
// // 开启自动轮播
// lbt.timer = setInterval(moveRight, 3000);
// //注册鼠标移入事件
// lbtbox.hover(function () {
//     spanL.css("display", "block");
//     spanR.css("display", "block");
//     // clearInterval(lbt.timer);
// }, function () {
//     spanL.css("display", "none");
//     spanR.css("display", "none");
// })

//mv手风琴效果
var hotlist = $(".hot-list");
var hotlist_li = hotlist.children('li');

var hotlist_li_nm = hotlist_li.children(".normal");

var hotlist_li_cu = hotlist_li.children(".current");

for (var i = 0; i < hotlist_li.length; i++) {
    hotlist_li[i].index = i;
    hotlist_li[i].onmouseover = function () {
        for (var j = 0; j < hotlist_li.length; j++) {
            hotlist_li_cu[j].style.display = "none";
        }
        hotlist_li_cu[this.index].style.display = "block";
    }
}

//V榜点击事件开始
var hot_prag = $(".pragram-nav");
var hot_prag_ul = hot_prag.children();
var hot_prag_li = hot_prag_ul.children('li');
var pv_box = $(".pv-box");
for (var i = 0; i < hot_prag_li.length; i++) {
    hot_prag_li[i].index = i;
    hot_prag_li[i].onclick = function () {
        for (var j = 0; j < hot_prag_li.length; j++) {
            pv_box[j].style.display = "none"
            hot_prag_li[j].className="";
        }
        pv_box[this.index].style.display = "block";
        this.className = "pragram-cur";
    }
}

//周榜冠军
var champ_content = $(".champ-content");
for (var i = 0; i <  champ_content.length; i++) {
    champ_content[i].className=champ_content[i].className+"hide";
}



//为周榜冠军下的a注册事件
var area=$(".area");

var week_a=area.children('a');
for (var i = 0; i < week_a.length; i++) {
    week_a[i].index=i;
	week_a[i].onclick=function () {
	    for (var j = 0; j < week_a.length; j++) {
	    	week_a[j].style.borderBottom="";
	    	champ_content[j].style.display="none";
	    }
        this.style.borderBottom="1px #34d7c3 solid";
	    champ_content[this.index].style.display="block";
	    clearInterval(champ_content.timer);
    }
}
//开始周榜冠军的自动轮播
var weekIndex=0;

champ_content.timer=setInterval(function () {
        weekIndex=(weekIndex==5)?0:weekIndex+1;
    $(".champ-content").hide().eq(weekIndex).show();
    $(".area").children('a').css("borderBottom","");
    week_a[weekIndex].style.borderBottom="1px #34d7c3 solid";
    },3000);

//音乐人模块
var mvMan=$(".mv-list-box").children('ul').children('li');
var mvManImg=mvMan.children('a').children('img');
for (var i = 0; i < mvManImg.length; i++) {
    mvManImg[i].index=i;
	mvManImg[i].onmouseover=function () {
	  for (var j = 0; j < mvManImg.length; j++) {
          mvManImg[j].style.top="70px";
      }
      this.style.top="60px";
        this.style.opacity="1";


    }
    mvManImg[i].onmouseout=function () {
        for (var j = 0; j < mvManImg.length; j++) {
            mvManImg[j].style.top="70px";
            mvManImg[j].style.opacity="0.7";
        }
    }
}
//mv模块
var mvv2=$('.mv-v2 div img');
mvv2.on("mouseover",function () {
    $(this).stop().animate({
        width:"110%",
        height:"110%",
    }).css("box-shadow","0px 0px 2px 1px #52e2c0")
}).on("mouseout",function () {
    $(this).stop().animate({
        width:"100%",
        height:"100%"
    }).css("box-shadow","");
})

var li01=$('.li01');
li01.hover(function () {
    li01.find('i').fadeIn();
},function () {
    li01.find('i').fadeOut();
})

