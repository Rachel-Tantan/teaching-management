<template>
  <div class="login-container">
    <b-card tag="article" style="max-width: 20rem;" class="mb-2 container" id="card">
      <b-row class="my-1">
        <b-col sm="3">
          <label>账号</label>
        </b-col>
        <b-col sm="9">
          <b-form-input type="text" v-model="form.username"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label>密码</label>
        </b-col>
        <b-col sm="9">
          <b-form-input type="password" v-model="form.password"></b-form-input>
        </b-col>
      </b-row>

      <b-button href="#" variant="primary" class="mr-4 mt-2" @click="login">登录</b-button>
      <b-button href="#" variant="primary" class="ml-4 mt-2" @click="register">注册</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
        form:{
            username:'',
            password:''
        }
    };
  },
  created() {},
  computed: {},
  methods: {
    login() {
        console.log("form",this.form)
    },
    register() {}
  }
};
</script>
<style lang="stylus">
.login-container {
  height: 100%;
}

#card {
  align-self: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}

html,body{
    height:100%
}
</style>
