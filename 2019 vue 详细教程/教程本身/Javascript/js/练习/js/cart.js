window.onload = function () {
    var col07s = document.getElementsByClassName("col07");
    var oTotal = document.getElementById("total");
    var oCount = document.getElementById("count");
    var numShows = document.getElementsByClassName("num_show");
    // 初始化总金额和数量
    calcTotal();

    // +-功能
    var oAdds = document.querySelectorAll(".add");
    var oMinuss = document.querySelectorAll(".minus");

    for (var i = 0; i < oAdds.length; i++) {
        oAdds[i].onclick = function () {
            var m = +this.nextElementSibling.value + 1;
            this.nextElementSibling.value = m;
            var price = parseFloat(this.parentElement.parentElement.previousElementSibling.innerHTML);
            this.parentElement.parentElement.nextElementSibling.innerHTML = doDecimal(price * m, 2) + "元";
            calcTotal();
        };

        oMinuss[i].onclick = function () {
            var n = +this.previousElementSibling.value;
            if (n > 1) {
                var price = parseFloat(this.parentElement.parentElement.previousElementSibling.innerHTML);
                this.previousElementSibling.value = n - 1;
                this.parentElement.parentElement.nextElementSibling.innerHTML = doDecimal(price * (n - 1), 2) + "元";
                calcTotal();
            }
        };
    }


    // 某个复选框点击对全选的影响
    var oAllSelect = document.getElementsByName("allSelect")[0];
    var perChecks = document.getElementsByClassName("perCheck");
    for (var i = 0; i < perChecks.length; i++) {
        perChecks[i].onclick = function () {
            var p = 0;
            for (var j = 0; j < perChecks.length; j++) {
                if (perChecks[j].checked) {
                    p++;
                }
            }
            if (p === perChecks.length) {
                oAllSelect.checked = true;
            } else {
                oAllSelect.checked = false;
            }
            calcTotal();
        };
    }
    // 全选全不选
    oAllSelect.onclick = function () {
        for (var i = 0; i < perChecks.length; i++) {
            perChecks[i].checked = this.checked;
        }
        calcTotal();
    };

    // 总计
    function calcTotal() {
        var sum = 0;
        var c = 0;
        for (var i = 0; i < col07s.length; i++) {
            var status = col07s[i].parentElement.getElementsByClassName("perCheck")[0].checked;
            if (status) {
                sum += parseFloat(col07s[i].innerHTML);
                c += parseInt(numShows[i].value);
            }
        }
        oTotal.innerHTML = doDecimal(sum, 2);
        oCount.innerHTML = c;
    }

    // 某行的删除
    var removes = document.getElementsByClassName("remove");
    for(var i = 0; i < removes.length; i++) {
        removes[i].onclick = function() {
            this.parentElement.parentElement.remove();
            calcTotal();
        };
    }
};



function doDecimal(m, n) {
    var t = Math.pow(10, n);
    return Math.floor(m * t) / t;
}