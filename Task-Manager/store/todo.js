import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: "Take nap", isFav: false, isDueOn: null},
      {id: 2, title: "Get groceries", isFav: true, isDueOn: null},
      {id: 3, title: "Dentist appointment", isFav: false, isDueOn: 'Monday'},
      {id: 4, title: "meet friends", isFav: false, isDueOn: 'Sunday'},
      {id: 5, title: "gamer time", isFav: true, isDueOn: 'Tuesday'}
    ]
  }),
  getters: {
    favorites() {
      return this.tasks.filter(t => t.isFav)
    },
    dues() {
      return this.tasks.filter(t => t.isDueOn)
    },
    favsCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    duesCount() {
      return this.tasks.reduce((p, c) => {
        return c.isDueOn ? p + 1 : p
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => {
        return t.id !== id
      })
    },
    toggleFav(id) {
      const task = this.tasks.find(t => t.id === id)
      task.isFav = !task.isFav
    },
    setTask(Id, Title, IsDueOn, IsFav) {
      this.tasks.push({id: Id, title: Title, isFav: IsFav, isDueOn: IsDueOn})
    }
  }
})