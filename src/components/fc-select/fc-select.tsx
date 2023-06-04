import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'fc-select',
  styleUrl: 'fc-select.scss',
  shadow: true,
})
export class FcSelect {
  @Prop() options: string[] = [];
  @Prop() defaultValue: string = '';
  @State() value: string = this.defaultValue;
  @State() isOpen: Boolean = false;

  @Event({ bubbles: true }) selectChange: EventEmitter<string>;

  componentWillLoad() {
    this.value = this.defaultValue;
  }

  handleOptionSelect(option: string) {
    this.value = option;
    this.isOpen = false;
    this.selectChange.emit(this.value);
  }

  dropdownOpen() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div class='fc-select'>
        <button class='fc-select-trigger' onClick={() => this.dropdownOpen()}>
          {this.value || 'Select one of the options'}
        </button>
        {this.isOpen && (
          <div class='fc-select-dropdown'>
            {this.options.map(option => (
              <div class='fc-select-option' onClick={() => this.handleOptionSelect(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
