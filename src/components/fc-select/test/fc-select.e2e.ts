import { newE2EPage } from '@stencil/core/testing';

describe('fc-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-select></fc-select>');

    const element = await page.find('fc-select');
    expect(element).toHaveClass('hydrated');
  });
});
