import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 's-ds-header',
  styleUrl: 's-ds-header.css',
  shadow: true,
})
export class SDsHeader {

  render() {
    return (
      <Host>
        <header>header</header>
        <slot></slot>
      </Host>
    );
  }

}
