<template>
  <div class="first-app">
    {{ msg }}
    <confirm text="注册" @message="getMeaasge"></confirm>
    <el-button type="primary" :loading="true">主要按钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
    <el-button type="primary"
      >下一页<i class="el-icon-arrow-right el-icon--right"></i
    ></el-button>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button>默认按钮</el-button>
    <el-button size="medium">中等按钮</el-button>
    <el-button size="small">小型按钮</el-button>
    <el-button size="mini">超小按钮</el-button>
    <el-button round>默认按钮</el-button>
    <el-button size="medium" round>中等按钮</el-button>
    <el-button size="small" round>小型按钮</el-button>
    <el-button size="mini" round>超小按钮</el-button>
    <p class="link">
      <router-link to="/second">去第二个页面</router-link>
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import Confirm from "../sub/Confirm";
import ElButton from "../../packages/button";
Vue.use(ElButton);
export default {
  name: "First",
  components: {
    Confirm,
  },
  data() {
    return {
      msg: "Welcome to FirstApp",
    };
  },
  methods: {
    getMeaasge(val) {
      console.log(val);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.first-app {
  font-size: 30px;
  .link {
    a {
      color: red;
    }
  }
}
</style>
