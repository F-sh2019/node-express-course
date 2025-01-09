const CustomAPIErorr = require('./custom-error')
const { StatusCodes } = require('http-status-codes')
class BadRequest extends CustomAPIErorr {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = BadRequest
  