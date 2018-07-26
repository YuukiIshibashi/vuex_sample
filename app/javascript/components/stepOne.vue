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
      <next-button @add-step="toNext"></next-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
  components: {
    nextButton
  },
  computed: {
    ...mapState(['inputData']),
  },
  methods: {
    ...mapActions(['toNextStep']),
    toNext(){
      this.toNextStep(this.formData)
    }
  },
  mounted(){
    this.formData.name = this.inputData.name;
    this.formData.nickName = this.inputData.nickName;
    this.formData.age = this.inputData.age;
  }
}
</script>

<style scoped>

</style>
