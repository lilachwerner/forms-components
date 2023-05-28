import { newE2EPage } from '@stencil/core/testing';

describe('fc-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-container></fc-container>');

    const element = await page.find('fc-container');
    expect(element).toHaveClass('hydrated');
  });
});
