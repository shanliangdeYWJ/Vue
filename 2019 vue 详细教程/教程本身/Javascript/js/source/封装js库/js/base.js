// function $(selector) {
//     return document.querySelectorAll(selector);
// }
function $(selector) {  // $("#box")
    return new Base(selector);
}

function Base(selector) {
    this.elements = [];  // 属性，用于存储找到的元素

    var s = selector.charAt(0);
    var subs = selector.substring(1);
    switch (s) {
        case '#':
            this.getId(subs);
            break;
        case ".":
            this.getClass(subs);
            break;
        default:
            this.getTagName(selector);
            break;
    }
}

Base.prototype.getId = function (id) {
    var o = document.getElementById(id);
    this.elements.push(o);
};

Base.prototype.getClass = function (className) {
    var os = document.getElementsByClassName(className);
    for (var i = 0; i < os.length; i++) {
        this.elements.push(os[i]);
    }
};

Base.prototype.getTagName = function (tagName) {
    var os = document.getElementsByTagName(tagName);
    for (var i = 0; i < os.length; i++) {
        this.elements.push(os[i]);
    }
};

Base.prototype.get = function(index) {
    var o = this.elements[0];
    this.elements = [];
    this.elements.push(o);

    return this;
};


Base.prototype.css = function (cssName, cssValue) {
    // 样式应该设置到谁身上this.elements
    if (cssValue === undefined) {
        if (typeof cssName === "object") {   // 说明是对象型参数的设置
            for (var i = 0; i < this.elements.length; i++) {
                for (var k in cssName) {
                    this.elements[i].style[k] = cssName[k];
                }
            }
            return this;
        } else {            // 获取属性值
            // 只选择第一个元素对应的样式值返回
            return window.getComputedStyle(this.elements[0])[cssName];
        }
    } else {                    // 代表设置
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style[cssName] = cssValue;
        }
        return this;
    }
};

// html
Base.prototype.html = function (html) {
    if (html === undefined) {  // 获取
        return this.elements[0].innerHTML;
    } else {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = html;
        }
        return this;
    }
};


// attr
Base.prototype.attr = function (attr, attrValue) {
    for (var i = 0; i < this.elements.length; i++) {
        if (attr === "class") {
            this.elements[i].className = attrValue;
        } else if (attr === "for") {
            this.elements[i].htmlFor = attrValue;
        } else {
            this.elements[i][attr] = attrValue;
        }
    }
    return this;
};


// click事件
Base.prototype.click = function(fn) {
    for(var i = 0; i < this.elements.length; i++) {
        this.elements[i].onclick = fn;
    }
    return this;
};


// hover事件
Base.prototype.hover = function(overFn, outFn) {
    for(var i = 0; i < this.elements.length; i++) {
        this.elements[i].onmouseover = overFn;
        this.elements[i].onmouseout = outFn;
    }
    return this;
};

// 效果
// 淡入
Base.prototype.fadeIn = function(speed) {
    for(var i = 0; i < this.elements.length; i++) {
        var o = this.elements[i];
        o.style.opacity = 0;
        o.style.display = "block";

        var t = setInterval(function() {
           
            o.style.opacity = parseFloat(o.style.opacity) + 0.01;
            if(parseFloat(o.style.opacity) >= 1) {
                clearInterval(t);
            }
            // console.log(o.style.opacity, typeof o.style.opacity)
        }, speed);
    }
    return this;
};
