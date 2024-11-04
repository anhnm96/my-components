<script lang="ts" setup></script>

<template>
  <Story title="Resizable Panels">
    <Variant title="Horizontal">
      <PanelGroup class="flex h-40 text-gray-100">
        <Panel
          default-size="20%"
          :min-size="150"
          :max-size="300"
          class="flex flex-grow flex-col items-center justify-center rounded bg-slate-600"
        >
          <p>left</p>
          <p>(min 150, max 300)</p>
          <p>(default 20%)</p>
        </Panel>
        <PanelHandle class="w-2" />
        <Panel
          default-size="40%"
          :min-size="150"
          class="flex flex-grow flex-col items-center justify-center rounded bg-slate-600"
        >
          <p>middle</p>
          <p>(min 150)</p>
          <p>(default 40%)</p>
        </Panel>
        <PanelHandle class="w-2" />
        <Panel
          default-size="40%"
          :min-size="150"
          :max-size="300"
          class="flex flex-grow flex-col items-center justify-center rounded bg-slate-600"
        >
          <p>right</p>
          <p>(min 150, max 300)</p>
          <p>(default 40%)</p>
        </Panel>
      </PanelGroup>
    </Variant>
    <Variant title="Vertical">
      <PanelGroup
        direction="vertical"
        class="flex h-60 flex-grow flex-col text-gray-100"
      >
        <Panel
          default-size="20%"
          :min-size="50"
          class="grid flex-grow place-items-center rounded bg-slate-600"
        >
          top (min 50)
        </Panel>
        <PanelHandle class="h-2 flex-shrink-0" />
        <Panel
          default-size="40%"
          :min-size="50"
          class="grid flex-grow place-items-center rounded bg-slate-600"
        >
          middle (min 50)
        </Panel>
        <PanelHandle class="h-2 flex-shrink-0" />
        <Panel
          default-size="40%"
          :min-size="50"
          class="grid flex-grow place-items-center rounded bg-slate-600"
        >
          bottom (min 50)
        </Panel>
      </PanelGroup>
    </Variant>
    <Variant title="Nested layout">
      <PanelGroup class="mt-4 flex h-40 text-gray-100">
        <Panel
          :min-size="150"
          class="grid flex-grow place-items-center rounded bg-slate-600"
        >
          left
        </Panel>
        <PanelHandle class="w-2" />
        <Panel :min-size="150" class="flex-grow">
          <PanelGroup direction="vertical" class="flex h-full flex-col">
            <Panel
              :min-size="50"
              class="grid flex-grow place-items-center rounded bg-slate-600"
            >
              top
            </Panel>
            <PanelHandle class="h-2 flex-shrink-0" />
            <Panel :min-size="50" class="flex-grow rounded">
              <PanelGroup direction="horizontal" class="flex h-full">
                <Panel
                  :min-size="50"
                  class="grid flex-grow place-items-center rounded bg-slate-600"
                >
                  left
                </Panel>
                <PanelHandle class="w-2" />
                <Panel
                  :min-size="50"
                  class="grid flex-grow place-items-center rounded bg-slate-600"
                >
                  right
                </Panel>
              </PanelGroup>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelHandle class="w-2" />
        <Panel
          :min-size="150"
          class="grid flex-grow place-items-center rounded bg-slate-600"
        >
          right
        </Panel>
      </PanelGroup>
    </Variant>
    <Variant title="Table columns / lazy update">
      <table class="w-full text-gray-100">
        <colgroup>
          <col span="3" class="border border-gray-400" />
        </colgroup>
        <thead>
          <PanelGroup lazy teleport-handle as="tr">
            <Panel as="th" :min-size="150" style="width: 200px">Company</Panel>
            <PanelHandle class="w-2" />
            <Panel as="th" :min-size="150" style="width: 300px">Contact</Panel>
            <PanelHandle class="w-2" />
            <Panel :min-size="100" as="th">Country</Panel>
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
