<script setup lang="ts">
import type { IHouse } from '@/entities/House/model/types.ts'
import BaseCard from '@/shared/ui/UI/BaseCard/BaseCard.vue'
defineProps<{ house: IHouse }>()
</script>

<template>
<BaseCard>
  <img :src="house.image" />
  <h3>{{ house.address }}</h3>
  <p>{{ house.area }} м² · {{ house.rooms }} комн.</p>
</BaseCard>
</template>

<style scoped lang="scss" src="./styles.scss">

</style>
