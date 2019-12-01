import React from 'react'
import Grid from '@material-ui/core/Grid'

export default function Page (props) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {props.component == null ? `Hi from the default page.` : props.component}
        </Grid>
      </Grid>
    </>
  )
}
