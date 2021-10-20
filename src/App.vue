<style lang="scss">
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  // background: linear-gradient(135deg, #d88425 50%, #fff 50%);
  background-image: repeating-linear-gradient(
    135deg,
    //↘
    #fff4d3 /*0px*/,
    #f3d8ba 100px,
    //100px
    #fff4d3 100px,
    #fff4d3 105px,
    //5px
    #f3d8ba 105px,
    #f3d8ba 130px,
    //25px
    #fff4d3 130px,
    #fff4d3 260px,
    //130px
    #fff4d3 260px,
    #fff4d3 265px,
    //5px
    #fff4d3 265px,
    #fff4d3 270px,
    //5px
    #fff4d3 270px,
    #fff4d3 330px //60px
  );
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
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
  <!-- <router-view /> -->
</template>


<script>
// @ is an alias to /src
import Todos from "@/components/Todos.vue";
import AddTodo from "@/components/AddTodo.vue";
import FilterTodos from "@/components/FilterTodos.vue";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>
