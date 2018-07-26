<template>
  <div>
    <h2>3.希望を教えてください</h2>
    <ul>
      <li class="input_item">
        <p>行ってみたい場所</p>
        <input v-model="formData.place">
      </li>
      <li class="input_item">
        <p>行ってみたい国</p>
        <input v-model="formData.country">
      </li>
      <li class="input_item">
        <p>やってみたいこと</p>
        <input v-model="formData.play">
      </li>
    </ul>
    <div class="center">
      <back-button></back-button>
      <next-button @add-step="toNext"></next-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import nextButton from './nextButton.vue';
import backButton from './backButton.vue';
export default {
  data: function () {
    return {
      formData:{
        place: "",
        country: "",
        play: "",
      }
    }
  },
  components: {
    nextButton,
    backButton
  },
  computed: {
    ...mapState(['inputData']),
  },
  methods: {
    ...mapActions(['toNextStep']),
    ...mapMutations(['RETURN_STEP']),
    toNext(){
      this.toNextStep(this.formData)
    }
  },
  mounted(){
    this.formData.place = this.inputData.place;
    this.formData.counrty = this.inputData.counrty;
    this.formData.play = this.inputData.play;
  }
}
</script>
