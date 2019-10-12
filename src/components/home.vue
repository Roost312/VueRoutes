<template>
  <div class="container">
    <h1>HOME</h1>
    <p>Welcome to my routes. At the top of the page you will see the navigation routes to my about me and custom2. To see custom1, fill in the text boxes and then click on the "custom1" button</p>
    <label for="name">first name</label>
    <input type="text" class="form-control" v-model="firstName">
    <label for="name">last name</label>
    <input type="text" class="form-control" v-model="lastName">
    <label for="name">occupation</label>
    <input type="text" class="form-control" v-model="occupation">
    <label for="name">birthday</label>
    <input type="text" class="form-control" v-model="bday">
    <label for="name">favorite food</label>
    <input type="text" class="form-control" v-model="food">
    <br>
    <router-link tag="button" class="btn btn-primary" :to="{ name: 'custom1', query: { first: this.firstName, last: this.lastName, occupation: this.occupation, bday: this.bday, favFood: this.food} }">
      Custom1</router-link>

  </div>
</template>


<script>
  export default {
    data () {
      return {
        firstName: '',
        lastName: '',
        occupation: '',
        bday: '',
        food: ''
      }
    }
  }
</script>


