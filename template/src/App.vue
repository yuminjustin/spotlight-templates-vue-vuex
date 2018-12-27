<template>
  <div>
    <Top />
    <el-row :class="style.main_body">
      <el-col :span="3">
        <Bar :style="{'height':h+'px'}" />
      </el-col>
      <el-col :span="21" :style="{'height':h+'px'}" :class="style.main_content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Top from 'C/head'
  import Bar from 'C/bar'
  import style from "B/assets/css/page.css"

  export default {
    name: 'app',
    data() {
      return {
       style,
        h: window.innerHeight - 100
      }
    },
    components: {
      Top,
      Bar
    }
  }
</script>
