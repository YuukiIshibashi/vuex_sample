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
      <back-button></back-button>
      <next-button @add-step="toNext"></next-button>
      <!-- <button class="btn btn-ai" @click="RETURN_STEP">もどる</button>
      <button class="btn btn-ai" @click="toNext">次へ</button> -->
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
    this.formData.food = this.inputData.food;
    this.formData.color = this.inputData.color;
    this.formData.artist = this.inputData.artist;
  }
}
</script>
