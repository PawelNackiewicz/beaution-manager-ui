import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Organisms/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([]);
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    );
  },
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = useState<{ from?: Date; to?: Date }>({
      from: new Date(2024, 0, 20),
      to: new Date(2024, 0, 25),
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border"
      />
    );
  },
};

export const WithDropdowns: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown-months"
        fromYear={2020}
        toYear={2030}
        className="rounded-md border"
      />
    );
  },
};

export const DisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const disabledDays = [
      { from: new Date(2024, 0, 1), to: new Date(2024, 0, 5) },
      new Date(2024, 0, 15),
      { dayOfWeek: [0, 6] }, // Disable weekends
    ];
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDays}
        className="rounded-md border"
      />
    );
  },
};

export const WithWeekNumbers: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showWeekNumber
        className="rounded-md border"
      />
    );
  },
};
