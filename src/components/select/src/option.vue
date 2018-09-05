<template>
  <div>
    <ul>
      <li
        @click.stop="selectOptionClick"
        class="x-select__item"
        v-show="visible"
        :class="{
      'selected': itemSelected,
      'is-disabled': disabled,
      'hover': hover
    }">
      </li>
    </ul>
  </div>
</template>
<script>
  import Emitter from './emitter';
  export default {
    name: 'XOption',
    componentName: 'ElOption',
    inject: ['select'],
    props: {
      value: {
        required: true
      },
      label: [String, Number],
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        hover: false,
        visible: true
      }
    },
    computed: {
      itemSelected() {
        return this.select.value.indexOf(this.value) > -1;
      }
    },
    methods: {
      selectOptionClick () {
        if (this.disabled !== true) {
          this.dispatch('ElSelect', 'handleOptionClick', this);
        }
      }
    }
  }
</script>
<style>
  .x-select__item {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #5a5e66;
    height: 34px;
    line-height: 34px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer
  }
  .x-select__item.is-disabled {
    color: #b4bccc;
    cursor: not-allowed
  }

  .x-select__item.is-disabled:hover {
    background-color: #fff
  }

  .x-select__item.hover, .x-select__item:hover {
    background-color: #38B3C9;
    color: #ffffff;
  }

  .el-scrollbar__view .x-select__item.selected {
    color: #fff;
    background-color: #38B3C9;
    font-weight: 700
  }
</style>
