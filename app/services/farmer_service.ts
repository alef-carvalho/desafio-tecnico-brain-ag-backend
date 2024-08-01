import { inject } from '@adonisjs/core'
import { cpf, cnpj } from 'cpf-cnpj-validator'
import FarmerRepository from '#repositories/farmer_repository'
import ConflictException from '#exceptions/conflict_exception'
import ValidationException from '#exceptions/validation_exception'
import { CreateFarmerDTO } from '#contracts/farmer/create_farmer_dto'
import { UpdateFarmerDto } from '#contracts/farmer/update_farmer_dto'

@inject()
export default class FarmerService {
  constructor(private readonly farmerRepository: FarmerRepository) {}

  async findAll() {
    return this.farmerRepository.findAll()
  }

  async findOne(farmerId: number) {
    return this.farmerRepository.findOne(farmerId)
  }

  async store(createFarmerDto: CreateFarmerDTO) {
    if (!cpf.isValid(createFarmerDto.cpf_cnpj) && !cnpj.isValid(createFarmerDto.cpf_cnpj)) {
      throw new ValidationException('CPF/CNPJ inválido')
    }

    const registered = await this.farmerRepository.findOneByCPFCNPJ(createFarmerDto.cpf_cnpj)

    if (registered) {
      throw new ConflictException('Fazendeiro já registrado')
    }

    return this.farmerRepository.store(createFarmerDto)
  }

  async update(farmerId: number, updateFarmerDto: UpdateFarmerDto) {
    return this.farmerRepository.update(farmerId, updateFarmerDto)
  }

  async destroy(farmerId: number) {
    return this.farmerRepository.delete(farmerId)
  }
}
