import "./search-panel.css";

import { Component } from 'react'

export class SearchPanel extends Component {
  render() {
    return (
      <input type="text" className="form-control" placeholder="Kinolarni qidirish.." />
    )
  }
}

export default SearchPanel;