import { test, expect } from '../../fixtures';

const now = new Date().toLocaleString('ru-RU');


test.beforeEach(async ({ page, metod, locatorPir, homePage }) => {
  await page.goto('/');

  // Заходим в тестовый объект
  await metod.GoToObject('142');
  await expect(homePage.nameObject).toBeVisible();


  // Переходим непосредственно в модуль ПИР и ожидаем загрузки Structural Llist
  await locatorPir.iconModulPir.click();
  await expect(locatorPir.elementStructuralLlist).toBeVisible();
});

test('Создание документа ПИР', async ({ locatorPir }) => {

    //Создаем карточку документа
    await test.step('1. Создаем документ ПИР', async () => {

        await locatorPir.pirDocAdd.click();
        await expect(locatorPir.pirDocAddMenu).toBeVisible();
        await locatorPir.pirDocAddMenu.click();
    });

    await test.step('2. Заполняем поля в документе ПИР', async () => {

        //Заполняем поле "Тип"
        await locatorPir.docTypes.click();
        await expect(locatorPir.designDoc).toBeVisible();
        await locatorPir.designDoc.click();
        await expect(locatorPir.designDoc).toBeHidden();
        
        //Заполняем поле "Категория документов"
        await locatorPir.pirCategories.click();
        await expect(locatorPir.technolog).toBeVisible();
        await locatorPir.technolog.click();
        await expect(locatorPir.technolog).toBeHidden();
    });

    await test.step('3. Заполняем номер документа', async () => {

        await expect(locatorPir.fieldNumber).toBeVisible();
        await locatorPir.fieldNumber.fill(now);
    });

    await test.step('4. Сохраняем и проводим документ', async () => {

        await locatorPir.buttonSave.click();
        await expect(locatorPir.buttonProcess).toBeVisible();    
        await locatorPir.buttonProcess.click();
        await expect(locatorPir.postedStatus).toBeVisible();

    });

    await test.step('5. Проходим проверку документа', async () => {

        //Отправляем дкоумент на првоерку
        await locatorPir.forReview.click();
        await expect(locatorPir.sentForReview).toBeVisible();

        //Принять проверку
        await locatorPir.buttonAccept.click();    

        //Заполняем поле "Комментарий"
        await locatorPir.fieldComment.fill('test');
        await locatorPir.buttonOk.click();
        await expect(locatorPir.verificationPassed).toBeVisible();
    });
});

test('Отображение параметров модуля ПИР', async ({ locatorPir }) => {

    // Переходим в параметры документов ПИР
    await locatorPir.buttonParam.click();
    await expect(locatorPir.titleParamName).toBeVisible();

    // Проверям наличие категории "I. Исходно-разрешительная документация"
    await locatorPir.settingParamButton.click();
    await expect(locatorPir.listParamDoc).toBeVisible();
});