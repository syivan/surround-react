import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Surround
          </a>
        </div>
      </nav>
      <div className="main-container mt-2">
        <div className="card tab" id="content-tab">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="yt-tab"
                data-toggle="tab"
                href="#youtubePanel"
                aria-selected="true"
                role="tab"
                aria-controls="youtubePanel"
              >
                Funct 1
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="spotify-tab"
                data-toggle="tab"
                href="#spotifyPanel"
                aria-selected="true"
                role="tab"
                aria-controls="spotifyPanel"
              >
                Funct 2
              </a>
            </li>
          </ul>

          <div className="tab-content mt-2" id="myTabContent">
            <div
              className="tab-pane fade show active container"
              role="tabpanel"
              aria-labelledby="yt-tab"
              id="youtubePanel"
            >
              <div className="d-flex">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  id="yt-search"
                  placeholder="Search"
                />
                <button
                  className="btn btn-secondary my-2 my-sm-0"
                  type="button"
                  id="yt-button"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="spotifyPanel"
              role="tabpanel"
              aria-labelledby="spotify-tab"
            >
              <h1>Hey there</h1>
            </div>
          </div>
        </div>

        <div className="card tab" id="effect-tab">
          Hoya there
        </div>
      </div>
      )
    </div>
  );
};

export default App;
