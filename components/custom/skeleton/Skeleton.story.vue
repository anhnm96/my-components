<template>
  <Story title="Skeleton">
    <div class="max-w-sm rounded border border-gray-200 p-4 md:p-6">
      <Skeleton
        class="mb-4 flex h-48 items-center justify-center text-gray-400"
      >
        Image
      </Skeleton>
      <Skeleton auto shimmer-color="#46CE93" class="mb-4 h-2.5" />
      <Skeleton auto shimmer-color="#46CE93" class="mb-2.5 h-2" />
      <Skeleton auto shimmer-color="#46CE93" class="mb-2.5 h-2" />
      <Skeleton auto shimmer-color="#46CE93" class="h-2" />
      <div class="mt-4 flex items-center space-x-3">
        <Skeleton
          shimmer-color="#46CE93"
          class="flex h-14 w-14 items-center justify-center text-gray-400"
          css-class="rounded-full"
        >
          Icon
        </Skeleton>
        <div>
          <Skeleton class="mb-2 h-2.5 w-32" />
          <Skeleton class="h-2 w-48" />
        </div>
      </div>
    </div>
  </Story>
</template>
