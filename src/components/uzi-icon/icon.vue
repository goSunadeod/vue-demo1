<style lang="scss" rel="stylesheet/scss">
  @import "iconfont.css";
</style>
<template>
  <i :class="classes" :style="styles"></i>
</template>
<script>
  const prefixCls = 'uzi-icon'
  export default {
    name: 'UziIcon',
    componentName: 'UziIcon',
    props: {
      type: String,
      size: [Number, String],
      color: String,
      fontStyle: {
        default: 'normal',
        type: String
      }
    },
    computed: {
      classes () {
        return `${prefixCls} ${prefixCls}-${this.type}`
      },
      styles () {
        let style = {}
        style['font-style'] = `normal`
        if (this.size) {
          style['font-size'] = `${this.size}rem`
        }
        if (this.fontStyle) {
          style['font-style'] = this.fontStyle
        }
        if (this.color) {
          style.color = this.color
        }
        return style
      }
    }
  }
</script>

