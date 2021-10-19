<style lang="scss">
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #fff4d3;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>

<template>
  <div id="app">
    <div class="container">
      <Todos />
    </div>
  </div>
  <!-- <router-view /> -->
</template>


<script>
// @ is an alias to /src
import Todos from "@/components/Todos.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo,
  },
};
</script>
