import { test, expect } from "@playwright/test";

const repositories = [
  ["Medical RAG Chatbot", "Medical-RAG-Chatbot"],
  ["CashDash.ai", "CashDash.ai"],
  ["Smart AI HR Scheduler", "smart-ai-hr-scheduler"],
  ["Household Bills Dashboard", "household-bills-dashboard"],
];

test("projects and hiring contact paths are available on the rendered homepage", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle("Velu Murugan | AI Automation Engineer");
  await expect(page.locator("h1")).toContainText("AI Automation");
  await expect(page.locator("h1")).toContainText("Engineer");
  await expect(page.locator("#projects article")).toHaveCount(4);
  for (const [title, repo] of repositories) {
    await expect(
      page.getByRole("link", { name: "View " + title + " on GitHub" }),
    ).toHaveAttribute("href", "https://github.com/Velu2k03/" + repo);
  }
  await expect(page.getByRole("link", { name: "Email Velu" })).toHaveAttribute(
    "href",
    "mailto:velu2k03@gmail.com",
  );
  await expect(
    page.locator("#contact").getByRole("link", { name: "Video intro" }),
  ).toHaveAttribute(
    "href",
    "https://www.loom.com/share/13931b7921eb4c19b00a6819fe9b7095",
  );
  await expect(
    page.locator("#contact").getByRole("link", { name: "GitHub profile" }),
  ).toHaveAttribute("href", "https://github.com/Velu2k03");
  await expect(
    page
      .locator("#contact")
      .getByRole("link", { name: "+63 969 155 9821", exact: true }),
  ).toHaveAttribute("href", "tel:+639691559821");
  await expect(page.locator("#skills")).toContainText(
    "MCP (Model Context Protocol)",
  );
  await expect(page.locator("#experience")).toContainText("88%");
  await expect(page.locator("body")).not.toContainText(
    /freelanc|full.stack|1\.75|—/i,
  );
  await page.evaluate(() => document.fonts.ready);
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (element: HTMLImageElement) =>
            element.complete && element.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect
    .poll(() =>
      page.evaluate(() =>
        Array.from(document.images).every(
          (image) => image.complete && image.naturalWidth > 0,
        ),
      ),
    )
    .toBe(true);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: test.info().outputPath("homepage.png"),
    fullPage: true,
    scale: "css",
  });
  await page.screenshot({
    path: test.info().outputPath("hero.png"),
    scale: "css",
  });
  await page
    .locator("#contact")
    .screenshot({ path: test.info().outputPath("contact.png"), scale: "css" });
  expect(errors).toEqual([]);
});

test("navigation works from secondary pages and mobile menu supports Escape", async ({
  page,
  isMobile,
}) => {
  await page.goto("/about");
  await expect(page.locator("#experience")).toContainText(
    "Junior and Senior High School Teacher",
  );
  await expect(page.locator("#experience")).toContainText("88%");
  if (isMobile) {
    const toggle = page.getByRole("button", { name: "Open navigation" });
    await toggle.click();
    await expect(
      page.getByRole("button", { name: "Close navigation" }),
    ).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(toggle).toBeFocused();
    await toggle.click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Projects" })
      .click();
    await expect(
      page.getByRole("button", { name: "Open navigation" }),
    ).toHaveAttribute("aria-expanded", "false");
  } else {
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Projects" })
      .click();
  }
  await expect(page).toHaveURL("/#projects");
  await expect(
    page.getByRole("heading", { name: "Less talk. More building." }),
  ).toBeInViewport();
  await page.goto("/projects/apps");
  await expect(page).toHaveURL("/projects");
  await expect(page.locator("#projects article")).toHaveCount(4);
  await expect(page.locator("body")).not.toContainText(
    /freelanc|full.stack|50k|99\.9|CreatorOS/i,
  );
});

test("the current resume downloads and old PDFs are removed", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const section = page.locator("#resume");
  for (const [name, file] of [
    ["Download resume", "/Velu_Murugan_Resume_2026.pdf"],
  ]) {
    const link = section.getByRole("link", { name, exact: true });
    await expect(link).toHaveAttribute("download", "");
    const response = await request.get(file);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
    const downloaded = page.waitForEvent("download");
    await link.click();
    const download = await downloaded;
    expect(await download.failure()).toBeNull();
    expect(download.suggestedFilename()).toBe(file.slice(1));
  }
  for (const oldFile of ["/VELU-NEW-RESUME.pdf", "/CV-VELU-MURUGAN.pdf"]) {
    expect((await request.get(oldFile)).status()).toBe(404);
  }
});
