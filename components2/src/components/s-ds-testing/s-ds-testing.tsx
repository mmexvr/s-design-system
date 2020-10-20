import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 's-ds-testing',
  styleUrl: 's-ds-testing.css',
  shadow: true,
})
export class SDsTesting {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
