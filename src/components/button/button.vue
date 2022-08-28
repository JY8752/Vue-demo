<template>
  <button :class="[$style]">{{ name }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { clsx } from 'clsx'

type StyleOptions = {
  size: ['small', 'medium', 'large'],
  color?: ['orange']
}

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    },
    options: {
      type: Object as PropType<StyleOptions>
    }
  },
  setup(props) {
    const { size, color } = props.options ?? {}
    return {
      size, color
    }
  }
})
</script>

<style module>
.small {
  width: 200px;
  height: 100px;
}
</style>