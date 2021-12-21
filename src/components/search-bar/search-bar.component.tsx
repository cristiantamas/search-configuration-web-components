import { Component, Prop, Event, getAssetPath, EventEmitter, State, h } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: './search-bar.styles.scss',
})
export class SearchBar {
  @Prop() inputClass: string;
  @Prop() buttonClass: string;
  @State() searchText: string;

  @Event() emitSearchText: EventEmitter<string>;

  handleChange = event => {
    this.searchText = event.target.value;
    console.log(this.searchText);
  };

  handleEmit = () => {
    console.log('Current text: ', this.searchText);
    this.emitSearchText.emit(this.searchText);
  };

  render() {
    return (
      <div class="container">
        <div class={`input-container ${this.inputClass}`}>
          <img src={getAssetPath(`../../assets/ibm_carbon_icons/search_glass.svg`)} width="24" height="24" />
          <input placeholder="Search Products" value={this.searchText} onInput={this.handleChange} />
        </div>
        <button class={`${this.buttonClass}`} onClick={this.handleEmit}>
          Search
        </button>
      </div>
    );
  }
}
