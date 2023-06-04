import { Component, Listen, Prop, h } from '@stencil/core';
import { IFormData } from '../../types/form-data.interface';

@Component({
  tag: 'fc-form',
  styleUrl: 'fc-form.scss',
  shadow: true,
})
export class FcForm {

  @Prop({ mutable: true }) form: IFormData;

  @Listen('inputChange')
  handleInputChange(data) {
    console.log(data);
    this.form = { ...this.form, ...data.detail };
    console.log(this.form);
  }

  @Listen('selectChange')
  handleSelectChange(event): void {
    this.form = { ...this.form, option: event.detail };
    console.log(this.form);
  }

  @Listen('checkboxChange')
  handleCheckboxChange(event) {
    this.form = { ...this.form, selected: event.detail };
    console.log(this.form);
  }

  public submit(event): void {
    event.preventDefault();
    console.log(this.form);
    debugger;
  }

  render() {
    return (
      <form onSubmit={(event) => this.submit(event)}>
        <h1>Please fiil in the form</h1>
        <fc-input label={'Name'}></fc-input><br />
        <fc-input label={'Last name'}></fc-input><br />
        <fc-input label={'Phone number'} type={'number'}></fc-input><br />
        <slot></slot>

        <button>Send Form</button>
      </form>
    );
  }

}
