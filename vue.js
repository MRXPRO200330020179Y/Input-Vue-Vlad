const App = {
    data(){
      return{
        placeholder: 'Введите название заметки',
        title: 'Список заметок',
        inputValue: '',
        notes: ['Заметка 1','Заметка 2']
      }
    },

    methods:{
      
      addNewNote(){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      },

      toUpperCase(item){
        return item.toUpperCase()
      },

      removeNote(index){
        this.notes.splice(index, 1)
      },

    },

    computed:{
      doubleContComputed(){
        return this.notes.length * 2
      },
    },

    watch:{
      inputValue(value){
        this.inputValue
      }
    }
}

Vue.createApp(App).mount('#app')