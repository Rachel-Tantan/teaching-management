<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="/">首页</b-breadcrumb-item>
      <b-breadcrumb-item href="/correctWork">批改任务</b-breadcrumb-item>
      <b-breadcrumb-item active>{{this.$store.state.currentSubject}}</b-breadcrumb-item>
    </b-breadcrumb>
    <b-card
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 m-auto"
      v-if="this.$store.state.currentSubject==''"
    >
      <b-table striped hover :items="items" @row-clicked="rowClicked"></b-table>
    </b-card>

    <div role="tablist" v-if="this.$store.state.currentSubject!=''">
      <b-card no-body class="mb-1" v-for="number in totalWorks" :key="number">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion-'+number" variant="info">
            <a style="float:left">作业{{works[number-1].code}}</a>
          </b-button>
        </b-card-header>

        <b-collapse :id="'accordion-'+number" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-form @submit="onSubmit">
              <b-card-group deck>
                <b-card title="A">
                  <b-form-input v-model="score[0]" placeholder="评分A"></b-form-input>
                  <b-form-textarea
                    v-model="reason[0]"
                    placeholder="评分理由"
                    rows="3"
                    class="mr-4 mt-2"
                  ></b-form-textarea>
                </b-card>
                <b-card title="B">
                  <b-form-input v-model="score[1]" placeholder="评分B"></b-form-input>
                  <b-form-textarea
                    v-model="reason[1]"
                    placeholder="评分理由"
                    rows="3"
                    class="mr-4 mt-2"
                  ></b-form-textarea>
                </b-card>
                <b-card title="C">
                  <b-form-input v-model="score[2]" placeholder="评分C"></b-form-input>
                  <b-form-textarea
                    v-model="reason[2]"
                    placeholder="评分理由"
                    rows="3"
                    class="mr-4 mt-2"
                  ></b-form-textarea>
                </b-card>
                <b-card title="D">
                  <b-form-input v-model="score[3]" placeholder="评分D"></b-form-input>
                  <b-form-textarea
                    v-model="reason[3]"
                    placeholder="评分理由"
                    rows="3"
                    class="mr-4 mt-2"
                  ></b-form-textarea>
                </b-card>
                <b-card title="E">
                  <b-form-input v-model="score[4]" placeholder="评分E"></b-form-input>
                  <b-form-textarea
                    v-model="reason[4]"
                    placeholder="评分理由"
                    rows="3"
                    class="mr-4 mt-2"
                  ></b-form-textarea>
                </b-card>
              </b-card-group>

              <b-button type="submit" variant="primary" class="mr-4 mt-2" @click="test">Submit</b-button>
            </b-form>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        //后端传入
        { code: 1001, name: "高等数学" },
        { code: 1002, name: "线性代数" }
        // "高等数学"
      ],
      totalWorks: 3, //后端传入
      works: [
        //后端传入
        {
          code: "001",
          content: "完成课本98页习题1，2，3",
          date: "2020.6.4-2020.6.8"
        },
        {
          code: "002",
          content: "完成课本198页习题1，2，3",
          date: "2020.6.10-2020.6.14"
        },
        {
          code: "003",
          content: "完成课本298页习题1，2，3",
          date: "2020.6.18-2020.6.28"
        }
      ],
      score: [],
      reason: []
    };
  },
  created() {},
  computed: {},
  methods: {
    rowClicked(item) {
      this.$store.state.currentSubject = item.name;
      console.log(item.code); //
    },
    fetchWorkData() {
      //把item.code传至后端，后端根据item.code将作业信息传入
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    test() {
      console.log(this.score);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
