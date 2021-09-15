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
        <Grid container>
          <Grid item style={{ marginBottom: 80 }}>
            <Typography variant="h4">
              <b>Want to work together?</b>
            </Typography>
            <Typography variant="h4">
              <b>Just want to say hi? Drop me a line right here.</b>
            </Typography>
          </Grid>
          <Grid container spacing={10}>
            <Grid item lg={4}>
              <img src={potrait1} style={{ width: 300, borderRadius: 999 }} />
            </Grid>
            <Grid item lg={8}>
              <Grid item>
                <Typography>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Your Name"
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <TextField
                    variant="outlined"
                    type="email"
                    required
                    fullWidth
                    label="Your Email"
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    minRows={8}
                    multiline
                    label="Your Message"
                  />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
