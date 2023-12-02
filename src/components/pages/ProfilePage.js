import React from 'react'
import { Typography, Grid } from '@mui/material';

const ProfilePage = (props) => {

  let name = props.userName
  let dateOfBirth = props.dateOfBirth

  return (
    <div>
      <Typography>{name}</Typography>
      <Typography>{dateOfBirth}</Typography>
    </div>
  )
}

export default ProfilePage