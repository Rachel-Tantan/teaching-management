<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item href="/">首页</b-breadcrumb-item>
      <b-breadcrumb-item href="/submitWork">提交作业</b-breadcrumb-item>
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
          <b-button
            block
            v-b-toggle="'accordion-'+number"
            variant="info"
          >
          <a style="float:left">作业{{works[number-1].code}}</a>
          <a>得分：</a>
          <b-button variant="danger" size="sm" style="float:right">申诉</b-button>
          </b-button>
        </b-card-header>
        <b-collapse :id="'accordion-'+number" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{works[number-1].date}}</b-card-text>
            <b-card-text>{{works[number-1].content}}</b-card-text>
            <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              multiple
            ></b-form-file>
            <b-button @click="file = null" class="mr-4 mt-2">Reset</b-button>
            <b-button class="mr-4 mt-2">submit</b-button>
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
      file: null
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
    }
  }
};
</script>
<style lang="stylus"></style>
