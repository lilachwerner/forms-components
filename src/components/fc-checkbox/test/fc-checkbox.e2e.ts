import { newE2EPage } from '@stencil/core/testing';

describe('fc-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-checkbox></fc-checkbox>');

    const element = await page.find('fc-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
