import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'
import Spinner from './components/Spinner'

import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  const [resumen, setResumen] = useState({})
  const [loading, setLoading] = useState(false)

  const { data, quotation } = resumen
  return (
    <Container>
      <Header title='Cotizador de seguros' />

      <FormContainer>
        <Form setResumen={setResumen} setLoading={setLoading} />
        {loading && <Spinner />}
        {!loading && data && <Summary {...data} />}
        {!loading && quotation && <Result quotation={quotation} />}
      </FormContainer>
    </Container>
  )
}

export default App
