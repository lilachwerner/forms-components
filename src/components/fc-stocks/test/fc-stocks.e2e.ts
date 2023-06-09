import { newE2EPage } from '@stencil/core/testing';

describe('fc-stocks', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-stocks></fc-stocks>');

    const element = await page.find('fc-stocks');
    expect(element).toHaveClass('hydrated');
  });
});
