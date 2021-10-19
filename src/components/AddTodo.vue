<style  scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #ef9a9a;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #ef9a9a;
  color: #fff;
  border: 1px #ef9a9a solid;
  cursor: pointer;
}
</style>

<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" placeholder="Add Todo..." v-model="title" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      //點擊後呼叫action中的加入todo函式，並傳入title資料
      this.addTodo(this.title);
    },
  },
};
</script>

