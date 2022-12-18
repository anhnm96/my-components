<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>

<script lang="ts" setup>
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type Size = 'small' | 'medium' | 'large'
type Color = 'amber' | 'green' | 'purple' | 'cyan'

withDefaults(
  defineProps<{
    as?: string
    position?: Position
    size?: Size
    color?: Color
  }>(),
  {
    as: 'button',
    position: 'top-right',
    size: 'medium',
    color: 'amber',
  }
)

const sizeClasses: Record<Size, string> = {
  small: 'w-24',
  medium: 'w-28',
  large: 'w-36',
}

const positionClasses: Record<
  Position,
  {
    wrapper: string
    shadeOne: string
    shadeTwo: string
    banner: string
  }
> = {
  'top-left': {
    wrapper: '-top-2 -left-2',
    shadeOne: 'top-0 right-0',
    shadeTwo: 'bottom-0 left-0',
    banner: 'bottom-0 left-0 -rotate-45 origin-bottom-left',
  },
  'top-right': {
    wrapper: '-top-2 -right-2',
    shadeOne: 'top-0 left-0',
    shadeTwo: 'bottom-0 right-0',
    banner: 'bottom-0 right-0 rotate-45 origin-bottom-right',
  },
  'bottom-left': {
    wrapper: '-bottom-2 -left-2',
    shadeOne: 'top-0 left-0',
    shadeTwo: 'bottom-0 right-0',
    banner: 'top-0 left-0 rotate-45 origin-top-left',
  },
  'bottom-right': {
    wrapper: '-bottom-2 -right-2',
    shadeOne: 'top-0 right-0',
    shadeTwo: 'bottom-0 left-0',
    banner: 'top-0 right-0 -rotate-45 origin-top-right',
  },
}

const colorClasses: Record<
  Color,
  {
    shades: string
    banner: string
  }
> = {
  amber: {
    shades: 'bg-amber-500',
    banner: 'bg-amber-300 text-amber-800 hover:bg-yellow-300',
  },
  green: {
    shades: 'bg-green-500',
    banner: 'bg-green-300 text-green-800 hover:bg-emerald-300',
  },
  purple: {
    shades: 'bg-purple-500',
    banner: 'bg-purple-300 text-purple-800 hover:bg-violet-300',
  },
  cyan: {
    shades: 'bg-cyan-500',
    banner: 'bg-cyan-300 text-cyan-800 hover:bg-sky-300',
  },
}
</script>

<template>
  <div
    class="pointer-events-none absolute aspect-square overflow-hidden rounded-sm"
    :class="[sizeClasses[size], positionClasses[position].wrapper]"
  >
    <div
      class="absolute h-2 w-2"
      :class="[positionClasses[position].shadeOne, colorClasses[color].shades]"
    ></div>
    <div
      class="absolute h-2 w-2"
      :class="[positionClasses[position].shadeTwo, colorClasses[color].shades]"
    ></div>
    <component
      :is="as"
      v-bind="$attrs"
      class="pointer-events-auto absolute block w-square-diagonal py-1.5 text-center text-xs font-semibold uppercase tracking-wider shadow-sm"
      :class="[positionClasses[position].banner, colorClasses[color].banner]"
    >
      <slot />
    </component>
  </div>
</template>
