<template>
    <div class="p-2 bg-info" >
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">教学管理系统</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/submitWork">提交作业</b-nav-item>
            <b-nav-item href="/correctWork">批改任务</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="stylus">
.d-md-block{
  background-color: #f3f3f4;
}
</style>
