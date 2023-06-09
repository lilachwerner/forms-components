import { newSpecPage } from '@stencil/core/testing';
import { FcStocks } from '../fc-stocks';

describe('fc-stocks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcStocks],
      html: `<fc-stocks></fc-stocks>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-stocks>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-stocks>
    `);
  });
});
