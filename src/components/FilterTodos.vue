
<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #ef9a9a 1px solid;
  border-radius: 10px;;
}
</style>
<template>
  <div>
    Filter todos:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="30">30</option>
      <option value="20">20</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: {
    ...mapActions(["filterTodos"]),
  },
};
</script>


