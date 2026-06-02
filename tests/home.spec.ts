import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load and display correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Jeff | Grow Your Business/);
  });

  test("should display the main heading", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });
});
