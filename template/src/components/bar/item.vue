<template>
    <div>
        <template v-if="item.group">
            <el-submenu :index="String(idx)">
                <template slot="title">\{{item.name}}</template>
                <template v-for="(son,idx2) in item.group">
                    <Item :item="son" :key="idx+'-'+idx2" :idx="idx+'-'+idx2" @openPage="openPage" />
                </template>
            </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index="String(idx)" @click="openPage(item)">\{{item.name}}</el-menu-item>
        </template>
    </div>
</template>
<script>
    export default {
        name: "Item",
        props: ["item", "idx"],
        methods: {
            openPage(item) {
                this.$emit("openPage", item);
            }
        }
    };
</script>
