import Vue from 'vue';
Vue.directive('autoFcs',{
  // 钩子函数，被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
  inserted(el){
    el.focus()
  }
})
