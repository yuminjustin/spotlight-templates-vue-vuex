<template>
  <el-menu :default-active="active" class="oh" @open="handleOpen" @close="handleClose" background-color="#efefef" text-color="#666"
    active-text-color="#409EFF">
    <template v-for="(item,idx) in $store.state.menu">
      <Item :item="item" :key="idx" :idx="idx" @openPage='openPage' />
    </template>
  </el-menu>
</template>
<script>
  import Item from "./item";

  export default {
    data() {
      return {
        active: "1"
      };
    },
    watch: {
      '$route.path': {
        handler(val, oldVal) {
          if (val != '/') this.active = this.getActive() || this.active;
          else this.active = '';
        }
      }
    },
    created() {
      this.$store.dispatch('getMenu')
    },
    components: {
      Item
    },
    methods: {
      handleOpen(key, keyPath) {
        //console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        //console.log(key, keyPath);
      },
      openPage(item) {
        this.$router.push(item.url);
      },
      getActive() {
        let current = location.hash,
          fn = (list) => {
            let bool = false
            list.map((item) => {
              if (item.url) {
                if (item.url == current || ~item.url.indexOf(current) || ~current.indexOf(item.url)) bool = item.idx;
              } else if (item.group && !bool) bool = fn(item.group)
            })
            return bool;
          }
        return fn(this.$store.state.menu)
      }
    }
  };
</script>
