/**
 * ���ݻ�ȡ�������Եĵ�ǰֵ
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
 * ����汾��ȱ�����ڣ�ֻ���޸�ˮƽλ��
 * @param element
 * @param target
 */
function animate_v1(element, target) {
    //�������һ����ʱ��
    clearInterval(element.timer);
    //����һ���µĶ�ʱ��
    element.timer = setInterval(function () {
        //1 ��ȡ��ǰλ��
        var current = element.offsetLeft;
        //2 ���ݷ����ۼӻ����ۼ�����
        var step = (target - current) / 10;
        //���ݷ������ϻ�������ȡ��
        step = target > current ? Math.ceil(step) : Math.floor(step);
        current += step;
        //3 ��������
        element.style.left = current + "px";
        //4 ����һ��������ͣ��������Ϊ����ȡ��֮�󣬿϶�����current == target
        if (current == target) {
            clearInterval(element.timer);
        }
    }, 20);
}

/**
 * �����޸�������pxλ��λ������
 * ȱ�ݣ��������޸�͸���Ⱥ�zIndex
 * @param element
 * @param attr
 * @param target
 */
function animate_v2(element, attr, target) {
    //�������һ����ʱ��
    clearInterval(element.timer);
    //����һ���µĶ�ʱ��
    element.timer = setInterval(function () {
        //1 ��ȡ��ǰֵ -- ��Ҫ��ȡleft�ĵ�ǰֵ��ҲҪ��ȡwidth�ĵ�ǰ --����ȡ�������Եĵ�ǰֵ,����ת��λ����
        var current = parseFloat(getStyle(element, attr));
        //2 ���ݷ����ۼӻ����ۼ�����
        var step = (target - current) / 10;
        //���ݷ������ϻ�������ȡ��
        step = target > current ? Math.ceil(step) : Math.floor(step);
        current += step;
        //3 ��������
        element.style[attr] = current + "px";
        //4 ����һ��������ͣ��������Ϊ����ȡ��֮�󣬿϶�����current == target
        if (current == target) {
            clearInterval(element.timer);
        }
    }, 20);
}

/**
 * ��Ҫ�Ѷ��������޸�Ϊ�����޸�͸���Ⱥ�z-index��
 * @param element
 * @param attr
 * @param target
 */
function animate3(element, attr, target) {
    //�������һ����ʱ��
    clearInterval(element.timer);
    //����һ���µĶ�ʱ��
    element.timer = setInterval(function () {
        //����������жϵ�ǰ�������ǲ���͸���Ȼ���z-index
        if (attr == "opacity") {
            //��ȡ��ǰֵ
            var current = parseFloat(getStyle(element, attr));
            //С�������㣬���ײ�������С���Ŵ�һ���ı���ȡ��֮�������Ƚ�--���Ŵ�100������
            /*--------�������� �Ŵ�ȡ���Ĺ��� ��������--------*/
            current *= 100;
            var temp = target * 100;
            current = Math.floor(current);
            temp = Math.floor(temp);
            /*--------�������� �Ŵ�ȡ���Ĺ��� ��������--------*/

            //���㲽�����������㷨
            var step = (temp - current) / 10;
            //���ݷ���ȡ�� -- ��Ȼ��Ҫȡ������Ȼ���ǻ�����޷�����Ŀ�������
            step = temp > current ? Math.ceil(step) : Math.floor(step);
            //�޸�
            current += step;
            //�������� -- ��Ϊ���е����ֶ��ǷŴ�ģ������趨��ʱ��Ҫ������
            element.style[attr] = current / 100;
            //�ж�ͣ������ʱ��Ƚϵ��ǷŴ�������ֵ
            if (current == temp) {
                clearInterval(element.timer);
            }
        } else if (attr == "zIndex") {
            //��Ϊ�㼶�ı仯���Ӿ����޷�����ģ�����ʽ�������Ķ�������һ��
            //ֱ���޸ļ���
            var current = target;
            element.style[attr] = target;
            if (current == target) {
                clearInterval(element.timer);
            }
        } else {
            //1 ��ȡ��ǰֵ -- ��Ҫ��ȡleft�ĵ�ǰֵ��ҲҪ��ȡwidth�ĵ�ǰ --����ȡ�������Եĵ�ǰֵ,����ת��λ����
            var current = parseFloat(getStyle(element, attr));
            //2 ���ݷ����ۼӻ����ۼ�����
            var step = (target - current) / 10;
            //���ݷ������ϻ�������ȡ��
            step = target > current ? Math.ceil(step) : Math.floor(step);
            current += step;
            //3 ��������
            element.style[attr] = current + "px";
            //4 ����һ��������ͣ��������Ϊ����ȡ��֮�󣬿϶�����current == target
            if (current == target) {
                clearInterval(element.timer);
            }
        }
    }, 20);
}

/**
 * Ҫ�Ѻ����޸�Ϊ����ͬʱ�޸Ķ������
 * @param element
 * @param attr
 * @param target
 */

function animate_v4(element, obj) {
    //�������һ����ʱ��
    clearInterval(element.timer);
    //����һ���µĶ�ʱ��
    element.timer = setInterval(function () {
        //��ôͬʱ�޸Ķ�����ԣ���һ��һ���޸��ˣ���������޷�Ҳ��һ��һ�����޸� -- �������󣬸���ÿ����ֵ�Ե��õ������ԵĴ�����
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
 * ��һ���汾��bug���������ֻ��һ���ܵ���Ŀ��
 * ��bug�������
 *          Ҫ�������Զ�����Ŀ��ֵ -- ��������ֲ���ÿ��forѭ���� -- ����Ƿ�(���跨)
 * @param element
 * @param obj
 */
function animate_v5(element, obj) {
    //�������һ����ʱ��
    clearInterval(element.timer);
    //����һ���µĶ�ʱ��
    element.timer = setInterval(function () {
        //�������е����Զ���ɣ� -- ֻҪ��һ������û����ɣ���ֱ������λfalse
        var flag = true;
        //��ôͬʱ�޸Ķ�����ԣ���һ��һ���޸��ˣ���������޷�Ҳ��һ��һ�����޸� -- �������󣬸���ÿ����ֵ�Ե��õ������ԵĴ�����
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
 * �ຯ������ӻص��������Ա��ڶ���������ʱ�򣬵���
 * @param element
 * @param obj
 */
function animate_v6(element, obj, callback) {
    //�������һ����ʱ��
    clearInterval(element.timer);
    //����һ���µĶ�ʱ��
    element.timer = setInterval(function () {
        //�������е����Զ���ɣ� -- ֻҪ��һ������û����ɣ���ֱ������λfalse
        var flag = true;
        //��ôͬʱ�޸Ķ�����ԣ���һ��һ���޸��ˣ���������޷�Ҳ��һ��һ�����޸� -- �������󣬸���ÿ����ֵ�Ե��õ������ԵĴ�����
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
            //�жϺ����Ƿ��룬�������͵��ã����û�д��룬�Ͳ�����
            //if(callback !== undefined ){
            //    callback()
            //}
            callback && callback();
        }
    }, 20);
}