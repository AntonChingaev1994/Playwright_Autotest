import { Page, Locator, expect } from '@playwright/test';


export class LocatorPir {

  constructor(private readonly page: Page) {}

  get iconModulPir() {return this.page.locator('#compound_page_tabs_icons [data-tab="pir"]');}
  get elementStructuralLlist() {return this.page.locator('#compound_page_tab_pir .structural_list');}
  get pirDocAdd() {return this.page.locator('#compound_page_tab_pir .pir_doc_add');}
  get pirDocAddMenu() {return this.page.locator('.pir_doc_add_menu');}
  get titelNameDoc() {return this.page.locator('.card_ext_view_wrapper_documents').getByText('Документ ПИР', { exact: true });}
  get docTypes() {return this.page.locator('[data-lib="pir_doc_types"]');}
  get designDoc() {return this.page.locator('.modal-content').getByTitle('Проектная документация')};
  get pirCategories() {return this.page.locator('[data-lib="pir_categories"]');}
  get technolog() {return this.page.locator('.modal-content').getByTitle('Технологическое задание')};
  get fieldNumber() {return this.page.locator('[data-field="num"]');}
  get buttonSave() {return this.page.locator('[data-action="save"]');}
  get buttonProcess() {return this.page.locator('.document_card_footer_buttons [data-action="process"]');}
  get postedStatus() {return this.page.locator('.card_ext_view_wrapper_documents [data-field="processed"]');}
  get forReview() {return this.page.locator('.card-body').getByText('Отправить на проверку', {exact: true});}
  get sentForReview() {return this.page.locator('.card_ext_header').getByText('Отправлен на проверку', {exact: true})}
  get buttonAccept() {return this.page.locator('.card-body').getByText('Принять', {exact: true})}
  get fieldComment() {return this.page.locator('[name="formData[comment_inspector]"]');}
  get buttonOk() {return this.page.locator('.modal-content .btn-success');}
  get verificationPassed() {return this.page.locator('.card_ext_header').getByText('Проверка пройдена', {exact: true})}

  get buttonParam() {return this.page.locator('.structural_list').getByTitle('Параметры')};
  get titleParamName() {return this.page.locator('.pir_view_container').getByText('Параметры объекта ПИР', {exact: true})}
  get settingParamButton() {return this.page.locator('.pir_view_container .btn');}
  get listParamDoc() {return this.page.locator('.modal-content').getByTitle('I. Исходно-разрешительная документация')};
}
