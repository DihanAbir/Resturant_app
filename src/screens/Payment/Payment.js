import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./Payment.css";

import master from "../../assets/card/master.png";
import mastro from "../../assets/card/mastro.png";
import visa from "../../assets/card/visa.png";

function Payment() {
  const card = [visa, master, mastro];

  return (
    <div className="favourite payment">
      <div className="main">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <h1 className="favTitle">Payment</h1>

            <SingleItem title="Credit & Debit cards" images={card} />
            <Form />
            <SingleItem title="Cash on delivery" />
            <Address />
            <Address />
            <Address />

            <div className="button">
              <button className="primaryButton">Done</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function SingleItem({ title, images }) {
  const [selectD, setSelectD] = useState(false);

  console.log(selectD);

  return (
    <div className="singleItme">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} sx={{ padding: "0" }}>
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
                <h4>{title}</h4>
              </div>
              <div className="images">
                {images?.map((item) => (
                  <img src={item} alt="a" />
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function Form() {
  return (
    <div className="Profilemain">
      <form>
        <label for="fname">Cardholder Name</label>
        <br />
        <input type="text" id="fname" />
        <br />
        <label>Card Number</label>
        <br />
        <input type="text" id="lname" />
        <br />
        <label>Email</label>
        <br />
        <input type="text" id="lname" />
        <br />
        <div className="buttonDiv">
          <button className="primary">Pay Now</button>
        </div>
      </form>
    </div>
  );
}

function Address() {
  const [selectD, setSelectD] = useState(false);
  return (
    <div className="singleItme">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} sx={{ padding: "0" }}>
          <div className="details">
            <div className="checkbox">
              <p
                onClick={() => setSelectD(!selectD)}
                className="blackcircle"
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

export default Payment;
