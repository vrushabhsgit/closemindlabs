import { test, expect } from "@playwright/test";
for (const [name, width, height] of [
  ["desktop", 1600, 1000],
  ["laptop", 1280, 800],
  ["tablet", 768, 1024],
  ["mobile", 390, 844],
  ["small-mobile", 320, 740],
] as const) {
  test(`${name}: responsive layout and screenshot`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Your enterprise.",
    );
    await page.evaluate(() => document.fonts.ready);
    const heroBox = await page.locator(".hero").boundingBox();
    const diagramBox = await page.locator(".hero-diagram").boundingBox();
    expect(diagramBox!.y + diagramBox!.height).toBeLessThanOrEqual(
      heroBox!.y + heroBox!.height + 1,
    );
    await expect
      .poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      )
      .toBe(true);
    await page.screenshot({
      animations: "disabled",
      path: `test-results/${name}-viewport.png`,
    });
    await page.screenshot({
      animations: "disabled",
      path: `test-results/${name}.png`,
      fullPage: true,
    });
    if (name === "mobile" || name === "tablet") {
      await page
        .locator(".hero-diagram")
        .screenshot({ path: `test-results/${name}-diagram.png` });
      await page
        .locator(".architecture")
        .screenshot({ path: `test-results/${name}-architecture.png` });
      await page
        .locator(".workflow-console")
        .screenshot({ path: `test-results/${name}-execution.png` });
    }
  });
}
test("platform keyboard navigation, workflows and approval gate", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("tab", { name: /Enterprise Context/ }).focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("tabpanel")).toContainText("Authority", {
    ignoreCase: true,
  });
  await page.getByRole("button", { name: "Approve example action" }).click();
  await expect(
    page.getByText("Example complete. Every action recorded."),
  ).toBeVisible();
  await page.getByRole("button", { name: "Replay" }).click();
  await expect(
    page.getByRole("button", { name: "Approve example action" }),
  ).toBeVisible();
  await page.getByRole("button", { name: /IT operations/ }).click();
  await expect(
    page.getByRole("heading", { name: "Resolve an access request" }),
  ).toBeVisible();
});
test("working session placeholder is accessible and dismissible", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Book a working session" })
    .first()
    .click();
  const dialog = page.getByRole("dialog", {
    name: "Let’s scope the first step.",
  });
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText("Scheduling coming soon");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
});
test("mobile navigation and legal routes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Deployment" })
    .click();
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
  await page.getByRole("link", { name: "Privacy", exact: true }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: "Privacy" }),
  ).toBeVisible();
  await page.goto("/terms");
  await expect(
    page.getByRole("heading", { level: 1, name: "Website terms" }),
  ).toBeVisible();
});

test("every section visual review, desktop and mobile", async ({ page }) => {
  test.setTimeout(180000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  const sections = [
    ".hero",
    ".systems-strip",
    ".problem",
    "#platform",
    ".how",
    ".paths",
    ".execution",
    "#deployment",
    "#workflows",
    "#company",
    ".final-cta",
    ".site-footer",
  ];
  for (const [name, width, height] of [
    ["review-desktop", 1440, 1000],
    ["review-mobile", 390, 844],
  ] as const) {
    await page.setViewportSize({ width, height });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    for (let i = 0; i < sections.length; i++) {
      await page.locator(sections[i]).scrollIntoViewIfNeeded();
      await page
        .locator(sections[i])
        .screenshot({
          animations: "disabled",
          path: `artifacts/design/${name}-${String(i).padStart(2, "0")}.png`,
        });
    }
  }
});

test("page renders without hydration or browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.getByRole("tab", { name: /Enterprise Context/ }).click();
  expect(errors).toEqual([]);
});
