import vine from '@vinejs/vine'

export const createFarmerValidator = vine.compile(
  vine.object({
    name: vine.string().alpha({ allowSpaces: true }).minLength(3).maxLength(50),
    city: vine.string().alpha({ allowSpaces: true }).minLength(4).maxLength(50),
    state: vine.string().minLength(2).maxLength(2),
    cpf_cnpj: vine.string().minLength(11).maxLength(14),
  })
)
