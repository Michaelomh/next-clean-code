import { StoryFn, Meta } from '@storybook/react'
import {
  TbAlertCircle,
  TbAlertTriangle,
  TbCheck,
  TbExternalLink,
  TbInfoCircle,
  TbLoader2,
  TbUser,
} from 'react-icons/tb'
import { toast } from 'sonner'

import { KITCHEN_SINK_DECORATORS, KITCHEN_SINK_PARAMS } from '@/utils/storybook/constants'
import { KitchenSinkContainer } from '@/utils/storybook/kitchen-sink-container'
import { KitchenSinkBox } from '@/utils/storybook/kitchen-sink-box'
import { Text, Button } from '..'
import { Toaster } from './sonner'

export default {
  title: 'Design System/Sonner, Toast',
  component: toast,
} as Meta<typeof toast>

const KitchenSinkTemplate: StoryFn<typeof toast> = () => {
  return (
    <>
      <Text style="h1">Sonner</Text>
      <a
        href="https://sonner.emilkowal.ski/getting-started"
        className="border-b-stone-700 hover:border-b"
        target="_blank"
      >
        Sonner Documentation <TbExternalLink className="mb-1 inline" />
      </a>

      <KitchenSinkContainer header="Variants">
        <KitchenSinkBox description="" className="" span={5}>
          <Button
            onClick={() => {
              toast('This is a default toast')
            }}
          >
            Default Toast
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={5}>
          <Button
            className="bg-emerald-500 hover:bg-emerald-500/80"
            onClick={() => {
              toast.success('This is a success toast')
            }}
          >
            Success Toast
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={4}>
          <Button
            className="bg-sky-500 hover:bg-sky-500/80"
            onClick={() => {
              toast.info('This is a info toast')
            }}
          >
            Info Toast
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={5}>
          <Button
            className="bg-amber-500 hover:bg-amber-500/80"
            onClick={() => {
              toast.warning('This is a warning toast')
            }}
          >
            Warning Toast
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={5}>
          <Button
            className="bg-rose-500 hover:bg-rose-500/80"
            onClick={() => {
              toast.error('This is a error toast')
            }}
          >
            Error Toast
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Description Toast', {
                description: 'This is a description',
              })
            }}
          >
            Toast with description
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Action Toast', {
                action: {
                  label: 'action',
                  onClick: () => alert('action!'),
                },
              })
            }}
          >
            Toast with action
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Styled Action Toast', {
                action: {
                  label: 'action',
                  onClick: () => alert('action!'),
                },
                actionButtonStyle: {
                  color: 'red',
                  backgroundColor: 'yellow',
                },
              })
            }}
          >
            Toast with styled action
          </Button>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <KitchenSinkContainer header="Advanced Toast options">
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Toast with Icon', {
                icon: <TbUser />,
              })
            }}
          >
            Toast w/ Custom Icon
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast(
                <div>
                  A custom toast with a{' '}
                  <a href="https://emilkowal.ski/" target="_blank" rel="noopener noreferrer" className="underline">
                    link
                  </a>
                </div>,
              )
            }}
          >
            Custom Toast
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Toast with close button', {
                closeButton: true,
              })
            }}
          >
            Toast w/ close button
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Toast would be here forever, until you dismiss', {
                duration: Infinity,
                closeButton: true,
              })
            }}
          >
            Toast that can only be dismissed
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Toast would be here for 1 second', {
                duration: 1000,
              })
            }}
          >
            Custom duration toast
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Toast would be here for 1 second', {
                style: {
                  background: 'red',
                },
              })
            }}
          >
            Custom style toast
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              const myPromise = new Promise<{ name: string }>((resolve, reject) => {
                const isSuccess = Math.random() < 0.5
                setTimeout(() => {
                  if (isSuccess) {
                    resolve({ name: 'Promise succeeded! 🎉' })
                  } else {
                    reject(new Error('Promise failed! 😱'))
                  }
                }, 2000)
              })

              toast.promise(myPromise, {
                loading: 'Loading...',
                success: (data: { name: string }) => {
                  return {
                    message: `${data.name} toast has been added`,
                    description: 'Custom description for the success state',
                  }
                },
                error: 'Error',
              })
            }}
          >
            Toast w/ promise (Success + Fail)
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Log when toast close manually', {
                onDismiss: () => console.log('callback when toast close manually'),
                closeButton: true,
              })
            }}
          >
            Toast w/ onDismiss
          </Button>
        </KitchenSinkBox>
        <KitchenSinkBox description="" className="" span={8}>
          <Button
            onClick={() => {
              toast('Log when toast close automatically', {
                onAutoClose: () => console.log('callback when toast close automatically'),
              })
            }}
          >
            Toast w/ onAutoClose
          </Button>
        </KitchenSinkBox>
      </KitchenSinkContainer>

      <Toaster position="top-left" richColors />
      <div className="fixed top-0 left-0">
        <Text className="sticky m-4 w-48 rounded-md bg-stone-200/30 p-2 text-stone-800 dark:text-stone-300">
          top-left: Rich colors toaster
        </Text>
      </div>

      <Toaster
        position="top-center"
        icons={{
          success: <TbCheck size={24} />,
          info: <TbInfoCircle size={24} />,
          warning: <TbAlertTriangle size={24} />,
          error: <TbAlertCircle size={24} />,
          loading: <TbLoader2 className="animate-spin" size={24} />,
        }}
      />
      <div className="fixed top-0 left-[calc(50%-112px)]">
        <Text className="sticky m-4 w-56 rounded-md bg-stone-200/30 p-2 text-stone-800 dark:text-stone-300">
          top-center: Custom Icons for different variants
        </Text>
      </div>

      <Toaster position="top-right" closeButton />
      <div className="fixed top-0 right-4">
        <Text className="sticky m-4 w-48 rounded-md bg-stone-200/30 p-2 text-stone-800 dark:text-stone-300">
          top-right: always has close button
        </Text>
      </div>

      <Toaster position="bottom-left" expand />
      <div className="fixed bottom-0 left-0">
        <Text className="sticky m-4 w-48 rounded-md bg-stone-200/30 p-2 text-stone-800 dark:text-stone-300">
          bottom-left: show all toast expanded
        </Text>
      </div>

      <Toaster position="bottom-center" toastOptions={{ duration: 1000 }} />
      <div className="fixed bottom-0 left-[calc(50%-112px)]">
        <Text className="sticky m-4 w-56 rounded-md bg-stone-200/30 p-2 text-stone-800 dark:text-stone-300">
          bottom-center: All toast duration at 1s
        </Text>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'green',
          },
        }}
      />
      <div className="fixed right-0 bottom-0">
        <Text className="sticky m-4 w-48 rounded-md bg-stone-200/30 p-2 text-stone-800 dark:text-stone-300">
          bottom-right: custom style toasts (always green)
        </Text>
      </div>
    </>
  )
}

export const KitchenSink = KitchenSinkTemplate.bind({})
KitchenSink.parameters = KITCHEN_SINK_PARAMS
KitchenSink.decorators = KITCHEN_SINK_DECORATORS
