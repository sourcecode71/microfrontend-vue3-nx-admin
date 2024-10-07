<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";
interface Props {
  text: string;
  type: string;
  size: string;
}
const props = withDefaults(defineProps<Props>(), {
  text: "",
  type: "primary",
  size: "large",
});
const buttonClass = `bc-button ${
  props.size == "large" ? "bc-button-lg" : "bc-button-sm"
} ${props.type == "primary" ? "bc-button-primary" : "bc-button-secondary"}`;

const textClass = `bc-text bc-text-md ${
  props.type == "primary" ? "bc-text-base" : "bc-text-gray-700"
}`;
</script>
<template>
  <button :class="buttonClass">
    <slot name="icon"></slot>

    <div v-if="props.text" :class="textClass">{{ props.text }}</div>
  </button>
</template>
