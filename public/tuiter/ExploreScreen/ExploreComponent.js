import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="col col-lg-5 col-9">
    <div class="row mb-2">
      <div class="col-11">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"> </span>
          <input
            type="text"
            class="form-control rounded-pill"
            placeholder="Search Tuiter"
          />
        </div>
      </div>
      <div class="col-1">
        <a href="#"> <i class="fa fa-cog settings-cog mt-1"> </i> </a>
      </div>
    </div>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">For You</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
    <div class="card mt-2">
      <div class="image-container">
        <img
          src="https://media.istockphoto.com/photos/space-shuttle-in-the-rays-of-sun-picture-id1131418344?k=20&m=1131418344&s=612x612&w=0&h=yPyqDj2LYNbPNr8e69PQGm3LZZVTUWU0tjHzDsDl7YU="
          class="card-img-top"
        />
        <div class="card-img-overlay">
          <div class="image-overlay-text">SpaceX's Starship</div>
        </div>
      </div>
    </div>

    ${PostSummaryList()}
  </div>

    `);
}
export default ExploreComponent;