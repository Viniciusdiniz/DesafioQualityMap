import {test, expect } from '@playwright/test';

test('API GET request', async ({ request }) => {

    const response = await request.get('https://serverest.dev/usuarios')

    await expect(response.status()).toBe(200)

})

test('API POST request', async ({ request }) => {

    const response = await request.post('https://serverest.dev/usuarios',{
        data:{
            "nome": "Elvio Diniz",
            "email": "elviodinizapi@gmail.com.br",
            "password": "123456",
            "administrador": "true"
        }
    })
    await expect(response.status()).toBe(201)

    const text = await response.text();
    await expect(text).toContain('Cadastro realizado com sucesso')

    console.log(await response.json());
    
})

test('API PUT request', async ({ request }) => {

    const response = await request.put('https://serverest.dev/usuarios/Pb5X2YtbW96BcA8u',{
        data:{
            "nome": "Joao Paulo",
            "email": "joaosilva12344@gmail.com.br",
            "password": "joaopereira",
            "administrador": "true"
        }
    })
   await expect(response.status()).toBe(200)

    const text = await response.text();
   await  expect(text).toContain('Registro alterado com sucesso')

    console.log(await response.json());
    
})

test('API DELETE request', async ({ request }) => {

    const response = await request.delete('https://serverest.dev/usuarios/Pb5X2YtbW96BcA8u')

    await expect(response.status()).toBe(200)


})