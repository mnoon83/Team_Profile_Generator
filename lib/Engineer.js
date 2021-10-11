const Employee = require('../lib/Employee.js')
class Engineer extends Employee {
  constructor(name, email, phone) {
    super(name, email, phone)
    this.gitHub=gitHub
  }
  getGitHub(){
    return this.gitHub
  }
  getRole(){
    return 'Engineer'
  }
}
module.exports = Engineer