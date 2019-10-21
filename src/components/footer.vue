<template>
  <div>
    <Row type="flex" justify="center" class="footer" ref="footer">
      <Col span="22" :md="23" :lg="23" :xl="18" style="z-index:1;">
        <!-- <Affix :offset-bottom="0" class="footer-affix"> -->
          <div class="footer-content">
            <div>
              <div>
                <img src="../resource/images/logo.png" alt="" style="height: 1.6rem;" @click="redirect('index')">
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
        <!-- </Affix> -->
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'navs'
    ])
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.SET_FOOTERHEIGHT(this.$refs.footer.$el.clientHeight)
        this.SET_SCREENWIDTH(document.body.clientWidth)
      })()
    }
  },
  methods: {
    ...mapMutations([
      'SET_SCREENWIDTH', 'SET_FOOTERHEIGHT'
    ]),
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
.footer {
  position: fixed;
  bottom: 0;
  padding: 1rem 0;
  width: 100%;
  z-index: 200;
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