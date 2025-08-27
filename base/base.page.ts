import {Page, Locator, expect} from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path: string = '/') {
        await this.page.goto(path);
        await this.page.waitForLoadState('domcontentloaded');
    }

    locator(selector: string): Locator {
        return this.page.locator(selector);
    }

    async click(selectorOrLocator: string | Locator) {
        const el = typeof selectorOrLocator === 'string' ? this.locator(selectorOrLocator) : selectorOrLocator;
        await el.waitFor({state: 'visible', timeout: 10000});
        await el.click();
    }

    async fill(selectorOrLocator: string | Locator, text: string) {
        const el = typeof selectorOrLocator === 'string' ? this.locator(selectorOrLocator) : selectorOrLocator;
        await el.waitFor({state: 'visible', timeout: 7000});
        await el.fill(text);
    }

    async getText(selectorOrLocator: string | Locator): Promise<string> {
        const el = typeof selectorOrLocator === 'string' ? this.locator(selectorOrLocator) : selectorOrLocator;
        await el.waitFor({state: 'visible', timeout: 7000});
        const t = await el.innerText();
        return t ? t.trim() : '';
    }

    async isVisible(selectorOrLocator: string | Locator): Promise<boolean> {
        const el = typeof selectorOrLocator === 'string' ? this.locator(selectorOrLocator) : selectorOrLocator;
        return await el.isVisible();
    }

    async expectVisible(selectorOrLocator: string | Locator) {
        const el = typeof selectorOrLocator === 'string' ? this.locator(selectorOrLocator) : selectorOrLocator;
        await expect(el).toBeVisible();
    }
}