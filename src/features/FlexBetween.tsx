import { Box } from '@mui/material'
import { styled } from '@mui/system'

type FlexProps = {
  backgroundColor?: string
}

const FlexBetween = styled(Box)<FlexProps>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export default FlexBetween
