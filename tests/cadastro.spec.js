import { test, expect } from "@playwright/test";
import RegisterPage from "../pageObjects/pageobject";
const pageobject = require ('../pageObjects/pageobject')

test.beforeEach(async ({page}) => { 
     await page.goto('/') 
     await page.locator('.ico-register').click(); 
});

test('Register with error without fields ', async ({ page }) => { 
 const pageobject = new RegisterPage(page)

  await page.locator('button[name="register-button"]').click();
  
  await expect(pageobject.errorFirstName()).resolves.toEqual('First name is required.');
  await expect(pageobject.errorLastName()).resolves.toEqual('Last name is required.');
  await expect(pageobject.errorEmail()).resolves.toEqual('Email is required.');
  await expect(pageobject.errorPassword()).resolves.toEqual('Password is required.');
  await expect(pageobject.errorConfirmPassword()).resolves.toEqual('Password is required.');
  
})


test('Register with success (all fields) ', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('select[name="DateOfBirthDay"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHDAY);
  await page.locator('select[name="DateOfBirthMonth"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHMONTH);
  await page.locator('select[name="DateOfBirthYear"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHYEAR);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Company"]').fill(process.env.NOPCOMMERCECOMPANYNAME);
  await page.locator('#Newsletter').uncheck(process.env.NOPCOMMERCENEWSLETTER);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
  
})

test('Register required fields with success', async ({ page }) => { 
const pageobject = new RegisterPage(page)

  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
  
})

test('Register required fields and field Gender with success', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
  
})

test('Register with error (only First Name) ', async ({ page }) => { 

  const pageobject = new RegisterPage(page)

  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('button[name="register-button"]').click();
 
  const inputValidationError = await page.$$eval('.input-validation-error', elements => elements.map(element => element.textContent));
  expect(inputValidationError.every(message => message !== null)).toBeTruthy();

  await expect(pageobject.errorLastName()).resolves.toEqual('Last name is required.');
  await expect(pageobject.errorEmail()).resolves.toEqual('Email is required.');
  await expect(pageobject.errorPassword()).resolves.toEqual('Password is required.');
  await expect(pageobject.errorConfirmPassword()).resolves.toEqual('Password is required.');

})

test('Register with error ( First Name and Last Name) ', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('button[name="register-button"]').click();
 
  const inputValidationError = await page.$$eval('.input-validation-error', elements => elements.map(element => element.textContent));
  expect(inputValidationError.every(message => message !== null)).toBeTruthy();

  await expect(pageobject.errorEmail()).resolves.toEqual('Email is required.');
  await expect(pageobject.errorPassword()).resolves.toEqual('Password is required.');
  await expect(pageobject.errorConfirmPassword()).resolves.toEqual('Password is required.');
})

test('Register required fields and field data of birth with success', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('select[name="DateOfBirthDay"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHDAY);
  await page.locator('select[name="DateOfBirthMonth"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHMONTH);
  await page.locator('select[name="DateOfBirthYear"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHYEAR);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
})

test('Register with error (First name, Last name and Email)', async({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('button[name="register-button"]').click();
 
  const inputValidationError = await page.$$eval('.input-validation-error', elements => elements.map(element => element.textContent));
  expect(inputValidationError.every(message => message !== null)).toBeTruthy();

  await expect(pageobject.errorPassword()).resolves.toEqual('Password is required.');
  await expect(pageobject.errorConfirmPassword()).resolves.toEqual('Password is required.');
})

test('Register required fields and Company details with success', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Company"]').fill(process.env.NOPCOMMERCECOMPANYNAME)
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
  
})

test('Register required fields and desmark option Newsletter with success', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('#Newsletter').uncheck(process.env.NOPCOMMERCENEWSLETTER);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();
  
  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
})

test('Register required fields and Gender and Company Name with success', async ({ page }) => { 

  const pageobject = new RegisterPage(page)

  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Company"]').fill(process.env.NOPCOMMERCECOMPANYNAME)
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
})

test('Register required fields and Gender and date of birth with success', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('select[name="DateOfBirthDay"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHDAY);
  await page.locator('select[name="DateOfBirthMonth"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHMONTH);
  await page.locator('select[name="DateOfBirthYear"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHYEAR);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
  
})

test('Register required fields, Gender and Company with success', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Company"]').fill(process.env.NOPCOMMERCECOMPANYNAME)
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
})

test('Register required fields, Gender and desmark Newsletter with success', async ({ page }) => { 

  const pageobject = new RegisterPage(page)

  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('#Newsletter').uncheck(process.env.NOPCOMMERCENEWSLETTER);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  await expect(pageobject.getRegistrationResultText()).resolves.toEqual('Your registration completed')
})

test('Register with wrong,required fields (minus Confirm password) ', async ({ page }) => { 

  const pageobject = new RegisterPage(page)
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('button[name="register-button"]').click();

  const inputValidationError = await page.$$eval('.input-validation-error', elements => elements.map(element => element.textContent));
  expect(inputValidationError.every(message => message !== null)).toBeTruthy();

  await expect(pageobject.errorConfirmPassword()).resolves.toEqual('Password is required.');
})

test('Register with wrong (all fields, invalid email) ', async ({ page }) => { 
 
  const pageobject = new RegisterPage(page)
  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('select[name="DateOfBirthDay"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHDAY);
  await page.locator('select[name="DateOfBirthMonth"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHMONTH);
  await page.locator('select[name="DateOfBirthYear"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHYEAR);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Company"]').fill(process.env.NOPCOMMERCECOMPANYNAME);
  await page.locator('#Newsletter').uncheck(process.env.NOPCOMMERCENEWSLETTER);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();

  const inputValidationError = await page.$$eval('.input-validation-error', elements => elements.map(element => element.textContent));
  expect(inputValidationError.every(message => message !== null)).toBeTruthy();

  await expect(pageobject.errorEmail()).resolves.toEqual('Wrong email');

})

test('Register with wrong (all fields, field Password less than 6 character) ', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('select[name="DateOfBirthDay"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHDAY);
  await page.locator('select[name="DateOfBirthMonth"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHMONTH);
  await page.locator('select[name="DateOfBirthYear"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHYEAR);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Company"]').fill(process.env.NOPCOMMERCECOMPANYNAME);
  await page.locator('#Newsletter').uncheck(process.env.NOPCOMMERCENEWSLETTER);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();
  
  const inputValidationError = await page.$$eval('.input-validation-error', elements => elements.map(element => element.textContent));
  expect(inputValidationError.every(message => message !== null)).toBeTruthy();

  await expect(pageobject.errorPasswordCharacter()).resolves.toEqual('Password must meet the following rules: must have at least 6 characters');
  
})

test('Register with wrong (all fields, field Confirm password to be different than password  ', async ({ page }) => { 
  const pageobject = new RegisterPage(page)

  await page.locator('span').filter({ hasText: 'Female' }).click();
  await page.locator('input[name="FirstName"]').fill(process.env.NOPCOMMERCEFIRSTNAME);
  await page.locator('input[name="LastName"]').fill(process.env.NOPCOMMERCELASTNAME);
  await page.locator('select[name="DateOfBirthDay"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHDAY);
  await page.locator('select[name="DateOfBirthMonth"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHMONTH);
  await page.locator('select[name="DateOfBirthYear"]').selectOption(process.env.NOPCOMMERCEDATEOFBIRTHYEAR);
  await page.locator('input[name="Email"]').fill(process.env.NOPCOMMERCEEMAIL);
  await page.locator('input[name="Company"]').fill(process.env.NOPCOMMERCECOMPANYNAME);
  await page.locator('#Newsletter').uncheck(process.env.NOPCOMMERCENEWSLETTER);
  await page.locator('input[name="Password"]').fill(process.env.NOPCOMMERCEPASSWORD);
  await page.locator('input[name="ConfirmPassword"]').fill(process.env.NOPCOMMERCECONFIRMPASSWORD);
  await page.locator('button[name="register-button"]').click();
  
  const inputValidationError = await page.$$eval('.input-validation-error', elements => elements.map(element => element.textContent));
  expect(inputValidationError.every(message => message !== null)).toBeTruthy();

  await expect(pageobject.errorPasswordDifferent()).resolves.toEqual('The password and confirmation password do not match.');

})
