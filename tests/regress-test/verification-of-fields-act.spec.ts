import { test, expect } from '../../fixtures';

  test('Проверка автозаполнения полей в АОСР', async ({page, homePage, metod, objectPage, fieldLabelsAosr}) => {
    await page.goto('/');

    await expect(homePage.modalContent).toBeVisible();
    await homePage.buttinSuccess.click();
    await expect(homePage.modalContent).not.toBeVisible();

    await metod.GoToObject('142');
    await expect(homePage.nameObject).toBeVisible();

    await objectPage.modulId.click();
    await objectPage.chapterAct.click();
    await objectPage.allCats.click();
    await objectPage.searchDoc.fill('Акт освидетельствования скрытых работ');
    await objectPage.docAosr.click();
    await expect(objectPage.spanAosr).toBeVisible();
    await objectPage.createDoc.click();
    await expect(objectPage.cardExtaosr).toBeVisible();

    for (const [key, value] of Object.entries(fieldLabelsAosr)) {
      await expect(objectPage.fieldCardDoc.filter({ has: page.locator('span', { hasText: key }) }).getByText(value, { exact: true })).toBeVisible();
    }
  });

test('Проверка автозаполнения полей в АОР', async ({page, homePage, metod, objectPage, fieldLabelsAor}) => {
    await page.goto('/');

    await expect(homePage.modalContent).toBeVisible();
    await homePage.buttinSuccess.click();
    await expect(homePage.modalContent).not.toBeVisible();

    await metod.GoToObject('142');
    await expect(homePage.nameObject).toBeVisible();

    await objectPage.modulId.click();
    await objectPage.chapterAct.click();
    await objectPage.allCats.click();
    await objectPage.searchDoc.fill('Акт освидетельствования работ');
    await objectPage.docAor.click();
    await expect(objectPage.spanAor).toBeVisible();
    await objectPage.createDoc.click();
    await expect(objectPage.cardExtaosrAor).toBeVisible();

    for (const [key, value] of Object.entries(fieldLabelsAor)) {
      await expect(objectPage.fieldCardDoc.filter({ has: page.locator('span', { hasText: key }) }).getByText(value, { exact: true })).toBeVisible();
    }
  });