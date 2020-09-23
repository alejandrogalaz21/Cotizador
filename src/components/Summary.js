import React from 'react'
import styled from '@emotion/styled'
import { upperCaseFirst } from './../helpers'

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`

const Summary = ({ branch, plan, year }) => {
  return (
    <SummaryContainer>
      <h2>Resuent de Cotizacion</h2>
      <ul>
        <li>Marcar : {upperCaseFirst(branch)}</li>
        <li>Año : {year}</li>
        <li>Plan : {upperCaseFirst(plan)}</li>
      </ul>
    </SummaryContainer>
  )
}

export default Summary
