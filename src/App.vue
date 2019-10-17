<template>
  <div id="app">
    <spin :spinShow="spinShow" />
    <Row type="flex" justify="center">
      <i-col span="22" :md="23" :lg="23" :xl="18" style="z-index:1;">
        <!-- <div v-if="screenWidth>=767"><br/><br/></div> -->
        <Affix :offset-top="20" class="affix">
          <div class="header">
            <img src="./resource/images/logo.png" alt="" style="height: 1.7rem;cursor: pointer;">
            <div v-if="screenWidth>=992">
              <div class="menu">
                <div :class="item.active?'active':''" v-for="(item, index) in navs" :key="index" @click="clickMenu(index)">{{item.name}}</div>
              </div>
              <div>
                <div>用户注册</div>
                <div>译者注册</div>
                <div>登录</div>
                <Dropdown trigger="click" class="dropdown" transfer>
                  <span href="javascript:void(0)">中文<Icon type="ios-arrow-down"></Icon></span>
                  <DropdownMenu slot="list">
                    <DropdownItem>英文</DropdownItem>
                    <DropdownItem>法文</DropdownItem>
                    <DropdownItem>中文</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div v-else>
              <div style="text-align: right;">
                <Dropdown trigger="click" class="dropdown" transfer>
                  <span href="javascript:void(0)">中文<Icon type="ios-arrow-down"></Icon></span>
                  <DropdownMenu slot="list">
                    <DropdownItem>英文</DropdownItem>
                    <DropdownItem>法文</DropdownItem>
                    <DropdownItem>中文</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown trigger="click" class="dropdown" transfer-class-name="menu-dropdown" transfer>
                  <Icon type="md-menu" class="menu-icon"/>
                  <DropdownMenu slot="list">
                    <DropdownItem v-for="(item, index) in navs" :key="index" @click.native="clickMenu(index)">{{item.name}}</DropdownItem>
                    <DropdownItem>用户注册</DropdownItem>
                    <DropdownItem>译者注册</DropdownItem>
                    <DropdownItem>登录</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </Affix>
      </i-col>
    </Row>
    <div class="container">
      <router-view/>
    </div>
    <Row type="flex" justify="center" class="footer" ref="footer">
      <i-col span="22" :md="23" :lg="23" :xl="18" style="z-index:1;">
        <Affix :offset-bottom="0" class="footer-affix">
          <div class="footer-content">
            <div>
              <div>
                <img src="./resource/images/logo.png" alt="" style="height: 1.6rem;" @click="redirect('index')">
                <span @click="redirect('about')">关于我们</span>
                <span @click="redirect('contact')">联系我们</span>
                <span>招贤纳士</span>
              </div>
              <div class="icon">
                <span class="iconfont icon-f-copy"></span>
                <span class="iconfont icon-twitter"></span>
                <span class="iconfont icon-weixin"></span>
                <span class="iconfont icon-weibo"></span>
              </div>
            </div>
            <div>
              <div class="copyright">
                <span>陕CP备14000715号</span>
                <span>西安有言在前网络科技有限公司</span>
                <span>&#169; Hitranslator Inc.2019</span>
              </div>
              <div>
                <span>法律声明</span>
                <span>隐私声明</span>
              </div>
            </div>
          </div>
        </Affix>
      </i-col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import spin from '@/components/spin'
import { deflate } from 'zlib'

export default {
  components: { spin },
  computed: {
    ...mapState([
      'screenWidth'
    ])
  },
  watch: {
    // screenWidth(val) {
    //   console.log('screenWidth', val)
    // }
  },
  data () {
    return {
      spinShow: false,
      navs: [
        {
          name: '首页',
          url: '/',
          img: 'nav-bg.png',
          active: true
        }, {
          name: '翻译服务',
          url: '/translation',
          active: false
        }, {
          name: '搜索译者',
          url: '/translator',
          active: false
        }, {
          name: '网文出海',
          url: '/article',
          active: false
        }, {
          name: '联系我们',
          url: '/contact',
          active: false
        }
      ]
    }
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        this.SET_SCREENWIDTH(this.$refs.footer.$el.clientHeight)
        this.SET_SCREENWIDTH(document.body.clientWidth)
      })()
    }
    setTimeout(() => {this.spinShow = false}, 1500)
  },
  methods: {
    ...mapMutations([
      'SET_SCREENWIDTH', 'SET_SCREENWIDTH'
    ]),
    // 点击菜单
    clickMenu (idx) {
      let { navs } = this
      navs.map((item, index) => item.active = index === idx)
      this.$router.push(navs[idx].url)
    },
    // 点击页脚
    redirect(type) {
      let { navs } = this
      navs.map(item =>item.active = false)
      switch(type) {
        case 'index': navs[0].active=true;break;
        case 'contact': navs[4].active=true;break;
        case 'about':
        default:
      }
      this.$router.push(`/${type}`);
    }
  }
}
</script>

<style lang="scss" scoped>
$font-color: #515a6e;
$bg-color: #16ab8e;
#app {
  position: relative;
}
.affix {
  width: auto;
  &>div {
    left:auto!important;
    // width:inherit!important;
  }
  & /deep/ div.ivu-affix {
    box-shadow: 0px 20px 20px -20px #5e5e5e;
    background: #fff;
  }
}
.header {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
  &>div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    &>div:nth-child(1) {
      flex: 1;
      margin-left: 30px;
      text-align: left;
    }
    &>div {
      display: inline-block;
      div:not(.dropdown) {
        display: inline-block;
        padding: 0 14px;
        height: 50px;
        line-height: 50px;
        font-size: .7rem;
        color: $font-color;
        transition: all .2s ease-in-out;
        cursor: pointer;
        &.active {
          color: $bg-color;
          border-bottom: 2px solid $bg-color;
        }
      }
    }
  }
}
.dropdown span{
  color: $font-color;
}
// 内容区
.container {
  // position: relative;
  margin-top: 1rem;
}
.footer {
  position: fixed;
  bottom: 0;
  padding: 1rem 0;
  width: 100%;
  background: #f5f5f5;
  .footer-content {
    color: $font-color;
    &>div {
      display: flex;
      justify-content: space-between;
      &>div {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 2;
        font-size: .8rem;
        img {
          cursor: pointer;
        }
        span {
          margin: 0 .5rem;
          cursor: pointer;
        }
      }
      &>div.icon {
        color: $bg-color;
        span {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
