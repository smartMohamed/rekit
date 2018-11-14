import { configure, addDecorator, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
addDecorator(withKnobs)

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