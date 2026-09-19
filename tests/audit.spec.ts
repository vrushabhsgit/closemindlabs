import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const width of [1440, 1280, 768, 390, 360]) {
  test(`accessibility and layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      results.violations.map(({ id, nodes }) => ({
        id,
        nodes: nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    ).toEqual([]);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(width);
    await page.screenshot({
      path: `artifacts/audit/${width}.png`,
      fullPage: true,
    });
  });
}

test("legal accessibility, local links and production assets", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("response", (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  for (const route of ["/", "/privacy", "/terms"]) {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/,
    );
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Closemind Labs/,
    );
    await expect(
      page.locator('meta[property="og:description"]'),
    ).toHaveAttribute("content", /.+/);
    const links = await page
      .locator("a[href]")
      .evaluateAll((anchors) => anchors.map((a) => a.getAttribute("href")!));
    for (const href of [...new Set(links)]) {
      if (href.startsWith("#") && href.length > 1)
        await expect(page.locator(href)).toHaveCount(1);
      else if (href.startsWith("/"))
        expect((await request.get(href)).ok()).toBe(true);
    }
    if (route !== "/") {
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    }
  }
  for (const route of [
    "/robots.txt",
    "/sitemap.xml",
    "/opengraph-image",
    "/icon.svg",
  ]) {
    const response = await request.get(route);
    expect(response.ok(), route).toBe(true);
    if (route === "/opengraph-image")
      expect(response.headers()["content-type"]).toContain("image/png");
  }
  expect(errors).toEqual([]);
});

test("mobile menu Escape and visible keyboard focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  const menu = page.getByRole("button", { name: "Open navigation" });
  await menu.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Platform", exact: true })
    .focus();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(
    await menu.evaluate((el) => getComputedStyle(el).outlineStyle),
  ).not.toBe("none");
});
