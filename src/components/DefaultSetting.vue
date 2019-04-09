<template>
  <div>
    <div class="modal__panel__content--header">기본 설정</div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">페이지 제목</div>
        상단의 페이지 제목을 지정합니다
      </div>
      <div class="controll_area__switch">
        <input v-model="title">
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">시계 상단 여백</div>
        시계의 상단 여백을 지정합니다
      </div>
      <div class="controll_area__switch">
        <input v-model="clockMargin">
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">시간 포맷</div>
        12시간 형식을 사용합니다
      </div>
      <div class="controll_area__switch">
        <div class="checkbox" :class="{ checked: timeFormatCheck }"></div>
        <label @click="changeTimeFormat"></label>
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">오전/오후</div>
        오전, 오후 문구를 표시합니다
      </div>
      <div class="controll_area__switch">
        <div class="checkbox" :class="{ checked: apm }"></div>
        <label @click="apm = !apm"></label>
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">날짜</div>
        현재 날짜를 표시합니다
      </div>
      <div class="controll_area__switch">
        <div class="checkbox" :class="{ checked: date }"></div>
        <label @click="date = !date"></label>
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">마우스 감도</div>
        메뉴 조작 마우스 감도를 설정합니다 (1 ~ 3)
      </div>
      <div class="controll_area__switch">
        <input type="number" min="1" max="3" v-model.number="speed">
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">검색창</div>
        검색창을 표시합니다
      </div>
      <div class="controll_area__switch">
        <div class="checkbox" :class="{ checked: search }"></div>
        <label @click="search = !search"></label>
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">검색창 상단 여백</div>
        검색창의 상단 여백을 지정합니다
      </div>
      <div class="controll_area__switch">
        <input v-model="searchMargin">
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">메뉴 미리보기</div>
        선택된 메뉴의 미리보기 텍스트를 표시합니다
      </div>
      <div class="controll_area__switch">
        <div class="checkbox" :class="{ checked: showAlt }"></div>
        <label @click="showAlt = !showAlt"></label>
      </div>
    </div>
    <div class="controll_area">
      <div class="controll_area__text">
        <div class="controll_area__text--title">새 탭으로 열기</div>
        메뉴를 통해 링크 이동시 새 탭으로 띄웁니다
      </div>
      <div class="controll_area__switch">
        <div class="checkbox" :class="{ checked: newTab }"></div>
        <label @click="newTab = !newTab"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    timeFormatCheck () {
      return this.timeFormat === '12'
    },
    timeFormat: {
      get () {
        return this.$store.state.timeFormat
      },
      set (value) {
        this.setState('timeFormat', value)
      }
    },
    clockMargin: {
      get () {
        return this.$store.state.clockMargin
      },
      set (value) {
        this.setState('clockMargin', value)
      }
    },
    apm: {
      get () {
        return this.$store.state.apm
      },
      set (value) {
        this.setState('apm', value)
      }
    },
    date: {
      get () {
        return this.$store.state.date
      },
      set (value) {
        this.setState('date', value)
      }
    },
    speed: {
      get () {
        return this.$store.state.speed
      },
      set (value) {
        this.setState('speed', value)
      }
    },
    search: {
      get () {
        return this.$store.state.search
      },
      set (value) {
        this.setState('search', value)
      }
    },
    searchMargin: {
      get () {
        return this.$store.state.searchMargin
      },
      set (value) {
        this.setState('searchMargin', value)
      }
    },
    showAlt: {
      get () {
        return this.$store.state.showAlt
      },
      set (value) {
        this.setState('showAlt', value)
      }
    },
    newTab: {
      get () {
        return this.$store.state.newTab
      },
      set (value) {
        this.setState('newTab', value)
      }
    },
    title: {
      get () {
        return this.$store.state.title
      },
      set (value) {
        this.setState('title', value)
      }
    }
  },
  methods: {
    /**
     * @description Change timeformat value
     */
    changeTimeFormat () {
      if (this.timeFormat === '24') {
        // 24 -> 12
        this.timeFormat = '12'
      } else {
        // 12 -> 24
        this.timeFormat = '24'
      }
    },
    /**
     * @description Set vuex state value
     * @param {string} key
     * @param {any} value
     */
    setState (key, value) {
      this.$store.commit('SET_STATE', { key, value })
    }
  }
}
</script>
