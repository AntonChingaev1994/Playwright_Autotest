import { test, expect } from '../fixtures';

test('Наличие элементов на странице модуля ИД', async ({ page, homePage, metod, objectPage }) => {
  await page.goto('/');

  await metod.GoToObject('142');
  await expect(homePage.nameObject).toBeVisible();

  await objectPage.modulId.click();
  await objectPage.tabAll.click(); 
  await expect(objectPage.itemList).toBeVisible();
  await expect(page).toHaveScreenshot('acts.png', { maxDiffPixels: 100 });

  await objectPage.chapterAct.click();
  await objectPage.allCats.click();
  await expect(objectPage.menuFilterAkt).toBeVisible();
  await expect(page).toHaveScreenshot('all_acts.png', { maxDiffPixels: 100 });
});