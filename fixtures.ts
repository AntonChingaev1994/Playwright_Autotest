import { test as base, expect } from '@playwright/test';
import { LocatorLoginPage, LocatorHomePage, LocatorObjectPage, Method, dictFieldAOSR, dictFieldAOR } from './page/PageObject';
import { LocatorPir } from './page/PagePir';


// Объявляем типы страниц, которые хотим использовать в тестах
type MyFixtures = {
  loginPage: LocatorLoginPage;
  homePage: LocatorHomePage;
  objectPage: LocatorObjectPage;
  metod: Method;
  fieldLabelsAosr: typeof dictFieldAOSR;
  fieldLabelsAor: typeof dictFieldAOR;
  locatorPir: LocatorPir;
};

// Расширяем базовый тест Playwright
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => { await use(new LocatorLoginPage(page)); },
  homePage: async ({ page }, use) => { await use(new LocatorHomePage(page)); },
  objectPage: async ({ page }, use) => { await use(new LocatorObjectPage(page)); },
  metod: async ({ page }, use) => { await use(new Method(page)); },
  fieldLabelsAosr: async ({}, use) => {await use(dictFieldAOSR);},
  fieldLabelsAor: async ({}, use) => {await use(dictFieldAOR);},
  locatorPir: async ({ page }, use) => { await use(new LocatorPir(page)); },

});

export { expect };