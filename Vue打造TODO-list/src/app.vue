<template>
	<div id="app">
		<div id="cover">
			<!-- 做背景虚化 -->
		</div>
		<Header></Header>
    <Todo></Todo>
    <Footer></Footer>
	</div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
	components: {
    Header,
    Footer,
    Todo
	}
}
</script>

<style lang = "stylus" scoped>
/*
 lang="" 指定 css 预处理器
 scoped: 让样式在指定的组件范围内生效
 比如这个页面的组件是 template标签里面的 app
*/
#app {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}

#cover {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #999;
	opacity: 0.5;
	z-index: -1;
}
</style>
