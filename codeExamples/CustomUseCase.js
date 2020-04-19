const UseCase = require("src/core/app/useCases/UseCase");

class CallFromUseCase extends UseCase {
  constructor({ ReportRepository, currentUser }) {
    super();
    this.repository = ReportRepository;
    this.user = currentUser;
  }

  async execute() {
    try {
      //code here
      this.emit("SUCCESS", true);
    } catch (error) {
      this.emitErrors(error);
    }
    return true;
  }
}

module.exports = CallFromUseCase;
