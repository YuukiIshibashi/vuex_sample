<template>
  <div>
    <h2>1,あなたのことをおしえてください！</h2>
    <ul>
      <li class="input_item">
        <p>お名前</p>
        <input v-model="formData.name">
      </li>
      <li class="input_item">
        <p>ニックネーム</p>
        <input v-model="formData.nickName">
      </li>
      <li class="input_item">
        <p>年齢</p>
        <input v-model="formData.age">
      </li>
    </ul>
    <div class="center">
      <next-button @add-step="toNext" :currentStep="currentStep"></next-button>
    </div>
  </div>
</template>

<script>
import nextButton from './nextButton.vue';

export default {
  data: function () {
    return {
      formData:{
        name: "",
        nickName: "",
        age: "",
      }
    }
  },
  props: ['inputData', 'currentStep'],
  components: {
    nextButton
  },
  methods: {
    toNext(){
      this.$emit('to-next-step', this.formData);
    }
  },
  mounted(){
    this.formData.name = this.inputData.name;
    this.formData.nickName = this.inputData.nickName;
    this.formData.age = this.inputData.age;
  }
}
</script>
