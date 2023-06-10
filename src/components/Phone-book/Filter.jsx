import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends React.Component {
  static propTypes = {
    filter: PropTypes.string,
  };

  state = {
    filter: '',
  };

  handleFilterInputChange = event => {
    // console.log('Було в state.filter: ', this.state.filter);
    this.setState({ filter: event.target.value }, () => {
      // console.log('Стало в state.filter: ', this.state.filter); // Після виклику функції зворотнього виклику оновлене значення "o"
      this.props.onChange(this.state); // Тут ми зберігаємо state для предачі в батьківський модуль.
    });
  };

  render() {
    return (
      <input
        className={css['filter-input']}
        value={this.state.filter}
        onChange={this.handleFilterInputChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Find contacts by name"
      />
    );
  }
}

export default Filter;
