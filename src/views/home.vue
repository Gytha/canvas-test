<template>
  <div>
    <Row type="flex" justify="center">
      <img src="../resource/images/home-bg.png" alt="" class="top-bg">
      <i-col span="22" :md="20" :lg="10" :xl="8" class="top-search">
        <div>
          <h1>首创T2C模式的云端翻译系统</h1>
          <p>覆盖多种语言，专业精准翻译的语言服务专家</p>
        </div>
        <div>
          <Input class="search" v-model="searchVal" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="请输入或者粘贴您需要翻译的内容（200字/小时回稿速度）" />
          <div class="search-btn">
            <p>其他文档格式及合作请<span>联系我们</span></p>
            <div>下一步</div>
          </div>
        </div>
      </i-col>
    </Row>
    <Row type="flex" justify="center">
      <i-col class="mission" span="22" :md="20" :lg="22" :xl="17" :style="{marginBottom: `${footerHeight}px`}">
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
      </i-col>
    </Row>
    <Row type="flex" justify="center">
      <i-col class="home-content" span="22" :md="20" :lg="22" :xl="17" :style="{marginBottom: `${footerHeight}px`}">
        <div class="mission">
          <!-- <div class="contact-detail">
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
          <img src="../resource/images/user.png" alt="mission"> -->
        </div>
      </i-col>
    </Row>
    <Row>
      <h2>AI翻译+人工翻译助力网文出海</h2>
      <p>通过PE+MT木事创造及时性、本地化、规模化、精准性的翻译生产网络，与全球各国版权方译者、发行方通力合作，用创新模式传播中华文化，助力网文出海和文化交流传播</p>
      <p>支持API接口对接<span> 联系我们</span></p>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchVal: ''
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
  height: 26rem;
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
    margin: 1rem 0;
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
  // background: rgb(247,247,247);
  display: flex;
  align-items: center;
  margin: 3rem 0 1rem;
  img {
    flex: 1;
    height: 19rem;
  }
  &>div.contact-detail {
    margin-right: 1.5rem;
    padding: 1rem;
    height: 19rem;
    color: $font-color;
    line-height: 1.5;
    h2 {
      color: $bg-color;
      line-height: 2;
    }
    // div {
    //   margin-top: 1rem;
    // }
    // .address {
    //   margin-top: 1rem;
    //   font-size: 50%;
    // }
  }
}
</style>