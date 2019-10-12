<template>
  <ul class="nav nav-pills">
    <router-link :to="{ name: 'home' }" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link :to="{ name: 'about' }" tag="li" active-class="active"><a>About</a></router-link>
    <router-link :to="{ name: 'custom2' }" tag="li" active-class="active"><a>Custom2</a></router-link>
    <!-- <li role="presentation"><router-link to="/about">About</router-link></li>
    <li role="presentation"><router-link to="/custom1">Custom1</router-link></li>
    <li role="presentation"><router-link to="/custom2">Custom2</router-link></li> -->
  </ul>
</template>
