import { newSpecPage } from '@stencil/core/testing';
import { SDsButton } from '../s-ds-button';

describe('s-ds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SDsButton],
      html: `<s-ds-button></s-ds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <s-ds-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-ds-button>
    `);
  });
});
