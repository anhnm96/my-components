<script setup lang="ts">
function initState() {
  return {
    fluid: false,
    duration: 300,
  }
}
</script>

<template>
  <Story title="Tab" :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Bordered Tabs" :init-state="initState">
      <template #default="{ state }">
        <BorderedTabs v-bind="state" />
      </template>
      <template #controls="{ state }">
        <HstCheckbox v-model="state.fluid" title="Fluid" />
        <HstNumber v-model="state.duration" title="Duration" :step="100" />
      </template>
    </Variant>
    <Variant title="Navigation Tabs" :init-state="initState">
      <template #default="{ state }">
        <NavigationTabs v-bind="state" />
      </template>
      <template #controls="{ state }">
        <HstCheckbox v-model="state.fluid" title="Fluid" />
        <HstNumber v-model="state.duration" title="Duration" :step="100" />
      </template>
    </Variant>
  </Story>
</template>
