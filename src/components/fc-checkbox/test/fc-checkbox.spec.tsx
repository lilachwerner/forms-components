import { newSpecPage } from '@stencil/core/testing';
import { FcCheckbox } from '../fc-checkbox';

describe('fc-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcCheckbox],
      html: `<fc-checkbox></fc-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-checkbox>
    `);
  });
});
