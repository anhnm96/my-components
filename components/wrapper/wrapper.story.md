Vue applications usually use at least a few third-party libraries and components.
Let’s take the vue-multiselect package as an example. Applications with a lot of forms could use a select component in quite a few places. In the code snippet below, we have simple usage of the vue-multiselect component.

```vue
<template>
  <vue-multiselect
    v-model="value"
    :options="options"
    searchable label="name"/>
</template>
```
Though it works, but what happens if you need to move away from vue-multiselect to a different library? There could be several reasons, such as lack of maintenance, licensing changes, lack of specific features, or maybe you want to switch to the next version of Vue, but the library will not provide a compatible version any time soon. If you have used the <vue-multiselect/> component directly, every single file using it will need to be changed. That’s where wrapper components come into play. We create a wrapper component around them and pass through all the props, events, and slots.

`src/components/wrapper/Select.vue`

```vue
<template>
  <vue-multiselect>
    <!-- Pass on all slots -->
    <template v-for="name of Object.keys($slots)" #[name]="scope">
      <slot :name="name" v-bind="scope" />
    </template>
  </vue-multiselect>
</template>
```
