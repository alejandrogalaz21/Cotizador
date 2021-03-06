import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ContentHeader = styled.header`
  background-color #26C6DA;
  padding: 10px;
  font-weight: bold;
  color: #FFFFFF;
`

const TextHeader = styled.h1 `
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`

const Header = ({ title }) => {
  return (
    <ContentHeader>
      <TextHeader>{title}</TextHeader>
    </ContentHeader>
  )
}

Header.propTypes = {}

export default Header
