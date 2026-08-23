# Formularanbindung

Für das Kontaktformular ist aktuell kein Versanddienst im Projekt eingerichtet.

Der derzeitige, technisch ehrliche Fallback validiert die Eingaben im Browser und öffnet anschließend eine vorbereitete Nachricht im E-Mail-Programm der Nutzerin oder des Nutzers. Die Website behauptet nicht, dass die Nachricht bereits versendet wurde.

Für einen automatischen Versand werden später benötigt:

- ein serverseitiger Formular-Endpunkt,
- ein legitimierter E-Mail-Versanddienst,
- Spam-Schutz und serverseitige Validierung,
- ein eindeutiger Erfolgs- und Fehlerstatus aus dem Versand-Endpunkt.

Erst nach dieser Anbindung darf die Website bestätigen, dass eine Nachricht erfolgreich versendet wurde.
