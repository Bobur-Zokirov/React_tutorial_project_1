import { Component } from "react";

import "./movies-add-form.css";

class MoviesAddForm extends Component{
  constructor(props){
    super(props)
    this.state = {name: "", views: ""}
  }


  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addFormHandler = (e) => {
    e.preventDefault()
    this.props.addMovie({ name: this.state.name, views: this.state.views})
    this.setState({
      name: '',
      views: '',
    })
}



  render() {
    const { name, views } = this.state;

    return (
      <div className="movies-add-form">
          <h3>Yangi kino qo'shish</h3>
          <form onSubmit={this.addFormHandler} className="add-form d-flex">
              <input required onChange={this.handleChangeInput} name="name" type="text" className="form-control new-post-label" placeholder="Qanday kino?" value={name} />
              <input required onChange={this.handleChangeInput} name="views" type="number" className="form-control new-post-label" placeholder="Necha marotaba ko'rilgan?" value={views} />
              <button type="submit" className="btn btn-outline-dark" >
                Qo'shish
              </button>
          </form>
      </div>
    )
  }
}

export default MoviesAddForm