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
    tone: "retro-block-blue",
  },
  {
    value: "Long stay",
    title: "Long stay",
    text: "A more settled option with easier day-to-day living.",
    tone: "",
  },
  {
    value: "Student stay",
    title: "Student stay",
    text: "Quiet, practical, and better suited to longer routines.",
    tone: "",
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
    <div className="retro-panel-thick p-5">
      <div className="mb-5 border-b border-black/15 pb-4">
        <p className="retro-kicker mb-2 text-[var(--color-olive-soft)]">
          {label}
        </p>
        <p className="text-sm leading-6 text-[var(--color-olive)]/70">
          {helper}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="grid h-11 w-11 place-items-center border border-black/15 bg-transparent text-xl text-[var(--color-olive)] transition-colors hover:bg-black/[0.03]"
        >
          −
        </button>

        <span className="retro-number text-[var(--color-ink)]">
          {String(value).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="grid h-11 w-11 place-items-center border border-black/15 bg-transparent text-xl text-[var(--color-olive)] transition-colors hover:bg-black/[0.03]"
        >
          +
        </button>
      </div>
    </div>
  );
}

export function BookingFlowSkeleton() {
  return (
    <main className="flow-section pt-32 retro-paper" data-flow-section>
      <div className="container-shell animate-pulse">
        <div className="grid gap-6">
          <div className="h-10 w-48 bg-black/10" />
          <div className="h-28 max-w-4xl bg-black/10" />
          <div className="h-[22rem] border border-black/10 bg-black/5" />
          <div className="h-[30rem] border border-black/10 bg-black/5" />
          <div className="h-[24rem] border border-black/10 bg-black/5" />
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
    <main className="flow-section pt-32 retro-paper" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 13 • booking
            </p>
            <h1 className="retro-title retro-ink max-w-[8ch]">
              Reserve your stay like the final chapter.
            </h1>
          </div>

          <div className="flex items-end">
            <p className="body-copy max-w-2xl lg:justify-self-end">
              The booking page should feel like a natural continuation of the
              story — clear, tactile, and easy to move through, while still
              feeling distinct from generic accommodation forms.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-3">
            <div
              className="retro-panel-thick retro-block-clay p-5 md:p-6 text-white"
              data-card
            >
              <p className="retro-kicker mb-3 text-white/70">chapter 13.1</p>
              <h2 className="retro-subtitle max-w-[10ch] text-white">
                Build your stay in four clear steps.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/82">
                Choose dates, shape the stay, pick the room, and send the
                request.
              </p>
            </div>

            <div className="retro-panel-thick p-5 md:p-6" data-card>
              <div className="grid gap-0 border-t border-black/15">
                {stepItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="grid gap-4 border-b border-black/15 py-4 md:grid-cols-[0.12fr_0.3fr_0.58fr]"
                  >
                    <div className="retro-number text-[var(--color-ink)]">
                      {String(index + 1).padStart(2, "0")}.
                    </div>

                    <div className="flex items-center gap-3">
                      <p className="text-xl text-[var(--color-olive)]">
                        {item.label}
                      </p>
                      {item.complete ? (
                        <span className="grid h-7 w-7 place-items-center border border-[var(--color-olive)] bg-[var(--color-olive)] text-white">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      ) : null}
                    </div>

                    <p className="text-sm leading-6 text-[var(--color-olive)]/78">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="retro-panel-thick retro-block-blue p-5 md:p-6"
              data-card
            >
              <p className="retro-kicker mb-3 text-[var(--color-ink)]">
                quick presets
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Weekend", nights: 2 },
                  { label: "One week", nights: 7 },
                  { label: "One month", nights: 30 },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => applyStayPreset(preset.nights)}
                    className="border border-black/15 bg-white/20 px-4 py-3 text-sm uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:bg-white/35"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <section className="retro-panel-thick p-4 md:p-6" data-card>
              <div className="mb-6 border-b border-black/15 pb-4">
                <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                  chapter 13.2 • dates
                </p>
                <h2 className="retro-subtitle retro-ink">
                  Choose your stay dates.
                </h2>
              </div>

              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="retro-panel p-4 retro-block-yellow">
                  <p className="retro-kicker mb-2 text-[var(--color-ink)]/70">
                    check in
                  </p>
                  <p className="text-xl text-[var(--color-ink)]">
                    {checkIn ? formatDateLabel(checkIn) : "Select date"}
                  </p>
                </div>

                <div className="retro-panel p-4 retro-block-blue">
                  <p className="retro-kicker mb-2 text-[var(--color-ink)]/70">
                    check out
                  </p>
                  <p className="text-xl text-[var(--color-ink)]">
                    {checkOut ? formatDateLabel(checkOut) : "Select date"}
                  </p>
                </div>

                <div className="retro-panel p-4 retro-block-olive">
                  <p className="retro-kicker mb-2 text-[var(--color-ink)]/70">
                    nights
                  </p>
                  <p className="text-xl text-[var(--color-ink)]">
                    {nights > 0 ? nights : "—"}
                  </p>
                </div>
              </div>

              <div className="grid gap-6 2xl:grid-cols-2">
                {calendarMonths.map((month, monthIndex) => {
                  const days = buildMonthGrid(month);
                  const monthTone =
                    monthIndex === 0 ? "retro-block-yellow" : "";

                  return (
                    <article
                      key={month.toISOString()}
                      className={`retro-panel-thick p-4 ${monthTone}`}
                    >
                      <div className="mb-4 flex items-center gap-3 border-b border-black/15 pb-4">
                        <CalendarDays className="h-5 w-5 text-[var(--color-ink)]/70" />
                        <h3 className="text-2xl text-[var(--color-ink)]">
                          {formatMonthLabel(month)}
                        </h3>
                      </div>

                      <div className="mb-3 grid grid-cols-7 gap-2">
                        {weekdayLabels.map((day) => (
                          <div
                            key={day}
                            className="py-2 text-center text-xs uppercase tracking-[0.14em] text-[var(--color-ink)]/60"
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
                                "calendar-day min-h-[3.25rem] border text-sm",
                                day.isPast
                                  ? "cursor-not-allowed border-black/5 bg-black/[0.03] text-[var(--color-ink)]/28"
                                  : "border-black/15 bg-white/20 text-[var(--color-ink)] hover:bg-white/35",
                                !day.isCurrentMonth &&
                                  "text-[var(--color-ink)]/45",
                                isRange && "bg-black/[0.08]",
                                (isSelectedCheckIn || isSelectedCheckOut) &&
                                  "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-cream)]",
                              )}
                            >
                              {day.dayNumber}
                            </button>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="retro-panel-thick p-4 md:p-6" data-reveal>
              <div className="mb-6 border-b border-black/15 pb-4">
                <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                  chapter 13.3 • guests and stay type
                </p>
                <h2 className="retro-subtitle retro-ink">
                  Shape the way you want to stay.
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
                      "retro-panel-thick p-5 text-left transition-colors",
                      stayMode === mode.value
                        ? mode.tone
                        : "bg-transparent hover:bg-black/[0.03]",
                    )}
                  >
                    <p className="retro-kicker mb-3 text-[var(--color-ink)]/70">
                      stay mode
                    </p>
                    <h3 className="text-2xl text-[var(--color-ink)]">
                      {mode.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]/78">
                      {mode.text}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            <section className="retro-panel-thick p-4 md:p-6" data-card>
              <div className="mb-6 border-b border-black/15 pb-4">
                <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                  chapter 13.4 • room
                </p>
                <h2 className="retro-subtitle retro-ink">
                  Pick the room that fits best.
                </h2>
              </div>

              <div className="grid gap-0 border-t border-black/15">
                {rooms.map((room, index) => {
                  const active = room.slug === selectedRoomSlug;
                  const toneClass =
                    index === 0
                      ? "retro-block-blue"
                      : index === 1
                        ? "retro-block-yellow"
                        : "retro-block-olive";

                  return (
                    <button
                      key={room.slug}
                      type="button"
                      onClick={() => setSelectedRoomSlug(room.slug)}
                      className={clsx(
                        "interactive-fade border-b border-black/15 px-0 py-5 text-left",
                        active
                          ? "retro-block-blue"
                          : "bg-transparent hover:bg-black/[0.03]",
                      )}
                    >
                      <div className="grid gap-6 px-4 md:px-5 xl:grid-cols-[0.12fr_0.5fr_0.38fr] xl:gap-8">
                        <div className="retro-number text-[var(--color-ink)]">
                          {String(index + 1).padStart(2, "0")}.
                        </div>

                        <div className="grid gap-4">
                          <div className="border-b border-black/15 pb-4">
                            <p className="retro-kicker mb-2 text-[var(--color-ink)]/65">
                              {room.stayTypes.join(" • ")}
                            </p>
                            <h3 className="text-[clamp(2rem,3vw,3.2rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-ink)]">
                              {room.name}
                            </h3>
                            <p className="mt-3 text-base leading-7 text-[var(--color-ink)]/78">
                              {room.tagline}
                            </p>
                          </div>

                          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                            {room.amenities.slice(0, 3).map((item) => (
                              <div
                                key={item}
                                className="border-t border-black/15 py-3 text-sm leading-6 text-[var(--color-ink)]/82"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div
                          className="retro-photo-frame min-h-[16rem] xl:min-h-[18rem]"
                          data-soft-image
                        >
                          <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            data-soft-image
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

            <section className="retro-panel-thick p-4 md:p-6" data-reveal>
              <div className="mb-6 border-b border-black/15 pb-4">
                <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                  chapter 13.5 • guest details
                </p>
                <h2 className="retro-subtitle retro-ink">
                  Add the final details.
                </h2>
              </div>

              <form
                id="booking-request-form"
                onSubmit={handleSubmit}
                className="grid gap-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="retro-kicker text-[var(--color-olive-soft)]">
                      full name
                    </span>
                    <input
                      type="text"
                      value={guestForm.fullName}
                      onChange={(event) =>
                        handleFormChange("fullName", event.target.value)
                      }
                      className="min-h-[3.7rem] border border-black/10 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="retro-kicker text-[var(--color-olive-soft)]">
                      phone
                    </span>
                    <input
                      type="tel"
                      value={guestForm.phone}
                      onChange={(event) =>
                        handleFormChange("phone", event.target.value)
                      }
                      className="min-h-[3.7rem] border border-black/10 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                      placeholder="+27..."
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="retro-kicker text-[var(--color-olive-soft)]">
                    email
                  </span>
                  <input
                    type="email"
                    value={guestForm.email}
                    onChange={(event) =>
                      handleFormChange("email", event.target.value)
                    }
                    className="min-h-[3.7rem] border border-black/10 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="retro-kicker text-[var(--color-olive-soft)]">
                    message
                  </span>
                  <textarea
                    value={guestForm.notes}
                    onChange={(event) =>
                      handleFormChange("notes", event.target.value)
                    }
                    className="min-h-[12rem] border border-black/10 bg-transparent px-4 py-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                    placeholder="Tell us about your dates, room preference, student needs, pets, or any practical detail."
                  />
                </label>
              </form>
            </section>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <div
            className="retro-panel-thick retro-block-blue p-5 md:p-6"
            data-card
          >
            <p className="retro-kicker mb-3 text-[var(--color-ink)]">
              chapter 13.6 • summary
            </p>
            <h2 className="retro-subtitle retro-ink max-w-[10ch]">
              The stay you are building.
            </h2>
            <p className="body-copy mt-4 text-[var(--color-ink)]/82">
              This is your booking summary before live availability and backend
              submission are connected.
            </p>
          </div>

          <aside data-card>
            {selectedRoom ? (
              <div className="retro-panel-thick overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="retro-photo-frame min-h-[22rem] border-0 border-r border-black/15 overflow-hidden">
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

                  <div className="grid gap-0">
                    <div className="retro-block-yellow border-b border-black/15 p-5 md:p-6">
                      <p className="retro-kicker mb-3 text-[var(--color-ink)]">
                        selected room
                      </p>
                      <h2 className="retro-subtitle retro-ink">
                        {selectedRoom.name}
                      </h2>
                      <p className="mt-3 text-base leading-7 text-[var(--color-ink)]/78">
                        {selectedRoom.tagline}
                      </p>
                    </div>

                    <div className="p-5 md:p-6">
                      <div className="grid gap-0 border-t border-black/15">
                        <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-black/15 py-3">
                          <p className="retro-kicker text-[var(--color-olive-soft)]">
                            dates
                          </p>
                          <p className="text-sm leading-6 text-[var(--color-olive)]">
                            {checkIn
                              ? formatDateLabel(checkIn)
                              : "Choose check-in"}{" "}
                            —{" "}
                            {checkOut
                              ? formatDateLabel(checkOut)
                              : "Choose check-out"}
                          </p>
                        </div>

                        <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-black/15 py-3">
                          <p className="retro-kicker text-[var(--color-olive-soft)]">
                            guests
                          </p>
                          <p className="text-sm leading-6 text-[var(--color-olive)]">
                            {adults} adult{adults === 1 ? "" : "s"}
                            {children
                              ? ` • ${children} child${children === 1 ? "" : "ren"}`
                              : ""}
                          </p>
                        </div>

                        <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-black/15 py-3">
                          <p className="retro-kicker text-[var(--color-olive-soft)]">
                            stay
                          </p>
                          <p className="text-sm leading-6 text-[var(--color-olive)]">
                            {stayMode}
                          </p>
                        </div>

                        <div className="grid grid-cols-[8rem_1fr] gap-4 py-3">
                          <p className="retro-kicker text-[var(--color-olive-soft)]">
                            pets
                          </p>
                          <p className="text-sm leading-6 text-[var(--color-olive)]">
                            {pets > 0
                              ? `${pets} pet${pets === 1 ? "" : "s"} requested`
                              : "No pets added"}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-black/15 pt-5">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="retro-kicker mb-2 text-[var(--color-olive-soft)]">
                              estimated total
                            </p>
                            <p className="retro-subtitle text-[var(--color-ink)]">
                              {nights > 0
                                ? currency.format(estimatedTotal)
                                : "—"}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="retro-kicker text-[var(--color-olive-soft)]">
                              {nights > 0
                                ? `${nights} night${nights === 1 ? "" : "s"}`
                                : "No dates yet"}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 space-y-2 text-sm leading-6 text-[var(--color-olive)]/78">
                          <p>
                            From {currency.format(selectedRoom.priceFrom)} per
                            night
                          </p>
                          <p>
                            Estimate only until live pricing and availability
                            are connected.
                          </p>
                          <p>
                            Weekly care, fresh linen support, and guest laundry
                            discount remain part of the stay story.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          type="submit"
                          form="booking-request-form"
                          disabled={!canSubmit}
                          className="button-primary disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Review booking request
                        </button>

                        <Link href="/rooms" className="button-secondary">
                          Compare rooms
                        </Link>
                      </div>

                      {submitted && (
                        <div className="mt-6 retro-panel-thick retro-block-clay p-5 text-white">
                          <p className="retro-kicker mb-3 text-white/70">
                            request preview ready
                          </p>
                          <h3 className="text-2xl leading-tight">
                            Your stay request looks complete.
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-white/82">
                            Once the backend is connected, this becomes the real
                            submission and confirmation step with pricing rules,
                            email notifications, and live room availability.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </aside>
        </section>

        <section className="mt-6 retro-marquee" data-reveal>
          <div className="retro-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  "Choose dates",
                  "Pick your room",
                  "Shape the stay",
                  "Add your details",
                  "Review request",
                  "Hosted home comfort",
                  "Cape Town stay story",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="retro-marquee-item">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
