import "./app-info.css";

const AppInfo = (props) => {
    return (
      <div className="app-info">
          <p className="fs-3">Barcha filmlar soni: {props.allMoviesCount}</p>
          <p className="fs-5">Sevimli filmlar: {props.favouriteMoviesCount}</p>
        </div>
    )
  }

export default AppInfo
