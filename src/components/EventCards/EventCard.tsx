import { Button } from "@/components/ui/button";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";

// Inside EventCard component:

const techEventData = [
  {
    id: "CodeVeda",
    img: "/Posters/Tech_CodeVeda.jpg",
    tagline: "Crack the code, win the glory!",
    formLink: "https://forms.gle/codeveda123",
    rules: [
      "No plagiarism : original code only.",
      "Complete within the given time.",
      "Solo participation only.",
      "Judge's decision is final.",
    ],
  },
  {
    id: "TechnoSamvad",
    img: "/Posters/Tech_TechnoSamvad.jpg",
    tagline: "💡 Talk Tech Today",
    formLink: "https://forms.gle/technosamvad123",
    rules: [
      "**📝 Round 1: Aptitude Test**",
      "  • Questions: 30-35 total (Maths, Basic Subjects, Logical Reasoning)",
      "  • Distribution: 12-14 per section (Easy, Medium, Hard)",
      "  • Marking: Easy & Medium → 1 mark each; Hard → 2 marks each",
      "  • Time limit: 40-45 minutes",
      "  • Cut-off: Overall + section-wise (announced during event)",
      "  • Allowed: Normal calculators | Not allowed: Mobile phones or smart devices",

      "**🎯 Round 2: Group Discussion**",
      "  • Group formation: Based on shortlisted candidates",
      "  • Topic: Current affairs or technology-related",
      "  • Time: 3 minutes preparation + 8–10 minutes discussion",
      "  • Judging criteria: Clarity of ideas, Speaking skills, Teamwork & Listening, Knowledge of topic, Confidence",
      "  • Note: Misbehavior or interruptions may lead to disqualification",

      "**💡 Round 3: Personal Interview**",
      "  • Format: Mock interview with external jury",
      "  • Judging criteria: Subject knowledge & resume, Problem-solving ability, Communication & Confidence, Handling pressure",
      "  • Time: Decided by jury",
      "  • Final authority: Jury's decision is final",
    ],
  },
  {
    id: "GanitVerse",
    img: "/Posters/Tech_GanitVerse.jpg",
    tagline: "🔢 Numbers Made Fun",
    formLink: "https://forms.gle/ganitverse123",
    rules: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      "Donec sollicitudin molestie malesuada.",
      "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    ],
  },
  {
    id: "SutraSync",
    img: "/Posters/Tech_SutraSync.jpg",
    tagline: "✨ Crack The Mystery",
    formLink: "https://forms.gle/sutrasync123",
    rules: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      "Nulla quis lorem ut libero malesuada feugiat.",
      "Proin eget tortor risus.",
    ],
  },
  {
    id: "CircuitChakra",
    img: "/Posters/Tech_circuitChakra.jpg",
    tagline: "🔌 Power The Circuit",
    formLink: "https://forms.gle/circuitchakra123",
    rules: [
      "** Round 1: Quick Spark (Individual)**",
      "   • Questions: 35-40 (Maths, Logic, Current & Electricity, Puzzles)",
      "   • Distribution: 9-10 per category (Easy to Moderate)",
      "   • Marking: 1 mark per correct answer, no negative marking",
      "   • Time Limit: 30 minutes",
      "   • Cut-off: 50-60% (depends on registration)",
      "   • Instructions: No mobile phones or smartwatches",

      "** Round 2: Logic Lighting (Team of 2) **",
      "   • Format: Fastest-finger-first style",
      "   • Team Formation: Based on shortlisted candidates",
      "   • Topics: Component guessing, ECE trends, fault identification, output prediction",
      "   • Time Limit: 20 minutes per slot (1 slot = 4 teams)",
      "   • Qualification: Top 2 teams per slot move to Round 3",
      "   • Instructions: First correct answer scores points; speaking answers aloud → disqualification",

      "** Round 3: The Final Hunt (Team of 2) **",
      "   • Format: Circuit implementation challenge",
      "   • Rules:",
      "       1. Follow start time; complete within 45 minutes",
      "       2. No external devices allowed (phones, calculators, internet)",
      "       3. Proceed step-by-step; skipping not allowed",
      "       4. Only first 3 correct teams win",
      "       5. Tie-breaker: lesser total time",
      "       6. One attempt per team",
      "       7. All components provided; personal components not allowed",
      "       8. Maintain discipline (no hiding/damaging components)",
      "   • Note: Report any missing/broken components immediately to coordinator",
    ],
  },
];

const nonTechEventData = [
  {
    id: "LaserStrike",
    img: "/Posters/NonTech_LaserStrike.jpg",
    tagline: "🎯 Aim Shoot Score",
    formLink: "https://forms.gle/laserstrike123",
    rules: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed porttitor lectus nibh.",
      "Curabitur aliquet quam id dui posuere blandit.",
      "Vivamus suscipit tortor eget felis porttitor volutpat.",
    ],
  },
  {
    id: "MastiManch",
    img: "/Posters/NonTech_MastiManch.jpg",
    tagline: "🎉 Stage Full Fun",
    formLink: "https://forms.gle/mastimanch123",
    rules: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      "Donec rutrum congue leo eget malesuada.",
    ],
  },
  {
    id: "RahashyaSanket",
    img: "/Posters/NonTech_RahasyahSanket.jpg",
    tagline: "🕵️ Crack Hidden Clues",
    formLink: "https://forms.gle/rahashyasanket123",
    rules: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
      "Curabitur aliquet quam id dui posuere blandit.",
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
      "Curabitur aliquet quam id dui posuere blandit.",
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    ],
  },
  {
    id: "ChalChitra",
    img: "/Posters/NonTech_ChalChitra.jpg",
    tagline: "🎬 Lights Camera Action",
    formLink: "https://forms.gle/chalchitra123",
    rules: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Donec sollicitudin molestie malesuada.",
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      "Proin eget tortor risus.",
    ],
  },
];

type PosterProp = {
  id: string;
  img: string;
  tagline?: string;
};

const EventCard = ({ img, id, tagline }: PosterProp) => {
  return (
    <section className="relative p-[1px] rounded-xl bg-[conic-gradient(from_var(--angle),#000e00,#000001,#000000,gray,#000000)] hover:bg-[conic-gradient(from_var(--angle),orange,#000001,lightblue,orange)] animate-gradient-rotate">
      <div className="relative flex flex-col rounded-xl bg-black shadow-md overflow-hidden transition-all duration-300 group">
        <div className="relative flex justify-center h-[24rem]">
          <Image
            src={img}
            alt={`Poster for ${id}`}
            fill
            className="object-contain saturate-30 hover:scale-105 hover:translate-y-[10px] rounded-t-2xl transition-all duration-300 group-hover:saturate-100"
          />
        </div>

        <div className="flex flex-col flex-1 justify-between p-5 text-center">
          {tagline && (
            <p className="text-gray-300 text-base md:text-lg font-medium mb-4 line-clamp-2">
              {tagline}
            </p>
          )}
          <Link href={`/events/${id}`}>
            {" "}
            {/* lowercase to match folder name */}
            <div className="relative rounded-lg p-[1px] bg-[conic-gradient(from_var(--angle),#000e00,powderblue,#000000,#000000)] hover:bg-[conic-gradient(from_var(--angle),gray,white,#000000,#000000)] hover:scale-105 transition-all transform animate-gradient-rotate">
              <Button className="w-full rounded-lg cursor-pointer font-bold bg-black hover:bg-black text-white shadow-md">
                Know more...
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { EventCard, nonTechEventData, techEventData };
