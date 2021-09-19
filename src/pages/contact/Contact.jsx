import React from "react";
import useStyles from "./styles";
import potrait1 from "../../images/potrait1.jpg";
import { ReactComponent as Dot } from "./dot.svg";
import arrow from "./pointer.gif";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { ContactForm } from "../../components/contactForm/ContactForm";
const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.sectionMargin}>
        <Grid item>
          <Dot style={{ position: "relative" }} id="contact" />
          <Typography variant="h2" className={classes.contact}>
            Contact me
          </Typography>
        </Grid>
        <Grid container>
          <Grid item>
            <Typography variant="h4">
              <b>Want to work together? Or just want to say hi?</b>
            </Typography>
            <Typography variant="h4">
              <b>Drop me a line right here.</b>
            </Typography>
            <img src={arrow} alt="" className={classes.pointer} />
          </Grid>
          <Grid container spacing={10}>
            <Grid item lg={4} md={4} sm={4}>
              <img
                src={potrait1}
                style={{ width: 300, borderRadius: 999 }}
                className={classes.portrait2}
                alt=""
              />
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <ContactForm />
            </Grid>
            {/* <Grid item lg={8} md={8} sm={12} xs={12}>
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
                    fullWidth
                    label="Company (Optional)"
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
                    label="Message"
                    placeholder="Hi Brian, would like to work with you. Let's connect!"
                  />
                </Typography>
              </Grid>
              <Button variant="contained" fullWidth>
                Send Message
              </Button>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
