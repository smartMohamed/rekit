import React from "react";
import { storiesOf } from "@storybook/react";
import { select, number, boolean } from '@storybook/addon-knobs'

import Grid from '@/components/grid'
import Col from '@/components/col'
import Row from '@/components/row'

const stories = storiesOf('Layout / Grid System', module)

function generateCols(bp, total) {
  const cmp = []
  for (let i = 0; i < total; i++) cmp.push (
    <Col {...bp}>
      <div class="demo"> {12/total}</div>
    </Col>
  )
  return cmp
}

stories.add('kitchen Sink', () => {
  const bp = select('min breaking-point', ['xs', 'sm', 'md', 'lg', 'xl'], 'xs')
  const fluid = boolean('Fluid', false)
  return (
    <Grid fluid={fluid}>
      <Row>{generateCols(`${bp}12`, 1)}</Row>
      <Row>{generateCols(`${bp}6`, 2)}</Row>
      <Row>{generateCols(`${bp}4`, 3)}</Row>
      <Row>{generateCols(`${bp}3`, 4)}</Row>
      <Row>{generateCols(`${bp}2`, 6)}</Row>
      <Row>{generateCols(`${bp}1`, 12)}</Row>
    </Grid>
    )
})
