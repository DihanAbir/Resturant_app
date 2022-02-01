import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import favData from "../../screens/Favourite/favData";

import "./Address.css";

function AddressComp() {
  return (
    <div className="Address">
      <div className="main" style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <b className="favTitle">+ Add New Address</b>
            {[1, 2, 5, 4].map((item) => (
              <SingleItem item={item} />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function SingleItem({ item }) {
  const { id, date, time, title, image, oldPrice, newPrice } = item;

  const [selectD, setSelectD] = useState(false);

  console.log(selectD);

  return (
    <div className="singleItme">
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <div className="details">
            <div className="checkbox">
              {/* <input type="checkbox" id={id} /> */}
              <p
                onClick={() => setSelectD(!selectD)}
                className="blackcircle"
                // style={{ backgroundColor: selectD === true ? "black" : "none" }}
              ></p>
            </div>
            <div className="personaldetails">
              <div className="personal">
                <h4>Anna doe</h4>
                <p>Street: 1910 Hillside Street</p>
                <p>Zip code 85225</p>
              </div>
              <div className="address">
                <div>
                  <span>City: Mesa</span>
                  <span>State/province/area: Arizona</span>
                </div>
                <p>Phone number 480-545-6917</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddressComp;
