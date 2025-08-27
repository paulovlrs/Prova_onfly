import { Page } from '@playwright/test';
import {BasePage} from "../base/base.page";

export class item extends BasePage{
  constructor(page: Page) {
    super(page);
  }

  async isRedirected(): Promise<boolean> {
    return this.page.url().includes('/item');
  }

  async addToCart() {
    await this.click('button:has-text("Adicionar ao carrinho")');
  }
}