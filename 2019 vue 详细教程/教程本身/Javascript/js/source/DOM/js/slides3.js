function myslide(speed) {
    // 自动轮播功能
    var t = setInterval(autoChange, speed);

    var index = 0;
    var slides = document.querySelector(".slides");
    var pics = document.querySelector(".pics");
    var items = slides.getElementsByClassName("item");
    var lis = slides.getElementsByTagName("li");
    var itemWidth = parseInt(window.getComputedStyle(items[0]).width);
    console.log(itemWidth);
    // 设置pics的宽度
    pics.style.width = items.length * itemWidth + "px";

    function autoChange() {
      
        lis[index].className = "";
        index++;
        if (index === items.length) {
            index = 0;
        }
        pics.style.left = -itemWidth * index + "px";
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
            lis[index].className = "";
            var j = +this.dataset.index;
            pics.style.left = -itemWidth * index + "px";
            lis[j].className = "active";
            index = j;
        };
    }

    // 向前向后切换功能
    slides.querySelector(".right").onclick = function () {
        autoChange();
    };

    slides.querySelector(".left").onclick = function () {
       
        lis[index].className = "";
        index--;
        if (index === -1) {
            index = items.length - 1;
        }
        pics.style.left = -itemWidth * index + "px";
        lis[index].className = "active";
    };
}