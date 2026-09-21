type OfferNameProps = {
  tone: "light" | "dark" | "terracotta" | "offwhite";
  size?: "small" | "large";
  quoted?: boolean;
  uppercase?: boolean;
  withPeriod?: boolean;
};

/**
 * The offer name is a two-part wordmark: DM Sans for “Wirklich” and
 * italic Cormorant Garamond for “Deins.”. Tone is explicit so the brand
 * treatment remains consistent wherever it appears.
 */
export default function OfferName({ tone, size = "small", quoted = false, uppercase = false, withPeriod = true }: OfferNameProps) {
  return (
    <span className={`offer-name offer-name--${tone} offer-name--${size}${uppercase ? " offer-name--uppercase" : ""}`}>
      {quoted ? "„" : null}
      <span className="offer-name__wirklich">Wirklich</span>{" "}
      <em className="offer-name__deins">Deins{withPeriod ? "." : ""}</em>
      {quoted ? "“" : null}
    </span>
  );
}
