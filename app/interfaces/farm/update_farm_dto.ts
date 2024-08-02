import { CreateFarmDTO } from '#interfaces/farm/create_farm_dto'

export interface UpdateFarmDTO extends Omit<CreateFarmDTO, 'farmer_id'> {}
