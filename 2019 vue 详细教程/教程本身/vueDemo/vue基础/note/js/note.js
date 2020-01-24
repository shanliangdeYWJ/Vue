var app = new Vue({
    el: "#app",
    data: {
        thing: '',
        things: []
    },
    methods: {
        addThing() {
            var t = {
                text: this.thing,
                time: formatTime(new Date()),
                done: false
            };
            this.things.push(t);
            this.thing = '';

            // 把数据存储到localStorage中
            localStorage.setItem("things", JSON.stringify(this.things));
        },
        saveStatus() {
            localStorage.setItem("things", JSON.stringify(this.things));
        },
        getInitData() {
            // 把localStorage中的things数据取出来
            var t = localStorage.getItem("things");
            if(t == null) {
                this.things = [];
            }else{
                this.things = JSON.parse(t);
            }
            
        }
    }
});
app.getInitData();