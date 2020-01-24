function myslide(slides, settings) {   // slides是轮播最外层的dom
    // 定制默认配置
    var mySettings = {
        speed: 3000,
        dots: false,
        arrow: false
    };
    // 合并settings和mySettings
    for (var s in settings) {
        mySettings[s] = settings[s];
    }

    // 自动轮播功能
    var t = setInterval(autoChange, mySettings.speed);

    var index = 0;
    // var slides = document.querySelector(".slides");
    var pics = slides.querySelector(".pics");
    var items = slides.getElementsByClassName("item");
    if (mySettings.dots) {
        var lis = slides.getElementsByTagName("li");
    }
    var itemWidth = parseInt(window.getComputedStyle(items[0]).width);
    // 设置pics的宽度
    pics.style.width = items.length * itemWidth + "px";

    function autoChange() {
        if (mySettings.dots) {
            lis[index].className = "";
        }
        index++;
        if (index === items.length) {
            index = 0;
        }
        pics.style.left = -itemWidth * index + "px";
        if (mySettings.dots) {
            lis[index].className = "active";
        }
    }


    // 鼠标悬停功能
    slides.onmouseover = function () {
        clearInterval(t);
    };

    slides.onmouseout = function () {
        t = setInterval(autoChange, 3000);
    };

    if (mySettings.dots) {
        // 点击控制点切换功能
        for (var i = 0; i < lis.length; i++) {
            lis[i].dataset.index = i;
            lis[i].onclick = function () {
                // 图片区切换  控制点样式改变
                lis[index].className = "";
                var j = +this.dataset.index;
                pics.style.left = -itemWidth * index + "px";
                lis[j].className = "active";
                index = j;
            };
        }
    }

    // 向前向后切换功能
    if (mySettings.arrow) {
        slides.querySelector(".right").onclick = function () {
            autoChange();
        };

        slides.querySelector(".left").onclick = function () {
            if (mySettings.dots) {
                lis[index].className = "";
            }
            index--;
            if (index === -1) {
                index = items.length - 1;
            }
            pics.style.left = -itemWidth * index + "px";
            if (mySettings.dots) {
                lis[index].className = "active";
            }
        };
    }
}