import vine from '@vinejs/vine'
import { REGION_STATES } from '#constants/region_constants'

export const storeFarmerValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).maxLength(50),
    cpf_cnpj: vine
      .string()
      .minLength(11)
      .maxLength(14)
      .transform((value) => value.replace(/[^\d]/g, '')),
    city: vine.string().minLength(4).maxLength(50),
    state: vine.string().minLength(2).maxLength(2).in(REGION_STATES),
  })
)

export const updateFarmValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(3).maxLength(50),
    city: vine.string().minLength(4).maxLength(50),
    state: vine.string().minLength(2).maxLength(2).in(REGION_STATES),
  })
)
