<template>
  <div>
    <Row type="flex" justify="center">
      <div class="top-bg"></div>
      <i-col span="22" :md="20" :lg="22" :xl="17">
        <i-col class="home-top" :xs="22" :sm="14" :md="12" :lg="9" :xl="9" :xxl="8">
          <h2>Contact Us</h2>
          <p>Anytimg Anywhere</p>
          <p>Direct trading translators to optimize translation quality,speed,price</p>
          <div>
            <span>全球互通</span>·
            <span>与翻译人员直接交易，优化翻译质量、速度、价格</span>
          </div>
        </i-col>
      </i-col>
      <!-- 市场 -->
      <Row class="market" type="flex" justify="center">
        <i-col span="22" :md="20" :lg="22" :xl="17">
          <span :class="item.active?'active':''" v-for="(item, index) in markets" :key="index" @click="clickMarket(index)">{{item.name}}</span>
        </i-col>
      </Row>
    </Row>
    <Row type="flex" justify="center">
      <i-col class="home-content" span="22" :md="20" :lg="22" :xl="17" :style="{marginBottom: `${footerHeight}px`}">
        <div>
          <div class="contact">
            <p>联系我们</p>
            <p>Contact us</p>
          </div>
          <div class="mission">
            <img src="../resource/images/contact.png" alt="mission">
            <div class="contact-detail">
              <p>+86 15129272512</p>
              <p>+86 03985795672</p>
              <p>Hi@Hitranslator.com</p>
              <div>
                <h2>【版权合作】</h2>
                <p>党女士：13312341234</p>
                <p>bd@Hitranslator.com</p>
              </div>
              <div>
                <h2>【发行合作】</h2>
                <p>王先生：15129272512</p>
              </div>
              <h2 class="address">西安市科技路8号凯丽大厦东区405</h2>
            </div>
          </div>
        </div>
        <!-- <foot /> -->
      </i-col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import foot from '@/components/footer'

export default {
  computed: {
    ...mapState([
      'screenWidth', 'footerHeight'
    ])
  },
  components: { foot },
  data () {
    return {
      markets: [
        { id: '1', active: true, name: '中国市场'},
        { id: '2', active: false, name: '越南语市场'},
        { id: '3', active: false, name: '英语市场'},
        { id: '4', active: false, name: '泰语市场'},
        { id: '5', active: false, name: '俄语市场'},
        { id: '6', active: false, name: '阿语市场'},
        { id: '7', active: false, name: '韩国市场'},
      ]
    }
  },
  methods: {
    clickMarket (idx) {
      let { markets } = this
      markets.map((item, index) => item.active = index === idx)
    }
  }
}
</script>

<style lang="scss" scoped>
$font-color: #515a6e;
$bg-color: #16ab8e;
.top-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 17rem;
  background: url(../resource/images/nav-bg.png);
  background-size: cover;
  object-fit: cover;
}
.market {
  position: absolute;
  bottom: -2.5rem;
  width: 100%;
  white-space: nowrap; /** 溢出不换行 **/
  overflow-x: auto;
  color: #fff;
  z-index: 1;
  background: rgba(0, 0, 0, .5);
  &::-webkit-scrollbar {
    // 可以滚动但隐藏滚动条
    display: none;
  }
  span {
    display: inline-block;
    padding: .5rem 1rem;
    cursor: pointer;
    &.active {
      background: $bg-color;
    }
  }
}
.home-top {
  margin: 1.6rem 0;
  color:$font-color;
  h2 {
    color: $bg-color;
  }
  p {
    line-height: 1.5;
    // &:nth-child(3) {
    //   margin-bottom: .5rem;
    // }
  }
  div>span:nth-child(odd) {
    color:$bg-color;
  }
}
.home-content {
  position: absolute;
  top: 15rem;
  .contact {
    position: relative;
    margin: 3rem 0 1.5rem;
    text-align: center;
    line-height: 2;
    &::after {
      content: '';
      position: absolute;
      width: 2rem;
      border: 1px solid $bg-color;
      left: calc(50% - 1rem);
      margin-top: .3rem;
    }
  }
  .mission {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    img {
      flex: 1;
      height: 19rem;
    }
    &>div.contact-detail {
      margin-left: 1.5rem;
      padding: 1rem;
      height: 19rem;
      color: $font-color;
      line-height: 1.5;
      background: #e5e5e5;
      h2 {
        color: $bg-color;
        line-height: 2;
      }
      div {
        margin-top: 1rem;
      }
      .address {
        margin-top: 1rem;
        font-size: 50%;
      }
    }
  }
}
</style>
