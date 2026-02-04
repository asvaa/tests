import { test, expect } from "@playwright/test";

//todo Нейминг теста
test("Пользователь может зарегистрироваться используя email и пароль", async ({
  page,
}) => {
  await page.goto("https://realworld.qa.guru/");
  await page.getByRole("link", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Your Name" }).click();
  await page.getByRole("textbox", { name: "Your Name" }).fill("Adam");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("adam.mysaev1a@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("ntyybcAe13");
  await page.getByRole("button", { name: "Sign up" }).click();
});
