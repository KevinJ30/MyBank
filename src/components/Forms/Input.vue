<template>
  <div class="form-group">
    <label v-bind:for="name">Username test</label>
    <input type="text" class="form-control" v-bind:name="name" v-bind:placeholder="placeholder"/>
    <FormFeedbackComponent type="error" message="C'est un succes de l'application" />
  </div>
</template>

<script>
import FormFeedbackComponent from "@/components/Forms/FormFeedback";

export default {
  name: 'InputComponent',
  props: {
    name: String,
    placeholder: String,
    information: Object
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