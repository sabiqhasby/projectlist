<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="cn(
    'z-50 bg-white',
    props.class,
  )
    ">
    <slot />
  </div>
</template>
