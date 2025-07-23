<script setup lang="ts">
import BaseInput from '@/shared/ui/UI/BaseInput/BaseInput.vue'
import BaseButton from '@/shared/ui/UI/BaseButton/BaseButton.vue'
import type { IHouseFilters } from '@/shared/types/house.ts'
const emit = defineEmits(['reset'])

const model = defineModel<IHouseFilters>({ required: true })

const resetFilters = () => {
  emit('reset')
}
</script>

<template>
  <div class="house-filter">
    <BaseInput
      v-model="model.address"
      placeholder="Адрес"
      data-testid="address-input"
    />

    <div class="filter-row">
      <BaseInput
        v-model.number="model.minArea"
        type="number"
        placeholder="Площадь от"
        min="0"
      />
      <BaseInput
        v-model.number="model.maxArea"
        type="number"
        placeholder="Площадь до"
        min="0"
      />
      <BaseInput
        v-model.number="model.minRooms"
        type="number"
        placeholder="Комнат от"
        min="0"
      />
      <BaseInput
        v-model.number="model.maxRooms"
        type="number"
        placeholder="Комнат до"
        min="0"
      />
    </div>
    <BaseButton
      @click="resetFilters"
      data-testid="reset-button"
    >
      Сбросить
    </BaseButton>
  </div>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
