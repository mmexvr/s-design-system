import { newSpecPage } from '@stencil/core/testing';
import { SDsTheme } from '../s-ds-theme';

describe('s-ds-theme', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SDsTheme],
      html: `<s-ds-theme></s-ds-theme>`,
    });
    expect(page.root).toEqualHtml(`
      <s-ds-theme>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-ds-theme>
    `);
  });
});
