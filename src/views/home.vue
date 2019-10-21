<template>
  <div>
    <Row type="flex" justify="center">
      <img src="../resource/images/home-bg.png" alt="" class="top-bg">
      <Col span="22" :md="20" :lg="12" :xl="10" class="top-search">
        <div>
          <h1>首创T2C模式的云端翻译系统</h1>
          <p>覆盖多种语言，专业精准翻译的语言服务专家</p>
        </div>
        <div>
          <Input class="search" v-model="searchVal" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入或者粘贴您需要翻译的内容（200字/小时回稿速度）" :maxlength="200" show-word-limit/>
          <div class="search-btn">
            <p>其他文档格式及合作请<span>联系我们</span></p>
            <div>下一步</div>
          </div>
        </div>
      </Col>
    </Row>
    <Row type="flex" justify="center">
      <Col class="mission" span="22" :md="20" :lg="22" :xl="17" >
        <div class="contact-detail">
          <h2>Hitranslator快速找到所需译者</h2>
          <p>聚集全球译者，链接用户和译者，让用户快速找到全球各地的译者，由译者为用户提供本地化服务</p>
          <p>您也可以<span>发布</span>招募信息，<span>查看</span>最新的招募项目</p>
          <div class="language">
            <div>源语言</div>
            <div>目标语言</div>
            <div>搜索</div>
          </div>
          <div class="number">
            <div>
              <h2>8023</h2>
              <p>译者人数</p>
            </div>
            <div>
              <h2>64</h2>
              <p>分布地区</p>
            </div>
            <div>
              <h2>274</h2>
              <p>语种互译</p>
            </div>
          </div>
        </div>
        <img src="../resource/images/user.png" alt="mission">
      </Col>
    </Row>
    <Row type="flex" justify="center" class="translator">
      <Col span="22" :md="20" :lg="22" :xl="17">
        <h2>AI翻译+人工翻译助力网文出海</h2>
        <Row type="flex" justify="center">
          <Col span="22" :md="18" :lg="22" :xl="17">
            <p>通过PE+MT木事创造及时性、本地化、规模化、精准性的翻译生产网络，与全球各国版权方译者、发行方通力合作，用创新模式传播中华文化，助力网文出海和文化交流传播</p>
            <p class="contact-us">支持API接口对接<span> 联系我们</span></p>
          </Col>
        </Row>
        <div class="detail">
          <carousel style="height: 15rem;" :swiperOption="swiperOption"/>
          <!-- <el-carousel :autoplay="false" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in imgs" :key="index" @click.native="clickImg(item)">
              <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel> -->
        </div>
      </Col>
    </Row>
    <Row type="flex" justify="center" class="why-choose">
      <h1>为什么选择Hitranslator</h1>
      <Col span="24" :md="17" :lg="22" :xl="17">
        <div>
          <div v-for="(item,index) in choose" :key="index">
            <i :class="['iconfont', item.icon]"></i>
            <h2>{{item.title}}</h2>
            <p>{{item.contain}}</p>
          </div>
        </div>
      </Col>
    </Row>
    <!-- 合作伙伴 -->
    <Row type="flex" justify="center" class="logo" :style="{marginBottom: `${footerHeight}px`}">
      <h1>合作伙伴</h1>
      <Col span="22" :md="18" :lg="22" :xl="17">
        <div>
          <div v-for="(item,index) in logos" :key="index">
            <img :src="item" alt="" :style="{height: `${screenWidth<575?'3':screenWidth>=767?'5':'4'}vh`}">
          </div>
        </div>
      </Col>
    </Row>

    <!-- 页脚 -->
    <!-- <foot /> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import carousel from '@/components/carousel'
import foot from '@/components/footer'

export default {
  computed: {
    ...mapState([
      'screenWidth', 'footerHeight'
    ])
  },
  components: { carousel, foot },
  data () {
    return {
      searchVal: '',
      swiperOption: {
        imgs: [
          require('../resource/images/gone.jpg'),
          require('../resource/images/forrest.jpg'),
          require('../resource/images/letter.jpg'),
          require('../resource/images/last-leaf.jpg'),
          require('../resource/images/rainbow.jpg'),
          require('../resource/images/moon.jpg'),
        ],
        startIndex: 0
      },
      imgs: [
        require('../resource/images/gone.jpg'),
        require('../resource/images/forrest.jpg'),
        require('../resource/images/letter.jpg'),
        require('../resource/images/last-leaf.jpg'),
        require('../resource/images/rainbow.jpg'),
        require('../resource/images/moon.jpg'),
      ],
      choose: [
        {
          icon: 'icon-language',
          title: '全球母语译者',
          contain: '全球各地的母语译者以全新的方式为用户提供本地化服务'
        }, {
          icon: 'icon-danao',
          title: '只能翻译引擎',
          contain: '自主研发的智能AI翻译引擎为译者提供辅助翻译'
        }, {
          icon: 'icon-xitongguanli',
          title: '在线管理系统',
          contain: '自主研发的在线管理系统翻译系统、结算系统等'
        }, {
          icon: 'icon-quanqiuhua',
          title: '全球化网络',
          contain: '与全球24个国家的阅读平台建立了长期战略合作'
        }, {
          icon: 'icon-shujufenxi',
          title: '强大数据分析',
          contain: '拥有强大的本地化数据阅读偏好分析系统'
        }, {
          icon: 'icon-hezuo',
          title: '友好合作模式',
          contain: '与全球译者、版权方发行建立了友好供应的合作模式'
        },
      ],
      logos: [
        require('../resource/logo/zy.png'),
        require('../resource/logo/zwzx.png'),
        require('../resource/logo/hx.png'),
        require('../resource/logo/fyxs.png'),
        require('../resource/logo/mg.png'),
        require('../resource/logo/ysxs.png'),
        require('../resource/logo/jzwx.png'),
        require('../resource/logo/zww.png'),
        require('../resource/logo/ssyd.png'),
        require('../resource/logo/my.png'),
        require('../resource/logo/sxyj.png'),
        require('../resource/logo/yhwx.png'),
        require('../resource/logo/yyks.png'),
        require('../resource/logo/bqm.png'),
        require('../resource/logo/h.png'),
        require('../resource/logo/jyxs.png'),
        require('../resource/logo/lyzw.png'),
        require('../resource/logo/lc.png'),
        require('../resource/logo/qczw.png'),
        require('../resource/logo/dyts.png'),
        require('../resource/logo/zhwx.png'),
        require('../resource/logo/yxd.png'),
      ]
    }
  },
  methods: {
    clickImg() {

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
  left: 0;
  width: 100%;
  height: 25rem;
}
.top-search {
  margin-top: 1rem;
  text-align: center;
  &>div {
    color: #fff;
    h1 {
      font-size: 1.4rem;
    }
  }
  .search {
    margin: 1rem 0 .5rem;
    & /deep/ textarea.ivu-input:focus {
      border-color: transparent!important;
    }
  }
  .search-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .5rem;
    span {
      margin-left: .3rem;
      color: rgb(245, 236, 24)
    }
    div {
      padding: .2rem 1rem;
      border-radius: 2px;
      color: $bg-color;
      cursor: pointer;
      background: #fff;
    }
  }
}
.mission {
  display: flex;
  align-items: center;
  margin: 3rem 0 1rem;
  img {
    width: 50%;
    height: 19rem;
  }
  &>div.contact-detail {
    margin-right: 1.5rem;
    padding: 1rem;
    height: 19rem;
    width: 50%;
    color: $font-color;
    line-height: 1.5;
    h2 {
      color: $bg-color;
      // margin-bottom: 1rem
    }
    &>p:nth-child(2) {
      margin: 1rem 0;
    }
    span {
      color: $bg-color;
      cursor: pointer;
    }
    .language {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      &>div {
        flex: 1;
        padding: .3rem .8rem;
        border: 1px solid $bg-color;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
        &:nth-child(2) {
          flex: 1.2;
          margin: 0 1rem;
        }
        &:nth-child(3) {
          color: #fff;
          background: $bg-color;
        }
      }
    }
    .number {
      display: flex;
      align-items: center;
      &>div {
        flex: 1;
        // text-align: center;
      }
    }
  }
}
.translator {
  padding: 2rem 0;
  text-align: center;
  background: rgb(247,247,247);
  h2 {
    color: $bg-color;
    margin-bottom: 1rem
  }
  .contact-us {
    margin-top: .5rem;
    span {
      color: $bg-color;
    }
  }
}
.why-choose {
  margin-top: 2rem;
  color: $bg-color;
  h1 {
    width: 100%;
    text-align: center;
  }
  &>div>div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 1rem;
    width: 100%;
    &>div {
      flex: 1 0 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 11rem;
      padding: 1rem;
      margin-bottom: 1rem;
      background: rgb(247,247,247);
      i {
        font-size: 2rem;
      }
      p {
        margin-top: 1rem;
        color: $font-color;
      }
    }
  }
}
.logo {
  margin-top: 2rem;
  color: $bg-color;
  h1 {
    width: 100%;
    text-align: center;
  }
  &>div>div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    &>div {
      flex: 1 0 1;
      text-align: center;
      margin: .5rem;
      border: 1px solid rgb(247,247,247);
    }
  }
}

@media screen and (max-width: 575px) {
  .mission {
    position: relative;
    flex-direction: column;
    img {
      position: absolute;
      width: 100%!important;
      opacity: .3;
    }
    &>div {
      width: 100%!important;
      margin-left: 0!important;
      margin-right: 0!important;
      z-index: 1;
    }
  }
}
</style>