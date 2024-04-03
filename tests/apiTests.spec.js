import {test, expect } from '@playwright/test';

test('API GET request', async ({ request }) => {

    const response = await request.get('https://serverest.dev/usuarios')

    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('Test 0613d140-6af8-491a-b092-b65c5145e7a8 Service')

    console.log(await response.json());

})

test('API POST request', async ({ request }) => {

    const response = await request.post('https://serverest.dev/usuarios',{
        data:{
            "nome": "Elvio Diniz",
            "email": "elvio158@gmail.com.br",
            "password": "123456",
            "administrador": "true"
        }
    })
    expect(response.status()).toBe(201)

    const text = await response.text();
    expect(text).toContain('Cadastro realizado com sucesso')

    console.log(await response.json());
    
})
/*-----------------------------------------------------------------------------------*/
test('API PUT request', async ({ request }) => {

    const response = await request.put('https://serverest.dev/usuarios/FCvXoNuRxBqlklDS',{
        data:{
            "nome": "Joao Paulo",
            "email": "joaosilva123@gmail.com.br",
            "password": "joaopereira",
            "administrador": "true"
        }
    })
    expect(response.status()).toBe(200)

    const text = await response.text();
    expect(text).toContain('Registro alterado com sucesso')

    console.log(await response.json());
    
})

test('API DELETE request', async ({ request }) => {

    const response = await request.delete('https://serverest.dev/usuarios/FCvXoNuRxBqlklDS')

    expect(response.status()).toBe(200)


})