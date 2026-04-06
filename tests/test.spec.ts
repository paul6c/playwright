import{ test, expect }from'@playwright/test';


test('sample env file setup', async({ page })=>{
    await page.goto('https://practicesoftwaretesting.com/');
    console.log("Username from env file: "+process.env.username);
    console.log(process.env.username);
    console.log("Password from env file: "+process.env.password);
})


test('sample google test', async({ page })=>{
    await page.goto('https://www.google.com');
    const title=await page.title();
    expect(title).toBe('Google');
    console.log(page.url());
    console.log("Google test executed successfully");
})


test('test if else statement demo', async({ page })=>{
 await page.goto('https://practicesoftwaretesting.com/');
    const expected_title = 'Practice Software Testing - Toolshop - v5.0'
    const title=await page.title();
    console.log(title);
    expect (title).toBe(expected_title);
        if(title===expected_title){
            console.log("Title matched - Test Passed");
        } else {
            console.log("Title did not match - Test Failed");
        }
})

test('test for loop statement demo', async ({ page })=>{


    await page.goto(process.env.url!,{
        waitUntil: 'load',
        timeout: 60000
    });

    await page.waitForTimeout(5000);
    
    const ELEMENT = page.locator('//div[@class="checkbox"]/label');
    const FILTER = page.locator('#filters');
    const FILTER_NAME: string = 'Hammer';
    const CHECKBOX = page.locator('input[name="category_id"]');
    
    // await expect(FILTER).toBeVisible({ timeout: 5000 });
    console.log( await ELEMENT.count());
    for (let i = 0; i < await ELEMENT.count(); i++) {
        const label: string = (await ELEMENT.nth(i).innerText()).trim();
        console.log(label +','+label.length+" and "+ FILTER_NAME)
        console.log(label == FILTER_NAME);
        if(label == FILTER_NAME){
            console.log("Filter found: " + FILTER_NAME);
            console.log(await CHECKBOX.count());
            await CHECKBOX.nth(i).click();
            break
        }
    }

})

test('test for the pom model demo', async ({ page })=>{
    // const URL = process.env.url || "https://practicesoftwaretesting.com/";
    await page.goto("/");
     const title=await page.title();
     console.log(title);
     expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
})