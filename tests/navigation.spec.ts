import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should display welcome heading on homepage", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { name: /Welcome to jef/i });
    await expect(heading).toBeVisible();
  });
});
