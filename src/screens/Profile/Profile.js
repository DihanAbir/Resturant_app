import { Grid } from "@mui/material";
import React from "react";
import AddressComp from "../../components/Profile/Address";
import OrderComp from "../../components/Profile/Order";
import ProfileComp from "../../components/Profile/Profile";
import ProfileNav from "../../components/ProfileNav/ProfileNav";

import "./Profile.css";

function Profile() {
  const [currentNav, setCurrentNav] = React.useState("My Profile");

  return (
    <div className="mainsection">
      <div className="main">
        <h3>Profile</h3>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ProfileNav currentNav={currentNav} setCurrentNav={setCurrentNav} />
          </Grid>
          <Grid item xs={9}>
            {currentNav == "My Profile" && <ProfileComp />}
            {currentNav == "My Order" && <OrderComp />}
            {currentNav == "My Address" && <AddressComp />}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Profile;
