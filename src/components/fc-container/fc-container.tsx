import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fc-container',
  styleUrl: 'fc-container.scss',
  shadow: true,
})
export class FcContainer {

  render() {
    return (
      <Host>
        <slot>
          <fc-select options={['I work from home', 'I work from the office', 'I work hybrid']}></fc-select>
        </slot>
      </Host>
    );
  }

}
