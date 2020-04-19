const CreateEntityUseCase = require("src/core/app/useCases/CreateEntityUseCase");
const CompanyCredit = require("src/domain/entities/`CompanyCredit`");

module.exports = class CreateCompanyCreditsUseCase extends CreateEntityUseCase {
  constructor({ CompanyCreditRepository }) {
    super();
    this.entity = CompanyCredit;
    this.repository = CompanyCreditRepository;
  }
};
