import { newSpecPage } from '@stencil/core/testing';
import { SDsFooter } from '../s-ds-footer';

describe('s-ds-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SDsFooter],
      html: `<s-ds-footer></s-ds-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <s-ds-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-ds-footer>
    `);
  });
});
