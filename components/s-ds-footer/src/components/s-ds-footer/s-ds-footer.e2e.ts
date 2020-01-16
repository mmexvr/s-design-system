import { newE2EPage } from '@stencil/core/testing';

describe('s-ds-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<s-ds-footer></s-ds-footer>');
    const element = await page.find('s-ds-footer');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<s-ds-footer></s-ds-footer>');
    const component = await page.find('s-ds-footer');
    const element = await page.find('s-ds-footer >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
