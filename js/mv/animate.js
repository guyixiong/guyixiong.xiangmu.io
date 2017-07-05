/**
 * 兼容获取任意属性的当前值
 * @param element
 * @param attr
 * @returns {*}
 */
function getStyle(element, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}

/**
 * 这个版本的缺陷在于：只能修改水平位置
 * @param element
 * @param target
 */
function animate_v1(element, target) {
    //先清楚上一个计时器
    clearInterval(element.timer);
    //开启一个新的定时器
    element.timer = setInterval(function () {
        //1 获取当前位置
        var current = element.offsetLeft;
        //2 根据方向累加或者累减步长
        var step = (target - current) / 10;
        //根据方向向上或者向下取整
        step = target > current ? Math.ceil(step) : Math.floor(step);
        current += step;
        //3 重新设置
        element.style.left = current + "px";
        //4 根据一定的条件停下来？因为步长取整之后，肯定能让current == target
        if (current == target) {
            clearInterval(element.timer);
        }
    }, 20);
}

/**
 * 可以修改任意以px位单位的属性
 * 缺陷：不可以修改透明度和zIndex
 * @param element
 * @param attr
 * @param target
 */
function animate_v2(element, attr, target) {
    //先清楚上一个计时器
    clearInterval(element.timer);
    //开启一个新的定时器
    element.timer = setInterval(function () {
        //1 获取当前值 -- 既要获取left的当前值，也要获取width的当前 --》获取任意属性的当前值,并且转换位数字
        var current = parseFloat(getStyle(element, attr));
        //2 根据方向累加或者累减步长
        var step = (target - current) / 10;
        //根据方向向上或者向下取整
        step = target > current ? Math.ceil(step) : Math.floor(step);
        current += step;
        //3 重新设置
        element.style[attr] = current + "px";
        //4 根据一定的条件停下来？因为步长取整之后，肯定能让current == target
        if (current == target) {
            clearInterval(element.timer);
        }
    }, 20);
}

/**
 * 需要把动画函数修改为可以修改透明度和z-index的
 * @param element
 * @param attr
 * @param target
 */
function animate3(element, attr, target) {
    //先清楚上一个计时器
    clearInterval(element.timer);
    //开启一个新的定时器
    element.timer = setInterval(function () {
        //解决方法：判断当前的属性是不是透明度或者z-index
        if (attr == "opacity") {
            //获取当前值
            var current = parseFloat(getStyle(element, attr));
            //小数相运算，容易产生误差，将小数放大一定的倍数取整之后再来比较--》放大100倍够用
            /*--------↓↓↓↓ 放大取整的过程 ↓↓↓↓--------*/
            current *= 100;
            var temp = target * 100;
            current = Math.floor(current);
            temp = Math.floor(temp);
            /*--------↑↑↑↑ 放大取整的过程 ↑↑↑↑--------*/

            //计算步长，缓动的算法
            var step = (temp - current) / 10;
            //根据方向取整 -- 依然需要取整，不然还是会出现无法到达目标的问题
            step = temp > current ? Math.ceil(step) : Math.floor(step);
            //修改
            current += step;
            //重新设置 -- 因为所有的数字都是放大的，重新设定的时候，要除回来
            element.style[attr] = current / 100;
            //判断停下来的时候比较的是放大后的两个值
            if (current == temp) {
                clearInterval(element.timer);
            }
        } else if (attr == "zIndex") {
            //因为层级的变化是视觉所无法察觉的，处理方式跟其他的动画都不一样
            //直接修改即可
            var current = target;
            element.style[attr] = target;
            if (current == target) {
                clearInterval(element.timer);
            }
        } else {
            //1 获取当前值 -- 既要获取left的当前值，也要获取width的当前 --》获取任意属性的当前值,并且转换位数字
            var current = parseFloat(getStyle(element, attr));
            //2 根据方向累加或者累减步长
            var step = (target - current) / 10;
            //根据方向向上或者向下取整
            step = target > current ? Math.ceil(step) : Math.floor(step);
            current += step;
            //3 重新设置
            element.style[attr] = current + "px";
            //4 根据一定的条件停下来？因为步长取整之后，肯定能让current == target
            if (current == target) {
                clearInterval(element.timer);
            }
        }
    }, 20);
}

/**
 * 要把函数修改为可以同时修改多个属性
 * @param element
 * @param attr
 * @param target
 */

function animate_v4(element, obj) {
    //先清楚上一个计时器
    clearInterval(element.timer);
    //开启一个新的定时器
    element.timer = setInterval(function () {
        //怎么同时修改多个属性？会一个一个修改了，多个属性无非也是一个一个的修改 -- 遍历对象，根据每个键值对调用单个属性的处理方法
        for (var attr in obj) {
            if (attr == "opacity") {
                var current = parseFloat(getStyle(element, attr));
                current *= 100;
                var target = obj[attr] * 100;
                current = Math.floor(current);
                target = Math.floor(target);
                var step = (target - current) / 10;
                step = target > current ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;
                if (current == target) {
                    clearInterval(element.timer);
                }
            } else if (attr == "zIndex") {
                var target = obj[attr];
                var current = target;
                element.style[attr] = target;
                if (current == target) {
                    clearInterval(element.timer);
                }
            } else {
                var target = obj[attr];
                var current = parseFloat(getStyle(element, attr));
                var step = (target - current) / 10;
                step = target > current ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
                if (current == target) {
                    clearInterval(element.timer);
                }
            }
        }

    }, 20);
}

/**
 * 上一个版本有bug：多个属性只有一个能到达目标
 * 把bug解决掉：
 *          要求多个属性都到达目标值 -- 多个条件分布在每个for循环中 -- 》标记法(假设法)
 * @param element
 * @param obj
 */
function animate_v5(element, obj) {
    //先清楚上一个计时器
    clearInterval(element.timer);
    //开启一个新的定时器
    element.timer = setInterval(function () {
        //假设所有的属性都完成， -- 只要有一个属性没有完成，就直接设置位false
        var flag = true;
        //怎么同时修改多个属性？会一个一个修改了，多个属性无非也是一个一个的修改 -- 遍历对象，根据每个键值对调用单个属性的处理方法
        for (var attr in obj) {
            if (attr == "opacity") {
                var current = parseFloat(getStyle(element, attr));
                current *= 100;
                var target = obj[attr] * 100;
                current = Math.floor(current);
                target = Math.floor(target);
                var step = (target - current) / 10;
                step = target > current ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
                var target = obj[attr];
                var current = target;
                element.style[attr] = target;
            } else {
                var target = obj[attr];
                var current = parseFloat(getStyle(element, attr));
                var step = (target - current) / 10;
                step = target > current ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;
            }
        }

        if (flag) {
            clearInterval(element.timer);
        }
    }, 20);
}

/**
 * 相函数中添加回调函数，以便在动画结束的时候，调用
 * @param element
 * @param obj
 */
function animate_v6(element, obj, callback) {
    //先清楚上一个计时器
    clearInterval(element.timer);
    //开启一个新的定时器
    element.timer = setInterval(function () {
        //假设所有的属性都完成， -- 只要有一个属性没有完成，就直接设置位false
        var flag = true;
        //怎么同时修改多个属性？会一个一个修改了，多个属性无非也是一个一个的修改 -- 遍历对象，根据每个键值对调用单个属性的处理方法
        for (var attr in obj) {
            if (attr == "opacity") {
                var current = parseFloat(getStyle(element, attr));
                current *= 100;
                var target = obj[attr] * 100;
                current = Math.floor(current);
                target = Math.floor(target);
                var step = (target - current) / 10;
                step = target > current ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;

            } else if (attr == "zIndex") {
                var target = obj[attr];
                var current = target;
                element.style[attr] = target;

            } else {
                var target = obj[attr];
                var current = parseFloat(getStyle(element, attr));
                var step = (target - current) / 10;
                step = target > current ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";

            }
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timer);
            //判断函数是否传入，如果传入就调用，如果没有传入，就不调用
            //if(callback !== undefined ){
            //    callback()
            //}
            callback && callback();
        }
    }, 20);
}