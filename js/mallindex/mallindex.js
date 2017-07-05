//var newsina = $id("newsina");
//var newwechat = $id("newwechat");
//newsina.onmouseover = function(){
//    $id("popsina").style.display = "block";
//};
//newsina.onmouseout = function(){
//    $id("popsina").style.display = "none";
//};
//newwechat.onmouseover = function(){
//    $id("popwechat").style.display = "block";
//};
//newwechat.onmouseout = function(){
//    $id("popwechat").style.display = "none";
//};

/**
 * 商城头部
 */
var shopSearch = $id("shop-search");

shopSearch.children[0].onfocus = function(){
    shopSearch.className = "shop-search input-active";
};
shopSearch.children[0].onblur = function(){
        shopSearch.className = "shop-search";
};


/**
 * 主轮播图广告模块
 * 1.轮播图导航器
 *   点击圆点：
 *      往右点：0 -1200 0
 *      往左点：-1200 0
 */

var sliderbox = $id("sliderbox");
var imgBox = sliderbox.children[0];
var lists = imgBox.children;
var items = $id("slidernav").children;
var imgWidth = sliderbox.offsetWidth;

for(var i = 0; i < items.length; i++){
    items[i].index = i;

    items[i].onclick = clickHandle;
};

function clickHandle(){
    for(var i = 0; i < lists.length; i++){
        if(lists[i].style.display === "block"){
            var active = items[i].index;
        }
    }
    lists[this.index].style.display = "block";
    //this.timer = setInterval(function(){
    //    var current = parseInt(imgBox.offsetLeft);
    //    //修改当前样式属性的数值
    //    var step = (-1200 - current) / 10;
    //    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //    current += step;
    //    imgBox.offsetLeft = current + "px";
    //    if(parseInt(current) === 1200){
    //        clearInterval(this.timer);
    //    }
    //},20);

    lists[active].style.display = "none";

    for(var j = 0; j < items.length ; j++){
        items[j].removeAttribute("class");
    }
    this.className = "current";
}






/**
 * TOP榜模块
 * 左右按钮：
 *   1.默认选中左按钮，字体颜色，边框，背景颜色改变
 *   2.选中右按钮，字体颜色，边框，背景颜色改变；左按钮恢复原状
 */
(function(){
    var titleArtist = $id("chart-title").children[0];
    var titleGood = $id("chart-title").children[1];
    var artistsChart = $id("artists-chart");
    var goodsChart = $id("goods-chart");

    titleArtist.onclick = function(){
        artistsChart.style.display = "block";
        goodsChart.style.display = "none";
        this.className = "title active-title";
        titleGood.className = "title"
    };
    titleGood.onclick = function(){
        goodsChart.style.display = "block";
        artistsChart.style.display = "none";
        this.className = "title active-title"
        titleArtist.className = "title";
    };
}());


/**
 * 固定导航栏模块
 */
var fixmenu = $id("fixmenu");
var fixTop = $id("fixmenu-top");
fixTop.onclick = function(){
    document.body.scrollTop = 0;
};












