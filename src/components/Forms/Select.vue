<template>
  <div class="form-group">
    <label v-bind:for="name">{{ name }}</label>
    <select v-bind:name="name" class="form-control">
      <option :value="option.key" v-for="option in options" :key="option.key">{{ option.value }}</option>
    </select>
    <FormFeedbackComponent />
  </div>
</template>

<script>
import FormFeedbackComponent from "@/components/Forms/FormFeedback";

export default {
    name: 'SelectComponent',
    components: {
      FormFeedbackComponent
    },
    props: {
      name: String,
      options: Array
    }
}
</script>