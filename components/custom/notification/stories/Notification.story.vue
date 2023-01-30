<script lang="ts" setup>
import { show } from '../index'
import FriendRequesStory from './FriendRequest.vue'

function showToastDanger() {
  show({
    position: 'bottom-right',
    type: 'danger',
    timeout: 2000,
    title: 'Attention!',
  })
}

async function showToastSuccess() {
  await show({
    position: 'top-right',
    type: 'success',
    title: 'Successfully saved!',
    description: 'Anyone with a link can now view this file.',
  })
}

function showToastInfo() {
  show({
    position: 'top-right',
    type: 'info',
    title: 'Notification Title',
    description: 'This is the content of the notification',
  })
}

function showToastWarn() {
  show({
    position: 'top-right',
    type: 'warn',
    title: 'Notification Title',
    description: 'This is the content of the notification',
  })
}

async function showCustomNoti() {
  const result = await show(undefined, FriendRequesStory)
  show({
    position: 'top-right',
    type: 'info',
    title: 'Notification Title',
    description: `Friend request ${result}`,
  })
}
</script>

<template>
  <Story title="Notification">
    <div class="mt-2 ml-2 flex flex-wrap space-x-2">
      <BaseButton class="bg-green-500" @click="showToastSuccess">
        Success
      </BaseButton>
      <BaseButton class="bg-blue-500" @click="showToastInfo"> Info </BaseButton>
      <BaseButton class="bg-yellow-500" @click="showToastWarn">
        Warning
      </BaseButton>
      <BaseButton class="bg-red-500" @click="showToastDanger">
        Danger bottom-right
      </BaseButton>
      <BaseButton class="rounded-full bg-purple-500" @click="showCustomNoti">
        Custom Notification
      </BaseButton>
    </div>
  </Story>
</template>
