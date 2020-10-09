import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'your-component',
  styleUrl: 'your-component.css',
  shadow: true,
})
export class YourComponent {
  /**
   * The first name
   */
  @Prop() lol: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.lol, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! your {this.getText()}</div>;
  }
}
