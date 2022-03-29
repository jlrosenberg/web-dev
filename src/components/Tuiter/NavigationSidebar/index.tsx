import classNames from "classnames";
import React from "react";

type Tabs =
  | "home"
  | "profile"
  | "explore"
  | "notifications"
  | "messages"
  | "bookmarks"
  | "lists"
  | "more";

interface Props {
  active?: Tabs;
}

const NavigationSidebar: React.FC<Props> = ({ active = "explore" }) => (
  <>
    <div className="list-group">
      <a className="list-group-item" href="/">
        <i className="fab fa-twitter"></i>
      </a>
      <NavigationItem
        title="Home"
        icon="fa-home"
        path="/"
        active={active === "home"}
      />
      <NavigationItem
        title="Explore"
        icon="fa-hashtag"
        path="/"
        active={active === "explore"}
      />
      <NavigationItem
        title="Notifications"
        icon="fa-bell"
        path="/"
        active={active === "notifications"}
      />
      <NavigationItem
        title="Messages"
        icon="fa-envelope"
        path="/"
        active={active === "messages"}
      />
      <NavigationItem
        title="Bookmarks"
        icon="fa-bookmark"
        path="/"
        active={active === "bookmarks"}
      />
      <NavigationItem
        title="Lists"
        icon="fa-list"
        path="/"
        active={active === "lists"}
      />
      <NavigationItem
        title="Profile"
        icon="fa-user"
        path="/"
        active={active === "profile"}
      />
      <NavigationItem
        title="More"
        icon="fa-circle"
        path="/"
        active={active === "more"}
      />
    </div>
    <div className="d-grid mt-2">
      <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
        Tweet
      </a>
    </div>
  </>
);

interface NavigationItemProps {
  icon: string;
  title: string;
  path: string;
  active?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  title,
  path,
  active,
}) => {
  return (
    <a className={classNames("list-group-item", {active: active})} href={path}>
      <i className={classNames(`fa ${icon}`)}></i>{" "}
      <span className="d-none d-xl-inline d-xxl-inline">{title}</span>
    </a>
  );
};
export default NavigationSidebar;
