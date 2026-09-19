import { test, expect } from "@playwright/test";

test("hero requires approval, honors pause, and returns an evaluated result", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1100 });
  await page.goto("/");
  const diagram = page.getByRole("figure", {
    name: "Private AI operating layer demonstration",
  });
  await diagram.scrollIntoViewIfNeeded();
  await expect(diagram).toHaveAttribute("data-phase", "2", { timeout: 12000 });
  await page.clock.install();
  await page.clock.runFor(7000);
  await expect(diagram).toHaveAttribute("data-phase", "2");
  await diagram.screenshot({ path: "artifacts/design/hero-approval.png" });
  await diagram
    .getByRole("button", { name: "Approve example", exact: true })
    .click();
  await expect(diagram).toHaveAttribute("data-phase", "3");
  await expect(diagram.getByRole("status")).toContainText(
    "proposed invoice adjustment only",
  );
  await diagram
    .getByRole("button", { name: "Pause animation", exact: true })
    .click();
  await page.clock.runFor(7000);
  await expect(diagram).toHaveAttribute("data-phase", "3");
  await diagram
    .getByRole("button", { name: "Resume animation", exact: true })
    .click();
  for (const phase of [4, 5, 6, 7]) {
    await page.clock.runFor(2300);
    await expect(diagram).toHaveAttribute("data-phase", String(phase));
  }
  await page.clock.runFor(700);
  await diagram.screenshot({ path: "artifacts/design/hero-complete.png" });
  await diagram.getByRole("button", { name: "Replay diagram" }).click();
  await expect(diagram).toHaveAttribute("data-phase", "0");
  await page.locator("#company").scrollIntoViewIfNeeded();
  await expect(diagram).toHaveAttribute("data-running", "false");
  await page.clock.runFor(7000);
  await expect(diagram).toHaveAttribute("data-phase", "0");
});

test("reduced-motion hero retains the complete architecture without animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const diagram = page.getByRole("figure", {
    name: "Private AI operating layer demonstration",
  });
  await expect(diagram).toHaveAttribute("data-reduced", "true");
  await diagram.scrollIntoViewIfNeeded();
  await expect(
    diagram.getByRole("button", { name: "Pause animation" }),
  ).toBeHidden();
  for (const label of [
    "ERP",
    "CRM",
    "ITSM",
    "Documents",
    "Databases",
    "Internal APIs",
    "Connectors",
    "Enterprise Context",
    "Permissions and Approvals",
    "Model Routing",
    "Evaluation and Observability",
    "Governed agents",
  ]) {
    await expect(
      diagram.locator("svg").getByText(label, { exact: true }),
    ).toBeVisible();
  }
  await expect(diagram).toHaveAttribute("data-running", "false");
  await diagram.screenshot({
    path: "artifacts/design/hero-reduced-mobile.png",
  });
});
