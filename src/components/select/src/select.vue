<template>
  <div v-on-click-outside="clickoutSelect">
    <input
      type="text"
      ref="reference"
      class="x-select__input"
      :disabled="disabled"
      readonly
      @click.stop
      @keydown.esc.stop.prevent="visible = false"
      v-model="query"
      @input="e => handleQueryChange(e.target.value)"
      :style="{ width: '100px', 'max-width': inputWidth - 42 + 'px' }">
    <x-option
      :value="query">
    </x-option>
  </div>
</template>
<script>
  import Emitter from './emitter';
  import XOption from './option.vue';
  export default {
    mixins: [Emitter],
    name: 'XSelect',
    provide() {
      return {
        'select': this
      };
    },
    components: {
      XOption
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        visible: false,
        query: '',
        inputWidth: 0
      }
    },
    methods: {
      handleOptionSelect(option) {
          this.$emit('input', option.value)
      },
      handleQueryChange (val) {
        console.log(val)
      },
      clickoutSelect () {
        console.log('234567')
      }
    },
    created() {
      this.$on('handleOptionClick', this.handleOptionSelect);
    },
    mounted () {
      this.$nextTick(() => {
        if (this.$refs.reference && this.$refs.reference.$el) {
          this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
        }
      })
    }
  }
</script>
<style>

</style>
