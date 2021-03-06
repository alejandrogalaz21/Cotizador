import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { getDifYear, calBranch, getPlan } from './../helpers'

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const Label = styled.label`
  flex: 0 0 100px;
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color #26C6DA;
  }
`

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

const Form = props => {
  const [data, setData] = useState({
    branch: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState(false)

  const { branch, year, plan } = data

  const getData = e => setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    if (branch.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true)
      return
    }
    setError(false)

    // Una base de 2000
    let result = 2000
    // Obtener la diferencia entre años
    const dif = getDifYear(year)
    //  Por cada año hay que restar el 3%
    result -= (dif * 3 * result) / 100
    // Americano 15
    // Asiatico 5%
    // Europeo 30%
    result = calBranch(branch) * result
    // Basico aumenta 20%
    // Completo 50%
    const incrementPlan = getPlan(plan)
    result = parseFloat(incrementPlan * result).toFixed(2)

    // Loading
    props.setLoading(true)

    setTimeout(() => {
      props.setLoading(false)
    }, 3000)

    // Total
    props.setResumen({
      quotation: result,
      data: {
        branch,
        year,
        plan
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>Todos los campos son necesarios</Error>}
      <Field>
        <Label>Marca</Label>
        <Select name='branch' onChange={getData}>
          <option value=''>-- Seleccione --</option>
          <option value='americano'>Americano</option>
          <option value='europeo'>Europeo</option>
          <option value='asiatico'>Asiatico</option>
        </Select>
      </Field>

      <Field>
        <Label>Año</Label>
        <Select name='year' onChange={getData}>
          <option value=''>-- Seleccione --</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio type='radio' name='plan' value='basico' onChange={getData} /> Basico
        <InputRadio type='radio' name='plan' value='completo' onChange={getData} /> Completo
      </Field>

      <Button type='submit'>Cotizar</Button>
    </form>
  )
}

Form.propTypes = {}

export default Form
