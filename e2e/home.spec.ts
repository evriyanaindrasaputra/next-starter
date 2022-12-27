import { test, expect } from "@playwright/test";

test("test home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The new page should contain an h1 with "Welcome to Next-Starter"
  await expect(page.locator("h1")).toContainText("Welcome to Next-Starter");
});
