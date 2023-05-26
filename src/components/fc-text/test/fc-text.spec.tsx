import { newSpecPage } from '@stencil/core/testing';
import { FcText } from '../fc-text';

describe('fc-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcText],
      html: `<fc-text></fc-text>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-text>
    `);
  });
});
