import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'fc-text',
  styleUrl: 'fc-text.scss',
  shadow: true,
})
export class FcText {
  @Prop() label: string = "Please write about yourself"
  @Prop() disabled: boolean = false
  @Prop() rows: number = 4
  @Prop() cols: number = 50
  @Prop() placeholder: string = "Please fill this textarea"

  render() {
    return (
      <div class="input">
        <label>{this.label}</label><br />
        <textarea name={this.label} placeholder={this.placeholder} disabled={this.disabled} rows={this.rows} cols={this.cols}></textarea>
      </div>
    );
  }

}
