<template>
  <div class="container">
    <h1>ABOUT YOU</h1>
    <h4>make sure to fill out the form, if the paragraph below doesn't make sense!</h4>
    <hr>
    <p v-if="first">Hey there, <span>{{ first }}</span>! Your full name is
      <span>{{ first }} {{ last }}</span> and for a living you are a 
      <span>{{ occu }}</span>, very cool! You were born on <span>{{ bday }}</span> and
      your favorite food is <span>{{ favFood }}</span>!
    </p>
    <p v-else>{{ noData }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first: this.$route.query.first,
      last: this.$route.query.last,
      occu: this.$route.query.occupation,
      bday: this.$route.query.bday,
      favFood: this.$route.query.favFood,
      noData: 'Go back to home and fill out the form to see your "About You".'
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 24px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  span {
    color: darkorchid;
  }
</style>


