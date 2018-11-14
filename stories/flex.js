import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select } from '@storybook/addon-knobs'
import Flex from "@/components/flex";


const story = storiesOf("Flex", module)

story.add("Kitchen Sink", () => {
  const props = {
    column: boolean('Column', false),
    justify: select('Justify', ['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'], 'start'),
    align: select('Align', ['start', 'center', 'end', 'stretch'], 'start')
  }
  
  const grow = boolean('Grow', false)
  
  const flexes = []
  for (let i = 0; i < 8; i++) flexes.push(<Flex className="flex-demo" grow={grow} key={i}>{i}</Flex>) 
  
  return (
    <section style={{height: '500px'}}>
      <Flex {...props}>
        {flexes}
      </Flex>
    </section>
  )
})
