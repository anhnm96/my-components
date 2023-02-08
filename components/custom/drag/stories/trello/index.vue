<script>
import DragList from '../../DragList.vue'
import BoardColumn from './BoardColumn.vue'
export default {
  components: { BoardColumn, DragList },
  data() {
    return {
      sidebarOpen: false,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      data,
      draggingItem: null,
      currentEnteringTask: { taskIndex: -1, columnIndex: -1 },
      newItem: null,
    }
  },
  methods: {
    onDrag(e) {
      this.draggingItem = e
      this.currentEnteringTask = {
        taskIndex: e.taskIndex,
        columnIndex: e.columnIndex,
      }
    },
    handle({ from, to }) {
      console.log('drop', from, to)
      const fromTasks = this.data[from.fromColumnIndex].tasks
      const toTask = this.data[to.fromColumnIndex].tasks
      // const originalItemIndex = fromTasks.findIndex(el => el === this.draggingItem.task)
      // console.log(originalItemIndex)
      // this.currentEnteringTask = {columnIndex: -1, taskIndex: -1}
    },
    dragEnter(payload) {
      console.log('dragenter')
      // return
      // const oldVal = payload. this.currentEnteringTask
      // if (oldVal.taskIndex !== newVal.taskIndex || oldVal.columnIndex !== newVal.columnIndex) {
      //   // remove current ghost item if drag enter another position
      //   console.log('remove', oldVal.taskIndex)
      //   this.data[oldVal.columnIndex].tasks.splice(oldVal.taskIndex, 1)
      //   if (this.newItem) {
      //     this.newItem.classList.remove('ghost-item')
      //   }
      //   // add ghost item to current position
      //   this.data[newVal.columnIndex].tasks.splice(newVal.taskIndex, 0, this.draggingItem.task)
      //   // add class for ghost item
      //   this.newItem = this.$refs[`col${newVal.columnIndex}`][newVal.taskIndex].$el
      //   this.newItem.classList.add('ghost-item')
      //   console.log('newI', this.newItem)
      // }
      // this.currentEnteringTask = newVal
    },
    dragLeave() {},
    dragEnd() {
      this.newItem.classList.remove('ghost-item')
    },
  },
}
const data = [
  {
    name: 'Backlog',
    tasks: [
      {
        _id: '5f2685cd5fafb24f70a7a8f5',
        title: 'Minim laboris occaecat sint cillum ex tempor.',
        content:
          'Labore aliquip labore labore in proident aute consequat in incididunt veniam. Enim eu sunt quis ut consequat amet Lorem laboris officia velit laboris aute tempor tempor. Deserunt cillum do et est labore do consequat qui nostrud qui tempor aliquip. Lorem nostrud aute aute Lorem est adipisicing ullamco sint anim ipsum duis aliqua.\r\n',
        type: 0,
        date: 'Mar 17 2020',
        name: 'Donaldson Leonard',
        avatar: 'https://robohash.org/Donaldson Leonard/100?format=png',
      },
      {
        _id: '5f2685cd031d99f23295846d',
        title:
          'Magna id aliquip dolor occaecat culpa consectetur et in cupidatat est irure esse.',
        content:
          'Consectetur minim nisi laboris eiusmod culpa mollit et est magna do non dolore. In culpa dolore pariatur officia esse veniam enim voluptate in consectetur. Excepteur laborum consequat magna dolore Lorem do do. Minim ut occaecat deserunt ullamco amet nisi. Elit adipisicing quis voluptate exercitation culpa ullamco occaecat aute. Lorem proident id proident consectetur elit adipisicing laboris exercitation dolore incididunt dolor laborum.\r\n',
        type: 1,
        date: 'Jun 15 2020',
        name: 'Wendy Sloan',
        avatar: 'https://robohash.org/Wendy Sloan/100?format=png',
      },
      {
        _id: '5f2685cde8f010b912322bde',
        title:
          'Dolore elit sunt dolore commodo quis velit pariatur id veniam sit.',
        content:
          'Excepteur magna aute excepteur velit consequat esse esse dolor sunt veniam non sit nostrud. In culpa labore mollit eu eiusmod dolore amet reprehenderit sunt ea duis mollit ex labore. In deserunt aute fugiat dolore proident officia. Eiusmod minim eiusmod consectetur amet eiusmod. Ullamco cillum ut ad incididunt elit duis sit irure enim in incididunt non anim.\r\n',
        type: 1,
        date: 'Jul 21 2020',
        name: 'Doreen Arnold',
        avatar: 'https://robohash.org/Doreen Arnold/100?format=png',
      },
      {
        _id: '5f2685cd662bff62eadb30c7',
        title:
          'Labore culpa laborum reprehenderit sunt aute sunt amet ipsum exercitation ex.',
        content:
          'Qui dolore nulla et labore ea eiusmod consectetur dolore duis in qui ipsum. Sit laboris id voluptate tempor anim eu pariatur in proident. Ullamco consequat deserunt ut tempor et enim sint veniam velit do esse. Cupidatat non esse ea consectetur.\r\n',
        type: 0,
        date: 'Jun 08 2020',
        name: 'Hartman Sheppard',
        avatar: 'https://robohash.org/Hartman Sheppard/100?format=png',
      },
      {
        _id: '5f2685cdc9f13a0f2bb43467',
        title:
          'Consectetur ut tempor id quis et sunt est et cupidatat minim Lorem.',
        content:
          'Mollit ipsum quis sint non nisi est amet incididunt. Labore et non et in dolore amet ullamco. Lorem aliquip amet aliquip adipisicing tempor exercitation incididunt. Sit aute veniam exercitation nulla consequat et cillum nisi id sint aliquip amet ex nulla. Aute sit culpa occaecat aute magna ea et veniam anim cupidatat non aliqua.\r\n',
        type: 0,
        date: 'Jul 22 2020',
        name: 'Pearson Love',
        avatar: 'https://robohash.org/Pearson Love/100?format=png',
      },
      {
        _id: '5f2685cdcad846a880911167',
        title:
          'Ad amet minim aliquip cupidatat esse culpa cupidatat sint laborum anim non.',
        content:
          'Enim eu do duis nostrud. Exercitation occaecat laboris incididunt pariatur consequat. Officia Lorem reprehenderit reprehenderit consequat veniam eu officia dolor. Eu consectetur culpa laborum sunt voluptate proident eu. Dolor proident in ex incididunt fugiat ex amet labore est laboris duis nulla.\r\n',
        type: 2,
        date: 'Jun 23 2020',
        name: 'Dickerson Sanders',
        avatar: 'https://robohash.org/Dickerson Sanders/100?format=png',
      },
      {
        _id: '5f2685cd43bf38ebade6fba8',
        title: 'Laborum Lorem tempor voluptate officia cillum sit eu.',
        content:
          'Enim labore id excepteur Lorem dolore aute deserunt deserunt. Ut do tempor sunt nostrud aute. Commodo commodo quis eiusmod deserunt laboris reprehenderit.\r\n',
        type: 2,
        date: 'May 24 2020',
        name: 'Aisha Christensen',
        avatar: 'https://robohash.org/Aisha Christensen/100?format=png',
      },
      {
        _id: '5f2685cd270e626a874e784f',
        title:
          'Dolore qui exercitation cupidatat sint proident et nisi non enim.',
        content:
          'Pariatur sint enim ea non est. Ut esse enim ea excepteur voluptate eu in nulla aliqua labore esse labore ex. Elit duis laborum ut laboris nostrud nisi enim aliqua laborum ad commodo. Consequat est ad magna reprehenderit veniam labore enim duis et. Veniam labore consectetur sunt occaecat in ut.\r\n',
        type: 0,
        date: 'Mar 06 2020',
        name: 'Hinton Norton',
        avatar: 'https://robohash.org/Hinton Norton/100?format=png',
      },
    ],
  },
  {
    name: 'In Progress',
    tasks: [
      {
        _id: '5f2685cd5fafb24f70a7a8f5',
        title: 'Minim laboris occaecat sint cillum ex tempor.',
        content:
          'Labore aliquip labore labore in proident aute consequat in incididunt veniam. Enim eu sunt quis ut consequat amet Lorem laboris officia velit laboris aute tempor tempor. Deserunt cillum do et est labore do consequat qui nostrud qui tempor aliquip. Lorem nostrud aute aute Lorem est adipisicing ullamco sint anim ipsum duis aliqua.\r\n',
        type: 0,
        date: 'Mar 17 2020',
        name: 'Donaldson Leonard',
        avatar: 'https://robohash.org/Donaldson Leonard/100?format=png',
      },
      {
        _id: '5f2685cd031d99f23295846d',
        title:
          'Magna id aliquip dolor occaecat culpa consectetur et in cupidatat est irure esse.',
        content:
          'Consectetur minim nisi laboris eiusmod culpa mollit et est magna do non dolore. In culpa dolore pariatur officia esse veniam enim voluptate in consectetur. Excepteur laborum consequat magna dolore Lorem do do. Minim ut occaecat deserunt ullamco amet nisi. Elit adipisicing quis voluptate exercitation culpa ullamco occaecat aute. Lorem proident id proident consectetur elit adipisicing laboris exercitation dolore incididunt dolor laborum.\r\n',
        type: 1,
        date: 'Jun 15 2020',
        name: 'Wendy Sloan',
        avatar: 'https://robohash.org/Wendy Sloan/100?format=png',
      },
      {
        _id: '5f2685cde8f010b912322bde',
        title:
          'Dolore elit sunt dolore commodo quis velit pariatur id veniam sit.',
        content:
          'Excepteur magna aute excepteur velit consequat esse esse dolor sunt veniam non sit nostrud. In culpa labore mollit eu eiusmod dolore amet reprehenderit sunt ea duis mollit ex labore. In deserunt aute fugiat dolore proident officia. Eiusmod minim eiusmod consectetur amet eiusmod. Ullamco cillum ut ad incididunt elit duis sit irure enim in incididunt non anim.\r\n',
        type: 1,
        date: 'Jul 21 2020',
        name: 'Doreen Arnold',
        avatar: 'https://robohash.org/Doreen Arnold/100?format=png',
      },
      {
        _id: '5f2685cd662bff62eadb30c7',
        title:
          'Labore culpa laborum reprehenderit sunt aute sunt amet ipsum exercitation ex.',
        content:
          'Qui dolore nulla et labore ea eiusmod consectetur dolore duis in qui ipsum. Sit laboris id voluptate tempor anim eu pariatur in proident. Ullamco consequat deserunt ut tempor et enim sint veniam velit do esse. Cupidatat non esse ea consectetur.\r\n',
        type: 0,
        date: 'Jun 08 2020',
        name: 'Hartman Sheppard',
        avatar: 'https://robohash.org/Hartman Sheppard/100?format=png',
      },
      {
        _id: '5f2685cdc9f13a0f2bb43467',
        title:
          'Consectetur ut tempor id quis et sunt est et cupidatat minim Lorem.',
        content:
          'Mollit ipsum quis sint non nisi est amet incididunt. Labore et non et in dolore amet ullamco. Lorem aliquip amet aliquip adipisicing tempor exercitation incididunt. Sit aute veniam exercitation nulla consequat et cillum nisi id sint aliquip amet ex nulla. Aute sit culpa occaecat aute magna ea et veniam anim cupidatat non aliqua.\r\n',
        type: 0,
        date: 'Jul 22 2020',
        name: 'Pearson Love',
        avatar: 'https://robohash.org/Pearson Love/100?format=png',
      },
      {
        _id: '5f2685cdcad846a880911167',
        title:
          'Ad amet minim aliquip cupidatat esse culpa cupidatat sint laborum anim non.',
        content:
          'Enim eu do duis nostrud. Exercitation occaecat laboris incididunt pariatur consequat. Officia Lorem reprehenderit reprehenderit consequat veniam eu officia dolor. Eu consectetur culpa laborum sunt voluptate proident eu. Dolor proident in ex incididunt fugiat ex amet labore est laboris duis nulla.\r\n',
        type: 2,
        date: 'Jun 23 2020',
        name: 'Dickerson Sanders',
        avatar: 'https://robohash.org/Dickerson Sanders/100?format=png',
      },
      {
        _id: '5f2685cd43bf38ebade6fba8',
        title: 'Laborum Lorem tempor voluptate officia cillum sit eu.',
        content:
          'Enim labore id excepteur Lorem dolore aute deserunt deserunt. Ut do tempor sunt nostrud aute. Commodo commodo quis eiusmod deserunt laboris reprehenderit.\r\n',
        type: 2,
        date: 'May 24 2020',
        name: 'Aisha Christensen',
        avatar: 'https://robohash.org/Aisha Christensen/100?format=png',
      },
      {
        _id: '5f2685cd270e626a874e784f',
        title:
          'Dolore qui exercitation cupidatat sint proident et nisi non enim.',
        content:
          'Pariatur sint enim ea non est. Ut esse enim ea excepteur voluptate eu in nulla aliqua labore esse labore ex. Elit duis laborum ut laboris nostrud nisi enim aliqua laborum ad commodo. Consequat est ad magna reprehenderit veniam labore enim duis et. Veniam labore consectetur sunt occaecat in ut.\r\n',
        type: 0,
        date: 'Mar 06 2020',
        name: 'Hinton Norton',
        avatar: 'https://robohash.org/Hinton Norton/100?format=png',
      },
    ],
  },
  {
    name: 'Ready for Review',
    tasks: [
      {
        _id: '5f2685cd5fafb24f70a7a8f5',
        title: 'Minim laboris occaecat sint cillum ex tempor.',
        content:
          'Labore aliquip labore labore in proident aute consequat in incididunt veniam. Enim eu sunt quis ut consequat amet Lorem laboris officia velit laboris aute tempor tempor. Deserunt cillum do et est labore do consequat qui nostrud qui tempor aliquip. Lorem nostrud aute aute Lorem est adipisicing ullamco sint anim ipsum duis aliqua.\r\n',
        type: 0,
        date: 'Mar 17 2020',
        name: 'Donaldson Leonard',
        avatar: 'https://robohash.org/Donaldson Leonard/100?format=png',
      },
      {
        _id: '5f2685cd031d99f23295846d',
        title:
          'Magna id aliquip dolor occaecat culpa consectetur et in cupidatat est irure esse.',
        content:
          'Consectetur minim nisi laboris eiusmod culpa mollit et est magna do non dolore. In culpa dolore pariatur officia esse veniam enim voluptate in consectetur. Excepteur laborum consequat magna dolore Lorem do do. Minim ut occaecat deserunt ullamco amet nisi. Elit adipisicing quis voluptate exercitation culpa ullamco occaecat aute. Lorem proident id proident consectetur elit adipisicing laboris exercitation dolore incididunt dolor laborum.\r\n',
        type: 1,
        date: 'Jun 15 2020',
        name: 'Wendy Sloan',
        avatar: 'https://robohash.org/Wendy Sloan/100?format=png',
      },
      {
        _id: '5f2685cde8f010b912322bde',
        title:
          'Dolore elit sunt dolore commodo quis velit pariatur id veniam sit.',
        content:
          'Excepteur magna aute excepteur velit consequat esse esse dolor sunt veniam non sit nostrud. In culpa labore mollit eu eiusmod dolore amet reprehenderit sunt ea duis mollit ex labore. In deserunt aute fugiat dolore proident officia. Eiusmod minim eiusmod consectetur amet eiusmod. Ullamco cillum ut ad incididunt elit duis sit irure enim in incididunt non anim.\r\n',
        type: 1,
        date: 'Jul 21 2020',
        name: 'Doreen Arnold',
        avatar: 'https://robohash.org/Doreen Arnold/100?format=png',
      },
      {
        _id: '5f2685cd662bff62eadb30c7',
        title:
          'Labore culpa laborum reprehenderit sunt aute sunt amet ipsum exercitation ex.',
        content:
          'Qui dolore nulla et labore ea eiusmod consectetur dolore duis in qui ipsum. Sit laboris id voluptate tempor anim eu pariatur in proident. Ullamco consequat deserunt ut tempor et enim sint veniam velit do esse. Cupidatat non esse ea consectetur.\r\n',
        type: 0,
        date: 'Jun 08 2020',
        name: 'Hartman Sheppard',
        avatar: 'https://robohash.org/Hartman Sheppard/100?format=png',
      },
      {
        _id: '5f2685cdc9f13a0f2bb43467',
        title:
          'Consectetur ut tempor id quis et sunt est et cupidatat minim Lorem.',
        content:
          'Mollit ipsum quis sint non nisi est amet incididunt. Labore et non et in dolore amet ullamco. Lorem aliquip amet aliquip adipisicing tempor exercitation incididunt. Sit aute veniam exercitation nulla consequat et cillum nisi id sint aliquip amet ex nulla. Aute sit culpa occaecat aute magna ea et veniam anim cupidatat non aliqua.\r\n',
        type: 0,
        date: 'Jul 22 2020',
        name: 'Pearson Love',
        avatar: 'https://robohash.org/Pearson Love/100?format=png',
      },
      {
        _id: '5f2685cdcad846a880911167',
        title:
          'Ad amet minim aliquip cupidatat esse culpa cupidatat sint laborum anim non.',
        content:
          'Enim eu do duis nostrud. Exercitation occaecat laboris incididunt pariatur consequat. Officia Lorem reprehenderit reprehenderit consequat veniam eu officia dolor. Eu consectetur culpa laborum sunt voluptate proident eu. Dolor proident in ex incididunt fugiat ex amet labore est laboris duis nulla.\r\n',
        type: 2,
        date: 'Jun 23 2020',
        name: 'Dickerson Sanders',
        avatar: 'https://robohash.org/Dickerson Sanders/100?format=png',
      },
      {
        _id: '5f2685cd43bf38ebade6fba8',
        title: 'Laborum Lorem tempor voluptate officia cillum sit eu.',
        content:
          'Enim labore id excepteur Lorem dolore aute deserunt deserunt. Ut do tempor sunt nostrud aute. Commodo commodo quis eiusmod deserunt laboris reprehenderit.\r\n',
        type: 2,
        date: 'May 24 2020',
        name: 'Aisha Christensen',
        avatar: 'https://robohash.org/Aisha Christensen/100?format=png',
      },
      {
        _id: '5f2685cd270e626a874e784f',
        title:
          'Dolore qui exercitation cupidatat sint proident et nisi non enim.',
        content:
          'Pariatur sint enim ea non est. Ut esse enim ea excepteur voluptate eu in nulla aliqua labore esse labore ex. Elit duis laborum ut laboris nostrud nisi enim aliqua laborum ad commodo. Consequat est ad magna reprehenderit veniam labore enim duis et. Veniam labore consectetur sunt occaecat in ut.\r\n',
        type: 0,
        date: 'Mar 06 2020',
        name: 'Hinton Norton',
        avatar: 'https://robohash.org/Hinton Norton/100?format=png',
      },
    ],
  },
  {
    name: 'Done',
    tasks: [
      {
        _id: '5f2685cd5fafb24f70a7a8f5',
        title: 'Minim laboris occaecat sint cillum ex tempor.',
        content:
          'Labore aliquip labore labore in proident aute consequat in incididunt veniam. Enim eu sunt quis ut consequat amet Lorem laboris officia velit laboris aute tempor tempor. Deserunt cillum do et est labore do consequat qui nostrud qui tempor aliquip. Lorem nostrud aute aute Lorem est adipisicing ullamco sint anim ipsum duis aliqua.\r\n',
        type: 0,
        date: 'Mar 17 2020',
        name: 'Donaldson Leonard',
        avatar: 'https://robohash.org/Donaldson Leonard/100?format=png',
      },
      {
        _id: '5f2685cd031d99f23295846d',
        title:
          'Magna id aliquip dolor occaecat culpa consectetur et in cupidatat est irure esse.',
        content:
          'Consectetur minim nisi laboris eiusmod culpa mollit et est magna do non dolore. In culpa dolore pariatur officia esse veniam enim voluptate in consectetur. Excepteur laborum consequat magna dolore Lorem do do. Minim ut occaecat deserunt ullamco amet nisi. Elit adipisicing quis voluptate exercitation culpa ullamco occaecat aute. Lorem proident id proident consectetur elit adipisicing laboris exercitation dolore incididunt dolor laborum.\r\n',
        type: 1,
        date: 'Jun 15 2020',
        name: 'Wendy Sloan',
        avatar: 'https://robohash.org/Wendy Sloan/100?format=png',
      },
      {
        _id: '5f2685cde8f010b912322bde',
        title:
          'Dolore elit sunt dolore commodo quis velit pariatur id veniam sit.',
        content:
          'Excepteur magna aute excepteur velit consequat esse esse dolor sunt veniam non sit nostrud. In culpa labore mollit eu eiusmod dolore amet reprehenderit sunt ea duis mollit ex labore. In deserunt aute fugiat dolore proident officia. Eiusmod minim eiusmod consectetur amet eiusmod. Ullamco cillum ut ad incididunt elit duis sit irure enim in incididunt non anim.\r\n',
        type: 1,
        date: 'Jul 21 2020',
        name: 'Doreen Arnold',
        avatar: 'https://robohash.org/Doreen Arnold/100?format=png',
      },
      {
        _id: '5f2685cd662bff62eadb30c7',
        title:
          'Labore culpa laborum reprehenderit sunt aute sunt amet ipsum exercitation ex.',
        content:
          'Qui dolore nulla et labore ea eiusmod consectetur dolore duis in qui ipsum. Sit laboris id voluptate tempor anim eu pariatur in proident. Ullamco consequat deserunt ut tempor et enim sint veniam velit do esse. Cupidatat non esse ea consectetur.\r\n',
        type: 0,
        date: 'Jun 08 2020',
        name: 'Hartman Sheppard',
        avatar: 'https://robohash.org/Hartman Sheppard/100?format=png',
      },
      {
        _id: '5f2685cdc9f13a0f2bb43467',
        title:
          'Consectetur ut tempor id quis et sunt est et cupidatat minim Lorem.',
        content:
          'Mollit ipsum quis sint non nisi est amet incididunt. Labore et non et in dolore amet ullamco. Lorem aliquip amet aliquip adipisicing tempor exercitation incididunt. Sit aute veniam exercitation nulla consequat et cillum nisi id sint aliquip amet ex nulla. Aute sit culpa occaecat aute magna ea et veniam anim cupidatat non aliqua.\r\n',
        type: 0,
        date: 'Jul 22 2020',
        name: 'Pearson Love',
        avatar: 'https://robohash.org/Pearson Love/100?format=png',
      },
      {
        _id: '5f2685cdcad846a880911167',
        title:
          'Ad amet minim aliquip cupidatat esse culpa cupidatat sint laborum anim non.',
        content:
          'Enim eu do duis nostrud. Exercitation occaecat laboris incididunt pariatur consequat. Officia Lorem reprehenderit reprehenderit consequat veniam eu officia dolor. Eu consectetur culpa laborum sunt voluptate proident eu. Dolor proident in ex incididunt fugiat ex amet labore est laboris duis nulla.\r\n',
        type: 2,
        date: 'Jun 23 2020',
        name: 'Dickerson Sanders',
        avatar: 'https://robohash.org/Dickerson Sanders/100?format=png',
      },
      {
        _id: '5f2685cd43bf38ebade6fba8',
        title: 'Laborum Lorem tempor voluptate officia cillum sit eu.',
        content:
          'Enim labore id excepteur Lorem dolore aute deserunt deserunt. Ut do tempor sunt nostrud aute. Commodo commodo quis eiusmod deserunt laboris reprehenderit.\r\n',
        type: 2,
        date: 'May 24 2020',
        name: 'Aisha Christensen',
        avatar: 'https://robohash.org/Aisha Christensen/100?format=png',
      },
      {
        _id: '5f2685cd270e626a874e784f',
        title:
          'Dolore qui exercitation cupidatat sint proident et nisi non enim.',
        content:
          'Pariatur sint enim ea non est. Ut esse enim ea excepteur voluptate eu in nulla aliqua labore esse labore ex. Elit duis laborum ut laboris nostrud nisi enim aliqua laborum ad commodo. Consequat est ad magna reprehenderit veniam labore enim duis et. Veniam labore consectetur sunt occaecat in ut.\r\n',
        type: 0,
        date: 'Mar 06 2020',
        name: 'Hinton Norton',
        avatar: 'https://robohash.org/Hinton Norton/100?format=png',
      },
    ],
  },
]
/**
[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    title: '{{lorem(1, "sentences")}}',
    content: '{{lorem(1, "paragraphs")}}',
    type: '{{random(0, 1, 2)}}',
    date: '{{date(new Date(2020, 0, 1), new Date(), "MMM dd YYYY")}}',

    name: '{{firstName()}} {{surname()}}',
    avatar: function() {
    	return 'https://robohash.org/' + this.name + '/100?format=png'
    }
  }
]
https://www.json-generator.com/
*/
</script>

<template>
  <div class="flex h-screen">
    <!-- right-content -->
    <div class="flex min-w-0 flex-1 flex-col bg-white">
      <div class="flex-1 overflow-auto">
        <!-- <main class="inline-flex h-full p-3"> -->
        <!-- <BoardColumn
            v-for="(column, columnIndex) in data"
            :key="columnIndex"
            :column="column"
            :columnIndex="columnIndex"
          /> -->
        <DragList
          v-model:list="data"
          group="column"
          tag="main"
          class="inline-flex h-full p-3"
          :id-adapter="(val) => val.name"
        >
          <template #default="{ item, index }">
            <BoardColumn :column="item" :column-index="index" />
          </template>
          <template #placeholder-move>
            <p
              style="
                border: 1px solid red;
                background: green;
                width: 1px;
                z-index: 9999;
                height: 100%;
              "
            />
          </template>
          <template #drag-image="{ width }">
            <p :style="{ width: `${width}px` }">Moving column :)</p>
          </template>
        </DragList>
        <!-- </main> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.ghost-item {
  opacity: 0.5;
}
span.burger {
  position: relative;
  width: 3px;
  height: 1.4rem;
  background-color: #333;
  display: inline-block;
}
span.burger::before {
  content: '';
  left: -0.4rem;
  top: 0;
  position: absolute;
  width: 3px;
  height: 1.4rem;
  background-color: #333;
  display: inline-block;
}
span.burger::after {
  content: '';
  left: 0.45rem;
  top: 0;
  position: absolute;
  width: 3px;
  height: 1.4rem;
  background-color: #333;
  display: inline-block;
}
@media only screen and (min-width: 1024px) {
  .custom-translate-x-0 {
    transform: translateX(0) !important;
  }
}
</style>
