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

function getServerSnapshot() {
  return false;
}

type TidyCalCalendarProps = {
  tidyCalUrl?: string;
  label?: string;
  showHeading?: boolean;
  consentKey?: string;
  /** Eigene Klassen für Seiten im neuen Design; ohne Angabe gilt die bisherige Gestaltung. */
  classes?: { calendar?: string; consent?: string; button?: string };
};

export default function TidyCalCalendar({
  tidyCalUrl = "https://tidycal.com/petrasailer/30-min",
  label = "KENNENLERNGESPRÄCH",
  showHeading = true,
  consentKey = TIDYCAL_CONSENT_KEY,
  classes,
}: TidyCalCalendarProps) {
  const hasConsent = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(consentKey) === "granted",
    getServerSnapshot,
  );

  function loadCalendar() {
    window.localStorage.setItem(consentKey, "granted");
    window.dispatchEvent(new Event(TIDYCAL_CONSENT_CHANGE_EVENT));
  }

  return (
    <div className={classes?.calendar ?? styles.calendar}>
      {hasConsent ? (
        <iframe src={tidyCalUrl} title={label} loading="lazy" />
      ) : (
        <div className={classes?.consent ?? styles.calendarConsent}>
          {showHeading ? <><p className={styles.calendarLabel}>{label}</p><h2>Finde einen Termin, der für dich passt.</h2></> : null}
          <p>Mit dem Laden des Kalenders willigst du in die Datenverarbeitung durch TidyCal ein.</p>
          <a href="/datenschutz/">Mehr in der Datenschutzerklärung</a>
          <button className={classes?.button ?? styles.loadCalendarButton} type="button" onClick={loadCalendar}>Kalender laden{classes?.button ? null : <> <span aria-hidden="true">↗</span></>}</button>
        </div>
      )}
    </div>
  );
}
