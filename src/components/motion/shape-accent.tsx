import clsx from "clsx";

type ShapeAccentProps = {
  variant?: "rectangle" | "triangle";
  className?: string;
};

export function ShapeAccent({
  variant = "rectangle",
  className,
}: ShapeAccentProps) {
  return (
    <span
      aria-hidden="true"
      data-float
      className={clsx(
        "shape-accent",
        variant === "triangle" ? "shape-triangle" : "shape-rectangle",
        className,
      )}
    />
  );
}
