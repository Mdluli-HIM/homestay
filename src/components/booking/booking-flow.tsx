"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarDays, Check } from "lucide-react";
import { rooms } from "@/lib/placeholder-data";
import {
  addDays,
  buildMonthGrid,
  differenceInNights,
  formatDateLabel,
  formatMonthLabel,
  isAfterDay,
  isBeforeDay,
  isSameDay,
  startOfDay,
} from "@/lib/booking-utils";

const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const stayModes = [
  {
    value: "Short stay",
    title: "Short stay",
    text: "Flexible nights, weekends, and shorter visits.",
  },
  {
    value: "Long stay",
    title: "Long stay",
    text: "A more settled option with easier day-to-day living.",
  },
  {
    value: "Student stay",
    title: "Student stay",
    text: "Quiet, practical, and better suited to longer routines.",
  },
];

type GuestForm = {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
};

function CounterControl({
  label,
  helper,
  value,
  min = 0,
  max = 10,
  onChange,
}: {
  label: string;
  helper: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="border border-black/8 p-5">
      <div className="mb-5">
        <p className="text-2xl text-[var(--color-olive)]">{label}</p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-olive)]/68">
          {helper}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-black/8 pt-4">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="grid h-11 w-11 place-items-center border border-black/8 bg-transparent text-xl text-[var(--color-olive)] transition-colors hover:bg-black/[0.03]"
        >
          −
        </button>

        <span className="text-3xl leading-none text-[var(--color-olive)]">
          {value}
        </span>

        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="grid h-11 w-11 place-items-center border border-black/8 bg-transparent text-xl text-[var(--color-olive)] transition-colors hover:bg-black/[0.03]"
        >
          +
        </button>
      </div>
    </div>
  );
}

export function BookingFlowSkeleton() {
  return (
    <main className="flow-section pt-32" data-flow-section>
      <div className="container-shell animate-pulse">
        <div className="grid gap-10 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-8">
            <div className="h-8 w-32 bg-black/8" />
            <div className="h-24 w-full max-w-3xl bg-black/8" />
            <div className="h-[24rem] border border-black/8 bg-black/5" />
            <div className="h-[26rem] border border-black/8 bg-black/5" />
            <div className="h-[22rem] border border-black/8 bg-black/5" />
          </div>

          <div className="h-[40rem] border border-black/8 bg-black/5" />
        </div>
      </div>
    </main>
  );
}

export function BookingFlow() {
  const searchParams = useSearchParams();
  const roomParam = searchParams.get("room");

  const initialRoomSlug =
    roomParam && rooms.some((room) => room.slug === roomParam)
      ? roomParam
      : (rooms[0]?.slug ?? "");

  const today = useMemo(() => startOfDay(new Date()), []);
  const baseCheckIn = useMemo(() => addDays(today, 2), [today]);

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [selectedRoomSlug, setSelectedRoomSlug] = useState(initialRoomSlug);
  const [stayMode, setStayMode] = useState("Short stay");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [guestForm, setGuestForm] = useState<GuestForm>({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const calendarMonths = useMemo(() => {
    const firstMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const secondMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    return [firstMonth, secondMonth];
  }, [today]);

  const selectedRoom =
    rooms.find((room) => room.slug === selectedRoomSlug) ?? rooms[0];

  const nights =
    checkIn && checkOut ? differenceInNights(checkIn, checkOut) : 0;

  const estimatedTotal = nights * (selectedRoom?.priceFrom ?? 0);

  const currency = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  });

  const canSubmit =
    Boolean(checkIn) &&
    Boolean(checkOut) &&
    Boolean(selectedRoom) &&
    guestForm.fullName.trim().length > 1 &&
    guestForm.email.trim().length > 3 &&
    guestForm.phone.trim().length > 5;

  const stepItems = [
    {
      label: "Dates",
      complete: Boolean(checkIn && checkOut),
      value:
        checkIn && checkOut
          ? `${nights} night${nights === 1 ? "" : "s"} selected`
          : "Choose arrival and departure",
    },
    {
      label: "Guests",
      complete: true,
      value: `${adults} adult${adults === 1 ? "" : "s"}${
        children ? ` • ${children} child${children === 1 ? "" : "ren"}` : ""
      }${pets ? ` • ${pets} pet${pets === 1 ? "" : "s"}` : ""}`,
    },
    {
      label: "Room",
      complete: Boolean(selectedRoom),
      value: selectedRoom?.name ?? "Select room",
    },
    {
      label: "Details",
      complete:
        guestForm.fullName.trim().length > 1 &&
        guestForm.email.trim().length > 3 &&
        guestForm.phone.trim().length > 5,
      value:
        guestForm.fullName.trim().length > 1
          ? "Guest details added"
          : "Add contact details",
    },
  ];

  function handleDateClick(date: Date) {
    const cleanDate = startOfDay(date);

    if (isBeforeDay(cleanDate, today)) return;

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(cleanDate);
      setCheckOut(null);
      return;
    }

    if (isSameDay(cleanDate, checkIn)) {
      setCheckIn(cleanDate);
      setCheckOut(null);
      return;
    }

    if (isBeforeDay(cleanDate, checkIn)) {
      setCheckIn(cleanDate);
      setCheckOut(null);
      return;
    }

    setCheckOut(cleanDate);
  }

  function applyStayPreset(presetNights: number) {
    const nextCheckIn = checkIn ?? baseCheckIn;
    setCheckIn(nextCheckIn);
    setCheckOut(addDays(nextCheckIn, presetNights));
  }

  function isDateInRange(date: Date) {
    if (!checkIn || !checkOut) return false;
    return isAfterDay(date, checkIn) && isBeforeDay(date, checkOut);
  }

  function handleFormChange<K extends keyof GuestForm>(
    key: K,
    value: GuestForm[K],
  ) {
    setGuestForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) return;

    setSubmitted(true);
  }

  return (
    <main className="flow-section pt-32" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-10 border-b border-black/8 pb-10 xl:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              booking request
            </p>
            <h1 className="max-w-[9ch] text-[clamp(3.6rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-olive)]">
              Reserve with clarity, not friction.
            </h1>
          </div>

          <p className="body-copy max-w-2xl xl:justify-self-end">
            This booking flow is designed to feel calm, spacious, and
            architectural. Guests can choose dates, compare room types, and send
            a request with confidence while the live booking API is added next.
          </p>
        </section>

        <div className="grid gap-10 py-10 xl:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-10">
            <section data-reveal>
              <div className="mb-6 border-b border-black/8 pb-5">
                <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                  booking steps
                </p>
                <h2 className="text-[clamp(2.3rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-olive)]">
                  Build your stay in four clear steps.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stepItems.map((item, index) => (
                  <article
                    key={item.label}
                    className="border border-black/8 p-4"
                    data-card
                  >
                    <div className="mb-4 flex items-center justify-between border-b border-black/8 pb-3">
                      <p className="eyebrow text-[var(--color-olive-soft)]">
                        0{index + 1}
                      </p>

                      <span
                        className={clsx(
                          "grid h-7 w-7 place-items-center border text-xs",
                          item.complete
                            ? "border-[var(--color-olive)] bg-[var(--color-olive)] text-white"
                            : "border-black/8 bg-transparent text-[var(--color-olive-soft)]",
                        )}
                      >
                        {item.complete ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          index + 1
                        )}
                      </span>
                    </div>

                    <p className="mb-2 text-lg text-[var(--color-olive)]">
                      {item.label}
                    </p>
                    <p className="text-sm leading-6 text-[var(--color-olive)]/78">
                      {item.value}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section data-card>
              <div className="mb-6 border-b border-black/8 pb-5">
                <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                  01 • dates
                </p>
                <h2 className="text-[clamp(2.3rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-olive)]">
                  Choose your stay dates.
                </h2>
              </div>

              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="border border-black/8 p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    check in
                  </p>
                  <p className="text-xl text-[var(--color-olive)]">
                    {checkIn ? formatDateLabel(checkIn) : "Select date"}
                  </p>
                </div>

                <div className="border border-black/8 p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    check out
                  </p>
                  <p className="text-xl text-[var(--color-olive)]">
                    {checkOut ? formatDateLabel(checkOut) : "Select date"}
                  </p>
                </div>

                <div className="border border-black/8 bg-black/[0.025] p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    nights
                  </p>
                  <p className="text-xl text-[var(--color-olive)]">
                    {nights > 0 ? nights : "—"}
                  </p>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-3">
                {[
                  { label: "Weekend", nights: 2 },
                  { label: "One week", nights: 7 },
                  { label: "One month", nights: 30 },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => applyStayPreset(preset.nights)}
                    className="border border-black/8 px-4 py-3 text-sm uppercase tracking-[0.14em] text-[var(--color-olive)] transition-colors hover:bg-black/[0.03]"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="grid gap-6 2xl:grid-cols-2">
                {calendarMonths.map((month) => {
                  const days = buildMonthGrid(month);

                  return (
                    <article
                      key={month.toISOString()}
                      className="border border-black/8 p-4"
                    >
                      <div className="mb-4 flex items-center gap-3 border-b border-black/8 pb-4">
                        <CalendarDays className="h-5 w-5 text-[var(--color-olive-soft)]" />
                        <h3 className="text-2xl text-[var(--color-olive)]">
                          {formatMonthLabel(month)}
                        </h3>
                      </div>

                      <div className="mb-3 grid grid-cols-7 gap-2">
                        {weekdayLabels.map((day) => (
                          <div
                            key={day}
                            className="py-2 text-center text-xs uppercase tracking-[0.14em] text-[var(--color-olive-soft)]"
                          >
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-2">
                        {days.map((day) => {
                          const isSelectedCheckIn =
                            checkIn && isSameDay(day.date, checkIn);
                          const isSelectedCheckOut =
                            checkOut && isSameDay(day.date, checkOut);
                          const isRange = isDateInRange(day.date);

                          return (
                            <button
                              key={day.key}
                              type="button"
                              disabled={day.isPast}
                              onClick={() => handleDateClick(day.date)}
                              className={clsx(
                                "calendar-day relative min-h-[3.25rem] border text-sm",
                                day.isPast
                                  ? "cursor-not-allowed border-black/5 bg-black/[0.02] text-[var(--color-olive)]/28"
                                  : "border-black/8 bg-transparent text-[var(--color-olive)] hover:bg-black/[0.03]",
                                !day.isCurrentMonth &&
                                  "text-[var(--color-olive)]/45",
                                isRange && "bg-black/[0.045]",
                                (isSelectedCheckIn || isSelectedCheckOut) &&
                                  "border-[var(--color-olive)] bg-[var(--color-olive)] text-white",
                              )}
                            >
                              <span>{day.dayNumber}</span>
                            </button>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section data-reveal>
              <div className="mb-6 border-b border-black/8 pb-5">
                <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                  02 • guests and stay type
                </p>
                <h2 className="text-[clamp(2.3rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-olive)]">
                  Tailor the stay to who is coming.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <CounterControl
                  label="Adults"
                  helper="Main guests staying in the room"
                  value={adults}
                  min={1}
                  max={6}
                  onChange={setAdults}
                />
                <CounterControl
                  label="Children"
                  helper="Optional younger guests"
                  value={children}
                  min={0}
                  max={4}
                  onChange={setChildren}
                />
                <CounterControl
                  label="Pets"
                  helper="Only if bringing approved pets"
                  value={pets}
                  min={0}
                  max={2}
                  onChange={setPets}
                />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {stayModes.map((mode) => (
                  <button
                    key={mode.value}
                    type="button"
                    onClick={() => setStayMode(mode.value)}
                    className={clsx(
                      "border p-5 text-left transition-colors",
                      stayMode === mode.value
                        ? "border-black/12 bg-black/[0.05]"
                        : "border-black/8 bg-transparent hover:bg-black/[0.025]",
                    )}
                  >
                    <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                      stay mode
                    </p>
                    <h3 className="text-2xl text-[var(--color-olive)]">
                      {mode.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-olive)]/75">
                      {mode.text}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            <section data-card>
              <div className="mb-6 border-b border-black/8 pb-5">
                <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                  03 • room
                </p>
                <h2 className="text-[clamp(2.3rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-olive)]">
                  Pick the room that fits best.
                </h2>
              </div>

              <div className="grid gap-6">
                {rooms.map((room, index) => {
                  const active = room.slug === selectedRoomSlug;

                  return (
                    <button
                      key={room.slug}
                      type="button"
                      onClick={() => setSelectedRoomSlug(room.slug)}
                      className={clsx(
                        "interactive-fade border-b border-black/8 pb-6 text-left last:border-b-0",
                        active
                          ? "bg-black/[0.025] opacity-100"
                          : "opacity-82 hover:bg-black/[0.02] hover:opacity-100",
                      )}
                    >
                      <div className="grid gap-6 xl:grid-cols-[0.12fr_0.5fr_0.38fr] xl:gap-8">
                        <div className="flex items-start justify-between border-b border-black/8 pb-4 xl:block xl:border-b-0 xl:pb-0">
                          <span className="text-[clamp(2.3rem,4vw,3.6rem)] leading-none tracking-[-0.05em] text-[var(--color-olive)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="text-right xl:mt-5 xl:text-left">
                            <p className="eyebrow mb-1 text-[var(--color-olive-soft)]">
                              from
                            </p>
                            <p className="text-base text-[var(--color-olive)]">
                              R{room.priceFrom}
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-4">
                          <div className="border-b border-black/8 pb-4">
                            <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                              {room.stayTypes.join(" • ")}
                            </p>
                            <h3 className="text-[clamp(2rem,3vw,3.2rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-olive)]">
                              {room.name}
                            </h3>
                            <p className="mt-3 text-base leading-7 text-[var(--color-olive)]/78">
                              {room.tagline}
                            </p>
                          </div>

                          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                            {room.amenities.slice(0, 3).map((item) => (
                              <div
                                key={item}
                                className="border-t border-black/8 py-3 text-sm leading-6 text-[var(--color-olive)]/82"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div
                          className="frame-media min-h-[16rem] xl:min-h-[18rem]"
                          data-parallax-wrap
                        >
                          <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            data-parallax
                            className="object-cover"
                            sizes="(max-width: 1280px) 100vw, 30vw"
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section data-reveal>
              <div className="mb-6 border-b border-black/8 pb-5">
                <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                  04 • guest details
                </p>
                <h2 className="text-[clamp(2.3rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-olive)]">
                  Add the final booking details.
                </h2>
              </div>

              <form
                id="booking-request-form"
                onSubmit={handleSubmit}
                className="grid gap-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                      Full name
                    </span>
                    <input
                      type="text"
                      value={guestForm.fullName}
                      onChange={(event) =>
                        handleFormChange("fullName", event.target.value)
                      }
                      className="min-h-[3.7rem] border border-black/8 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                      Phone
                    </span>
                    <input
                      type="tel"
                      value={guestForm.phone}
                      onChange={(event) =>
                        handleFormChange("phone", event.target.value)
                      }
                      className="min-h-[3.7rem] border border-black/8 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                      placeholder="+27..."
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                    Email
                  </span>
                  <input
                    type="email"
                    value={guestForm.email}
                    onChange={(event) =>
                      handleFormChange("email", event.target.value)
                    }
                    className="min-h-[3.7rem] border border-black/8 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                    Notes
                  </span>
                  <textarea
                    value={guestForm.notes}
                    onChange={(event) =>
                      handleFormChange("notes", event.target.value)
                    }
                    className="min-h-[10rem] border border-black/8 bg-transparent px-4 py-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                    placeholder="Tell us about your stay length, student needs, pet information, or any practical detail."
                  />
                </label>
              </form>
            </section>
          </div>

          <aside className="h-max xl:sticky xl:top-28" data-card>
            {selectedRoom ? (
              <div className="border border-black/8">
                <div className="frame-media min-h-[20rem] border-0 border-b border-black/8 overflow-hidden">
                  <Image
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 1280px) 100vw, 40vw"
                    priority
                    loading="eager"
                  />
                </div>

                <div className="p-6">
                  <div className="border-b border-black/8 pb-6">
                    <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                      selected room
                    </p>
                    <h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-olive)]">
                      {selectedRoom.name}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-[var(--color-olive)]/78">
                      {selectedRoom.tagline}
                    </p>
                  </div>

                  <div className="grid gap-0 border-b border-black/8 py-6">
                    <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-black/8 py-3">
                      <p className="eyebrow text-[var(--color-olive-soft)]">
                        dates
                      </p>
                      <p className="text-sm leading-6 text-[var(--color-olive)]">
                        {checkIn ? formatDateLabel(checkIn) : "Choose check-in"}{" "}
                        —{" "}
                        {checkOut
                          ? formatDateLabel(checkOut)
                          : "Choose check-out"}
                      </p>
                    </div>

                    <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-black/8 py-3">
                      <p className="eyebrow text-[var(--color-olive-soft)]">
                        guests
                      </p>
                      <p className="text-sm leading-6 text-[var(--color-olive)]">
                        {adults} adult{adults === 1 ? "" : "s"}
                        {children
                          ? ` • ${children} child${children === 1 ? "" : "ren"}`
                          : ""}
                      </p>
                    </div>

                    <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-black/8 py-3">
                      <p className="eyebrow text-[var(--color-olive-soft)]">
                        stay
                      </p>
                      <p className="text-sm leading-6 text-[var(--color-olive)]">
                        {stayMode}
                      </p>
                    </div>

                    <div className="grid grid-cols-[8rem_1fr] gap-4 py-3">
                      <p className="eyebrow text-[var(--color-olive-soft)]">
                        pets
                      </p>
                      <p className="text-sm leading-6 text-[var(--color-olive)]">
                        {pets > 0
                          ? `${pets} pet${pets === 1 ? "" : "s"} requested`
                          : "No pets added"}
                      </p>
                    </div>
                  </div>

                  <div className="border-b border-black/8 py-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                          estimated total
                        </p>
                        <p className="text-[clamp(2.4rem,4vw,4rem)] leading-none tracking-[-0.04em] text-[var(--color-olive)]">
                          {nights > 0 ? currency.format(estimatedTotal) : "—"}
                        </p>
                      </div>

                      <div className="text-right text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                        {nights > 0
                          ? `${nights} night${nights === 1 ? "" : "s"}`
                          : "No dates yet"}
                      </div>
                    </div>

                    <div className="mt-5 space-y-2 text-sm leading-6 text-[var(--color-olive)]/78">
                      <p>
                        From {currency.format(selectedRoom.priceFrom)} per night
                      </p>
                      <p>
                        Estimate only until live pricing and availability are
                        connected.
                      </p>
                      <p>
                        Weekly care, fresh linen support, and guest laundry
                        discount remain part of the stay story.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      form="booking-request-form"
                      disabled={!canSubmit}
                      className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Review booking request
                    </button>

                    <p className="mt-4 text-sm leading-6 text-[var(--color-olive)]/62">
                      This is a front-end preview for now. The live booking API,
                      availability checks, and submission flow will connect
                      next.
                    </p>

                    {submitted && (
                      <div className="mt-6 border border-black/8 bg-black/[0.03] p-5">
                        <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                          request preview ready
                        </p>
                        <h3 className="text-2xl text-[var(--color-olive)]">
                          Your stay request looks complete.
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-olive)]/78">
                          Once the backend is connected, this becomes the real
                          submission and confirmation step with pricing rules,
                          email notifications, and live room availability.
                        </p>
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href="/rooms" className="button-secondary flex-1">
                        Compare rooms
                      </Link>
                      <Link href="/contact" className="button-secondary flex-1">
                        Ask a question
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </main>
  );
}
