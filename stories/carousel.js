import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number } from '@storybook/addon-knobs'

import Carousel from '@/components/carousel'
import Grid from '@/components/grid'
import Row from '@/components/row'
import Col from '@/components/col'

const stories = storiesOf('Carousel', module)

stories.add('kitchen sink', () => {
  const props = {
    active: number('Active', 0, {min: 0, max: 3, step: 1 }),
    loop: boolean('Loop', false), 
    length: number('Slides', 3, {range: true, min: 1, max: 7, step: 1 }),
  }
  const slides = Array.from({length: props.length}).map((_,i) => `https://unsplash.it/320?random&${i}`)
      
  return (
    <Grid>
      <Row>
        <Col md4 style={{background: 'blue'}}>
          <Carousel {...props} slides={slides} />
        </Col>
      </Row>
    </Grid>
  )
})