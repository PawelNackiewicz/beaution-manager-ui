import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "The type of accordion",
    },
    collapsible: {
      control: "boolean",
      description: "Whether items can be collapsed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes! This accordion uses type="multiple" so you can expand multiple
          items at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What's the difference?</AccordionTrigger>
        <AccordionContent>
          With type="multiple", opening a new item doesn't close the previously
          opened ones.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Try it out!</AccordionTrigger>
        <AccordionContent>
          Go ahead and open all three items. They'll all stay open.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SingleWithDefault: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-2"
      className="w-[450px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>This is the first item content.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
        <AccordionContent>
          This item is open by default using defaultValue="item-2".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>This is the third item content.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
