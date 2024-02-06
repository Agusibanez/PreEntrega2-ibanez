import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function ImgMediaCard() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Card>
          <CardMedia component="img" alt="" height="140" image="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              hola
            </Typography>
            <Typography variant="body2" color="text.secondary">
              aca va la descripcion
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Buy</Button>
            <Button size="small">Add to cart</Button>
          </CardActions>
        </Card>
        <Card>
          <CardMedia component="img" alt="" height="140" image="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              hola
            </Typography>
            <Typography variant="body2" color="text.secondary">
              aca va la descripcion
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Buy</Button>
            <Button size="small">Add to cart</Button>
          </CardActions>
        </Card>
        <Card>
          <CardMedia component="img" alt="" height="140" image="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              hola
            </Typography>
            <Typography variant="body2" color="text.secondary">
              aca va la descripcion
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Buy</Button>
            <Button size="small">Add to cart</Button>
          </CardActions>
        </Card>
        <Card>
          <CardMedia component="img" alt="" height="140" image="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              hola
            </Typography>
            <Typography variant="body2" color="text.secondary">
              aca va la descripcion
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Buy</Button>
            <Button size="small">Add to cart</Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}
