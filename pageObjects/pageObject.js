class RegisterPage {
    constructor(page) {
      this.page = page;
    }
  
    async fillRegistrationForm(firstName, lastName, email, company,password, confirmPassword) {
      await this.page.locator('input[name="FirstName"]').fill(firstName);
      await this.page.locator('input[name="LastName"]').fill(lastName);
      await this.page.locator('input[name="Email"]').fill(email);
      await this.page.locator('input[name="Company"]').fill(company);
      await this.page.locator('input[name="Password"]').fill(password);
      await this.page.locator('input[name="ConfirmPassword"]').fill(confirmPassword);

    }

    async selectOption(dateOfBirthDay,dateOfBirthMonth,dateOfBirthYear){
        await this.page.locator('select[name="DateOfBirthDay"]').selectOption(dateOfBirthDay);
        await this.page.locator('select[name="DateOfBirthMonth"]').selectOption(dateOfBirthMonth);
        await this.page.locator('select[name="DateOfBirthYear"]').selectOption(dateOfBirthYear);
    }
  
    async clickRegisterButton() {
      await this.page.locator('button[name="register-button"]').click();
    }

    async errorFirstName(){
      return await this.page.textContent('#FirstName-error')

    }

    async errorLastName(){
      return await this.page.textContent('#LastName-error')

    }

    async errorEmail(){
      return await this.page.textContent('#Email-error')

    }
   
    async errorPassword(){
      return await this.page.textContent('#Password-error')

    }

    async errorConfirmPassword(){
      return await this.page.textContent('#ConfirmPassword-error')

    }

    async errorPasswordCharacter(){
      return await this.page.textContent('#Password-error')

    }

    async errorPasswordDifferent(){
      return await this.page.textContent('#ConfirmPassword-error')

    }

    async getRegistrationResultText() {
      return await this.page.locator('.result').textContent();
    }
  }
  
  module.exports = RegisterPage;