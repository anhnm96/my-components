<script>
import ContextMenu from './Menu.vue'
export default {
  components: {
    ContextMenu
  },
  methods: {
    click(val) {
      console.log(val)
    }
  }
}
</script>

<template>
  <div>
    <table style="background-color:blue">
      <th>
        <td
          class="p-2 bg-red-300"
          @contextmenu.prevent="$refs.ctx.open"
        >
          Hello
        </td>
        <td
          class="p-2 bg-green-300"
          @contextmenu.prevent="$refs.ctx.open"
        >
          td2
        </td>
      </th>
      <ContextMenu ref="ctx">
        <li @click="click(1)">
          Menu 1
        </li>
        <li @click="click(2)">
          Menu 2
        </li>
        <li @click="click(3)">
          menu 3
        </li>
      </ContextMenu>
    </table>
  </div>
</template>
