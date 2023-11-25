
var app = new Vue({
   el: '#app',
   data: {
       username: ''
   },
   methods: {
       resetUsername: function() {
           this.username = 'DefaultUser';
       }
   }
});
