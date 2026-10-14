import { Page, Locator, expect } from '@playwright/test';

export class LocatorLoginPage {

  constructor(private readonly page: Page) {}

  get fieldLogin() {return this.page.locator('input[name="login"]');}
  get fieldPassword() {return this.page.locator('input[name="password"]');}
  get buttonSubmit() {return this.page.locator('.form-horizontal').getByText('Войти', { exact: true });}
  get logo() {return this.page.locator('.bm-logo')}

  async Authorization(login: string, password: string) {
    await this.fieldLogin.fill(login);
    await this.fieldPassword.fill(password);
    await this.buttonSubmit.click();
  }

  async SwitchDB(db_name: string) {
    await this.page.goto(`/?set_db=${db_name}&_ac=1'`);
  }
}


export class LocatorHomePage {

  constructor(private readonly page: Page) {}
  
  get modalContent() {return this.page.locator('.modal-content');}
  get buttinSuccess() {return this.page.locator('.btn-success');}
  get nameObject() {return this.page.locator('.object_header_container').getByText('Регресс', { exact: true });}
}

export class LocatorObjectPage {

  constructor(private readonly page: Page) {}
  
  get modulId() {return this.page.getByRole('link', { name: 'Исполнительная документация'});}  
  get chapterAct() {return this.page.locator('#compound_page_tab_docs_id [data-subtab="akt"]');}  
  get allCats() {return this.page.locator('[data-menu-name="doc_types_menu_filter_akt"]');}  
  get searchDoc() {return this.page.locator('.section_menu [name="section_menu_search"]');}  
  get createDoc() {return this.page.locator('.docs_id_create_doc');}
  get tabAll() {return this.page.locator('#compound_page_tab_docs_id [data-subtab="docs"]');}  
  get itemList() {return this.page.locator('#compound_page_tab_docs_id .table-items-list');}
  get menuFilterAkt() {return this.page.locator('.doc_types_menu_side_panel_doc_types_menu_filter_akt_div');}
  get docAosr() { return this.page.locator('.section_menu_content_wrapper').getByText('Акт освидетельствования скрытых работ', { exact: true }); }
  get cardExtaosr() {return this.page.locator('.card_ext_placement').getByText('Акт освидетельствования скрытых работ', { exact: true }); }
  get spanAosr() {return this.page.locator('.docs_id_type_filter_btn').getByText('Акт освидетельствования скрытых работ', { exact: true }); }

  get docAor() {return this.page.locator('.section_menu_content_wrapper').getByText('Акт освидетельствования работ', { exact: true });}
  get spanAor() {return this.page.locator('.docs_id_type_filter_btn').getByText('Акт освидетельствования работ', { exact: true }); }
  get cardExtaosrAor() {return this.page.locator('.card_ext_placement').getByText('Акт освидетельствования работ', { exact: true }); }

  get fieldCardDoc() {return this.page.locator('.doc_add_field_item');}
}


export class Method {

  constructor(private readonly page: Page) {}

  async ElementVisibly(locator: Locator) {
    // Элемент виден на странице
    await expect(locator).not.toBeHidden();
    await expect(locator).toBeVisible();
  }

  async ElementNotVisibly(locator: Locator) {
    // Элемент не виден на странице
    await expect(locator).toBeHidden();
    await expect(locator).not.toBeVisible();
  }

  async GoToObject(object: string) {
    // Переходим в нужный объект
    await this.page.goto(`/?object_id=${object}#info2-information`);
  }
}

export const dictFieldAOSR: Record<string, string> = {
  "Объект капитального строительства": "Регресс",
  "Лицо, осуществляющее строительство": "Test 1&2",
  "Лицо, выполнившее работы, подлежащие освидетельствованию": "Компания Рога и Копыта",
  "Представитель лица, осуществляющего строительство": "Петров Я.Д.",
  "Представитель лица, осуществляющего подготовку проектной документации": "Чингаев А.",
  "Иные представители лиц, участвующих в освидетельствовании": "Мусинян Г.",
  "Застройщик или технический заказчик": "Компания соленый Огурец",
  "Лицо, осуществляющее подготовку проектной документации": "Компания Радуга",
  "Представитель застройщика или заказчика": "Торшин Ж.",
  "Представитель лица, осуществляющего строительство, по вопросам строительного контроля": "Чингаев А.",
  "Представитель лица, выполнившего работы, подлежащие освидетельствованию": "Роман Ж."
} as const;

export const dictFieldAOR: Record<string, string> = {
  "Объект капитального строительства": "Регресс",
  "Лицо, осуществляющее строительство": "Test 1&2",
  "Лицо, выполнившее работы, подлежащие освидетельствованию": "Компания Рога и Копыта",
  "Представитель лица, осуществляющего строительство": "Петров Я.Д.",
  "Представитель лица, осуществляющего подготовку проектной документации": "Игнатенко И.",
  "Иные представители лиц, участвующих в освидетельствовании": "Мусинян Г.",
  "Застройщик или технический заказчик": "Компания соленый Огурец",
  "Лицо, осуществляющее подготовку проектной документации": "Компания Радуга",
  "Представитель застройщика или заказчика": "Лопухов И.А.",
  "Представитель лица, осуществляющего строительство, по вопросам строительного контроля": "Чингаев А.",
  "Представитель лица, выполнившего работы, подлежащие освидетельствованию": "Роман Ж."
} as const;

