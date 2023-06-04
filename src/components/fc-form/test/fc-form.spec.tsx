import { newSpecPage } from '@stencil/core/testing';
import { FcForm } from '../fc-form';

describe('fc-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcForm],
      html: `<fc-form></fc-form>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-form>
    `);
  });
});
