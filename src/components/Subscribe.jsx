import React from "react";
import { Input, Button } from "semantic-ui-react";

const Subscribe = () => {
  return (
    <div style={{ padding: "2em", background: "#f5f5f5" }}>
      <div style={{ display: "flex", gap: "1em" }}>
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        <Input
          action={<Button color="white">Subscribe</Button>}
          placeholder="Enter your email"
          style={{ minWidth: 250 }}/>
      </div>
    </div>
  );
};

export default Subscribe;