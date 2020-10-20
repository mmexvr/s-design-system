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
        <header part='partheader'>first-child shadowdom {this.headerTitle} <p>P inside header</p></header>
        <header part='partheader'>sencond-child shadowdom{this.headerTitle}</header>
        <slot></slot>
      </Host>
    );
  }

}
