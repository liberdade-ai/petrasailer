type OfferNameProps = {
  tone: "light" | "dark";
  uppercase?: boolean;
};

/**
 * The offer name is a two-part wordmark: DM Sans for “Wirklich” and
 * italic Cormorant Garamond for “Deins.”. Tone is explicit so the brand
 * treatment remains consistent wherever it appears.
 */
export default function OfferName({ tone, uppercase = false }: OfferNameProps) {
  return (
    <span className={`offer-name offer-name--${tone}${uppercase ? " offer-name--uppercase" : ""}`}>
      <span className="offer-name__wirklich">Wirklich</span>{" "}
      <em className="offer-name__deins">Deins.</em>
    </span>
  );
}
