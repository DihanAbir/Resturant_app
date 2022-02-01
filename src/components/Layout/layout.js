import React from "react";
import Grid from "@mui/material/Grid";

import Navbar from "../Navbar/Navbar";
import MenuHeader from "../MenuHeader/MenuHeader";

function Layout({ children }) {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Navbar />
        </Grid>
        <Grid item xs={11}>
          <div className='mainpage'>
            <MenuHeader />
            {children}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
