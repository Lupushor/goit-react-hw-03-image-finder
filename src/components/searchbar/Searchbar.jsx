import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handelChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handelSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Нельзя сделать запрос по пустому query');
    }

    this.props.onSubmit(this.state);
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;

    return (
      //class="searchbar", class="form", class="button", class="button-label", class="input"
      <header>
        <form onSubmit={this.handelSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            value={query}
            onChange={this.handelChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
