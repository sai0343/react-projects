import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import RegisterForm from "./RegisterForm";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    alignItems: "center",
  },
  button: {
    color: "white",
    fontSize: "16px",
    marginLeft: "30em",
    backgroundColor: "orange",
  },
}));

export default function FormDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} className={classes.button}>
        Register
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title" className={classes.title}>
          Registration Form
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <RegisterForm />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
