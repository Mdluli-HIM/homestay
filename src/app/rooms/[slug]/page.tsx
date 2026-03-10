import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageMotion } from "@/components/motion/page-motion";
import { RoomDetail } from "@/components/rooms/room-detail";
import { getRoomBySlug, rooms } from "@/lib/placeholder-data";

type RoomPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export function generateMetadata({ params }: RoomPageProps): Metadata {
  const room = getRoomBySlug(params.slug);

  if (!room) {
    return {
      title: "Room not found | Stay House",
    };
  }

  return {
    title: `${room.name} | Stay House`,
    description: room.tagline,
  };
}

export default function RoomDetailPage({ params }: RoomPageProps) {
  const room = getRoomBySlug(params.slug);

  if (!room) {
    notFound();
  }

  return (
    <PageMotion className="page-flow">
      <RoomDetail room={room} />
    </PageMotion>
  );
}
