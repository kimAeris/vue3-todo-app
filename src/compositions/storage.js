import { reactive, toRefs } from 'vue'

export const useStorage = () => {
    const KEY = 'my-todo-list'
    const storage_obj = reactive({ storage_id: 0 })     // 객체에 반응성 추가
    const loadTodos = (initTodos) => {
      let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
      temp_todos.forEach((todo, idx) => {
        todo.id = idx
      })
      storage_obj.storage_id = temp_todos.length
      initTodos(temp_todos)
    }
    const saveTodos = (todos) => {
      localStorage.setItem(KEY, JSON.stringify(todos.value))
    }
    return {
      ...toRefs(storage_obj),   // 객체의 내부 속성들 모두에게 반응성 추가
      loadTodos,
      saveTodos,
    }
  }