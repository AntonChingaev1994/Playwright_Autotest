import { test, Page, expect } from '@playwright/test';
import { LocatorLoginPage, LocatorHomePage, Method, LocatorObjectPage, dictFieldAOSR } from '../../page/PageObject';


let loginPage: LocatorLoginPage;
let homePage: LocatorHomePage;
let metod: Method;
let page: Page;
let id: LocatorObjectPage;

test.describe.serial('Сквозной сценарий', () => {

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LocatorLoginPage(page);
    homePage = new LocatorHomePage(page);
    metod = new Method(page);
    id = new LocatorObjectPage(page);
  });

  test.skip('Открываем главную страницу', async () => {
    page.goto('/');
  });

  test.skip('Проверка отображения модального окна при входе', async () => {
    await expect(homePage.modalContent).toBeVisible();
    await homePage.buttinSuccess.click();
    await expect(homePage.modalContent).not.toBeVisible();
  });

  test.skip('Перейти в объект регресс', async () => {
    await metod.GoToObject('142');
    await expect(homePage.nameObject).toBeVisible();
  });

  test.skip('Открытие карточки создания АОСР', async () => {
    await id.modulId.click();
    await id.chapterAct.click();
    await id.allCats.click();
    await id.searchDoc.fill('Акт освидетельствования скрытых работ');
    await id.docAosr.click();
    await expect(id.spanAosr).toBeVisible();
    await id.createDoc.click();
    await expect(id.cardExtaosr).toBeVisible();
  });

  test.skip('Поверка автозаполнения полей в  АОСР', async () => {
    for (const [key, value] of Object.entries(dictFieldAOSR)) {
      await expect(page.locator('.doc_add_field_item').filter({ has: page.locator('span', { hasText: key }) }).getByText(value, { exact: true })).toBeVisible();
    }
  });
});
