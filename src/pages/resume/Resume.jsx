import React from "react";
import useStyles from "./styles";
import { ReactComponent as Dot } from "./dot.svg";
import { Button, Grid } from "@material-ui/core";
import Info from "../../components/info/Info";
import Skills from "../../components/skills/Skills";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Resume = () => {
  const classes = useStyles();
  const skillsArray = [
    "Adobe XD",
    "Sketch",
    "Firebase",
    "MaterialUI",
    "HTML, CSS & Vanilla JS",
    "React, Bootstrap & Redux",
    "GIT",
  ];

  return (
    <>
      <Grid container className={classes.sectionMargin}>
        <SectionTitle title={"Résumé"}>
          <Dot style={{ position: "relative" }} id="resume" />
        </SectionTitle>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={6} styles={{ flexGrow: 2 }}>
            <Info
              heading="Work experience"
              link="https://brianchiruka.com"
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
              description="Class of business"
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
              description="React JS Frontend Web Development"
              dates="2019 - 2019"
            />
            <Info
              title="Udemy"
              link="https://udemy.com"
              description="Coding with Etherium & Solidity"
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
            <Skills title="Tools" skillsArray={skillsArray} />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className={classes.cvButton}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1wuaVHteaEsilOFDmdWzl5tOyjsDCCBwb/view?usp=sharing"
              )
            }
          >
            <b>Download Résumé</b>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
