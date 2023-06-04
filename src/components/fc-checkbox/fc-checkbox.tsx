import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fc-checkbox',
  styleUrl: 'fc-checkbox.scss',
  shadow: true,
})
export class FcCheckbox {
  @Prop({ mutable: true }) isChecked: boolean = false;

  @Event({
    eventName: 'checkboxChange',
    bubbles: true
  }) checkboxChange: EventEmitter<boolean>;

  public changeStatus(): void {
    this.isChecked = !this.isChecked;
    this.checkboxChange.emit(this.isChecked);
  }


  render() {
    return (
      <Host>
        <label>
          <input type='checkbox' checked={this.isChecked} onClick={() => this.changeStatus()} />
          <span class='checkmark'></span>
        </label>



        <slot></slot>
      </Host>
    );
  }

}
