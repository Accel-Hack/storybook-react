import type { Meta, StoryObj } from '@storybook/react'

import { Image } from './index.tsx'

import reactLogo from '../.././../assets/react.svg'

const meta = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    source: reactLogo,
    width: 128,
    height: 128,
  },
}

export const Portrait: Story = {
  args: {
    source: reactLogo,
    height: 400,
  },
}

export const Landscape: Story = {
  args: {
    source: reactLogo,
    width: 400,
  },
}
