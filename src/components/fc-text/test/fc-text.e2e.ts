import { newE2EPage } from '@stencil/core/testing';

describe('fc-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-text></fc-text>');

    const element = await page.find('fc-text');
    expect(element).toHaveClass('hydrated');
  });
});
