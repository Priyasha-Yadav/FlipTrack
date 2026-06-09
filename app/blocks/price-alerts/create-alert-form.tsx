import { IconX } from "@tabler/icons-react";
import { Form } from "react-router";
import styles from "./create-alert-form.module.css";

interface Props { className?: string; onClose: () => void; }

export function CreateAlertForm({ className, onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <Form method="post" className={[styles.modal, className].filter(Boolean).join(" ")} onSubmit={onClose}>
        <input type="hidden" name="intent" value="create" />
        <div className={styles.header}>
          <span className={styles.title}>Create Price Alert</span>
          <button type="button" className={styles.closeBtn} onClick={onClose}><IconX size={18} /></button>
        </div>
        <div className={styles.body}>
          <div className={styles.field}><label className={styles.label}>Product / SKU *</label><input name="sku" required className={styles.input} placeholder="e.g. DD1391-100" /></div>
          <div className={styles.field}><label className={styles.label}>Product Name *</label><input name="productName" required className={styles.input} placeholder="e.g. Nike Dunk Low Retro" /></div>
          <div className={styles.row}>
            <div className={styles.field}><label className={styles.label}>Size *</label><input name="size" required className={styles.input} placeholder="e.g. 10" /></div>
            <div className={styles.field}><label className={styles.label}>Marketplace</label>
              <select name="marketplace" required className={styles.input}>
                <option value="STOCKX">StockX</option>
                <option value="GOAT">GOAT</option>
                <option value="EBAY">eBay</option>
                <option value="FLIGHTCLUB">Flight Club</option>
                <option value="STADIUMGOODS">Stadium Goods</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}><label className={styles.label}>Target Price *</label><input name="targetPrice" required className={styles.input} type="number" placeholder="500" /></div>
            <div className={styles.field}>
              <label className={styles.label}>Direction</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}><input type="radio" name="direction" value="ABOVE" defaultChecked style={{ accentColor: "var(--color-primary)" }} /> Above</label>
                <label className={styles.radioLabel}><input type="radio" name="direction" value="BELOW" style={{ accentColor: "var(--color-primary)" }} /> Below</label>
              </div>
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Notify via</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}><input type="radio" name="channel" value="EMAIL" defaultChecked style={{ accentColor: "var(--color-primary)" }} /> Email</label>
              <label className={styles.radioLabel}><input type="radio" name="channel" value="SMS" style={{ accentColor: "var(--color-primary)" }} /> SMS</label>
              <label className={styles.radioLabel}><input type="radio" name="channel" value="PUSH" style={{ accentColor: "var(--color-primary)" }} /> Push</label>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button type="submit" className={styles.createBtn}>Create Alert</button>
        </div>
      </Form>
    </div>
  );
}
