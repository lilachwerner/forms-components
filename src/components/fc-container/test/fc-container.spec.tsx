import { newSpecPage } from '@stencil/core/testing';
import { FcContainer } from '../fc-container';

describe('fc-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcContainer],
      html: `<fc-container></fc-container>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-container>
    `);
  });
});
