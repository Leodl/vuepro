<template>
  <div class="hello">

    <button class="btn" @click="click()">jquery</button>
     <input type="button" name="" value="外部资源测试" class="test">

     <router-link v-bind="{to:'/test'}">路由跳转</router-link>
 
    <el-button @click="show = !show">Click Me element-ui</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">哈哈哈</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">嘻嘻嘻</div>
      </transition>
    </div>
  </div>

  </div>


 

</template>

<script type="ecmascript-6">

import "@/assets/css/test.css"
// import "@/assets/css/test.css"
import "@/assets/js/test.js"

   export default {
      data(){
      return{
        show:true
      }
    },
    created(){
     
    },
    methods:{
      click(){
        alert($(".btn").text())
      },
      test(){
        myfun()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

</style>
