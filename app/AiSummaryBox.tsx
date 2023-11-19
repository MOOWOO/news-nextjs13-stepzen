"use client";

import React from 'react'
import { Disclosure } from '@headlessui/react'

function AiSummaryBox() {
  return (
    <Disclosure>
      <Disclosure.Button className="navLink max-w-6xl mx-auto flex justify-between items-center text-gray-500 dark:text-gray-400 pt-5">
        Summary news of the day
      </Disclosure.Button>
      <Disclosure.Panel className="max-w-6xl mx-auto flex justify-between items-center text-gray-500 dark:text-gray-400 pt-5">
        This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
      </Disclosure.Panel>
    </Disclosure>
  )
}

export default AiSummaryBox
