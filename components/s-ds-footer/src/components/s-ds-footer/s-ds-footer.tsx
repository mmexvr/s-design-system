import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 's-ds-footer',
  styleUrl: 's-ds-footer.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string;

  private getText(): string {
    return format(this.first);
  }

  render() {
    return <div>{this.getText()}</div>;
  }
}
