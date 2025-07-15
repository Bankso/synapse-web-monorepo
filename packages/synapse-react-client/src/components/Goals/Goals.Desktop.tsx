import { GoalsDataProps } from './Goals'
import QueryCount from '../QueryCount/QueryCount'
import { Box, Button } from '@mui/material'

export default function GoalsDesktop({
  asset,
  link,
  summary,
  countSql,
  title,
}: GoalsDataProps) {
  return (
    <Box
      className="Goals__Card"
      sx={{ cursor: 'pointer', maxWidth: '335px', width: '335px' }}
      onClick={() => window.open(link)}
    >
      <div
        className="Goals__Card__header"
        style={{ background: `url('${asset}')` }}
      >
        <p>
          <span className="Goals__Card__header__title"> {title} </span>
          {countSql && (
            <span className="Goals__Card__header__count">
              <QueryCount parens={false} query={{ sql: countSql }} />
            </span>
          )}
        </p>
      </div>
      <div className="Goals__Card__summary">
        <p> {summary} </p>
        <Button
          className="Goals__Card__summary__link"
          variant="outlined"
          color="secondary"
          href={link}
        >
          Explore
        </Button>
      </div>
    </Box>
  )
}
