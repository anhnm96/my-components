<script setup lang="tsx">
import GlowingBackground from '~~/components/tailwind/backgrounds/GlowingBackground.vue'
import ThreeDCard from '~~/components/tailwind/cards/3d-card.vue'
import Bubble from '~~/components/tailwind/cards/Bubble.vue'
import LazyLoad from '~~/components/custom/lazy/Lazy'
import GlowEffect from '~/components/tailwind/buttons/GlowEffect.vue'
import RainbowGradient from '~/components/tailwind/buttons/RainbowGradient.vue'

const loading = ref(false)
function click() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

const colors = ['red', 'green', 'blue', 'gray']

const items = [
  {
    title: 'Slide 1',
    image: 'https://picsum.photos/id/1/1230/500',
  },
  {
    title: 'Slide 2',
    image: 'https://picsum.photos/id/2/1230/500',
  },
  {
    title: 'Slide 3',
    image: 'https://picsum.photos/id/3/1230/500',
  },
  {
    title: 'Slide 4',
    image: 'https://picsum.photos/id/4/1230/500',
  },
  {
    title: 'Slide 5',
    image: 'https://picsum.photos/id/5/1230/500',
  },
  {
    title: 'Slide 6',
    image: 'https://picsum.photos/id/6/1230/500',
  },
  {
    title: 'Slide 7',
    image: 'https://picsum.photos/id/7/1230/500',
  },
]

const switchState = ref(false)
const text = ref('')
const names = ref([])
const customCheckboxValue = ref('Yes')
const { start, setClosed, visible } = usePolitePopup()
start()
</script>

<template>
  <div class="pt-20">
    <div>
      <BorderedTabs />
      <RainbowGradient />
      <ToggleButton :selected="true">Pin</ToggleButton>
      <ToggleButton :selected="true" aria-disabled="true">Pin</ToggleButton>
      <BaseButton class="btn btn-outline btn-info"> Test </BaseButton>
      <button class="btn btn-outline btn-success">Test</button>
      <button class="btn btn-ghost">Ghost</button>
      <!-- <StripeSessions /> -->
    </div>
    <div>
      <PanelGroup class="flex h-40 text-gray-100">
        <Panel class="grid flex-grow place-items-center rounded bg-slate-600">
          left
        </Panel>
        <PanelHandle class="w-1" />
        <Panel class="grid flex-grow place-items-center rounded bg-slate-600">
          middle
        </Panel>
        <PanelHandle class="w-1" />
        <Panel class="grid flex-grow place-items-center rounded bg-slate-600">
          right
        </Panel>
      </PanelGroup>
      <PanelGroup teleport-handle class="relative flex bg-gray-200">
        <Panel :min="150" class="flex-grow">Fixasdasdsa</Panel>
        <PanelHandle class="bg-red-500" />
        <Panel :min="150" class="flex-grow">TT</Panel>
        <PanelHandle class="bg-red-500" />
        <Panel class="flex-grow">Hi</Panel>
      </PanelGroup>
      <table class="mt-4 w-full bg-white">
        <colgroup>
          <col span="3" class="border border-red-400" />
        </colgroup>
        <thead>
          <PanelGroup teleport-handle as="tr">
            <Panel as="th" :min="150" style="width: 200px">Company</Panel>
            <PanelHandle class="bg-red-500" />
            <Panel as="th" :min="150" style="width: 300px">Contact</Panel>
            <PanelHandle class="bg-red-500" />
            <Panel as="th">Country</Panel>
          </PanelGroup>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </tbody>
      </table>
      <table class="mt-4 w-full bg-white">
        <colgroup>
          <col span="3" class="border border-red-400" />
        </colgroup>
        <thead>
          <tr>
            <th style="width: 200px">Company</th>
            <th style="width: 300px">Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="p-2">
      <GlowEffect />
    </div>
    <div>
      <Gallery />
    </div>
    <div class="flex gap-2 text-white">
      <BaseCheckboxMotion
        v-model="names"
        value="jack"
        root-class="flex space-x-2"
      >
        jack
      </BaseCheckboxMotion>
      <BaseCheckboxMotion
        v-model="names"
        value="john"
        root-class="flex space-x-2"
        root-style="--background: var(--purple-500)"
      >
        john
      </BaseCheckboxMotion>
      <BaseCheckboxMotion
        v-model="names"
        value="mike"
        root-class="flex space-x-2"
        root-style="--background: var(--green-500)"
      >
        mike
      </BaseCheckboxMotion>
      <span>{{ names }}</span>
    </div>
    <div
      v-if="visible"
      class="fixed bottom-0 right-0 z-50 rounded-md bg-gray-300 p-4 shadow-lg md:bottom-5 md:right-5"
    >
      <span>May I show you something cool?</span>
      <div class="mt-4 flex gap-4">
        <button class="rounded-md bg-gray-100 p-4" @click="setClosed">
          OK
        </button>
        <button class="rounded-md bg-gray-100 p-4" @click="setClosed">
          Nah, thanks
        </button>
      </div>
    </div>
    <div class="space-x-2 text-white">
      <div class="mb-4 flex gap-4">
        <input type="radio" name="group" style="--c: var(--danger)" />
        <input type="radio" name="group" style="--c: var(--success)" />
        <input type="radio" disabled />
      </div>
      <div>
        <p>Array</p>
        <div class="flex gap-2">
          <BaseCheckbox
            v-model="names"
            value="jack"
            root-class="flex space-x-2"
          >
            jack
          </BaseCheckbox>
          <BaseCheckbox
            v-model="names"
            value="john"
            root-class="flex space-x-2"
            style="--background: var(--purple-500)"
          >
            john
          </BaseCheckbox>
          <BaseCheckbox
            v-model="names"
            value="mike"
            root-class="flex space-x-2"
            style="--background: var(--green-500)"
          >
            mike
          </BaseCheckbox>
          <span>{{ names }}</span>
        </div>
        <div class="space-x-4">
          <BaseCheckbox indeterminate>Indeterminate</BaseCheckbox>
          <BaseCheckbox disabled>Disabled</BaseCheckbox>
          <BaseCheckbox :model-value="true">Default true</BaseCheckbox>
          <BaseCheckbox
            v-model="customCheckboxValue"
            true-value="Yes"
            false-value="No"
            style="--background: var(--teal-500)"
          >
            Custom value: {{ customCheckboxValue }}
          </BaseCheckbox>
          <label>
            <input type="checkbox" />
            <span>Test</span>
          </label>
        </div>
      </div>
      <!-- <input v-model="names" type="checkbox" value="mike" class="text-white" /> -->
    </div>
    <div>
      <h1 class="text-red-400">Hello world</h1>
      <BaseButton
        class="rounded bg-purple-600 px-2 py-1 text-white"
        loading
        @click="click"
      >
        Button
      </BaseButton>
      <BaseButton
        class="rounded bg-purple-600 px-2 py-1 text-white"
        disabled
        @click="click"
      >
        Disabled
      </BaseButton>
      <BaseButton
        class="rounded bg-purple-600 px-2 py-1 text-white"
        aria-disabled="true"
        @click="click"
      >
        aira-disabled
      </BaseButton>
      <BaseButton
        class="rounded bg-purple-600 px-2 py-1 text-white"
        @click="click"
      >
        Normal
      </BaseButton>
      <BaseButton
        class="rounded bg-purple-600 px-2 py-1 text-white"
        :loading="loading"
        @click="click"
      >
        <span>Normal</span>
        <Icon class="ml-0.5 mt-px" name="ph:house-line-duotone" />
      </BaseButton>
      <BaseButton
        class="rounded bg-purple-600 px-2 py-1 text-white"
        :loading="loading"
        hide-status-content
        @click="click"
      >
        <span>Normal</span>
        <BaseSpinner v-if="loading" class="ml-0.5 mt-px" />
        <Icon v-else class="ml-0.5 mt-px" name="ph:house-line-duotone" />
      </BaseButton>
    </div>
    <div class="mt-5 space-x-2">
      <button class="btn bg-info">Test</button>
      <button class="btn">Test</button>
      <button class="btn btn-lg bg-purple-600">Test</button>
      <button class="btn btn-link">Link</button>
      <button class="btn btn-outline">Test</button>
      <button class="btn btn-outline btn-info">Test</button>
      <button class="btn btn-outline btn-success">Test</button>
      <button class="btn btn-ghost">Ghost</button>
      <BaseBadge>Badge</BaseBadge>
      <BaseBadge icon>Badge</BaseBadge>
      <BaseBadge class="badge-success" icon>Badge</BaseBadge>
    </div>
    <!-- <ModalStory />
    <AutocompleteStory />
    <DropzoneStory /> -->
    <Bubble />
    <Steps />
    <div>
      <label><input type="radio" name="e" /> First</label>
      <label><input type="radio" name="e" /> Second</label>
      <label><input type="radio" name="e" disabled /> Disabled</label>
    </div>
    <div>
      <TweetBox v-model="text" />
    </div>
    <div>
      <Switch :label="{ checked: 'on', unchecked: 'off' }" />
      <Switch
        v-model="switchState"
        :label="{ checked: 'asd', unchecked: 'zxc' }"
      />
      <Switch
        v-model="switchState"
        active-color="#bb99cc"
        width="100px"
        :label="{ checked: 'only left label', unchecked: '' }"
      />
      <label id="lb" dir="rtl">
        <Switch
          v-model="switchState"
          aria-labelledby="lb btn"
          active-color="#fe877b"
          in-active-color="#be3e61"
          width="200px"
          height="40px"
          :label="{ checked: 'Holdd the door?', unchecked: 'Hodor' }"
        />
        Hodor or not
      </label>
      <Switch
        v-model="switchState"
        active-color="linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)"
        margin="6px"
        in-active-color="linear-gradient(to left, #0cebeb, #20e3b2, #29ffc6)"
        width="200px"
        height="40px"
        :label="{ checked: 'Holdd the door?', unchecked: 'Hodor' }"
      />
      <Switch v-model="switchState" disabled />
    </div>
    <div>
      <Carousel
        v-slot="{ scrollTo, activeIndex }"
        :initial-index="2"
        class="relative"
      >
        <CarouselItem
          v-for="(color, index) in colors"
          :key="color"
          :class="[
            `item-${color} basis-full select-none py-4 text-center text-white`,
          ]"
        >
          {{ index }} - {{ activeIndex }}
        </CarouselItem>
        <div
          class="pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 justify-between"
        >
          <button
            class="pointer-events-auto h-10 w-10 rounded-full bg-gray-300 bg-opacity-50"
            @click="scrollTo(activeIndex - 1)"
          >
            &lt;
          </button>
          <button
            class="pointer-events-auto h-10 w-10 rounded-full bg-gray-300 bg-opacity-50"
            @click="scrollTo(activeIndex + 1)"
          >
            >
          </button>
        </div>
      </Carousel>
    </div>
    <div>
      <LazyLoad on-visible>
        <Carousel>
          <template #header="{ prev, next }">
            <div class="flex justify-between">
              <h2 class="text-lg font-bold text-primary">Top 100 hits</h2>
              <div class="flex items-center space-x-2">
                <button
                  class="inline-flex items-center p-1 focus:outline-none"
                  aria-label="Previous List"
                  @click="prev"
                >
                  Prev
                </button>
                <button
                  class="inline-flex items-center p-1 focus:outline-none"
                  aria-label="Next List"
                  @click="next"
                >
                  Next
                </button>
              </div>
            </div>
          </template>
          <template #default="{ activeIndex }">
            <CarouselItem
              v-for="(item, index) in items"
              :key="item.title"
              class="relative w-1/4 basis-[25%] select-none"
            >
              <img :src="item.image" />
              <span
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-red-500"
              >
                {{ `${index} - ${activeIndex}` }}
              </span>
            </CarouselItem>
          </template>
        </Carousel>
      </LazyLoad>
    </div>
    <GlowingBackground />
    <ThreeDCard />
  </div>
</template>

<style>
.item-red {
  background-color: red;
}

.item-green {
  background-color: green;
}

.item-blue {
  background-color: blue;
}

.item-gray {
  background-color: gray;
}
</style>
