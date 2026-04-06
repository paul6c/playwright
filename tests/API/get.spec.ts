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