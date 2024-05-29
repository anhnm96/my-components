<script lang="ts" setup>
const expanded = ref(true)
const expanded2 = ref(false)

const status = ref('idle')
async function submit() {
  status.value = 'saving'
  await sleep(1500)
  status.value = 'success'
  await sleep(1250)
  status.value = ''
}

const r = ref(true)
</script>

<template>
  <Story tite="Expandable">
    <Variant title="Vertical">
      <div>
        <button
          class="mt-3 flex w-full items-center justify-between rounded-[1.125rem] bg-[#1B1829] px-4 py-3 text-gray-100"
          @click="expanded = !expanded"
        >
          <span class="font-lexend font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </span>
          <span v-if="expanded" class="h-6 w-6" aria-hidden="true">-</span>
          <span v-else class="h-6 w-6" aria-hidden="true">+</span>
        </button>
      </div>
      <Expandable>
        <div
          v-if="expanded"
          class="my-2 rounded-[1.125rem] bg-[#1B1829] px-4 pb-[0.8125rem] pt-2 leading-7 text-gray-400"
        >
          <p>
            🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas, perspiciatis distinctio!
          </p>
          <p>
            🔥 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            sit illo corporis eos aliquid voluptates aut laborum! Perspiciatis,
            quam laboriosam.
          </p>
        </div>
      </Expandable>
    </Variant>
    <Variant title="Horizontal">
      <div class="mt-3 flex items-stretch gap-2">
        <div class="flex-shrink-0 basis-1/5 items-center">
          <button
            class="flex w-full items-center justify-between rounded-[1.125rem] bg-[#1B1829] px-4 py-3 text-gray-100"
            @click="expanded2 = !expanded2"
          >
            <span class="font-lexend font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </span>
          </button>
        </div>
        <Expandable dimension="horizontal">
          <div
            v-if="expanded2"
            class="rounded-[1.125rem] bg-[#1B1829] px-4 pb-[0.8125rem] pt-2 leading-7 text-gray-400"
          >
            <p>
              🔥 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, perspiciatis distinctio!
            </p>
            <p>
              🔥 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              sit illo corporis eos aliquid voluptates aut laborum!
              Perspiciatis, quam laboriosam.
            </p>
          </div>
        </Expandable>
      </div>
    </Variant>
    <Variant title="Resizable Panel">
      <div class="flex min-h-[500px] flex-col items-start bg-zinc-900 pt-28">
        <div class="mx-auto w-full max-w-md">
          <button class="text-white" @click="status = 'idle'">Refresh</button>
          <div
            class="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800"
          >
            <div class="px-8 pt-8">
              <p class="text-lg text-white">Reset password</p>
            </div>
            <Expandable
              multiple
              transition="height 600ms cubic-bezier(0.33, 1.01, 0.49, 1.04), opacity 200ms 200ms ease-in"
            >
              <div v-if="status !== ''">
                <div>
                  <form class="p-8" @submit.prevent="submit">
                    <p class="text-sm text-zinc-400">
                      Enter your email to get a password reset link:
                    </p>
                    <div class="mt-3">
                      <input
                        class="block w-full rounded border-none text-slate-900"
                        type="email"
                        required
                        defaultValue="sam@buildui.com"
                      />
                    </div>
                    <div class="mt-8 text-right">
                      <BaseButton
                        :loading="status === 'saving'"
                        :success="status === 'success'"
                        class="rounded bg-indigo-500 px-5 py-2 text-sm font-medium text-white"
                      >
                        Email me my link
                      </BaseButton>
                    </div>
                  </form>
                </div>
              </div>
              <div v-else>
                <div>
                  <p class="p-8 text-sm text-zinc-400">
                    Email sent! Check your inbox to continue.
                  </p>
                </div>
              </div>
            </Expandable>
          </div>
          <p class="mt-8 text-sm text-zinc-500">
            <span class="underline">Reach out</span> to us if you need more
            help.
          </p>
        </div>
      </div>
    </Variant>
    <Variant title="Resizable Test">
      <div class="p-2">
        <button class="text-white" @click="r = !r">Toggle</button>
        <div class="rounded border border-green-500 bg-blue-400">
          <Expandable multiple>
            <div v-if="r" class="h-[200px] bg-red-400"></div>
            <div v-else class="h-[400px] bg-green-400"></div>
          </Expandable>
        </div>
      </div>
    </Variant>
  </Story>
</template>
