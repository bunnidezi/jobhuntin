import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Chip from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const CardActions = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return (
    <Card sx={{backgroundColor: "#f777" , marginTop: "50px"}} onClick={() => navigate(`/job/${job.id}`)}>
      <CardContent xs={{backgroundColor: "#f777" , marginTop: "0px"}}>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {job.title}
        </Typography>
        <Typography color="text.secondary">
          {job.description.length > 70
            ? `${job.description.slice(0, 70)}...`
            : job.description}
        </Typography>
        {job.skills.slice(0, 4).map((skill) => (
          <Chip sx={{ backgroundColor: "#ef5350" , marginRight:"10px", marginBottom:"5px"}} label={skill} />
        ))}
      </CardContent>
      <CardActions>
        <Button
          sx={{ backgroundColor: "#f57c00", color: "white",fontWeight: "bold", marginBottom:"9px", paddingLeft:"5px", paddingRight:"5px", borderRadius:"6px" }}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
