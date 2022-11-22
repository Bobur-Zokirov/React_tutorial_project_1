import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  render() {
    return (
      <div className="mt-3">
        <button className="btn btn-primary" type="button">Barcha kinolar</button>
        <button className="btn btn-outline-primary mx-4" type="button">Mashhur kinolar</button>
        <button className="btn btn-outline-primary" type="button">Eng ko'p ko'rilgan kinolar</button>
      </div>
    )
  }
}

export default AppFilter