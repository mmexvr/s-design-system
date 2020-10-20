import { newE2EPage } from '@stencil/core/testing';

describe('s-ds-testing', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-ds-testing></s-ds-testing>');

    const element = await page.find('s-ds-testing');
    expect(element).toHaveClass('hydrated');
  });
});
