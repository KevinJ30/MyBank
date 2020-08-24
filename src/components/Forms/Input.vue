<template>
  <div class="form-group">
    <label v-bind:for="name">{{ name }}</label>
    <input type="text" class="form-control" v-bind:name="name" v-bind:placeholder="placeholder"/>
    <FormFeedbackComponent v-bind:type="feedback.type" v-bind:message="feedback.message" />
  </div>
</template>

<script>
import FormFeedbackComponent from "@/components/Forms/FormFeedback";

export default {
  name: 'InputComponent',
  props: {
    name: String,
    placeholder: String,
    feedback: Object
  },

  components: {
      FormFeedbackComponent
  },

  data: () => {
    return {
      error: false
    }
  }
}
</script>