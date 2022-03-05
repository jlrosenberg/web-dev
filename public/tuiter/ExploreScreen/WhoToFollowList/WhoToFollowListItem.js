
const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item">
    <div class="d-flex recommended-profile">
        <div style="display: flex">
            <div style="width: 50px;">
                <img
                  src=${who.avatarIcon}
                  class="img img-fluid profile-img"
                />
              </div>
              <div style="display: flex; align-items: center; flex-direction:column; margin-left: 8px;">
                <div>
                  ${who.userName} <i class="fas fa-check-circle"> </i>
                </div>
                <div>@${who.handle}</div>
              </div>
        </div>
      
      <div>
        <button class="btn btn-primary rounded-pill">Follow</button>
      </div>
    </div>
  </li>
  `)
}

export default WhoToFollowListItem;