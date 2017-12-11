<template>
  <div>
    <Top />
    <el-row class="c main_body oh">
      <el-col :span="3">
        <Bar :style="{'height':h+'px'}" />
      </el-col>
      <el-col :span="21" :style="{'height':h+'px'}" class="oa main_content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Top from 'C/head'
  import Bar from 'C/bar'

  export default {
    name: 'app',
    data() {
      return {
        h: window.innerHeight - 100
      }
    },
    components: {
      Top,
      Bar
    }
  }
</script>
