<template>
  <a-table  :columns="AppApplicantTableColumns" :data-source="appData" :scroll="{  y: 1000 }">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <IrasCollarButton type="secondary" size="small" data-cy="btn-refresh" id="refresh-button">
          <template #icon>
            <EditOutlined />
          </template>
        </IrasCollarButton>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import IrasCollarButton from '../components/IrasCollarButton.vue';
import { EditOutlined } from "@ant-design/icons-vue";
import { useNetwork } from '../services/useNetwork';
import {AppApplicantTableColumns} from "../Configs/TableConfig";
const { getFakeAppMasterData } = useNetwork();  

const appData = ref();
const initAllPrograms = async () => {
  const appResponse =await getFakeAppMasterData();
  appData.value = appResponse.data
}

onMounted(async () => {
  await initAllPrograms();
})

</script>
