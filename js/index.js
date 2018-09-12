var computedApp = new Vue({
  el: '#computed',
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

var watchedApp = new Vue({
  el: '#watched',
  data: {
    number: 100,
    answer: 'The number is smaller than 500'
  },
  watch: {
    number: function(newValue){
      if (newValue > 500){
        this.answer = 'The number is bigger than 500';
      }
      else if(newValue < 500){
        this.answer = 'The number is smaller than 500';
      }
      else{
        this.answer = 'The number is equal to 500';
      }
    }
  }
})
