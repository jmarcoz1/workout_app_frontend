import React, { useState } from 'react'
import { Typography, Card, CardContent, CardActions, Box, IconButton, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import CustomCard from '../UI/CustomCard';

const ProfilePage = (props) => {

  let userName = props.userName
  let name = props.name
  let dateJoined = props.dateJoined

  // const [settings, useSettings] = useState(false)

  // const openSettings = () => {
  //   useSettings(true)
  // }

  const cardContent = (
    <Grid container direction='column' spacing={2}>
      <Grid item xs={3}>
        <Avatar src='../../media/avatar.jpg' />
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h7">@{userName}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h7">{name}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h7"  >Getting stronger since {dateJoined}</Typography>
      </Grid>
    </Grid>
  )

  const cardActions = (
    <IconButton color="secondary" >
      <SettingsIcon />
    </IconButton>
  )

  return (
    <CustomCard cardContent={cardContent} cardActions={cardActions} />
  )
}

export default ProfilePage