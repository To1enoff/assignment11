
var app = new Vue({
   el: '#app',
   data: {
       tasks: [
           { title: 'Task 1', completed: false },
           { title: 'Task 2', completed: true },
           { title: 'Task 3', completed: false }
       ],
       newTask: ''
   },
   methods: {
       toggleTask: function(index) {
           this.tasks[index].completed = !this.tasks[index].completed;
       },
       addTask: function() {
           if (this.newTask.trim()) {
               this.tasks.push({ title: this.newTask, completed: false });
               this.newTask = '';
           }
       }
   }
});
