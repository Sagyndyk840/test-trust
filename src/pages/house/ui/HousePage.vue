<script setup lang="ts">
import { HouseFilter } from '../../../widgets/House/HouseFilter'
import { useHouseFilter } from '@/entities/House/model/useHouseFilter.ts'
import { HouseList } from '@/widgets/House/HouseList'

const { filters, filteredHouses, isLoading, resetFilters } = useHouseFilter()
</script>

<template>
  <div class="house-page">
    <HouseFilter v-model="filters" @reset="resetFilters" />
    <HouseList :houses="filteredHouses" :is-loading="isLoading" />
  </div>

</template>

<style scoped lang="scss" src="./styles.scss">
</style>
