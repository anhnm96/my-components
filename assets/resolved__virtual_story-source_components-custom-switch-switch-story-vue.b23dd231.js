const resolved__virtual_storySource_componentsCustomSwitchSwitchStoryVue = `<script lang="ts" setup>
import Switch from './Switch.vue'

const switchState = ref(false)
<\/script>

<template>
  <Story title="Switch" :layout="{ type: 'grid', width: '350px' }">
    <Variant title="normal">
      <div class="p-2 text-center">
        <Switch :label="{ checked: 'asd', unchecked: 'zxc' }" />
      </div>
    </Variant>
    <Variant title="custom width, show label when checked only">
      <div class="p-2 text-center">
        <Switch
          v-model="switchState"
          active-color="#bb99cc"
          width="100px"
          :label="{ checked: 'only left label', unchecked: '' }"
        />
      </div>
    </Variant>
    <Variant title="label with rtl">
      <div class="p-2 text-center">
        <label id="lb" dir="rtl" class="inline-flex gap-1">
          <Switch
            id="btn"
            v-model="switchState"
            aria-labelledby="lb btn"
            active-color="#fe877b"
            in-active-color="#be3e61"
            width="200px"
            height="40px"
            :label="{ checked: 'Holdd the door?', unchecked: 'Hodor' }"
          />
          <span>Hodor or not?</span>
        </label>
      </div>
    </Variant>
    <Variant title="custom color, size, label">
      <div class="p-2 text-center">
        <Switch
          v-model="switchState"
          active-color="linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)"
          margin="6px"
          in-active-color="linear-gradient(to left, #0cebeb, #20e3b2, #29ffc6)"
          width="200px"
          height="40px"
          :label="{ checked: 'Holdd the door?', unchecked: 'Hodor' }"
        />
      </div>
    </Variant>
    <Variant title="disabled">
      <div class="p-2 text-center">
        <Switch v-model="switchState" disabled />
      </div>
    </Variant>
  </Story>
</template>
`;
export {
  resolved__virtual_storySource_componentsCustomSwitchSwitchStoryVue as default
};
