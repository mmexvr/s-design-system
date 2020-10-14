import { newE2EPage } from '@stencil/core/testing';

describe('s-ds-theme', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-ds-theme></s-ds-theme>');

    const element = await page.find('s-ds-theme');
    expect(element).toHaveClass('hydrated');
  });
});
