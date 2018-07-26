<template>
  <button class="btn btn-black" @click="onSubmit">もどる</button>
</template>

<script>
export default {
  methods: {
    onSubmit(){
      this.$emit('pull-step');
    }
  }
}
</script>
