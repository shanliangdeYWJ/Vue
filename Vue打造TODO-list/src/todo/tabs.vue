<template>
  <div class="helper">
    <div class="left">{{ unFinishedTodoLength }} items left</div>
    <!-- 按钮组， 按钮组的按钮用循环遍历出来
    每个按钮都有选中 和 未选中状态 -->
    <span class="tabs">
      <!-- 使用v-for 循环出来的 
      或者在 jsx 里面 用 map 或者 for-each 
      循环出来的 html 结点 都要给他一个唯一的 key 去标明它， 
      因为循环是一个非常 耗时耗资源的 一个操作 
      指定一个 key 之后下一次循环，就是你的数据里面有变动
      如果key相同它会复用结点
      不会去做 {生成一个新的结点，然后把原来结点删掉的} 操作
      这样提高性能 这里直接用 state(它的内容) 作为 key2
      -->
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'actived' : '']"
        @click="toggleFilter(state)"
      >
        <!-- class 是动态的 class 他是否选中 
          首先设置一个 固定的 class 比如 state 然后根据
          传入的 标识，这个 filter 表示当前选中的状态
          如果和目前列表里面循环出来的是一样的，
          给结点增加 class 叫做 actived 如果没有 就是 ''
         -->
         <!-- toggleFilter 会在 todo 里面声明 因为他是整个应用的状态
         toggleFilter 要把当前的 state 转递过去 让他区分 下一个需要选中的
         是哪一个 state-->
        {{ state }}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true,
    },
    todos: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    // 计算一下，每次数据变换的时候，他都会自动去计算
    // 拿到新的，剩下来的，没有完成的 todos的 长度
    // 这个长度就是我们要现实的内容
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    clearAllCompleted () {
      this.$emit('clearAllCompleted')
    },
    toggleFilter (state) {
      // state 循环出来的每一项 就是我们的 states 里面的每一项
      this.$emit('toggle', state)
    }
  }
}
</script>

<style lang="stylus" scoped>
.helper
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #ffffff
    font-size 14px
    font-smoothing antialiased
.left, .clear, .tabs
    padding 0 10px
.left .clear
    width 150px
.left
    text-align center
.clear
    text-align right
    cursor pointer
.tabs
    width 200px
    display flex
    justify-content space-between
    *
        display inline-block
        padding 0 10px
        cursor pointer
        border 1px solid rgba(175,47,47,0)
        &.actived
            border-color rgba(175,47,47,0.4)
            border-radius 5px
</style>

