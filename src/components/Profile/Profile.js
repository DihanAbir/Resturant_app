import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function ProfileComp() {
  return (
    <div className="Profilemain">
      <form>
        <label for="fname">Name</label>
        <br />
        <input type="text" id="fname" />
        <br />
        <label>Phone</label>
        <br />
        <input type="text" id="lname" />
        <br />
        <label>Email</label>
        <br />
        <input type="text" id="lname" />
        <br />
        <div className="country">
          <span>
            <SearchIcon />
          </span>
          <input type="search" id="lname" />
          {/* <CountrySelection /> */}
        </div>
        <br />
        <div className="buttonDiv">
          <button className="cancel">Cancel</button>
          <button className="primary">Update</button>
        </div>
      </form>
    </div>
  );
}

export default ProfileComp;
