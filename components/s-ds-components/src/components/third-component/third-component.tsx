import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'third-component',
  styleUrl: 'third-component.css',
  shadow: true,
})
export class ThirdComponent {

  render() {
    return (
      <Host>
        cool
        <slot></slot>
      </Host>
    );
  }

}
