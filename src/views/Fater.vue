<!--
 * @Author: your name
 * @Date: 2020-12-03 11:55:25
 * @LastEditTime: 2020-12-03 11:55:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \my-app\src\views\Fater.vue
-->
<template>
  <div>
    <Children :list="list" @editage='EditAge'></Children>
  </div>
</template>

<script>
import Children from "./Children";
export default {
  data() {
    return {
      list: [
        {
          name: "张三",
          age: "18",
        },
        {
          name: "李四",
          age: "19",
        },
      ],
    }
  },
  components: {
    Children: Children,
  },
  methods: {
      EditAge(index) {
          this.list[index].age = index
      }
  }
};
</script>

<style>
</style>