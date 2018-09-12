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
      return "Hi there, my name is " + this.person.name + " " + this.person.lastName + " and i'm " + this.person.age
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
        this.answer = 'The number is bigger than 500'
      }
      else if(newValue < 500){
        this.answer = 'The number is smaller than 500'
      }
      else{
        this.answer = 'The number is equal to 500'
      }
    }
  }
})

var yesNoApp = new Vue({
  el: '#yesNo',
  data: {
    question: '',
    answer: 'Ask something and i will answer yes or no'
  },
  methods: {
    getAnswer: function(){

      axios.get('https://yesno.wtf/api').then(function(response){
        yesNoApp.answer = response.data.answer
      }).catch(function(error){
        console.log(error)
      })

    }
  },
  watch: {
    question: function(newQuestion){

      if (newQuestion) {

        if (this.question.indexOf('?') == -1) {
          this.answer = 'Question mark is missing'
        }
        else {
          this.answer = 'MiniCoding is thinking...'
          this.getAnswer()
        }

      }
      else {
        this.answer = 'Ask something and i will answer yes or no'
      }
    }
  }
})
