import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// On défini les données partagées souhaitées
const state = {
  playingItem: null,
  connexion: null,
  saveSong: null,
  deletemyfriend: null
}

// On stocke les données grâce aux mutations
/*

  IMPORTANT :

  Pour stocker les données depuis un composant, vous faites :
  this.$store.commit('SET_PLAYING_ITEM', video)

  "SET_PLAYING_ITEM" correspond au nom de votre mutation.
  "result" correspond à la variable que vous récupérer dans votre composant de recherche.

*/
const mutations = {
  SET_PLAYING_ITEM (state, result) {
    state.playingItem = result
  },
  SET_PROFIL_DATAS (state, Result) {
    state.connexion = Result
  },
  ADD_MUSIC (state, Result) {
    state.saveSong = Result
  },
  SET_FRIEND (state, gridData) {
  state.deletemyfriend = gridData
  }
}

// On récupère les données grâce aux getters, qui seront accessibles depuis les composants
const getters = {
  playingItem: state => state.playingItem,
  connexion: state => state.connexion,
  deletemyfriend: state => state.deletemyfriend

}

// On initialise le store de Vuex afin que les composants aient accès aux données
export default new Vuex.Store({
  state,
  getters,
  mutations
})


/*

 IMPORTANT :

 Pour récupérer le playingItem dans votre composant sidebar.vue, vous pouvez utiliser mapGetters.
 mapGetters est à importer dans votre composant.
 C'est un utilitaire de vuex qui permet de récupérer les données de vuex depuis un composant.
 Il est à utiliser dans l'objet "computed" de votre composant, comme ceci :

  import { mapGetters } from 'vuex'

  ...

  export default {

    ...

    computed: {
      ...mapGetters([
        'playingItem'
      ])
    }

    ...

  }

  Vous aurez ainsi accès à la variable comme une variable computed classique, avec this.playingItem

 */