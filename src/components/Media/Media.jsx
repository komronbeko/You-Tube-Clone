import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import "./Media.css"
import { Link } from "react-router-dom";

function Media({id, title, imgSrc, channelTitle }) {
  const [loading, setLoading] = React.useState(true)
  const url = `https://www.youtube.com/watch?v=${id}`;


  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Link className="cards" to={url}>
      <Card sx={{ maxWidth: 345, height: 300, m: 2 }}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar alt="Ted talk" src={imgSrc} />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              `${channelTitle}`
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              `${Math.floor(Math.random() * (9 - 1) + 1)} hours ago`
            )
          }
        />
        {loading ? (
          <Skeleton
            sx={{ height: 150 }}
            animation="wave"
            variant="rectangular"
          />
        ) : (
          <CardMedia component="img" height="140" src={imgSrc} alt={title} />
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              fontWeight={600}
            >
              {`${title}`}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default Media;
