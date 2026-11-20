const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** Parses "Feb 2024" into { year, month } (month is 0-based). */
function parse(value: string): { year: number; month: number } | null {
  const [mon, yr] = value.trim().split(/\s+/);
  const month = MONTHS.indexOf(mon?.slice(0, 3) ?? "");
  const year = Number(yr);
  if (month < 0 || Number.isNaN(year)) return null;
  return { year, month };
}

/**
 * Returns a LinkedIn-style duration such as "2 yrs 10 mos".
 * Both start and end months are counted (same as LinkedIn).
 */
export function formatDuration(start: string, end: string, now = new Date()): string {
  const s = parse(start);
  const e = end.toLowerCase() === "present"
    ? { year: now.getFullYear(), month: now.getMonth() }
    : parse(end);
  if (!s || !e) return "";

  const total = (e.year - s.year) * 12 + (e.month - s.month) + 1;
  if (total <= 0) return "";

  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}
