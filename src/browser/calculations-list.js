import React from 'react'

function CalculationsTable (calculations) {
  return (
    <table>
      { calculations.map(calculation => (
        <tr>
          <td>{calculation.expression}</td>
          <td>{calculation.evaluatedExpression}</td>
        </tr>
      )) }
    </table>
  )
}

CalculationsTable.propTypes = {
  calculations: React.PropTypes.array.isRequired
}
