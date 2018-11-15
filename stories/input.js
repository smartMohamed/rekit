import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "@/components/input";
import { text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

const story = storiesOf("Input", module)


story.add("with text", () => {
  const props = {
    value: text('value', 'tada'),
    type: select('Input Type', ['text', 'email', 'phone', 'password', 'ukZip'], 'text'),
    size: select('Size', ['normal', 'small'], 'normal'),
    cutSide: select('Cut border', ['default', 'left', 'right'], 'default'),
    disabled: boolean('Disabled', false),
    block: boolean('Block', false),
    required: boolean('Required', true),
    placeholder: text('Placeholder', 'Username')
  }
  return (
    <div>
      <Input {...props} onChange={action('input-change')} />
    </div>
    )
})
