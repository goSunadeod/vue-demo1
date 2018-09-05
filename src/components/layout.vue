<template>
  <div @click="resetComponent">
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img src="../assets/logo.png">
        </router-link>
        <div style="float: right">
          <div style="display: flex;justify-content: space-between">
          <div class="select-lang">
            <x-selection :selections="langs" @on-change="onLangChange"></x-selection>
            <!--<x-select>-->
              <!--<x-select v-model="username"-->
                         <!--placeholder="省份">-->
                <!--<x-option v-for="(item, index) in langs"-->
                           <!--:value="item.value"-->
                           <!--:label="item.label"-->
                           <!--:key="index">-->
                <!--</x-option>-->
              <!--</x-select>-->
            <!--</x-select>-->
          </div>
          <div class="head-nav">
            <ul class="nav-list">
              <li> {{ username }}</li>
              <li v-if="username!== ''" class="nav-pile">|</li>
              <li v-if="username!== ''" @click="quit">{{$t('login.exit')}}</li>
              <li v-if="username=== ''" @click="login">{{$t('login.login')}}</li>
              <li class="nav-pile">|</li>
              <li v-if="username=== ''" @click="register">{{$t('login.register')}}</li>
              <li v-if="username=== ''" class="nav-pile">|</li>
              <li @click="about">{{$t('login.about')}}</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div class="app-content">
      <keep-alive>
        <router-view ref="detail"></router-view>
      </keep-alive>

    </div>
    <div class="app-foot">
      <p>© 2018 demo01-xhq</p>
    </div>
    <md-dialog :isShow="isShowAbout" @on-close="closeDialog('isShowAbout')">
      <p>Hello</p>
    </md-dialog>
    <md-dialog :isShow="isShowLogin" @on-close="closeDialog('isShowLogin')">
      <log-form @has-log="onSuccessLog"></log-form>
    </md-dialog>
    <md-dialog :isShow="isShowRegister" @on-close="closeDialog('isShowRegister')">
      <p>哇，好厉害，注册成功啦！</p>
    </md-dialog>
  </div>
</template>

<script>
  import {eventBus} from '../eventBus'
  import mdDialog from './dialog.vue'
  import LogForm from './logForm'
  import XSelection from '../components/selection'
  import UziIcon from '../components/uzi-icon'
  export default {
    name: 'layout',
    components: {
      mdDialog,
      LogForm,
      XSelection,
      UziIcon
    },
    data () {
      return {
        isShowAbout: false,
        isShowLogin: false,
        isShowRegister: false,
        username: '',
        langs: [{label: 'English', value: 'en'}, {label: '中文', value: 'zh'}]
      }
    },
    methods: {
      about() {
        this.isShowAbout = true
      },
      login () {
        this.isShowLogin = true
      },
      register () {
        this.isShowRegister = true
      },
      closeDialog (attr) {
        this[attr] = false
      },
      onSuccessLog (data) {
        this.closeDialog ('isShowLogin')
        this.username = data.username
      },
      quit () {
        this.username = ''
      },
      resetComponent () {
//        eventBus.$emit('reset-component')
      },
      onLangChange (val) {
        this.$i18n.locale = val.value
        this.$store.dispatch('setLanguage', val.value)
      }
    },
    mounted () {
//      console.log(this.$store.getters.getLanguage)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }

  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
    &-inner {
      width: 1200px;
      margin: 0 auto;
    }
    .head-logo {
      float: left;
    }
    .app-head-inner img {
      width: 50px;
      margin-top: 20px;
    }
    .head-nav {
     ul {
       overflow: hidden;
     }
      li {
        cursor: pointer;
        float: left;
      }
      .nav-pile {
        padding: 0 10px;
      }
    }
  }
  .select-lang {
    margin-right: 20px;
    .selection-show > span {
     width: 60px;
      display: inline-block;
    }
    .selection-list {
      top: 60px !important;
      li {
        height: 20px;
        line-height: 20px;
      }
    }
  }
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #4fc08d;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }

</style>
