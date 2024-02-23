import React from "react";

class SearchBar extends React.Component {


  handleSearchForm=(event)=>{
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSearchForm}>
        <div className="form-row mb-5">
          <div className="col-10">
            <input
              onChange={this.props.searchProp}
              type="text"
              className="form-control"
              placeholder="Seach a movie"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
