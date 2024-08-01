import { Exception } from '@adonisjs/core/exceptions'

export default class ValidationException extends Exception {
  static status = 422
}
