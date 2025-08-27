import {test, expect} from '@playwright/test';
import {HomePage} from '../pages/home.page';
import {SearchResultsPage} from '../pages/search.page';
import {ProductPage} from '../pages/product.page';

test('Pesquisar Cloth Myth Ex Pegasus', async ({page}) => {

    const term = 'Cloth myth ex pegasus';

    const homePage = new HomePage(page);
    const resultsPage = new SearchResultsPage(page);
    const productPage = new ProductPage(page);

    //acessa a pagina
    await homePage.navigate();

    //fecha popup
    await homePage.closeOnboardingPopup();

    //procura o item
    await homePage.searchItem(term);
    await resultsPage.validateSearchHeader();
    await resultsPage.clickFirstItemWithText("Tecido de bronze Bandai Saint Cloth Myth Ex Final Pegasus Seiya");

    // validações
    await productPage.validateProductTitle('Tecido de bronze Bandai Saint Cloth Myth Ex Final Pegasus Seiya');
    await productPage.validateActionButtons();
    await productPage.validateRelatedProducts();
    await productPage.validateProductPrice('1.197,03');
    await productPage.validateSellerName('DIEGOCALLILI');
});