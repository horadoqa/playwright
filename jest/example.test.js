const { chromium } = require('playwright');

describe('Testes com Playwright', () => {
  let browser, context, page;

  beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Verifica o título da página', async () => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  test('Navega para mais informações', async () => {
    await page.goto('https://example.com');
    await page.click('text=More information...');
    await page.waitForURL('https://example.com/more-info');
    const title = await page.title();
    expect(title).toBe('IANA — IANA-managed Reserved Domains');
  });
});
