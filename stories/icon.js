import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from '@storybook/addon-knobs'

import Flex from '@/components/flex'
import Icon from '@/components/icon'
import icons from '@/components/icons'

const story = storiesOf("Icon", module)

story.add("all icons", () => {
  const iconsList = Object.keys(icons)
  const iconsCmp = []
  const props = {
    color: select('Color', ['', 'orange', 'blue', 'red', 'grey'], ''),
    size: select('Size', ['default', 'big', 'small'], 'big')
  }
  iconsList.forEach(icon => iconsCmp.push(  
      <Flex column align="center" key={icon} className="icon-demo">
        <Icon icon={icon}  {...props} />
        <span>{icon}</span>
      </Flex>
    )
  ) 
  
  return (
    <Flex align="start">
      {iconsCmp}
    </Flex>
  )
})
