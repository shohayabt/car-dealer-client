import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../ProductCard/Card.css";

export const DeleteCard = (props) => {
  const { name, imageUrl, description, price, quantity, suplierName, _id } =
    props.product;
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
        <Typography gutterBottom variant="body" component="div">
          Suplier Name: {suplierName}
        </Typography>
        <Typography gutterBottom variant="body" component="div">
          Quantity:{quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.slice(0, 150)}
        </Typography>
      </CardContent>
      <CardActions className="card-action">
        <span className="price">{price}TK</span>
        <Button
          size="small"
          onClick={() => {
            props.delete(_id);
          }}
        >
          DELETE PRODUCT
        </Button>
      </CardActions>
    </Card>
  );
};
