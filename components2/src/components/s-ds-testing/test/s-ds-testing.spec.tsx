import { newSpecPage } from '@stencil/core/testing';
import { SDsTesting } from '../s-ds-testing';

describe('s-ds-testing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SDsTesting],
      html: `<s-ds-testing></s-ds-testing>`,
    });
    expect(page.root).toEqualHtml(`
      <s-ds-testing>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-ds-testing>
    `);
  });
});
