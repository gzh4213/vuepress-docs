<template>
  <div class="container">
    <blockquote class="song" v-for="(poetry, index) in poetryListFormat" :key="index">
      <p>
        <tt>{{poetry.title}}</tt><br>
        <span>{{poetry.author}}</span><br>昵昵儿女语，<br>恩怨相尔汝。<br>划然变轩昂，<br>勇士赴敌场。<br>浮云柳絮无根蒂，<br>天地阔远随飞扬。<br>喧啾百鸟群，<br>忽见孤凤皇。<br>跻攀分寸不可上，<br>失势一落千丈强。<br>嗟余有两耳，<br>未省听丝篁。<br>自闻颖师弹，<br>起坐在一旁。<br>推手遽止之，<br>湿衣泪滂滂。<br>颖乎尔诚能，<br>无以冰炭置我肠！<br>
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poetryList: [
        {
          title: '一剪梅·红藕香残玉簟秋',
          author: '李清照',
          content: '红藕香残玉簟秋。轻解罗裳，独上兰舟。云中谁寄锦书来，雁字回时，月满西楼。花自飘零水自流。一种相思，两处闲愁。此情无计可消除，才下眉头，却上心头。'
        }
      ]
    }
  },

  computed: {
    poetryListFormat() {
      return this.poetryList.map(i => {
        console.log('i', i.content.split(/(?=，)/g))
        return i
      })
    }
  },

  created() {
    console.log('poetry created')
  }
}
</script>

<style lang="css" scoped>
blockquote.song {
    color: #404040;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "liga"1, "pnum"1, "kern"1;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    font-family: Optima-Regular, "Source Han Serif SC", Manuale, "Consolas", "Noto Serif CJK SC", STFangsong, FangSong, FangSong_GB2312, "Songti SC", STSong, serif, PingFangSC-Light, PingFangTC-Light, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important;
    font-size: 100% !important;
    overflow-wrap: break-word;
    word-break: keep-all;
    line-height: 1.778;
    font-weight: 300;
    letter-spacing: 1px;
    margin-left: auto;
    margin-right: auto;
    z-index: -1;
    margin-top: 1.35em;
    margin-bottom: 1.35em;
    background: #fafafd;
    padding-top: 16px;
    border-left: 0;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 0;
    border-left: solid 3px #5f6867;
}

blockquote.song p {
    font-size: 22px;
    overflow-wrap: break-word;
    word-break: break-word;
    font-weight: 300;
    letter-spacing: 1px;
    margin-left: auto;
    margin-right: auto;
    margin: 0;
    padding: 1em;
    color: #888;
    line-height: 1.6 !important;
    text-align: start;
    writing-mode: vertical-lr;
    -webkit-writing-mode: vertical-lr;
    -moz-writing-mode: vertical-lr;
    -o-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    _writing-mode: tb-lr;
    min-height: 380px;
    height: auto;
    overflow: auto;
}

/* 古诗文标题 */
blockquote.song tt {
    font-family: Optima-Regular, "Source Han Serif SC", Manuale, "Consolas", "Noto Serif CJK SC", STFangsong, FangSong, FangSong_GB2312, "Songti SC", STSong, serif, PingFangSC-Light, PingFangTC-Light, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important;
    font-size: 24px;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-right: 0.2em;
    font-weight: 450;
    border-top: 1px solid #404040;
    border-bottom: 1px solid #404040;
}

/* 作者 */
blockquote.song span {
    display: flex;
    color: #919191;
    padding-top: 4em;
    padding-bottom: 1.5em;
}

/* 滚动条 */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
}

::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
    background-color: #404040;
}
</style>