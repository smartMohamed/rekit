import { configure, addDecorator, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
addDecorator(withKnobs)

import '../src/stylus/main.styl'
import '../src/stylus/utils.styl'
import '../demo/demo.styl'


function loadStories() {
  const req = require.context('../stories', true, /\.js$/)
  req.keys().forEach(req)
}

configure(loadStories, module);

setAddon({
  addCodeExampleStory(storyName, storyFn, component) {
    this.add(`${storyName} ⚡`, context => ComponentInfoDecorator(storyFn, component))
  },
})