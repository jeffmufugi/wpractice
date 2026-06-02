import { test, expect } from "@playwright/test";

test.describe("Get Started Button", () => {
  test("should be visible on the homepage", async ({ page }) => {
    await page.goto("/");
    const button = page.getByTestId("get-started-btn");
    await expect(button).toBeVisible();
  });

  test("should navigate to /get-started when clicked", async ({ page }) => {
    await page.goto("/");
    const button = page.getByTestId("get-started-btn");
    await button.click();
    await expect(page).toHaveURL("/get-started");
  });
});
