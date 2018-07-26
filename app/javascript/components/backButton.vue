<template>
  <button class="btn btn-black" @click="RETURN_STEP">もどる</button>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['RETURN_STEP']),
  }
}
</script>
