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
      <step-one v-if="isCurrentStep(1)"
                :inputData="inputData"
                :currentStep="currentStep"
                @to-next-step="MOVE_ON_STEP">
      </step-one>
      <step-two v-if="isCurrentStep(2)"
                :inputData="inputData"
                :currentStep="currentStep"
                @to-next-step="MOVE_ON_STEP"
                @to-prev-step="RETURN_STEP">
      </step-two>
      <step-three v-if="isCurrentStep(3)"
                :inputData="inputData"
                :currentStep="currentStep"
                @to-next-step="MOVE_ON_STEP"
                @to-prev-step="RETURN_STEP">
      </step-three>
    </div>
  </div>
</template>

<script>
import StepOne from './no_vuex_components/stepOne.vue';
import StepTwo from './no_vuex_components/stepTwo.vue';
import StepThree from './no_vuex_components/stepThree.vue';

export default {
  data: function () {
    return {
      currentStep:1,
      inputData: {}
    }
  },
  components: {
    StepOne,
    StepTwo,
    StepThree,
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
    },
    MOVE_ON_STEP(formData) {
      this.currentStep += 1;
      Object.assign(this.inputData, formData);
    },
    RETURN_STEP() {
      this.currentStep -= 1;
    },
  }
}
</script>
