import { Meta } from '@storybook/react'
import DetailsSesson from '../components/SessonDetails/index'

export default {
  title: 'Docs / Session Details',
} as Meta

export const Component = () => (
  <DetailsSesson
    title="Заголовок сессии"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    createdAt={1655755127000}
    updatedAt={1655758727000}
  />
)
