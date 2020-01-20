import { newE2EPage } from '@stencil/core/testing';

describe('s-ds-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<s-ds-header></s-ds-header>');
    const element = await page.find('s-ds-header');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<s-ds-header></s-ds-header>');
    const component = await page.find('s-ds-header');
    const element = await page.find('s-ds-header >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('header', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

  });
});
