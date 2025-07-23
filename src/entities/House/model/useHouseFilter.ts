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
      const { minArea, maxArea, minRooms, maxRooms, address } = filters.value

      if (minArea && house.area < minArea) return false
      if (maxArea && house.area > maxArea) return false

      if (minRooms && house.rooms < minRooms) return false
      if (maxRooms && house.rooms > maxRooms) return false

      if (address && !house.address.toLowerCase().includes(address.toLowerCase())) return false

      return true
    })
  })

  const resetFilters = () => {
    filters.value = {
      minArea: null,
      maxArea: null,
      minRooms: null,
      maxRooms: null,
      address: '',
    }
  }

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
    resetFilters,
  }
}
