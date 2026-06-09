import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./expense-category-breakdown.module.css";

interface Props { className?: string; expenses?: any[]; }

const COLORS = ["#00FF88", "#7C3AED", "#3B82F6", "#FFB347", "#FF4D6A", "#0F172A"];

export function ExpenseCategoryBreakdown({ className, expenses = [] }: Props) {
  const grouped: Record<string, number> = {};
  expenses.forEach(e => {
    grouped[e.type] = (grouped[e.type] || 0) + Number(e.amount);
  });
  
  const data = Object.keys(grouped).map((type, i) => ({
    name: type.replace('_', ' '),
    value: grouped[type],
    color: COLORS[i % COLORS.length]
  })).sort((a, b) => b.value - a.value);
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Expenses by Category</div>
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={3} dataKey="value">
            {data.map((e, i) => <Cell key={i} fill={e.color} />)}
          </Pie>
          <Tooltip contentStyle={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} formatter={(v) => [`${Number(v)}`, ""]} />
        </PieChart>
      </ResponsiveContainer>
      {data.map(d => (
        <div key={d.name} className={styles.legendItem}>
          <div className={styles.dot} style={{ background: d.color }} />
          {d.name}
          <span className={styles.amount}>${d.value}</span>
        </div>
      ))}
    </div>
  );
}
