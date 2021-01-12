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
        title: "Some cafsdfsdfsdfsdrd1",
        description:
          "Description somedasdasdasdasomedasdasdasdasfdsfsdfsdfsdfsfsfsdfsdasadad2sfdsfsdfsdfsdfsfsfsdfsdasadad2",
      },
      {
        id: 2,
        title: "Some card2",
        description:
          "Description somedasdasdasdsomedasdasdasdasfdsfsdfsdfsdfsfsfsdfsdasadad2somedasdasdasdasfdsfsdfsdfsdfsfsfsdfsdasadad2asfdsfsdfsdfsdfsfsfsdfsdasadad2",
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
