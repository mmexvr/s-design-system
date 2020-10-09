import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 's-ds-cookie',
  styleUrl: 's-ds-cookie.css',
  shadow: true,
})
export class SDsCookie {
  @Prop() cookieName = 'Default cookie';

  render() {
    return (
      <Host>
        {this.cookieName}
        <slot></slot>
      </Host>
    );
  }

}
