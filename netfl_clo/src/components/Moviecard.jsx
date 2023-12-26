import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import testImg1 from "../assets/movie1.jpg";

const Moviecard = ({ data }) => {
  console.log("card data", data);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="cursor-pointer bg-black flex justify-center align-center h-[180px] pl-2 mr-[-10px] mb-10 p-[10px]">
      <Card
        className="realtive"
        sx={{
          height: 200,
          maxWidth: 250,
          padding: 0,
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.3)",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardMedia
          sx={{ height: 200, width: 250 }}
          image={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
          title="green iguana"
          className="object-cover"
        />

        <CardContent
          sx={{ height: 10, width: 250 }}
          className={isHovered ? "block" : "hidden"}
        >
          <Typography gutterBottom variant="h5" component="div">
            <div className="absolute text-white top-5 pb-10">{data?.title}</div>
          </Typography>
        </CardContent>
        {/* <CardActions className="hidden">
          <Button size="small" className="hidden">
            Share
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default Moviecard;
