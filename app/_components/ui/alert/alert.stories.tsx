import { StoryFn, Meta } from '@storybook/react'
import { fn } from '@storybook/test'
import { Alert } from './alert'
import { KITCHEN_SINK_DECORATORS, KITCHEN_SINK_PARAMS } from '@/utils/storybook/constants'
import { KitchenSinkContainer } from '@/utils/storybook/kitchen-sink-box'
import { KitchenSinkBox } from '@/utils/storybook/kitchen-sink-container'
import { AlertCircle, Check, Info, TriangleAlert, User } from 'lucide-react'

export default {
  title: 'Design System/Alert, Banner',
  component: Alert,
  argTypes: {
    children: {
      description: 'Sets the `Alert` description content.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
      control: { type: 'text' },
    },
    title: {
      description: 'Sets the `Alert` title content.',
      table: { category: 'Content' },
      control: { type: 'text' },
    },
    icon: {
      control: false,
      description: 'Sets the `Alert` Icon.',
      table: { category: 'Content', type: { summary: 'React.ReactNode' } },
    },
    variant: {
      description: 'Sets the `Alert` variant style.',
      control: 'select',
      options: ['default', 'success', 'warning', 'info', 'destructive'],
      table: { category: 'Display', type: { summary: 'default | success | warning | info | destructive' } },
      defaultValue: { summary: 'default' },
    },
    closeButton: {
      description: 'Callback function when Close is clicked.',
      table: { category: 'Display' },
    },
    className: {
      control: 'text',
      description: 'Sets additional styles for `Alert` ',
      table: { category: 'Display', type: { summary: 'string' } },
    },
    onClose: {
      description: 'Callback function when Close is clicked.',
      table: { category: 'Events', type: { summary: 'function' } },
    },
  },
  args: {
    title: 'title',
    children: 'description',
    variant: 'default',
    closeButton: true,
    icon: <User />,
    onClose: fn(),
  },
} as Meta<typeof Alert>

const ControlTemplate: StoryFn<typeof Alert> = (args) => {
  return (
    <div className="w-96">
      {' '}
      <Alert {...args}>{args.children}</Alert>
    </div>
  )
}

export const Controls = ControlTemplate.bind({})

const KitchenSinkTemplate: StoryFn<typeof Alert> = () => {
  return (
    <>
      <KitchenSinkContainer header="Default variant" subHeader="Showcases all default variants">
        <KitchenSinkBox description="alert" span={12} outerClassName="block">
          <Alert variant="default" title="Default Alert" />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + description" span={12} outerClassName="block">
          <Alert variant="default" title="Default Alert">
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="default" title="Default Alert with Icon" icon={<User />} />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="default" title="Default Alert with Icon" icon={<User />}>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="default" title="Default Alert with Icon" closeButton />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="default" title="Default Alert with Icon" closeButton>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton" span={12} outerClassName="block">
          <Alert variant="default" title="Default Alert with Icon" icon={<User />} closeButton onClose={fn()} />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton + description" span={12} outerClassName="block">
          <Alert variant="default" title="Default Alert with Icon" icon={<User />} closeButton onClose={fn()}>
            Description
          </Alert>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Success variant" subHeader="Showcases all success variants">
        <KitchenSinkBox description="alert" span={12} outerClassName="block">
          <Alert variant="success" title="Success Alert" />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + description" span={12} outerClassName="block">
          <Alert variant="success" title="Success Alert">
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="success" title="Success Alert with Icon" icon={<Check />} />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="success" title="Success Alert with Icon" icon={<Check />}>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="success" title="Success Alert with Icon" closeButton />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="success" title="Success Alert with Icon" closeButton>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton" span={12} outerClassName="block">
          <Alert variant="success" title="Success Alert with Icon" icon={<Check />} closeButton onClose={fn()} />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton + description" span={12} outerClassName="block">
          <Alert variant="success" title="Success Alert with Icon" icon={<Check />} closeButton onClose={fn()}>
            Description
          </Alert>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Warning variant" subHeader="Showcases all warning variants">
        <KitchenSinkBox description="alert" span={12} outerClassName="block">
          <Alert variant="warning" title="Warning Alert" />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + description" span={12} outerClassName="block">
          <Alert variant="warning" title="Warning Alert">
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="warning" title="Warning Alert with Icon" icon={<TriangleAlert />} />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="warning" title="Warning Alert with Icon" icon={<TriangleAlert />}>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="warning" title="Warning Alert with Icon" closeButton />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="warning" title="Warning Alert with Icon" closeButton>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton" span={12} outerClassName="block">
          <Alert
            variant="warning"
            title="Warning Alert with Icon"
            icon={<TriangleAlert />}
            closeButton
            onClose={fn()}
          />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton + description" span={12} outerClassName="block">
          <Alert variant="warning" title="Warning Alert with Icon" icon={<TriangleAlert />} closeButton onClose={fn()}>
            Description
          </Alert>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Info variant" subHeader="Showcases all info variants">
        <KitchenSinkBox description="alert" span={12} outerClassName="block">
          <Alert variant="info" title="Info Alert" />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + description" span={12} outerClassName="block">
          <Alert variant="info" title="Info Alert">
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="info" title="Info Alert with Icon" icon={<Info />} />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="info" title="Info Alert with Icon" icon={<Info />}>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="info" title="Info Alert with Icon" closeButton />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="info" title="Info Alert with Icon" closeButton>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton" span={12} outerClassName="block">
          <Alert variant="info" title="Info Alert with Icon" icon={<Info />} closeButton onClose={fn()} />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton + description" span={12} outerClassName="block">
          <Alert variant="info" title="Info Alert with Icon" icon={<Info />} closeButton onClose={fn()}>
            Description
          </Alert>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Destructive variant" subHeader="Showcases all destructive variants">
        <KitchenSinkBox description="alert" span={12} outerClassName="block">
          <Alert variant="destructive" title="Destructive Alert" />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + description" span={12} outerClassName="block">
          <Alert variant="destructive" title="Destructive Alert">
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="destructive" title="Destructive Alert with Icon" icon={<AlertCircle />} />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="destructive" title="Destructive Alert with Icon" icon={<AlertCircle />}>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon" span={12} outerClassName="block">
          <Alert variant="destructive" title="Destructive Alert with Icon" closeButton />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + icon + description" span={12} outerClassName="block">
          <Alert variant="destructive" title="Destructive Alert with Icon" closeButton>
            Description
          </Alert>
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton" span={12} outerClassName="block">
          <Alert
            variant="destructive"
            title="Destructive Alert with Icon"
            icon={<AlertCircle />}
            closeButton
            onClose={fn()}
          />
        </KitchenSinkBox>
        <KitchenSinkBox description="alert + closeButton + description" span={12} outerClassName="block">
          <Alert
            variant="destructive"
            title="Destructive Alert with Icon"
            icon={<AlertCircle />}
            closeButton
            onClose={fn()}
          >
            Description
          </Alert>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Various Scenarios">
        <KitchenSinkBox description="Very long title" span={12} outerClassName="block">
          <Alert title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem molestias suscipit" />
        </KitchenSinkBox>{' '}
        <KitchenSinkBox description="Very long description" span={12} outerClassName="block">
          <Alert title="Title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quidem molestias suscipit consectetur
            adipisicing elit. Soluta, quidem molestias suscipit
          </Alert>
        </KitchenSinkBox>
      </KitchenSinkContainer>
    </>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS
