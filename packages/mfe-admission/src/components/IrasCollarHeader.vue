<script lang="ts" setup></script>
<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>
<style scoped>
.wrapper {
  width: 100%;
  display: inline-flex;
  padding: 20px 24px 15px 24px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}
</style>
