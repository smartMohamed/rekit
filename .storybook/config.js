import { configure, addDecorator, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { setOptions } from '@storybook/addon-options'

import pkg from '../package.json'

addDecorator(withKnobs)

import '../src/stylus/main.styl'
import '../src/stylus/utils.styl'
import '../demo/demo.styl'


setOptions({
  name: `Rekit ${pkg.version}`,
  url: 'https://github.com/smartmohamed/rekitkit',
})


function loadStories() {
  const req = require.context('../stories', true, /\.js$/)
  req.keys().forEach(req)
}

configure(loadStories, module);
