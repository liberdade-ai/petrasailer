"use client";

import { useState } from "react";
import { TIDYCAL_CONSENT_CHANGE_EVENT, TIDYCAL_CONSENT_KEY } from "../../tidycalConsent";

export default function TidyCalConsentRevocation() {
  const [revoked, setRevoked] = useState(false);

  function revokeConsent() {
    window.localStorage.removeItem(TIDYCAL_CONSENT_KEY);
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
