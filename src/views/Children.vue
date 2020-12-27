<!--
 * @Author: your name
 * @Date: 2020-12-03 11:55:54
 * @LastEditTime: 2020-12-27 20:39:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editre
 * @FilePath: \my-app\src\views\Children.vue
-->
<template>
  <div>
    <span v-for="(item, index) in list" :key="index">
      {{ item.name }} -- {{ item.age }}
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
      <button @click="EditAge(index)">点击修改名字baobao</button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  mounted() {
    console.log(this.list, "父组件的值");
  },
  methods: {
    EditAge(index) {
      this.$emit("editage", index);
      console.log(index);
    },
  },
};
</script>

<style>
</style>