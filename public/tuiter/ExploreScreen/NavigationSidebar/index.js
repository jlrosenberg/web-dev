const NavigationSidebar = () => {
  return `
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
          <a class="list-group-item" href="/">
        <i class="fa fa-home"></i> <span class="d-none d-xl-inline d-xxl-inline">Home</span></a>
          <a class="list-group-item active" href="/">
        <i class="fa fa-hashtag"></i> <span class="d-none d-xl-inline d-xxl-inline">Explore</span></a>
          <a class="list-group-item" href="/">
        <i class="fa fa-bell"></i> <span class="d-none d-xl-inline d-xxl-inline">Notifications</span></a>
          <a class="list-group-item" href="/">
        <i class="fa fa-envelope"></i> <span class="d-none d-xl-inline d-xxl-inline">Messages</span></a>
          <a class="list-group-item" href="/">
        <i class="fa fa-bookmark"></i> <span class="d-none d-xl-inline d-xxl-inline">Bookmarks</span></a>
          <a class="list-group-item" href="/">
        <i class="fa fa-list"></i> <span class="d-none d-xl-inline d-xxl-inline">Lists</span></a>
          <a class="list-group-item" href="/">
        <i class="fa fa-user"></i> <span class="d-none d-xl-inline d-xxl-inline">Profile</span></a>
          <a class="list-group-item" href="/">
        <i class="fa fa-circle"></i> <span class="d-none d-xl-inline d-xxl-inline">More</span></a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
    </div>
`;
};
export default NavigationSidebar;
