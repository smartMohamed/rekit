import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

import CouponPopup from '@/components/coupon-popup'

const stories = storiesOf('Coupon Popup', module)


stories.add('Kitchen Sink', () => {
  const props = {
    visible: boolean('Visible', true),
    config: {
      title: text('Title', 'Hiergeblieben!'),
      image: select('Image', [require('@demo/popup/gift.svg'), require('@demo/popup/geschenk.svg')], require('@demo/popup/gift.svg')),
      headline: text('Headline', 'Smartfrog schenkt dir den ersten Monat!'),
      label: text('Voucher label', 'Gutscheincode:'),
      code: text('Voucher code', 'FREE1'),
      accept: text('Accept Label', 'Jetzt einlösen'),
      reject: text('Reject Label', 'Jetzt nicht'),
    }
  }
  return (<CouponPopup {...props} />)
  
})
