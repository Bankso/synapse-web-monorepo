import { StyledComponent } from '@emotion/styled'
import { Paper } from '@mui/material'
import { PaperProps, styled } from '@mui/material'

/**
 * Drop in MUI substitute class for Bootstrap Container component
 */
export const MuiContainer: StyledComponent<PaperProps> = styled(Paper, {
  label: 'MuiContainer',
})(({ theme }) => ({
  paddingRight: 15,
  paddingLeft: 15,
  marginRight: 'auto',
  marginLeft: 'auto',

  // Full width for (xs, extra-small: 0px or larger) and (sm, small: 600px or larger)
  [theme.breakpoints.up('md')]: {
    // medium: 960px or larger
    width: 920,
  },
  [theme.breakpoints.up('lg')]: {
    // large: 1280px or larger
    width: 1170,
  },
  [theme.breakpoints.up('xl')]: {
    // extra-large: 1920px or larger
    width: 1366,
  },
}))

export default MuiContainer
