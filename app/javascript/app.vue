<template>
  <div class="container">
    <nav class="global_indicator">
      <ul class="global_indicator_list">
        <li class="global_indicator_item" :class="step_status(1)">1</li>
        <li class="global_indicator_item" :class="step_status(2)">2</li>
        <li class="global_indicator_item" :class="step_status(3)">3</li>
        <li class="global_indicator_item" :class="step_status(4)">4</li>
      </ul>
    </nav>
    <div class="register_area">
      <step-one v-if="isCurrentStep(1)"></step-one>
      <step-two v-if="isCurrentStep(2)"></step-two>
      <step-three v-if="isCurrentStep(3)"></step-three>
      <step-four v-if="isCurrentStep(4)"></step-four>
      <step-goal v-if="isCurrentStep(5)"></step-goal>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import StepOne from './components/stepOne.vue';
import StepTwo from './components/stepTwo.vue';
import StepThree from './components/stepThree.vue';
import StepFour from './components/stepFour.vue';
import StepGoal from './components/stepGoal.vue';

export default {
  data: function () {
    return {
    }
  },
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepGoal
  },
  computed: {
    ...mapState(['currentStep']),
  },
  methods: {
    isCurrentStep(n){
      return this.currentStep == n
    },
    step_status(n){
      if(this.currentStep == n) {
        return "is_active"
      }else{
        return this.currentStep < n ? false : "is_done"
      }
    }
  }
}
</script>

<style scoped>

</style>
