import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should find the Vercel deploy link", async ({ page }) => {
    await page.goto("/");
    const deployLink = page.getByRole("link", { name: /deploy/i });
    await expect(deployLink).toBeVisible();
  });
});
