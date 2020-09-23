import React, { Fragment } from 'react'
//import styled from '@emotion/styled'

const Summary = ({ branch, plan, year }) => {
  return (
    <Fragment>
      <h2>Resuent de Cotizacion</h2>
      <ul>
        <li>Marcar : {branch}</li>
        <li>Año : {year}</li>
        <li>Plan : {plan}</li>
      </ul>
    </Fragment>
  )
}

export default Summary
