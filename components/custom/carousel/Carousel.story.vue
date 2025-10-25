<script lang="ts" setup>
import Carousel from './Carousel.vue'
import CarouselItem from './CarouselItem.vue'

const items = [
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/1/3/0/b130381bdaed5df3ddfff9549d859510.jpg',
    title: 'Lofi Việt Gây Nghiện',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg',
    title: 'Nhạc Lofi Chill Gây Nghiện',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg',
    title: 'Nhạc Hoa Lời Việt Nhẹ Nhàng',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/6/1/e/e61e02571410b153d445067f22f39d36.jpg',
    title: 'tâm tình lâu phai',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg',
    title: 'Nhạc Chill Tâm Trạng Buồn',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/8/3/5/78355641f2001767ed62f29ef644e942.jpg',
    title: 'Playlist Này Chill Phết',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/d/8/a/ad8aded71985e32997c8d09b9078dfbe.jpg',
    title: 'tổng đài nhạc chill',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',
    title: 'Lofi Một Chút Thôi',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/e/c/3/1ec302e3c8013ab990729953fb8cbf7f.jpg',
    title: 'Ngày Lênh Đênh',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/e/2/9/fe2964f51f4e3ede798ded5258aac857.jpg',
    title: 'Nhẹ Nhàng Cùng V-Pop',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/d/e/4/bde43aa51e575864730a5cabd3b40fbe.jpg',
    title: 'Nhạc Chill Ngày Nay',
  },
  {
    thumbnail:
      'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/0/7/e/607ec8b9a98aae380e3cdbcae275bcb0.jpg',
    title: 'Thư Giãn',
  },
]
</script>

<template>
  <Story title="Carousel">
    <Variant title="common">
      <Carousel v-slot="{ prev, next }" class="relative px-[100px]">
        <CarouselItem
          v-for="item in 6"
          :key="item"
          class="h-[500px] w-[500px] basis-full select-none overflow-hidden border bg-gray-500 text-center text-white"
        >
          <div class="grid h-full place-items-center">
            <span class="text-4xl font-semibold">{{ item }}</span>
          </div>
        </CarouselItem>
        <div
          class="absolute left-0 right-0 top-1/2 flex w-full -translate-y-1/2 justify-between"
        >
          <button
            class="h-10 w-10 rounded-full bg-gray-300 bg-opacity-50 text-white"
            @click="prev"
          >
            &lt;
          </button>
          <button
            class="h-10 w-10 rounded-full bg-gray-300 bg-opacity-50 text-white"
            @click="next"
          >
            >
          </button>
        </div>
      </Carousel>
    </Variant>
    <Variant title="list">
      <Carousel items-class="mt-3 overflow-x-auto w-full flex h-[250px]">
        <template #header="{ prev, next }">
          <div class="flex justify-between px-3 text-white">
            <h2 class="text-lg font-bold">Top 100 hits</h2>
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
        <template #default>
          <CarouselItem
            v-for="item in items"
            :key="item.title"
            class="w-1/3 select-none px-3 md:w-1/4 lg:w-1/5 xl:w-1/6"
            items-class="overflow-x-auto w-full flex"
          >
            <div class="relative h-full rounded bg-gray-400">
              <img
                class="absolute inset-0 h-full w-full"
                :src="item.thumbnail"
                :alt="item.title"
              />
              <!-- <span
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-red-500"
              >
                {{ `${index} - ${activeIndex}` }}
              </span> -->
            </div>
          </CarouselItem>
        </template>
      </Carousel>
    </Variant>
    <Variant title="gallery">
      <Gallery />
    </Variant>
  </Story>
</template>

<docs lang="md">
Carousel which supports horizontal scroll
</docs>
