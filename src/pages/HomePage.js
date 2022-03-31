import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Pagination } from "@mui/material";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";

const limit = 5;

function HomePage() {
  const [page, setPage] = useState(1);
  const handleChange = (e, value) => {
    setPage(value);
  };

  const pageCount = Math.ceil(jobs.length / limit);

  return (
    <Container  sx={{ mt: 3 }}>
      <Grid container spacing={7}>
        {jobs &&
          jobs.slice((page - 1) * limit, page * limit).map((job) => (
            <Grid item key={job.id} xs={12} md={6} lg={4}>
              <JobCard key={job.id} job={job} />
            </Grid>
          ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination count={pageCount} paage={page} onChange={handleChange} />
      </Box>
    </Container>
  );
}

export default HomePage;
