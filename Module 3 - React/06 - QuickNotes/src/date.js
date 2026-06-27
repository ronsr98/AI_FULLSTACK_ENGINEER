// step 2 - turn a timestamp into something readable like "Aug 31, 12:30 PM"
export function formatDate(timestamp) {
  return new Date(timestamp).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}
