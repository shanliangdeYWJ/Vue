window.onload = function () {
    // 自动轮播功能
    var t = setInterval(autoChange, 3000);

    var index = 0;
    var slides = document.querySelector(".slides");
    var items = slides.getElementsByClassName("item");
    var lis = slides.getElementsByTagName("li");

    function autoChange() {
        items[index].className = "item";
        lis[index].className = "";
        index++;
        if (index === items.length) {
            index = 0;
        }
        items[index].className = "item active";
        lis[index].className = "active";
    }

    // 鼠标悬停功能
    slides.onmouseover = function () {
        clearInterval(t);
    };

    slides.onmouseout = function () {
        t = setInterval(autoChange, 3000);
    };

    // 点击控制点切换功能
    for (var i = 0; i < lis.length; i++) {
        lis[i].dataset.index = i;
        lis[i].onclick = function () {
            // 图片区切换  控制点样式改变
            items[index].className = "item";
            lis[index].className = "";
            var j = +this.dataset.index;
            items[j].className = "item active";
            lis[j].className = "active";
            index = j;
        };
    }

    // 向前向后切换功能
    slides.querySelector(".right").onclick = function () {
        autoChange();
    };

    slides.querySelector(".left").onclick = function () {
        items[index].className = "item";
        lis[index].className = "";
        index--;
        if (index === -1) {
            index = items.length - 1;
        }
        items[index].className = "item active";
        lis[index].className = "active";
    };
}