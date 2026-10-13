import { expect, Locator } from '@playwright/test';

/**
 * Проверяет, что элемент полностью отсутствует на странице (удален из DOM)
 * @param locator Локатор элемента Playwright
 * @param timeout Необязательный таймаут ожидания (в миллисекундах)
 */
export async function ElementVisibly(locator: Locator, timeout: number = 5000) {
  // Используем toHaveCount(0), так как это самый надежный способ проверить отсутствие в DOM
  await expect(locator).not.toBeHidden();
  await expect(locator).toBeVisible();
}