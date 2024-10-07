<template>
  <div class="container">
    <AdmissionPortal />
    <div>Name: host</div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';
// @ts-ignore
const AdmissionPortal = defineAsyncComponent(() => import("mfe_admission/App"))
export default {
  components: {
    AdmissionPortal
  }
}
</script>
