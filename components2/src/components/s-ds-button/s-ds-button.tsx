import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 's-ds-button',
  styleUrl: 's-ds-button.css',
  shadow: true,
})
export class SDsButton {
  @Prop() text;

  render() {
    return (
      <button class="s-btn">
        {this.text}
        <slot></slot>
      </button>
    );
  }

}
