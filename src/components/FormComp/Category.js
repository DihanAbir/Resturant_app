import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import "./form.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid #d5d5d5",
  boxShadow:
    "0px 11px 15px -7px rgb(255 255 255 / 20%), 0px 24px 38px 3px rgb(255 255 255 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",
  padding: "32px",
  borderRadius: "7px",
  //   boxShadow: 24,
  p: 4,
};

export default function CategoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="formDiv">
      <Button onClick={handleOpen}>Add New Category</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="formsection">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Category title</label>
              <br />
              <input defaultValue="" {...register("title")} />

              {errors.title && (
                <span className="error">Title field is required</span>
              )}
              <br />

              <input type="submit" />
              <input type="button" value="Cancel" onClick={handleClose} />
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
