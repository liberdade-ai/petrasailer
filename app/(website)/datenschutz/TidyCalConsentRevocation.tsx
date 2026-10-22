"use client";

import { useState } from "react";
import { TIDYCAL_CONSENT_CHANGE_EVENT, TIDYCAL_CONSENT_KEYS } from "../../tidycalConsent";

export default function TidyCalConsentRevocation() {
  const [revoked, setRevoked] = useState(false);

  function revokeConsent() {
    TIDYCAL_CONSENT_KEYS.forEach((key) => window.localStorage.removeItem(key));
    window.dispatchEvent(new Event(TIDYCAL_CONSENT_CHANGE_EVENT));
    setRevoked(true);
  }

  return (
    <>
      <button type="button" onClick={revokeConsent}>TidyCal-Einwilligung widerrufen</button>
      {revoked && <span role="status">Die Einwilligung wurde für dieses Gerät widerrufen.</span>}
    </>
  );
}
