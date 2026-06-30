const cds = require('@sap/cds');
class AdminService extends cds.ApplicationService {
    async init() {
        const { Authors } = this.entities;
        this.before(['CREATE', 'UPDATE'], Authors, this.validateLifeData);
        return super.init();
    }
    validateLifeData(req) {
        const { dateOfBirth, dateOfDeath } = req.data;
        if (dateOfBirth && dateOfDeath && new Date(dateOfBirth) > new Date(dateOfDeath)) {
            req.error(400, 'The date of death (${dateofdeath}) must be after the date of birth (${dateofbirth}).', {
                dateofdeath: dateOfDeath,
                dateofbirth: birthDate
            });
        }
    }
}
module.exports = AdminService;