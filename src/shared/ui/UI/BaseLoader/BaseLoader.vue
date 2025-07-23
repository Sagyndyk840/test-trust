<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 's' | 'm' | 'l'
}>(), {
  size: 'm',
})

const sizeMap = {
  s: '1rem',
  m: '2rem',
  l: '3rem',
}
</script>

<template>
  <div class="loader" :style="{ width: sizeMap[size], height: sizeMap[size] }"></div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
