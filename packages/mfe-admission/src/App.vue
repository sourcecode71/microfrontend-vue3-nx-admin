<template>
  <div class="iras-container">
    <IrasCollarHeader>
      <div class="header-left">
        <div class="start">
          <div class="bc-text-lg bc-text-primary">Admission Portal</div>
          <IrasCollarBadge :text="`2024`" />
          <IrasCollarBadge data-cy="release-badge" :text="'Autumn'" />
          <IrasCollarButton type="secondary" size="small" data-cy="btn-refresh" id="refresh-button" @click="refresh">
            <template #icon>
              <ReloadOutlined />
            </template>
          </IrasCollarButton>
        </div>
        <div style="align-self: stretch">
          <span class="bc-text-md bc-text-gray-500">
            Keep track of your change on admission.
          </span>
        </div>
      </div>
      <div class="header-right">
        <div class="start">
        
        </div>
      </div>
    </IrasCollarHeader>
    <div class="divider"></div>

    <div class="top-nav fullHeight">
      <div class="tab-wrapper">
        <a-tabs v-model:activeKey="activeKey" class="tabs">
          <a-tab-pane v-for="view in appViews" :key="view.key" :tab="view.tab">
            <component :is="view.componenttab" />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <div class="divider"></div>
    <div class="loading" v-if="isLoading"></div>
  </div>
</template>
<script  lang="ts" setup>

import { defineAsyncComponent, onMounted, Ref, ref } from 'vue';
import IrasCollarBadge from './components/IrasCollarBadge.vue';
import IrasCollarButton from './components/IrasCollarButton.vue';
import IrasCollarHeader from './components/IrasCollarHeader.vue';
import { notification } from "ant-design-vue";
import { ReloadOutlined,PlusOutlined} from "@ant-design/icons-vue";
import { useNetwork } from './services/useNetwork';

const appViews: Ref<any[]> = ref([]);
const activeKey = ref("1");
const isLoading=ref(false);

const saveChanges=()=>{

}

const refresh =()=>{

}

const getAppView = async () => {
  const AdmissionDashboard = defineAsyncComponent(() => import('./components/AdmissionDashboard.vue'));
  const AdmissionPortalSetup = defineAsyncComponent(() => import('./components/AdmissionPortalSetup.vue'));
  appViews.value = [{ key: "1", tab: "Admission Dashboard" ,componenttab:AdmissionDashboard},{ key: "2", tab: "Application Setup", componenttab:AdmissionPortalSetup }];
};

onMounted(async () => {
  await getAppView();
});

</script>
