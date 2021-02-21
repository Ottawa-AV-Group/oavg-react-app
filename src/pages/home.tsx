import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Home() {
  return (
    <div style={{ paddingTop: "16px" }}>
      <Typography variant="h4" align="center">
        Ottawa Autonomous Vehicle Group (OAVG)
      </Typography>
      <Grid container justify="center">
        <Grid item>
          <iframe
            title="Snowplow Build"
            width="1050"
            height="575"
            src="https://www.youtube.com/embed/VAFsyuuwNtk?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
      </Grid>
    </div>
  );
}
