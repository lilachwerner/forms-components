import { newE2EPage } from '@stencil/core/testing';

describe('fc-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-form></fc-form>');

    const element = await page.find('fc-form');
    expect(element).toHaveClass('hydrated');
  });
});
