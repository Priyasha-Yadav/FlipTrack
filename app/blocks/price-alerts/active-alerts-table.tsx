import { Form } from "react-router";
import styles from "./active-alerts-table.module.css";

interface Props { className?: string; alerts?: any[]; }

export function ActiveAlertsTable({ className, alerts = [] }: Props) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Product</th>
              <th className={styles.th}>Marketplace</th>
              <th className={styles.th}>Target Price</th>
              <th className={styles.th}>Direction</th>
              <th className={styles.th}>Notify via</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Last Triggered</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.length === 0 ? (
               <tr><td colSpan={8} style={{padding: '1rem', color: 'var(--color-text-subtle)', textAlign: 'center'}}>No price alerts configured.</td></tr>
            ) : null}
            {alerts.map(a => (
              <tr key={a.id} className={styles.tr}>
                <td className={styles.td}>{a.productName} ({a.size})</td>
                <td className={styles.td}>{a.marketplace}</td>
                <td className={styles.td}><span className={styles.mono}>${a.targetPrice}</span></td>
                <td className={styles.td}><span className={a.direction === "ABOVE" ? styles.aboveBadge : styles.belowBadge}>{a.direction === "ABOVE" ? "↑ Above" : "↓ Below"}</span></td>
                <td className={styles.td}>{a.notificationChannel}</td>
                <td className={styles.td}>
                  <Form method="post" style={{display: 'inline'}}>
                    <input type="hidden" name="intent" value="toggle" />
                    <input type="hidden" name="id" value={a.id} />
                    <input type="hidden" name="isActive" value={a.isActive ? "true" : "false"} />
                    <button type="submit" className={a.isActive ? styles.active : styles.inactive} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>{a.isActive ? "Active" : "Inactive"}</button>
                  </Form>
                </td>
                <td className={styles.td}>{a.triggeredAt ? new Date(a.triggeredAt).toLocaleDateString() : "Never"}</td>
                <td className={styles.td}>
                  <Form method="post" style={{display: 'inline'}}>
                    <input type="hidden" name="intent" value="delete" />
                    <input type="hidden" name="id" value={a.id} />
                    <button type="submit" className={styles.editBtn}>Delete</button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
