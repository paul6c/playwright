import {test, expect} from '@playwright/test';

test('GET request test', async ({ request }) => {
    const response = await request.get('/');
    
    expect(response.status()).toBe(200);
});

test('sample inside the api test folder', async ({ request }) => {

    const response = await request.get('/');
    console.log(response.url());
});

test('GET list of users', async ({ request }) => {
    const response = await request.get('/api/users');
    console.log(response.url());
    console.log(response.status());
    const responseBody = await response.json();
    console.log(responseBody);
});

test("GET single user", async ({ request }) => {
    const  USER_ID = 2;
    const response = await request.get('/api/users/'+ USER_ID);
    console.log(response.url());
    console.log(response.status());
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody.data.id).toBe(USER_ID);
    expect(response.status()).toBe(200);
    expect(responseBody.data).toHaveProperty('email');
    expect(responseBody.data).toHaveProperty('first_name');
    expect(responseBody.data).toHaveProperty('last_name');
    expect(responseBody.data).toHaveProperty('avatar');
});

test("GET single user not found", async ({ request }) => {
    const  USER_ID = 23;
    const response = await request.get('/api/users/'+ USER_ID);
    console.log(response.url());
    console.log(response.status());
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(404);
    expect(responseBody).toEqual({});
});

test("GET list of products", async ({ request }) => {
    const response = await request.get('/api/products');
    console.log(response.url());
    console.log(response.status());
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('data');
    expect(Array.isArray(responseBody.data)).toBeTruthy();
});