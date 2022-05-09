import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export const MediaCard = (props) => {
  console.log(props.product.product);
  const { name, imageUrl, description, price, quantuty, suplierName } =
    props.product.product;
  // const navigate = useNavigate();

  // const navigateToServiceDetail = (product) => {
  //   navigate(`/service/${prosuct.name}`);
  // };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="290"
        width="auto"
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0, 150)}
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <span className="price">{price}$</span>
        <Button
          size="small"
          // onClick={() => navigateToServiceDetail(props.service)}
        >
          Get Booking
        </Button>
      </CardActions>
    </Card>
  );
};
