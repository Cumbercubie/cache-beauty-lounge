export default function DayButton({ onClick, children, color, size }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md border border-transparent bg-${
        color || "indigo"
      }-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-${
        color || "indigo"
      }-700`}
    >
      {children}
    </button>
  );
}
