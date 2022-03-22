import who from "./who";

interface ListItemProps {
  avatarIcon: string;
  userName: string;
  handle: string;
}

const WhoToFollowListItem: React.FC<ListItemProps> = ({
  avatarIcon,
  userName,
  handle,
}) => (
  <li className="list-group-item">
    <div className="d-flex recommended-profile">
      <div style={{ display: "flex" }}>
        <div style={{ width: "50px" }}>
          <img
            src={avatarIcon}
            alt="avatar"
            className="img img-fluid profile-img"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginLeft: "8px",
          }}
        >
          <div>
            {userName} <i className="fas fa-check-circle"> </i>
          </div>
          <div>@{handle}</div>
        </div>
      </div>

      <div>
        <button className="btn btn-primary rounded-pill">Follow</button>
      </div>
    </div>
  </li>
);

const WhoToFollowList: React.FC = () => (
  <ul className="list-group">
    {who.map((person) => (
      <WhoToFollowListItem {...person} />
    ))}
  </ul>
);
export default WhoToFollowList;
