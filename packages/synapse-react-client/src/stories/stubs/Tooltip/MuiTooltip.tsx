import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from '@mui/material'

export type TooltipProps = MuiTooltipProps

export const Tooltip = (props: TooltipProps) => <MuiTooltip {...props} />
