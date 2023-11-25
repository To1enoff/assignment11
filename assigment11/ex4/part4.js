
var app = new Vue({
   el: '#app',
   data: {
       username: '',
       email: '',
       password: '',

       errors: {
           username: '',
           email: '',
           password: ''
       }
   },
   methods: {
       validateForm: function() {
           this.errors.username = '';
           this.errors.email = '';
           this.errors.password = '';

           if (!this.username.trim()) {
               this.errors.username = 'Username is required.';
           }
           if (!this.isValidEmail(this.email)) {
               this.errors.email = 'Please enter a valid email address.';
           }
           if (this.password.length < 6) {
               this.errors.password = 'Password must be at least 6 characters.';
           }

           return !Object.values(this.errors).some(Boolean);
       },
       submitForm: function() {
           if (this.validateForm()) {
               alert('Form submitted successfully!');
           } else {
               alert('Form contains errors. Please fix them.');
           }
       },
       isValidEmail: function(email) {
           var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           return emailRegex.test(email);
       }
   }
});
