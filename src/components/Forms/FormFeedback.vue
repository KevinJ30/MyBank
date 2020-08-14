<template>
  <div class="form__input-feedback">
      <span class="input-feedback" v-bind:class="type">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    message: String
  }
}
</script>

<style>


</style>