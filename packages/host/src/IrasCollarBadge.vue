<script lang="ts" setup>
import { defineProps } from "vue";
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="wrapper">
    <div class="bc-badge">
      <div class="bc-text-primary-700 bc-text-sm">
        {{ props.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  mix-blend-mode: multiply;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}
</style>
