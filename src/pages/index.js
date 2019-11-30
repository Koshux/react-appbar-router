import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function IndexPage (props) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>Hi, found these props: {props}.</Grid>
      </Grid>
    </>
  )
}
