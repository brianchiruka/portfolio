import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Button, Grid, Typography } from "@material-ui/core";
import Info from "../../components/info/Info";
import Skills from "../../components/skills/Skills";

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.sectionMargin}>
        <Grid item>
          <Dot style={{ position: "relative" }} id="resume" />
          <Typography variant="h2" className={classes.resume}>
            Résumé
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={6} styles={{ flexGrow: 2 }}>
            <Info
              heading="Work experience"
              title="Freelancer"
              description="Web developer"
              dates="2020 - Current"
            />
            <Info
              title="LifeCheq"
              link="https://lifecheq.co.za"
              description="Client experience consultant"
              dates="2019 - 2021"
            />
            <Info
              title="LifeCheq"
              link="https://lifecheq.co.za"
              description="Service Specialist"
              dates="2018 - 2019"
            />
            <Info
              title="LifeCheq"
              link="https://lifecheq.co.za"
              description="Operations Assistant"
              dates="2018 - 2018"
            />
            <Info
              title="Mobicel SA"
              link="https://mobicel.co.za/"
              description="Technician"
              dates="2017 - 2018"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Info
              heading="Education"
              title="Milpark"
              link="https://www.milpark.ac.za"
              description="School of business"
              dates="2020 - 2021"
            />
            <Info
              title="Central University of Technology"
              link="https://www.cut.ac.za"
              description="Electrical Engineering"
              dates="2014 - 2016"
            />
            <br />
            <Info
              heading="Online Courses"
              title="Udemy"
              link="https://udemy.com"
              description="HTML, CSS & JavaScript The Complete Developer's Guide"
              dates="2019 - 2019"
            />
            <Info
              title="Masterclass"
              link="https://udemy.com"
              description="Justin Chen Design Masterclass"
              dates="2020 - 2020"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Skills
              title="Skills"
              text1="Product Design"
              text2="UI/UX Design"
              text3="Sales & Client Experience"
              text4="Web Development"
              text5="Learning on the go!"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Skills
              title="Tools"
              text1="Adobe XD"
              text2="Sketch"
              text3="Firebase"
              text4="MaterialUI"
              text5="HTML, CSS & Vanilla JS"
              text6="React, Bootstrap & Redux"
              text7="GIT"
            />
          </Grid>
        </Grid>
        <Grid item gutterBottom>
          <Button variant="outlined" className={classes.cvButton}>
            <b>Download Résumé</b>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
