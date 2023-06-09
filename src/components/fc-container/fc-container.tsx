import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fc-container',
  styleUrl: 'fc-container.scss',
  shadow: true,
})
export class FcContainer {

  public checkboxChange(event: CustomEvent<boolean>): void {
    console.log('Is the checkbox checked?', event.detail);

  }

  render() {
    return (
      <Host>
        <h1>Stocks</h1>
        <fc-stocks symbol='AAPL'></fc-stocks>
        {/* <fc-form>
          <fc-select options={['I work from home', 'I work from the office', 'I work hybrid']}></fc-select><br />
          <fc-checkbox isChecked={true} onCheckboxChange={(event) => this.checkboxChange(event)}></fc-checkbox><br />
        </fc-form> */}
        <slot></slot>
      </Host>
    );
  }

}
