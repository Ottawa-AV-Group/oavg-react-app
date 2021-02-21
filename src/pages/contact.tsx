import { Link, Typography } from "@material-ui/core";
import React from "react";

export default function Contact() {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <Typography variant="h4">Contact Us</Typography>
      <hr />
      <Typography variant="subtitle1">
        We are very happy to accomodate whatever questions you may have on our
        projects, please feel free to reach out to us!
      </Typography>
      <Typography variant="subtitle1">
        <strong>
          E-Mail:{" "}
          <Link
            color="secondary"
            href="mailto:ottawaautonomousvehiclegroup@gmail.com"
          >
            OttawaAutonomousVehicleGroup@gmail.com
          </Link>
        </strong>
      </Typography>
    </div>
  );
}
