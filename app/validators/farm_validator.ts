import vine from '@vinejs/vine'

export const storeFarmValidator = vine.compile(
  vine.object({
    farmer_id: vine.number().positive(),
    name: vine.string().alpha({ allowSpaces: true }).minLength(3).maxLength(50),
    total_area: vine.number().decimal([0, 2]),
    total_agriculture_area: vine.number().decimal([0, 2]),
    total_vegetation_area: vine.number().decimal([0, 2]),
    cultures: vine.array(vine.number()),
  })
)

export const updateFarmValidator = storeFarmValidator
