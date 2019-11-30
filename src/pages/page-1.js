import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function PageOne (props) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>Hi from Page One with props: {props.data}</Grid>
      </Grid>
    </>
  )
}
