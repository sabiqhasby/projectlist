<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
  variant?: string
}
const props = withDefaults(defineProps<Props>(), {
  variant: "default"
})



const cardVariants = cva(
  'rounded-lg border text-card-foreground shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-card',
        blured: 'bg-slate-800 text-white backdrop-blur-sm bg-opacity-50'
      }

    },
    defaultVariants: {
      variant: 'default',
    },
  },

)
</script>

<template>
  <div :class="cn(cardVariants({ variant }), props.class)" :v-bind="{ ...props }">
    <slot />
  </div>
</template>
