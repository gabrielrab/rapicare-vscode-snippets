const DeleteEntityUseCase = require("src/core/app/useCases/DeleteEntityUseCase");

module.exports = class DeleteTiersUseCase extends DeleteEntityUseCase {
  constructor({ TierRepository }) {
    super();
    this.repository = TierRepository;
  }
};
