var app = new Vue({
  el: '#app',
  data: {
    person: {
      name: "Mini",
      lastName: "Coding",
      age: 26
    }
  },
  computed: {
    description: function(){
      return "Hi there, my name is " + this.person.name + " " + this.person.lastName + " and i'm " + this.person.age;
    }
  }
})
