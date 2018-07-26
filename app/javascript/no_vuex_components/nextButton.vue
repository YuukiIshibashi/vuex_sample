<template>
  <button class="btn btn-ai" @click="onSubmit">{{nextStep}}へ</button>
</template>

<script>
export default {
  props: ['currentStep'],
  computed: {
    nextStep() {
      return this.currentStep == 4 ? "おつかれさまでした！" : this.currentStep + 1
    }
  },
  methods: {
    onSubmit(){
      this.$emit('add-step');
    }
  },
}
</script>
