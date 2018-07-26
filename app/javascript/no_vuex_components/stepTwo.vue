<template>
  <div>
    <h2>2.好きなものを教えてください</h2>
    <ul>
      <li class="input_item">
        <p>好きなたべもの</p>
        <input v-model="formData.food">
      </li>
      <li class="input_item">
        <p>好きないろ</p>
        <input v-model="formData.color">
      </li>
      <li class="input_item">
        <p>好きなアーティスト</p>
        <input v-model="formData.artist">
      </li>
    </ul>
    <div class="center">
      <back-button @pull-step="toBack"></back-button>
      <next-button @add-step="toNext" :currentStep="currentStep"></next-button>
    </div>
  </div>
</template>

<script>
import nextButton from './nextButton.vue';
import backButton from './backButton.vue';

export default {
  data: function () {
    return {
      formData:{
        food: "",
        color: "",
        artist: "",
      }
    }
  },
  components: {
    nextButton,
    backButton
  },
  props: ['inputData', 'currentStep'],
  methods: {
    toNext(){
      this.$emit('to-next-step', this.formData);
    },
    toBack(){
      this.$emit('to-prev-step');
    }
  },
  mounted(){
    this.formData.food = this.inputData.food;
    this.formData.color = this.inputData.color;
    this.formData.artist = this.inputData.artist;
  }
}
</script>
