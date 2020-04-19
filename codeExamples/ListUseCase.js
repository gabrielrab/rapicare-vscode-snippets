const ListEntityUseCase = require("src/core/app/useCases/ListEntityUseCase");

module.exports = class ListTiersUseCase extends ListEntityUseCase {
  constructor({ TierRepository }) {
    super();
    this.repository = TierRepository;
  }
};
