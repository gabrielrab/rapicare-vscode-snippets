const GetEntityUseCase = require("src/core/app/useCases/GetEntityUseCase");

module.exports = class GetTiersUseCase extends GetEntityUseCase {
  constructor({ TierRepository }) {
    super();
    this.repository = TierRepository;
  }
};
