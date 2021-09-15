import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Grid, Typography } from "@material-ui/core";
import Info from "../../components/info/Info";

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container style={{ marginBottom: 200 }}>
        <Grid item>
          <Dot style={{ position: "relative" }} />
          <Typography variant="h2" className={classes.resume}>
            Résumé
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} styles={{ flexGrow: 2 }}>
            <Info
              heading="Work experience"
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
          <Grid item lg={6} md={6} sm={12}>
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
