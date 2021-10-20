import axios from 'axios';

const state = {
  todos: []
};
const getters = {
  getTodos: (state) => state.todos,
};
const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // console.log(res.data);
    commit('setTodos', res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", { title, completed: false });
    commit('addNewTodo', res.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id)
  },
  async filterTodos({ commit }, e) {
    //取得下拉選單的值
    // console.log(e.target.value);
    let selected = parseInt(e.target.value);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${selected}`);
    commit('setTodos', res.data);
  },
  async updataTodo({ commit }, updTodo) {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo);
    //上方 url 後面要加入要傳入的參數資料
    commit('renewTodo', res.data);
  },

};
const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  addNewTodo: (state, todo) => {
    state.todos.unshift(todo);
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
    //使用filter 將，不是id的篩選出來
  },
  // getFilterTodos: (state, selectedTodos) => {
  //   state.todos = selectedTodos;
  // }
  renewTodo: (state, updTodo) => {
    console.log(updTodo);
    //我們是要在同一筆資料上更新
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    //以下簡單確認 indx 是否有存在
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
