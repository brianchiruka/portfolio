import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Info from "../../components/info/Info";

const Resume = () => {
  const classes = useStyles();

  return (
    <>
      <Container display="flex" style={{ marginBottom: 200 }}>
        <Dot style={{ position: "relative" }} />
        <Typography variant="h2" className={classes.resume}>
          Résumé
        </Typography>
        <Box display="flex">
          <Container styles={{ flexGrow: 2 }}>
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
          </Container>
          <Container>
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
              description="N. Dip Electrical Engineering"
              dates="2014 - 2016"
            />
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default Resume;
