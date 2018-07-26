<template>
  <div>
    <h2>4.さいごにひとこと！</h2>
    <ul>
      <li class="input_item">
        <p>お父さんへ</p>
        <input v-model="formData.father">
      </li>
      <li class="input_item">
        <p>お母さんへ</p>
        <input v-model="formData.mother">
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
        father: "",
        mother: "",
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
    this.formData.father = this.inputData.father;
    this.formData.mother= this.inputData.mother;
  }
}
</script>
