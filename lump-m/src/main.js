// Import jQuery
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

Vue.use(VueLodash, lodash)

// Import Vue
import Vue from 'vue'

// Router
import VueRouter from 'vue-router'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'

// Import App
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

//////
// ALL COMPONENTS 
//////

// Static imports
// import Static from './components/Static/Static.vue'
// import Search from './components/Search/Search.vue'
// import HeaderProfile from './components/Profile/HeaderProfile.vue'

// Profile imports
import ProfileEvents from './components/Profile/ProfileEvents/ProfileEvents.vue'
import Musics from './components/Profile/ProfileMusics/Musics/Musics.vue'
import ProfileStars from './components/Profile/ProfileStars/ProfileStars.vue'
import ProfilePlaylists from './components/Profile/ProfilePlaylists/ProfilePlaylists.vue'
import ProfileCalendar from './components/Profile/ProfileCalendar/ProfileCalendar.vue'
import Friends from './components/Profile/ProfileFriends/Friends/Friends.vue'

// Create imports
import Create from './components/Create/Create.vue'
import AddFriends from './components/Create/AddFriends/AddFriends.vue'

// Events imports
import allComingEvents from './components/Events/AllComingEvents/allComingEvents.vue'
import allPassedEvents from './components/Events/AllPassedEvents/allPassedEvents.vue'
import Event from './components/Events/Event/Event.vue'

// Authentification imports
import SignUp from './components/Authentification/SignUp/SignUp.vue'
import Login from './components/Authentification/Login/Login.vue'

// Using Vue Router
Vue.use(VueRouter);
Vue.use (VueAxios, axios);

// AXIOS HEADER Authorization
axios.defaults.baseURL = 'http://localhost:8080/api/1.0/';

// Configuration of our routes
const routes = [
  { path: '/Evenements/', component: ProfileEvents, name: 'profilevents' },
  { path: '/Musiques/', component: Musics, name: 'musics' },
  { path: '/Etoiles/', component: ProfileStars, name: 'profilestars' },
  { path: '/Playlists/',component: ProfilePlaylists, name: 'profileplaylists' },
  { path: '/Calendrier/',component: ProfileCalendar, name: 'profilecalendar' },
  { path: '/Amis/', component: Friends, name: 'friends' },
  { path: '/Futurs-evenements', component: allComingEvents, name: 'allcomingevents' },
  { path: '/Anciens-evenements/', component: allPassedEvents, name: 'allpassedevents' },
  { path: '/Evenement/:comingEventId', component: Event, name: 'event' },
  { path: '/Inscription/', component: SignUp, name: 'signUp' },
  { path: '/Connexion/', component: Login, name: 'login' },  
  // { path: '*', redirect: 'Login' }
]

// Initialize router
const router = new VueRouter({
  routes,
  mode : 'history'
})

// On initialise l'application
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router,
})