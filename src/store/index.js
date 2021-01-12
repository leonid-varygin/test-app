import Vue from "vue"
import Vuex from "vuex"
import VueLocalStorage from "vue-localstorage"

Vue.use(Vuex)
Vue.use(VueLocalStorage)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        title: "Some No one rejects, dislikes, or avoids pleasure itself",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
      },
      {
        id: 2,
        title: "Some card 2",
        description:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      },
    ],
  },
  mutations: {
    addCard(state, cardData) {
      state.cards.push(cardData)
      console.log(state.cards)
      Vue.localStorage.set("cardData", JSON.stringify(state.cards))
    },
    setCards(state, payload) {
      state.cards = payload
    },
    updateCards(state) {
      state.cards = JSON.parse(Vue.localStorage.get("cardData")) || state.cards
    },
  },
  actions: {
    addCard({ commit }, cardData) {
      commit("addCard", cardData)
    },
    setCards({ commit }, payload) {
      commit("setCards", payload)
    },
    updateCards({ commit }) {
      commit("updateCards")
    },
  },
})
