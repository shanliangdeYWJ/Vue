var app = new Vue({
    el: "#app",
    data: {
        results: {
            code: 1005,
            msg: "ok",
            data: [
                {
                    name: "华为5G手机",
                    price: 180000,
                    num: 2
                },
                {
                    name: "诺基亚老年机",
                    price: 100,
                    num: 10
                },
                {
                    name: "联想笔记本",
                    price: 90000,
                    num: 1
                }
            ]
        }
    },
    computed: {
        totalMoney() {
            var s = 0;
            this.results.data.forEach(e => {
                s += e.price * e.num;
            });
            return s.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        removeHandler(i) {
            this.results.data.splice(i, 1);
        },
        reduceHandler(i) {
            if(this.results.data[i].num > 1) {
                this.results.data[i].num--;
            }
        },
        addHandler(i) {
            this.results.data[i].num++;
        }
    }
});