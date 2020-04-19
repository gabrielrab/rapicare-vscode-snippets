const UpdateEntityUseCase = require("src/core/app/useCases/UpdateEntityUseCase");

module.exports = class UpdateTiersUseCase extends UpdateEntityUseCase {
  constructor({ TierRepository }) {
    super();
    this.repository = TierRepository;
  }
};
