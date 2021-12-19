import { Component } from "react";
import "./search-panel.scss";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.filter}
        onChange={(e) => {
          this.setState({ filter: e.target.value });
          this.props.onChangeFilter(e.target.value);
        }}
      />
    );
  }
}

export default SearchPanel;
