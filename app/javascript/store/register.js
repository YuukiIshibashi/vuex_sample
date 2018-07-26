import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  currentStep: 1,
  inputData:{},
};

const store = new Vuex.Store({
  state,
  // getters: {
  //   currentStep: state => {
  //     return currentStep;
  //   },
  // },
  actions: {
    toNextStep: ({ commit }, formData) =>{
      commit('MOVE_ON_STEP');
      commit('ADD_INPUT_DATA', { formData });
    },
  },
  mutations: {
    MOVE_ON_STEP(state) {
      state.currentStep += 1;
    },
    RETURN_STEP(state) {
      state.currentStep -= 1;
    },
    ADD_INPUT_DATA(state, { formData }) {
      Object.assign(state.inputData, formData);
    },
  }
});

export default store;
