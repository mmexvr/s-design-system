import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 's-ds-footer',
  styleUrl: 's-ds-footer.css',
  shadow: true,
})
export class SDsFooter {

  render() {
    return (
      <Host>
        <footer>Footer</footer>
        <slot></slot>
      </Host>
    );
  }

}
