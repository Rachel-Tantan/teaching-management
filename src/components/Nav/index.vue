<template>
  <div>
    <b-nav vertical v-for="(subject,index) in subjects" :key="index" >
      <b-nav-item href @click="test($event)">{{subject}}</b-nav-item>
      <!-- <b-nav-item>Link</b-nav-item> -->
    </b-nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subjects: ["高等数学A","线性代数"]
    };
  },
  created() {},
  computed: {},
  methods: {
    test(e){
      console.log(e.target.innerHTML)
      this.$store.state.currentSubject = e.target.innerHTML
    }
  }
};
</script>
<style lang="stylus">
.bd-links {
    margin-right: 0px !important
}
</style>
