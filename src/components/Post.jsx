import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageFiles from '../indeximg.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';


function PostCard() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/publicaciones`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  return (
    <>
      {APIData.map((post) => (
        <Card key={post.id} sx={{ maxWidth: 1000, maxHeight: 1000, }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                J
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={post.createdAt}
          />
          <CardMedia
            component="img"
            sx={{ maxHeight: 100, maxWidth: 100, margin: '0 auto' }}
            image={post.image}
            alt="Home"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">{post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default PostCard;