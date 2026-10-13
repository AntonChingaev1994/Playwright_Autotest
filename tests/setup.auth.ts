import {  test as setup } from '../fixtures';

const authFile = '.auth/user.json'; 

setup('authenticate', async ({ page, loginPage }) => {
  // Меняем базу на ПШ
  await loginPage.SwitchDB(loginPage.db_name)

  // Авторизуемся
  await loginPage.Authorization('chingaev', 'aschingaev1994');
  
  // Ждем когда появидться лого на главной странице(необходимо что бы записать правильные куки)
  await loginPage.logo.waitFor({ state: 'visible', timeout: 10000 });

  // Сохраняем состояние сессии в файл
  await page.context().storageState({ path: authFile });
});