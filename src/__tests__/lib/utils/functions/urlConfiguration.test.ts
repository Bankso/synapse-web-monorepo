import { insertConditionsFromSearchParams } from '../../../../lib/utils/functions/sqlFunctions'

describe('inserting into WHERE clause from URL works', () => {
  const searchParams = {
    grant: 'GRANT',
  }
  it('works without a WHERE clause already present', () => {
    const sqlWithoutWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(sqlWithoutWhere, searchParams)
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE (`grant` LIKE '%GRANT%')",
    )
  })

  it('works with multiple searchParams and a WHERE clause already present', () => {
    const searchParams = {
      grant: 'GRANT',
      grantTwo: 'VALUE TWO',
    }
    const sqlWithoutWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(sqlWithoutWhere, searchParams)
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE ((`grantTwo` LIKE '%VALUE TWO%') AND (`grant` LIKE '%GRANT%'))",
    )
  })

  it('works with a WHERE clause present already and other conditions', () => {
    const sqlWithWhere = 'SELECT * FROM syn1234567 WHERE APPLE = SMITH LIMIT 1'
    const sql = insertConditionsFromSearchParams(sqlWithWhere, searchParams)
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE ((`grant` LIKE '%GRANT%') AND (`APPLE` = `SMITH`))\n  LIMIT 1",
    )
  })
})

describe('inserting into WHERE clause from URL works with an equals operator', () => {
  const searchParams = {
    grant: 'GRANT',
  }
  const operator = '='
  it('works without a WHERE clause already present', () => {
    const sqlWithoutWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(
      sqlWithoutWhere,
      searchParams,
      operator,
    )
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE (`grant` = 'GRANT')",
    )
  })

  it('works with multiple searchParams and a WHERE clause already present', () => {
    const searchParams = {
      grant: 'GRANT',
      grantTwo: 'VALUE TWO',
    }
    const sqlWithoutWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(
      sqlWithoutWhere,
      searchParams,
      operator,
    )
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE ((`grantTwo` = 'VALUE TWO') AND (`grant` = 'GRANT'))",
    )
  })

  it('works with a WHERE clause present already and other conditions', () => {
    const sqlWithWhere = 'SELECT * FROM syn1234567 WHERE APPLE = SMITH LIMIT 1'
    const sql = insertConditionsFromSearchParams(
      sqlWithWhere,
      searchParams,
      operator,
    )
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE ((`grant` = 'GRANT') AND (`APPLE` = `SMITH`))\n  LIMIT 1",
    )
  })
})
describe('it works with a HAS clause', () => {
  const operator = 'HAS'
  it('works with a single condition in the HAS operator', () => {
    const searchParams = {
      APPLE: 'SMITH',
    }
    const sqlWithWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(
      sqlWithWhere,
      searchParams,
      operator,
    )
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE (`APPLE` HAS ('SMITH'))",
    )
  })
  it('works with multiple conditions in the HAS clause', () => {
    const searchParams = {
      APPLE: 'SMITH,FUJI',
    }
    const sqlWithWhere = 'SELECT * FROM syn1234567'
    const sql = insertConditionsFromSearchParams(
      sqlWithWhere,
      searchParams,
      operator,
    )
    expect(sql).toEqual(
      "SELECT *\n  FROM syn1234567\n  WHERE (`APPLE` HAS ('SMITH','FUJI'))",
    )
  })
})
