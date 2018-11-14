import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "@/components/icon";

const story = storiesOf("Icon", module)

story.add("all icons", () => {

  
  return (<Icon icon="account" size="big"/>)
})
