<template>
  <button class="btn btn-ai" @click="onSubmit">{{nextStep}}へ</button>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['currentStep']),
    nextStep() {
      return this.currentStep == 4 ? "おつかれさまでした！" : this.currentStep + 1
    }
  },
  // props: {
  //   index: ""
  // },
  methods: {
    onSubmit(){
      this.$emit('add-step');
    }
  },
}
</script>
