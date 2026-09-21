"use client";

import { useSyncExternalStore } from "react";
import { TIDYCAL_CONSENT_CHANGE_EVENT, TIDYCAL_CONSENT_KEY } from "../../tidycalConsent";
import styles from "./page.module.css";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(TIDYCAL_CONSENT_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(TIDYCAL_CONSENT_CHANGE_EVENT, callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(TIDYCAL_CONSENT_KEY) === "granted";
}

function getServerSnapshot() {
  return false;
}

type TidyCalCalendarProps = {
  tidyCalUrl?: string;
  label?: string;
  showHeading?: boolean;
};

export default function TidyCalCalendar({
  tidyCalUrl = "https://tidycal.com/petrasailer/30-min",
  label = "KENNENLERNGESPRÄCH",
  showHeading = true,
}: TidyCalCalendarProps) {
  const hasConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function loadCalendar() {
    window.localStorage.setItem(TIDYCAL_CONSENT_KEY, "granted");
    window.dispatchEvent(new Event(TIDYCAL_CONSENT_CHANGE_EVENT));
  }

  return (
    <div className={styles.calendar}>
      {hasConsent ? (
        <iframe src={tidyCalUrl} title={label} loading="lazy" />
      ) : (
        <div className={styles.calendarConsent}>
          {showHeading ? <><p className={styles.calendarLabel}>{label}</p><h2>Finde einen Termin, der für dich passt.</h2></> : null}
          <p>Mit dem Laden des Kalenders willigst du in die Datenverarbeitung durch TidyCal ein.</p>
          <a href="/datenschutz/">Mehr in der Datenschutzerklärung</a>
          <button className={styles.loadCalendarButton} type="button" onClick={loadCalendar}>Kalender laden <span aria-hidden="true">↗</span></button>
        </div>
      )}
    </div>
  );
}
