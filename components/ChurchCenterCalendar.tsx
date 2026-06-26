export function ChurchCenterCalendar() {
  return (
    <iframe
      src="https://highlnd.churchcenter.com/calendar?embed=true&view=month"
      title="Highland Church events calendar"
      className="mx-auto block w-full max-w-5xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
      style={{ height: "600px", border: "none" }}
      loading="lazy"
    />
  );
}
