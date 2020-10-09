import { newSpecPage } from '@stencil/core/testing';
import { SDsCookie } from '../s-ds-cookie';

describe('s-ds-cookie', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SDsCookie],
      html: `<s-ds-cookie></s-ds-cookie>`,
    });
    expect(page.root).toEqualHtml(`
      <s-ds-cookie>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-ds-cookie>
    `);
  });
});
