import React, {Component} from 'react';
var A = 2;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Creamos la propiedad para poder acceder a ella más tarde en State.
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        {/*Como anteriormente se creo 'term' ahora podemos acceder*/}
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
