<template>
	<section class="real-app">
    <!-- 删除 已经完成(false)的结点 就是 过滤 传入整个 todos 列表 -->
    <Tabs 
      :filter="filter" 
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    />
		<!--  修饰符 enter 其他修饰符详见官网 -->
		<input
			type="text"
			class="add-input"
			autofocus="autofocus"
			placeholder="接下去要做什么"
			@keyup.enter="addTodo"
		/>
    <!-- <item :todo="todo"></item> -->
    <!-- 因为 item 没有包含内容 所以改成单标签 -->
    <Item 
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    
	</section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  data() {
    return {
       /* 在使用 vue 或者 react 这样的框架的时候 我们尽量把
      顶层数据声明在集中的地方，如果没有使用我们的 store 或者 vue 里面的 vux
      react 里面的 redux 或者 mobx
      基本上把大部分的数据，声明在我们外层的 App.vue 里面 便于数据管理
       */
      // todo: {
      //   id: 0,
      //   content: 'this is todo',
      //   completed: false
      // },
      todos: [],  // todos 每一个数据元素 都有数据结构，在 addTodo 里面写他的数据结构
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filteredTodos() {
      if(this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
	methods: {
		addTodo(e) {
      // 每次添加 Todo 就是一次 input 事件 所有传入一个 event 对象
      // unshift 就是我们插入在这个数组的第一项
      this.todos.unshift({
        id: id++, // 每次添加一个就是 id++
        content: e.target.value.trim(), // 获取到内容，去掉空格
        completed: false  // 如果结束了就是 true 否则就是 false(没结束) 一开始肯定是 false(没结束的)
      })
      e.target.value = ''
    },
    deleteTodo(id){
      // 删除数组结点的一个方法，找到该数组某结点的索引 findIndex 该方法接收一个函数 传入的是每一个 todo 
      // 判断 如果 todo的id 等于 我们接收 的这个 id，name这个index就是我们想要的index
      // 然后 splice 的时候删掉一个结点，这样就能把我们对应的结点删掉
      this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
    },
    toggleFilter(state){
      this.filter = state
    },
    clearAllCompleted(){
      // 按照 splice 一个一个删除 每删除一个就会重新改变序号
      // 所以 会造成 隔着一个删除的情况 
      // 按照还没有 completede(还没完成的 todo filter 出来)
      this.todos = this.todos.filter(todo => !todo.completed)
    }
	}
}
</script>

<style lang="stylus" scoped>
.real-app {
	width: 600px;
	margin: 0 auto;
	box-shadow: 0 0 5px #666666;
}

.add-input {
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: none;
	outline: none;
	box-sizing: border-box;
	/* 只对MacOS的Webkit有效。 */
	/* font-smoothing antialiased */
	padding: 16px 16px 16px 36px;
	box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.03);
}
</style>