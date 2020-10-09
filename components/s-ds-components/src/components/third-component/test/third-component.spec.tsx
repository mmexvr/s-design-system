import { newSpecPage } from '@stencil/core/testing';
import { ThirdComponent } from '../third-component';

describe('third-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThirdComponent],
      html: `<third-component></third-component>`,
    });
    expect(page.root).toEqualHtml(`
      <third-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </third-component>
    `);
  });
});
