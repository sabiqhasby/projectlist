<script setup lang="ts">
import { cn } from '@/lib/utils'
import { cva } from "class-variance-authority";

const props = defineProps<{
  class?: string
  variant?: NonNullable<Parameters<typeof cardVariants>[0]>['variant']
}>()


const cardVariants = cva(
  "rounded-lg border text-card-foreground shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-card",
        blured: "bg-slate-800 text-white backdrop-blur-sm bg-opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

</script>

<template>
  <div :class="cn(cardVariants({ variant }), props.class)" :v-bind="{ ...props }">
    <slot />
  </div>
</template>
