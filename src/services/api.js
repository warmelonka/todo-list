import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';
const REQUEST_TIMEOUT = 5000;

const createApi = () => axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

export default {
  fetchAllTodos() {
    return createApi().get('todos').then((res) => res.data);
  },

  addTask(task) {
    return createApi().post('todos', task).then((res) => res.data);
  },

  editTask(task) {
    return createApi().put(`todos/${task.id}`, task).then((res) => res.data);
  },

  removeTask(id) {
    return createApi().delete(`todos/${id}`);
  },
};
