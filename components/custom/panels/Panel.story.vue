<script lang="ts" setup></script>

<template>
  <Story title="Resizable Panels">
    <Variant title="basic">
      <PanelGroup class="relative flex bg-gray-200">
        <Panel :min="150" class="flex-grow">Osaka</Panel>
        <PanelHandle />
        <Panel :min="150" class="flex-grow">Kyoto</Panel>
        <PanelHandle />
        <Panel class="flex-grow">Fukuoka</Panel>
      </PanelGroup>
    </Variant>
    <Variant title="resizable table columns">
      <table class="w-full bg-white">
        <colgroup>
          <col span="3" class="border border-red-400" />
        </colgroup>
        <thead>
          <PanelGroup as="tr">
            <Panel as="th" :min="150" style="width: 200px">Company</Panel>
            <PanelHandle />
            <Panel as="th" :min="150" style="width: 300px">Contact</Panel>
            <PanelHandle />
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
    </Variant>
  </Story>
</template>
