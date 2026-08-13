export type ChartType = "bar" | "line" | "area" | "pie"

export type LegendPosition = "top" | "bottom" | "right"

export interface Series {
  id: string
  name: string
  color: string
}

export interface DataRow {
  id: string
  label: string
  // series id -> numeric value
  values: Record<string, number>
}

export interface ChartConfig {
  type: ChartType
  title: string
  subtitle: string
  series: Series[]
  rows: DataRow[]
  // appearance
  showGrid: boolean
  showLegend: boolean
  legendPosition: LegendPosition
  showValues: boolean
  stacked: boolean
  smooth: boolean
  donut: boolean
  gridColor: string
  axisColor: string
  backgroundColor: string
}

// Categorical palette (explicit hex for predictable exports)
export const PALETTE = [
  "#6366f1", // indigo
  "#14b8a6", // teal
  "#f59e0b", // amber
  "#ef4444", // red
  "#a855f7", // violet
  "#0ea5e9", // sky
  "#84cc16", // lime
  "#ec4899", // pink
]

export function nextColor(index: number): string {
  return PALETTE[index % PALETTE.length]
}

let idCounter = 0
export function uid(prefix = "id"): string {
  idCounter += 1
  return `${prefix}-${Date.now().toString(36)}-${idCounter}`
}

export const CHART_TYPE_LABELS: Record<ChartType, string> = {
  bar: "Bar",
  line: "Line",
  area: "Area",
  pie: "Pie",
}

export function createDefaultConfig(): ChartConfig {
  const s1: Series = { id: "s1", name: "Revenue", color: PALETTE[0] }
  const s2: Series = { id: "s2", name: "Expenses", color: PALETTE[1] }
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  const rev = [42, 51, 48, 63, 72, 84]
  const exp = [30, 34, 33, 40, 44, 49]
  const rows: DataRow[] = labels.map((label, i) => ({
    id: `r${i}`,
    label,
    values: { s1: rev[i], s2: exp[i] },
  }))
  return {
    type: "bar",
    title: "Quarterly Performance",
    subtitle: "Revenue vs. expenses over the first half of the year",
    series: [s1, s2],
    rows,
    showGrid: true,
    showLegend: true,
    legendPosition: "bottom",
    showValues: false,
    stacked: false,
    smooth: true,
    donut: false,
    gridColor: "#e5e7eb",
    axisColor: "#6b7280",
    backgroundColor: "#ffffff",
  }
}

// Transform config rows into recharts-friendly data for cartesian charts
export function toCartesianData(config: ChartConfig) {
  return config.rows.map((row) => {
    const out: Record<string, string | number> = { label: row.label }
    for (const s of config.series) {
      out[s.id] = Number(row.values[s.id] ?? 0)
    }
    return out
  })
}

// Pie charts use the first series only
export function toPieData(config: ChartConfig) {
  const series = config.series[0]
  if (!series) return []
  return config.rows.map((row, i) => ({
    name: row.label,
    value: Number(row.values[series.id] ?? 0),
    fill: nextColor(i),
  }))
}
