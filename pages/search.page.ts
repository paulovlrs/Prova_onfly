import {Page, expect} from '@playwright/test';
import {BasePage} from '../base/base.page';

export class SearchResultsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async isItemVisible(itemName: string): Promise<boolean> {
        return await this.isVisible(`text=${itemName}`);
    }

    async clickFirstItemWithText(text: string) {
        const selector = `a:has-text("${text}")`;
        const first = this.locator(selector).first();
        await this.click(first);
    }

    async validateSearchHeader() {
        const input = this.page.locator('input#cb1-edit, input[name="as_word"]');
        const term = await input.inputValue();
        const title = this.page.getByRole('heading', {level: 1});
        await expect(title).toContainText(new RegExp(term, 'i'));

        const quantityLocator = this.page.locator('span.ui-search-search-result__quantity-results');
        await expect(quantityLocator).toContainText('resultados');
    }
}