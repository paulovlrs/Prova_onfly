import {Page, expect} from '@playwright/test';
import {BasePage} from "../base/base.page";

export class ProductPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async validateProductTitle(expectedTitle: string) {
        await this.expectVisible('h1');
        const title = await this.getText('h1');
        await expect(title).toContain(expectedTitle);
    }

    async validateProductPrice(expectedPrice: string) {
        const allFractions = await this.page.locator('//span[@class="andes-money-amount ui-pdp-price__part andes-money-amount--cents-superscript andes-money-amount--compact"]//span[@class="andes-money-amount__fraction"]').first().textContent();//.allTextContents();
        const allCents = await this.page.locator('//span[@class="andes-money-amount ui-pdp-price__part andes-money-amount--cents-superscript andes-money-amount--compact"]//span[contains(@class,"andes-money-amount__cents")]').first().textContent();//.allTextContents();
        //console.log('centavos:', allCents);
        //console.log('reais:', allFractions);

        if (!allFractions || !allCents) {
            throw new Error('Não foi possível capturar o preço na página.');
        }

        const fullPrice = `${allFractions.trim()},${allCents.trim()}`;

        if (fullPrice !== expectedPrice) {
            throw new Error(`Preço incorreto. Esperado: "${expectedPrice}", Recebido: "${fullPrice}"`);
        }
    }

    async validateActionButtons() {
        const buybox = this.page.locator('#buybox-form').first();
        await expect(buybox).toBeVisible();

        const buyNowButton = buybox.getByRole('button', {name: /^Comprar agora$/i});
        const addToCartButton = buybox.getByRole('button', {name: /^Adicionar ao carrinho$/i});

        await expect(buyNowButton).toBeVisible();
        await expect(addToCartButton).toBeVisible();
    }

    async validateSellerName(expectedName: string): Promise<void> {
        // Form do buybox
        const buybox = this.page.locator('#buybox-form');

        // Localiza o botão do vendedor dentro do form do buybox
        const sellerLocator = buybox.getByRole('button', {name: new RegExp(`Vendido por${expectedName}`, 'i')});

        await sellerLocator.waitFor({state: 'visible', timeout: 10000});

        const sellerText = await sellerLocator.textContent();
        if (!sellerText || !sellerText.includes(expectedName)) {
            throw new Error(`Nome do vendedor não confere. Esperado: ${expectedName}, Obtido: ${sellerText}`);
        }
    }

    async validateRelatedProducts() {
        const relatedSection = this.page.locator('h2:has-text("Produtos relacionados")');
        await expect(relatedSection).toBeVisible();
    }
}