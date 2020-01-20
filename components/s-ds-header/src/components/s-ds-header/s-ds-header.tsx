import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 's-ds-header',
  styleUrl: 's-ds-header.css',
  shadow: true
})
export class MyComponent {
  /**
   * Header Text
   */
  @Prop() header: string;

  private getText(): string {
    return format(this.header);
  }

  render() {
    return <div><h2>{this.getText()}</h2></div>;
  }
}
