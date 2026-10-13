import { test, expect } from '../../fixtures';

test('Авторизация и проверка отображения модалки', async ({ page, homePage }) => {

    await page.goto('/');

    await expect(homePage.modalContent).toBeVisible();
    await homePage.buttinSuccess.click();
    await expect(homePage.modalContent).not.toBeVisible();
});

test('Авторизация и переход в объект', async ({ page, homePage, metod }) => {

    await page.goto('/');

    await metod.GoToObject('142');
    await expect(homePage.nameObject).toBeVisible();
});