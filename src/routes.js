import about from './components/user/about.vue'
import custom1 from './components/user/custom1.vue'
import custom2 from './components/user/custom2.vue'
import home from './components/home.vue'

export const routes = [
  { path: '', component: home, name: 'home' },
  { path: '/about', component: about, name: 'about' },
  { path: '/custom1', component: custom1, name: 'custom1' },
  { path: '/custom2', component: custom2, name: 'custom2' },
  { path: '*', redirect: '/' }
]