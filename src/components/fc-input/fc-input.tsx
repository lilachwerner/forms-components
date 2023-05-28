import { Component, Prop, h } from '@stencil/core';
import { InputType } from '../../types/input.types';

@Component({
  tag: 'fc-input',
  styleUrl: 'fc-input.scss',
  shadow: true,
})
export class FcInput {
  @Prop() type: InputType = "text"
  @Prop() disabled: boolean = false
  @Prop() label: string = "Please enter you name"
  @Prop() placeholder: string = "Please fill here your name"

  render() {
    return (
      <div class="input">
        <label>{this.label}</label><br />
        <input name={this.label} type={this.type} placeholder={this.placeholder} disabled={this.disabled}></input>
      </div>
    );
  }

}
