var app = new Vue({
    el: "#app",
    data: {
        results: {
            code: 1005,
            msg: "ok",
            data: [
                { name: "华为5G手机", price: 180000, num: 2 },
                { name: "诺基亚老年机", price: 100, num: 10 },
                { name: "联想笔记本", price: 90000, num: 1 }
            ]
        }
    },
    computed: {
        totalMoney () {
            var s = 0;
            this.results.data.forEach(e => {
                s += e.price * e.num;
            });
            /* 
            需求：每三位数字加上一个逗号
            数字无法用字符串分割，先转化成字符串，然后正则方式替换 replace(//,',')
            代表一个组：()
            匹配表达式前面的位置：?=exp
            三个数字之间间隔
                \d代表数字
                {3}匹配的长度，这里是三个长度
                + 一次或多次
                $匹配字符串结束位置
                g代表全局
                \B退格
            */
            return s.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        removeHandler (i) {
            this.results.data.splice(i, 1);
        },
        reduceHandler (i) {
            if (this.results.data[i].num > 1) {
                this.results.data[i].num--;
            }
            if (this.results.data[i].num == 1) {
                console.log("最少一个[...>_<...]不能再减了");
            }
        },
        addHandler (i) {
            this.results.data[i].num++;
        }
    }
});