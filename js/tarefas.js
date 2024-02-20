new Vue({
    el: '#app',
    data: {
      tasks: [
       
      ],
      newTask: {
        title: '',
        description: '',
        dueDate: ''
      },
      showForm: false
    },
    methods: {
      addTask() {
        
        this.tasks.push({
          title: this.newTask.title,
          description: this.newTask.description,
          dueDate: this.newTask.dueDate
        });
        
        this.newTask.title = '';
        this.newTask.description = '';
        this.newTask.dueDate = '';
        this.showForm = false;
      },
      editTask(index) {
       
        console.log('Editar tarefa:', this.tasks[index]);
      },
      deleteTask(index) {
        
        this.tasks.splice(index, 1);
      }
    }
  });
  