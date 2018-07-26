<template>
  <div>
    <h2>おつかれさまでした！</h2>
    <ul>
      <li>お名前：{{inputData.name}}</li>
      <li>ニックネーム：{{inputData.nickName}}</li>
      <li>年齢：{{inputData.age}}</li>
      <li>お名前：{{inputData.name}}</li>
      <li>好きな食べ物：{{inputData.food}}</li>
      <li>好きな色：{{inputData.color}}</li>
      <li>好きなアーティスト：{{inputData.artist}}</li>
      <li>行ってみたい場所：{{inputData.place}}</li>
      <li>行ってみたい国：{{inputData.country}}</li>
      <li>やってみたいこと：{{inputData.play}}</li>
      <li>お父さんへ：{{inputData.father}}</li>
      <li>お母さんへ：{{inputData.mother}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['inputData']),
  },
}
</script>
