// step 8 - each category has its own background color
export const CATEGORIES = [
  { name: "Personal", color: "#e3f2fd" },
  { name: "Work", color: "#fff3e0" },
  { name: "Ideas", color: "#e8f5e9" },
  { name: "Urgent", color: "#ffebee" },
]

export function categoryColor(name) {
  const found = CATEGORIES.find((c) => c.name === name)
  return found ? found.color : "#ffffff"
}
