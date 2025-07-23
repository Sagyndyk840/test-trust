import { ref, computed } from 'vue'
import type { IHouse } from '@/entities/House/model/types.ts'
import { houseApi } from '@/entities/House'
import { useNotify } from '@/shared/lib/use/useNotify.ts'
import type { IHouseFilters } from '@/shared/types/house.ts'

export function useHouseFilter() {
  const { notify } = useNotify()

  const isLoading = ref(false)
  const houses = ref<IHouse[]>([])
  const filters = ref<IHouseFilters>({
    minArea: null,
    maxArea: null,
    minRooms: null,
    maxRooms: null,
    address: '',
  })

  const filteredHouses = computed(() => {
    return houses.value.filter(house => {
      if (filters.value.minArea && house.area < filters.value.minArea) return false
      if (filters.value.maxArea && house.area > filters.value.maxArea) return false

      if (filters.value.minRooms && house.rooms < filters.value.minRooms) return false
      if (filters.value.maxRooms && house.rooms > filters.value.maxRooms) return false

      if (filters.value.address && !house.address.toLowerCase().includes(filters.value.address.toLowerCase())) return false

      return true
    })
  })

  const loadHouses = async () => {
    isLoading.value = true
    try {
      houses.value = await houseApi.getHouses()
      notify('Успешно загружено', 'success')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Ошибка при загрузке домов'
      notify(message, 'error')
    } finally {
      isLoading.value = false
    }
  }

  loadHouses()

  return {
    filters,
    filteredHouses,
    loadHouses,
    isLoading,
  }
}
