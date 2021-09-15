import React from "react";
import useStyles from "./styles";
import potrait1 from "../../images/potrait1.jpg";
import { ReactComponent as Dot } from "./dot.svg";
import {
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container style={{ marginBottom: 200 }}>
        <Grid item>
          <Dot style={{ position: "relative" }} />
          <Typography variant="h2" className={classes.contact}>
            Contact
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">Want to work together?</Typography>
          <Typography variant="h4">
            Just want to say hi? Drop me a line right here.
          </Typography>
        </Grid>
        <Grid container spacing={10}>
          <Grid item>
            <img src={potrait1} style={{ width: 350, borderRadius: 999 }} />
          </Grid>
          <Grid item display="block">
            <Grid item lg={12}>
              <Typography>
                <TextField required label="Name" />
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>
                <TextField required label="Email" />
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>
                <TextField required minRows={8} multiline label="Message" />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
