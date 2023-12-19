import { test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import credentials from "../text-data/loginCred.json";

test.describe.serial("Test cases for the Login Page", () => {

//   test("Test case for valid credentials", async ({ page, baseURL }) => {
//     await page.goto(`${baseURL}`);
//     const login = new LoginPage(page);
//     await login.login(credentials.validCredentials.userName, credentials.validCredentials.Password);
//   });

//   test("Test case for Invalid credentials with out passing parameters", async ({page,baseURL}) => {
//     await page.goto(`${baseURL}`);
//     const login = new LoginPage(page);
//     await login.login();
//   });
  test("Test case for wrong userName", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    const login = new LoginPage(page);
    await login.login(credentials.invalidCredentials.userName, credentials.validCredentials.Password);
  });

//   test("Test case for wrong Password", async ({ page, baseURL }) => {
//     await page.goto(`${baseURL}`);
//     const login = new LoginPage(page);
//     await login.login(credentials.validCredentials.userName, credentials.invalidCredentials.Password);
//   });
});
