"use client";

import { FormEvent, useState } from "react";
import { trackUmamiEvent } from "../../umami";
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
    const subject = encodeURIComponent("Nachricht über petrasailer.com");
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
    trackUmamiEvent("contact_form_submit", { form: "kontakt", location: "kontakt_formular" });
    window.location.href = `mailto:kontakt@petrasailer.com?subject=${subject}&body=${body}`;
    setNotice("Dein E-Mail-Programm wurde geöffnet. Bitte prüfe die Nachricht dort und sende sie anschließend ab. Falls sich nichts öffnet, schreib mir bitte direkt an kontakt@petrasailer.com.");
    setIsSubmitting(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-describedby="contact-form-delivery-note">
      <div className={styles.honeypot} aria-hidden="true"><label htmlFor="contact-company">Firma</label><input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" /></div>
      <div className={styles.field}><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" type="text" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />{errors.name && <p className={styles.error} id="contact-name-error">{errors.name}</p>}</div>
      <div className={styles.field}><label htmlFor="contact-email">E-Mail-Adresse</label><input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />{errors.email && <p className={styles.error} id="contact-email-error">{errors.email}</p>}</div>
      <div className={styles.field}><label htmlFor="contact-message">Deine Nachricht</label><textarea id="contact-message" name="message" rows={8} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />{errors.message && <p className={styles.error} id="contact-message-error">{errors.message}</p>}</div>
      <div className={styles.privacyField}><input id="contact-privacy" name="privacy" type="checkbox" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "contact-privacy-error" : undefined} /><label htmlFor="contact-privacy">Ich habe die <a href="https://petrasailer.com/datenschutz/">Datenschutzerklärung</a> gelesen und bin damit einverstanden, dass meine Angaben zur Beantwortung meiner Nachricht verwendet werden.</label></div>
      {errors.privacy && <p className={styles.error} id="contact-privacy-error">{errors.privacy}</p>}
      <button className={styles.submitButton} type="submit" disabled={isSubmitting}>E-MAIL SCHREIBEN <span aria-hidden="true">↗</span></button>
      <p className={styles.deliveryNote} id="contact-form-delivery-note">Der Button öffnet dein E-Mail-Programm mit einer vorbereiteten Nachricht. Du kannst sie in Ruhe prüfen, ergänzen und selbst absenden.</p>
      {notice && <p className={styles.notice} role="status">{notice}</p>}
    </form>
  );
}
