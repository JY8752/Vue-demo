<template>
  <label :class="$style.label">{{ label }}:</label>
  <input type="text" :class="$style.input"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'my-input',
  props: {
    label: {
      type: String as PropType<string>
    }
  },
  setup() {
  }
})

</script>

<style module>
.label {
  margin-right: 30px;
  font-weight: bold;
}
.input {
  height: 20px;
  border-radius: 10px;
}
</style>