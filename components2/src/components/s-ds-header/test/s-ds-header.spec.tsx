import { newSpecPage } from '@stencil/core/testing';
import { SDsHeader } from '../s-ds-header';

describe('s-ds-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SDsHeader],
      html: `<s-ds-header></s-ds-header>`,
    });
    expect(page.root).toEqualHtml(`
      <s-ds-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-ds-header>
    `);
  });
});
