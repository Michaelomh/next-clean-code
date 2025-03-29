export const KITCHEN_SINK_PARAMS = {
  layout: 'fullscreen',
  options: { bottomPanelHeight: 0 },
  chromatic: { disableSnapshot: false },
}

export const KITCHEN_SINK_DECORATORS = [
  (Story: React.FC) => (
    <div className="mx-auto h-full w-[1080px] p-16">
      <Story />
    </div>
  ),
]
