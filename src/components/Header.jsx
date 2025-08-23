import React from "react";
import { Menu, Input } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu secondary style={{ padding: "1em" }}>
      <Menu.Item header>DEV@Deakin</Menu.Item>
      <h5>
        <span style={{ fontSize: "0.8em", marginLeft: "0.5em", color: "#888" }}>
          By kartik sharma
        </span>
      </h5>
      <Menu.Item>
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="Post" as="a" href="/post" />
        <Menu.Item name="Login" as="a" href="/login" />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
