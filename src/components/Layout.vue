<template>
  <div class="d-flex flex-column" style="height:100%;">
    <div region="north" class="north">
      <app-header></app-header>
    </div>
    <div region="center" class="center flex-fill d-flex flex-column">
      <div class="d-flex flex-row flex-fill">
        <div region="west" class="west bd-links d-none d-md-block col-sm-2" v-if="isNavShow">
          <app-nav></app-nav>
        </div>
        <div region="center" class="center flex-fill">
          <app-main></app-main>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "./Header";
import AppNav from "./Nav";
import AppMain from "./Main";
export default {
  data() {
    return {
      isNavShow: false
    };
  },
  created() {
    if (this.$route.path == "/") {
      this.isNavShow = false;
    } else {
      this.isNavShow = true;
    }
  },
  computed: {},
  methods: {},
  components: {
    AppHeader,
    AppNav,
    AppMain
  }
};
</script>
<style lang="stylus">
.main {
  bottom: 0px;
}

.bd-links {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-right: -15px;
  margin-left: -15px;
}

.nav-link {
  float: left;
}
</style>
