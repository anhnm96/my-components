<script lang="ts" setup>
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
]
// people
const people = [
  {
    name: 'Sandra Adams',
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
  },
  {
    name: 'Ali Connors',
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
  },
  {
    name: 'Trevor Hansen',
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
  },
  {
    name: 'Tucker Smith',
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
  },
]
function peopleAdapter(item: any) {
  return {
    id: item.name,
    label: item.name,
    value: item,
  }
}
const selectedPeople = ref([])
</script>

<template>
  <div>
    <div class="mx-auto w-60">
      <p>Single select</p>
      <Autocomplete
        class="w-full border border-solid border-gray-400 px-2 py-1"
        placeholder="Select country"
        :options="countries"
        :use-filter="true"
      />
    </div>
    <div class="mx-auto mt-10 w-60">
      <p>Multiple select</p>
      <Autocomplete
        v-model:selected="selectedPeople"
        :option-adapter="peopleAdapter"
        :options="people"
        :multiple="true"
        :placeholder="
          selectedPeople.length
            ? `${selectedPeople.length} options selected`
            : 'Select member basic'
        "
        class="block w-full border border-gray-400 px-2 py-1"
      >
        <template #option="{ item, isActive, select }">
          <div
            class="flex cursor-pointer select-none items-center space-x-4 truncate px-4 py-2"
            :class="[
              isActive && 'bg-gray-200 opacity-50',
              item.selected && 'bg-blue-300 text-blue-500',
            ]"
            @click="select(item)"
          >
            <div class="h-5 w-5">
              <img
                class="rounded-full"
                :src="item.value.avatar"
                :alt="item.value.name"
              />
            </div>
            <div>
              <p>{{ item.value.name }}</p>
            </div>
          </div>
        </template>
      </Autocomplete>
    </div>
  </div>
</template>
