import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../jobs.json";

function DetailsPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  if (!job)
    return (
      <Typography variant="h3" marginTop={3}>
        No job found
      </Typography>
    );

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" marginTop={3}>
        {job.title}
      </Typography>
      <Typography variant="h5" marginTop={3}>
        {job.description}
      </Typography>
    </Container>
  );
}

export default DetailsPage;
