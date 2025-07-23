import { BaseApi } from '@/shared/api/base'
import type { IHouse } from '@/entities/House/model/types.ts'

const RESOURCE = 'houses' as const

export const houseApi = {
  async getHouses(): Promise<IHouse[]> {
    const response = await BaseApi.get<IHouse[]>(`${RESOURCE}`)
    return response.data
  },
}
