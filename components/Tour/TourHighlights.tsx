
interface TourHighlightsProps {
  highlights: string[];
}

function getHighlightTitle(highlight: string, index: number) {
  const text = highlight.toLowerCase();

  if (text.includes("delhi")) return "Discover Historic Delhi";
  if (text.includes("taj mahal")) return "Experience the Taj Mahal";
  if (text.includes("agra fort")) return "Explore Mughal Heritage";
  if (text.includes("amber fort")) return "Visit Royal Amber Fort";
  if (text.includes("hawa mahal")) return "See the Iconic Hawa Mahal";
  if (text.includes("city palace")) return "Discover Jaipur's Royal Heritage";
  if (text.includes("vehicle")) return "Travel in Private Comfort";
  if (text.includes("guide")) return "Explore with Local Guides";
  if (text.includes("pickup")) return "Convenient Pickup & Drop-off";

  return `Tour Experience ${index + 1}`;
}

export default function TourHighlights({
  highlights,
}: TourHighlightsProps) {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-sm font-bold uppercase tracking-[3px] text-[#d4af37]">
            Experience the Best
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#08142d] sm:text-4xl">
            Tour Highlights
          </h2>

          <div className="mt-4 h-1 w-[70px] rounded-full bg-[#d4af37]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {highlights.map((highlight, index) => (
            <div
              key={`${highlight}-${index}`}
              className="flex min-h-[150px] flex-col rounded-2xl border-t-4 border-[#d4af37] bg-[#f8f9fb] p-6 shadow-[0_8px_22px_rgba(8,20,45,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#08142d] text-xl">
                ⭐
              </div>

              <h3 className="mb-2 text-lg font-extrabold text-[#08142d]">
                {getHighlightTitle(highlight, index)}
              </h3>

              <p className="m-0 text-base leading-relaxed text-gray-600">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
