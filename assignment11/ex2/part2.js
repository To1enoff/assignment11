
var app = new Vue({
   el: '#app',
   data: {
       items: ['Banana', 'Apple', 'Lemon']
   },
   methods: {
       addItem: function() {
           var newItem = prompt('Enter a new item:');
           if (newItem) {
               this.items.push(newItem);
           }
       },
       removeItem: function(index) {
           this.items.splice(index, 1);
       }
   }
});
