<template>
  <a-table :columns="AppMasterTableColumns" :data-source="appData" :scroll="{ x: 1500, y: 300 }">
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
import {AppMasterTableColumns} from "../Configs/TableConfig";
const { getAppMasterData } = useNetwork();  // Call useNetwork to get                                 the object

const appData = ref();
const initAllPrograms = async () => {
  const appResponse =await getAppMasterData();
  console.log(" program ",appResponse);
  appData.value = appResponse.data
}

onMounted(async () => {
  await initAllPrograms();
})

</script>
