import {expect, Page} from '@playwright/test';
import {BasePage} from "../base/base.page";

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigate() {
        await this.page.goto('/');
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveURL(/mercadolivre\.com\.br/);
    }

    async searchItem(item: string) {
        await this.fill('input[name="as_word"]', item);
        await this.click('button[type="submit"]');
    }

    async closeOnboardingPopup() {
        // espera o popup estar visível
        await this.page.waitForSelector('button[data-js="onboarding-cp-close"]', {timeout: 3000});
        // clica no botão "Mais tarde"
        await this.page.locator('button[data-js="onboarding-cp-close"]').click();
        // opcional: garantir que o popup sumiu
        await expect(this.page.locator('button[data-js="onboarding-cp-close"]')).toBeHidden();
    }
}