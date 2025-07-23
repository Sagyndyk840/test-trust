<script setup lang="ts">
import { HouseCard } from '@/entities/House/ui/HouseCard'
import type { IHouse } from '@/entities/House/model/types.ts'
import { computed } from 'vue'
import BaseLoader from '@/shared/ui/UI/BaseLoader/BaseLoader.vue'

interface Props {
  houses: IHouse[]
  isLoading: boolean
}

const props = defineProps<Props>()

const isEmpty = computed(() => !props.isLoading && !props.houses.length)

</script>

<template>
  <div v-if="isLoading" class="loader">
    <BaseLoader size="l" />
  </div>

  <div v-else-if="isEmpty" class="state-container empty-message">
    <h3 class="empty-title">Дома не найдены</h3>
    <p class="empty-text">Попробуйте изменить параметры фильтрации</p>
  </div>

  <div v-else class="house-list">
    <HouseCard
      v-for="house in props.houses"
      :key="house.id"
      :house="house"
      class="house-card"
    />
  </div>
</template>

<style scoped lang="scss" src="./styles.scss">
</style>
