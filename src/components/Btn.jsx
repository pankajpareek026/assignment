import { Button } from '@mui/material'
import React from 'react'

const Btn = ({ onclick, text, styles, buttonType }) => {
  return (
    <Button
      sx={styles}
      variant={buttonType}
    > {text} </Button>
  )
}

export default Btn