"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

type FieldErrors = Partial<Record<"name" | "email" | "message" | "privacy", string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company") ?? "").trim()) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const privacy = data.get("privacy") === "on";
    const nextErrors: FieldErrors = {};

    if (!name) nextErrors.name = "Bitte sag mir, wie ich dich ansprechen darf.";
    if (!email) nextErrors.email = "Bitte gib deine E-Mail-Adresse ein.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Bitte prüfe deine E-Mail-Adresse.";
    if (!message) nextErrors.message = "Bitte schreib kurz, worum es dir geht.";
    if (!privacy) nextErrors.privacy = "Bitte bestätige, dass ich deine Angaben zur Beantwortung verwenden darf.";

    setErrors(nextErrors);
    setNotice("");
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Persönliche Nachricht von ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nName: ${name}\nE-Mail: ${email}`);
    window.location.href = `mailto:kontakt@petrasailer.com?subject=${subject}&body=${body}`;
    setNotice("Dein E-Mail-Programm wurde geöffnet. Bitte prüfe die Nachricht dort und sende sie anschließend ab.");
    setIsSubmitting(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-describedby="work-contact-delivery-note">
      <div className={styles.honeypot} aria-hidden="true"><label htmlFor="work-contact-company">Firma</label><input id="work-contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" /></div>
      <div className={styles.field}><label htmlFor="work-contact-name">Name</label><input id="work-contact-name" name="name" type="text" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "work-contact-name-error" : undefined} />{errors.name && <p className={styles.error} id="work-contact-name-error">{errors.name}</p>}</div>
      <div className={styles.field}><label htmlFor="work-contact-email">E-Mail-Adresse</label><input id="work-contact-email" name="email" type="email" inputMode="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "work-contact-email-error" : undefined} />{errors.email && <p className={styles.error} id="work-contact-email-error">{errors.email}</p>}</div>
      <div className={styles.field}><label htmlFor="work-contact-message">Deine Nachricht</label><textarea id="work-contact-message" name="message" rows={8} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "work-contact-message-error" : undefined} /><p className={styles.fieldHint}>Du musst dein Anliegen nicht erst perfekt formulieren.</p>{errors.message && <p className={styles.error} id="work-contact-message-error">{errors.message}</p>}</div>
      <div className={styles.privacyField}><input id="work-contact-privacy" name="privacy" type="checkbox" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "work-contact-privacy-error" : undefined} /><label htmlFor="work-contact-privacy">Ich habe die <a href="https://petrasailer.com/datenschutz/">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass meine Angaben zur Beantwortung meiner Nachricht verwendet werden.</label></div>
      {errors.privacy && <p className={styles.error} id="work-contact-privacy-error">{errors.privacy}</p>}
      <button className={styles.submitButton} type="submit" disabled={isSubmitting}>NACHRICHT VORBEREITEN <span aria-hidden="true">↗</span></button>
      <p className={styles.deliveryNote} id="work-contact-delivery-note">Das Formular öffnet derzeit dein E-Mail-Programm mit einer vorbereiteten Nachricht. Es versendet noch nichts automatisch.</p>
      {notice && <p className={styles.notice} role="status">{notice}</p>}
    </form>
  );
}

