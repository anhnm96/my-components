const resolved__virtual_storySource_componentsCustomFiletreeFiletreeStoryVue = `<script lang="ts" setup>
import type { Node } from '~/types/FileTree'

const filetree = {
  name: '',
  filepath: '',
  nodes: [
    { name: 'app.vue', filepath: 'app.vue' },
    { name: 'package.json', filepath: 'package.json' },
    { name: 'nuxt.config.ts', filepath: 'nuxt.config.ts' },
    {
      name: 'pages',
      filepath: 'pages',
      nodes: [
        { name: 'foo.vue', filepath: 'pages/foo.vue' },
        { name: 'index.vue', filepath: 'pages/index.vue' },
      ],
    },
  ],
}
function sortNodes(node: Node): Node {
  // Sort the current node's children, if any
  if (node.nodes && node.nodes.length > 0) {
    // Sort sub-nodes first by whether they are directories (alphabetically), then by name
    node.nodes.sort((a, b) => {
      // Directory comes before files
      const isADir = a.nodes !== undefined
      const isBDir = b.nodes !== undefined

      if (isADir && !isBDir) return -1
      if (!isADir && isBDir) return 1

      // Then, sort alphabetically by name
      return a.name.localeCompare(b.name)
    })

    // Recursively sort sub-nodes
    node.nodes.forEach((subNode) => {
      sortNodes(subNode)
    })
  }

  // If there are no nodes to sort, just return the node as is
  return node
}

sortNodes(filetree)
const selectedFile = shallowRef({ ...filetree })

// example 2
const tree2 = {
  name: 'Home',
  nodes: [
    {
      name: 'Movies',
      nodes: [
        {
          name: 'Action',
          nodes: [
            {
              name: '2000s',
              nodes: [
                { name: 'Gladiator.mp4', disabled: true },
                { name: 'The-Dark-Knight.mp4' },
              ],
            },
            { name: '2010s', nodes: [] },
          ],
        },
        {
          name: 'Comedy',
          disabled: true,
          nodes: [{ name: '2000s', nodes: [{ name: 'Superbad.mp4' }] }],
        },
      ],
    },
    {
      name: 'Music',
      nodes: [{ name: 'Rock', nodes: [] }],
    },
    { name: 'Pictures', nodes: [] },
    { name: 'passwords.txt' },
  ],
} as Node

function addFilepath(node: Node, parentPath = ''): void {
  // Set the current node's filepath by combining parent path and current node name
  node.filepath = parentPath ? \`\${parentPath}/\${node.name}\` : node.name

  // If the node has children, recursively add the filepath to them
  if (node.nodes && node.nodes.length > 0) {
    node.nodes.forEach((subNode) => addFilepath(subNode, node.filepath))
  }
}

addFilepath(tree2)
const selectedFile2 = shallowRef({ ...tree2 })
<\/script>

<template>
  <Story title="FileTree">
    <Variant title="Example 1">
      <FileTree
        v-model:selected="selectedFile"
        :node="filetree"
        :depth="-1"
        select-dir
      />
    </Variant>
    <Variant title="Example 2">
      <FileTree v-model:selected="selectedFile2" :node="tree2" select-dir />
    </Variant>
  </Story>
</template>
`;
export {
  resolved__virtual_storySource_componentsCustomFiletreeFiletreeStoryVue as default
};
