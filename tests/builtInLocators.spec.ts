import { test, expect } from "@playwright/test";
//getByAltText()    :  If any element having alt then we can use this method
//getByPlaceHolder  :  It any element having placeholder we can use this method
//getByRole         :  for buttons ,checkboxes,heading etc.. we can use this method
//getByText         :  access by text
//getBylabel        :  <label>

//getByTitle        :

test("Get by Alt Text", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.waitForSelector("img[alt='Second slide']");
  const logo = await page.getByAltText("Second slide");
  await expect(logo).toBeVisible();
});

test("Get by Placeholder", async ({ page, baseURL }) => {
  await page.goto(`https://letcode.in/edit`);
  await page.getByPlaceholder("Enter first & last name").fill("venkat");
});

test("Get by Role", async ({ page, baseURL }) => {
  //   //     <h3>Sign up</h3>
  //   // <label>
  //   //   <input type="checkbox" /> Subscribe
  //   // </label>
  //   // <br/>
  //   // <button>Submit</button>

  await page.goto(``);
  await page.getByRole("checkbox", { name: "Subscribe" }).click();
  await page.getByRole("button", { name: "Submit" }).click();
});

test("Get by Text()", async ({ page, baseURL }) => {
  await page.goto(`https://letcode.in/edit`);
  await expect(page.getByText("Work-Space")).toBeVisible();
});

test("Get by Label()", async ({ page, baseURL }) => {
  await page.goto(`https://letcode.in/edit`);
  //if input is in label u can use fill
  //   await  (page.getByLabel("Enter your full Name")).fill('hello');

  await expect(page.getByLabel("Enter your full Name")).toBeVisible();
});
