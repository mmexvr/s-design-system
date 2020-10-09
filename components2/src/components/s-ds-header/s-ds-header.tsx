import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 's-ds-header',
  styleUrl: 's-ds-header.css',
  shadow: true,
})
export class SDsHeader {
  @Prop() headerTitle = 'Default header text';

  render() {
    return (
      <Host>
        <header>Scania {this.headerTitle}</header>
        <slot></slot>
      </Host>
    );
  }

}
