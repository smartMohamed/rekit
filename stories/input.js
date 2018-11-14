import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "@/components/input";
import { text, boolean, select } from '@storybook/addon-knobs'

const story = storiesOf("Input", module)

const props = {
  value: text('value', 'tada'),
  type: select('Input Type', ['text', 'email', 'phone', 'password', 'ukZip'], 'text'),
  size: select('Size', ['normal', 'small'], 'normal'),
  cutSide: select('Cut border', ['default', 'left', 'right'], 'default'),
  disabled: boolean('Disabled', false),
  block: boolean('Block', false),
  required: boolean('Required', false),
  placeholder: text('Placeholder', 'Username')
}

story.add("with text", () => {
  
  return (<Input {...props}/>)
})
