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
      "-----------------------------",
      "💻 Round 1: MCQs",
      "-----------------------------",
      "   • Format: Multiple-choice type questions",
      "   • Task: Test of basic programming and problem-solving skills",
      "   • Qualification: Based on top scorers advancing to Round 2",
      "-----------------------------",
      "🧩 Round 2: Problem Solving",
      "-----------------------------",
      "   • Task: Solve given coding problems within the time limit",
      "   • Rule: Efficiency and correctness will be evaluated",
      "   • Qualification: Top performing participants move to Round 3",
      "------------------------------",
      "🔧 Round 3: Debug & Optimize",
      "------------------------------",
      "   • Task: Analyze, debug, and optimize provided code",
      "   • Rule: Focus on correctness, optimization, and debugging skills",
      "   • Winners: Final evaluation based on accuracy and efficiency",
    ],
  },
  {
    id: "TechnoSamvad",
    img: "/Posters/Tech_TechnoSamvad.jpg",
    tagline: "💡 Talk Tech Today",
    formLink: "https://forms.gle/technosamvad123",
    rules: [
      "--------------------------------",
      "📝 Round 1: Aptitude Test",
      "--------------------------------",
      "  • Questions: 30-35 total (Maths, Basic Subjects, Logical Reasoning)",
      "  • Distribution: 12-14 per section (Easy, Medium, Hard)",
      "  • Marking: Easy & Medium → 1 mark each; Hard → 2 marks each",
      "  • Time limit: 40-45 minutes",
      "  • Cut-off: Overall + section-wise (announced during event)",
      "  • Allowed: Normal calculators | Not allowed: Mobile phones or smart devices",
      "---------------------------------",
      "🎯 Round 2: Group Discussion",
      "---------------------------------",
      "  • Group formation: Based on shortlisted candidates",
      "  • Topic: Current affairs or technology-related",
      "  • Time: 3 minutes preparation + 8-10 minutes discussion",
      "  • Judging criteria: Clarity of ideas, Speaking skills, Teamwork & Listening, Knowledge of topic, Confidence",
      "  • Note: Misbehavior or interruptions may lead to disqualification",
      "----------------------------------",
      "💡 Round 3: Personal Interview",
      "----------------------------------",
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
      "------------------------------------------",
      "📝 Round 1: Written Test",
      "------------------------------------------",
      "  • Questions: Easy to Medium Maths problems (objective + descriptive mix)",
      "  • Total Time: 15 minutes",
      "  • Mode: Individual participation (no teams)",
      "  • Allowed: Pen/Pencil & Paper",
      "  • Not allowed: Mobile phones, calculators, or smart devices",
      "  • Selection: Top scorers will qualify for Round 2",
      "------------------------------------------",
      "🎲 Round 2: Snake & Ladder Quiz",
      "------------------------------------------",
      "  • Teams: 2 members per team (formed from Round 1 qualifiers)",
      "  • Format: Question asked → 10-15 seconds to answer orally",
      "  • Correct → Roll the dice & move token (snakes & ladders apply)",
      "  • Wrong/No Answer → Next team's turn",
      "  • Time limit: 10-15 minutes per session (3-4 teams at a time)",
      "  • Scoring: Position on the board recorded at the end",
      "  • Selection: Top teams on leaderboard qualify for Round 3",
      "------------------------------------------",
      "💡 Round 3: The Advantage Challenge",
      "------------------------------------------",
      "  • Teams: Same as Round 2 (duos)",
      "  • Advantage: 2 teams selected by lucky draw → Double points for correct answers",
      "  • Format: Each team chooses their question:",
      "      ◦ Easy → 2 points",
      "      ◦ Medium → 5 points",
      "      ◦ Hard → 10 points",
      "  • Time Limit: 3-4 minutes per question",
      "  • Scoring: Points recorded on leaderboard",
      "  • Winners: Top 3 teams declared based on final scores",
    ],
  },
  {
    id: "SutraSync",
    img: "/Posters/Tech_SutraSync.jpg",
    tagline: "✨ Crack The Mystery",
    formLink: "https://forms.gle/sutrasync123",
    rules: [
      "---------------------------",
      " Round 1: Symbol Sleuths",
      "---------------------------",
      " • Participants will identify and draw the correct circuit symbols for given electrical/electronic components",
      " • Time Limit: 1 minute",
      " • Selection: Based on the total number of participants",
      "---------------------------",
      " Round 2: Bid Wars ",
      "---------------------------",
      " • Grouping: 3–4 groups of 4 players each",
      " • Question Sets: Each group faces 3 sets, each set has 7 questions",
      " • Bidding System (Call Break style): Question set shown for 10 seconds, each player declares how many questions they can answer, players get 2 minutes to answer",
      " • Scoring: Answer exactly as declared → Score = declared number; Answer more than declared → +0.1 per extra; Answer less than declared → –(declared number)",
      "---------------------------",
      " Round 3: BrainWired ",
      "---------------------------",
      " • Task: Solve a practical electronics problem on an Arduino board using circuits & components",
      " • Teaming: Participants compete in pairs (2 per team)",
      " • Time Limit: 60 minutes",
      " • Evaluation: Based on working circuit and timing (3 pairs will be declared winners)",
    ],
  },
  {
    id: "CircuitChakra",
    img: "/Posters/Tech_circuitChakra.jpg",
    tagline: "🔌 Power The Circuit",
    formLink: "https://forms.gle/circuitchakra123",
    rules: [
      "-----------------------------------",
      "Round 1: Quick Spark (Individual)",
      "-----------------------------------",
      "   • Questions: 35-40 (Maths, Logic, Current & Electricity, Puzzles)",
      "   • Distribution: 9-10 per category (Easy to Moderate)",
      "   • Marking: 1 mark per correct answer, no negative marking",
      "   • Time Limit: 30 minutes",
      "   • Cut-off: 50-60% (depends on registration)",
      "   • Instructions: No mobile phones or smartwatches",
      "------------------------------------",
      "Round 2: Logic Lighting (Team of 2)",
      "------------------------------------",
      "   • Format: Fastest-finger-first style",
      "   • Team Formation: Based on shortlisted candidates",
      "   • Topics: Component guessing, ECE trends, fault identification, output prediction",
      "   • Time Limit: 20 minutes per slot (1 slot = 4 teams)",
      "   • Qualification: Top 2 teams per slot move to Round 3",
      "   • Instructions: First correct answer scores points; speaking answers aloud → disqualification",
      "------------------------------------",
      "Round 3: The Final Hunt (Team of 2)",
      "------------------------------------",
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
      "------------------------------------",
      "Round 1: Laser Targeting (Duo)",
      "------------------------------------",
      "   • Player 1 handles the laser while Player 2 can only move or locate mirrors",
      "   • Once the laser is pointed to the target, that score is recorded",
      "   • Time-based challenge",
      "   • Maximum scorers qualify for Round 2",
      "   • If time exceeds the maximum duration → automatic stop",

      "------------------------------------",
      "Round 2: Blindfold Navigation + Quiz (Team of 2)",
      "------------------------------------",
      "   • Player 1 navigates blindfolded while Player 2 gives directions",
      "   • Then roles are reversed → Player 2 blindfolded, Player 1 guides",
      "   • Once the player reaches the target, a short quiz is given:",
      "       ◦ 5 Questions × 10 sec each",
      "       ◦ Correct → -4 sec bonus",
      "       ◦ Wrong/Skipped → 0 sec",
      "       ◦ Maximum Quiz Score = -20 sec",
      "   • Final R2 Score = Time taken + Penalties - Quiz Score",
      "   • Teams may skip quiz and continue directly to next stage",
      "   • Penalty for touching the laser (applies to both players)",
      "   • Maximum scorers win the Final Round",
      "   • If time exceeds the maximum duration → automatic stop",
    ],
  },
  {
    id: "MastiManch",
    img: "/Posters/NonTech_MastiManch.jpg",
    tagline: "🎉 Stage Full Fun",
    formLink: "https://forms.gle/mastimanch123",
    rules: [
      "------------------------------",
      "🤣 Round 1: Questionnaire",
      "------------------------------",
      "   • Task: Participants will be given funny/meme-based questions",
      "   • Format: Questions will be displayed on screen or given in sheets",
      "   • Rule: Participants must write their answers",
      "   • Type: Time-bound and individual participation",
      "   • Qualification: Based on score for next round",
      "------------------------------",
      "⚡ Round 2: Buzzer Round",
      "------------------------------",
      "   • Teaming: Team-based round in teams of 2",
      "   • Task: Memes, movie punchlines, or jokes will be displayed/asked",
      "   • Rule: First team to press buzzer gets to answer",
      "   • Scoring: Correct answers earn points",
      "   • Qualification: Fastest and funniest team advances",
      "------------------------------",
      "🎭 Round 3: Dumb Charades",
      "------------------------------",
      "   • Teaming: Played in pairs",
      "   • Task: One member acts out a meme/movie punchline/joke, the other member guesses",
      "   • Rule: No words, only actions allowed",
      "   • Type: Time-limited performance",
      "   • Evaluation: Judged on accuracy, humor, and creativity",
    ],
  },
  {
    id: "RahashyaSanket",
    img: "/Posters/NonTech_RahasyahSanket.jpg",
    tagline: "🕵️ Crack Hidden Clues",
    formLink: "https://forms.gle/rahashyasanket123",
    rules: [
      "------------------------------",
      "Round 1: Morse Race Lite",
      "------------------------------",
      "   • Time Limit: 30 minutes",
      "   • Task: Teams receive Morse Code messages (dots & dashes) and must decode as fast as possible",
      "   • Message Type: Longer messages, phrases or sentences",
      "   • Example: .... --- .-- / .- .-. . / -.-- --- ..- → HOW ARE YOU",
      "   • Scoring: 10 pts = perfect | 7 pts = 1-word off | 4 pts = major error | +1 = fastest team",
      "-------------------------------",
      "Finale: Quick Decode Race",
      "-------------------------------",
      "   • Time Limit: 5 minutes",
      "   • Task: Finalists face a rapid-fire decoding challenge with short, tricky Morse messages",
      "   • Message Type: Short words or abbreviations",
      "   • Example: --. .- → GA",
      "   • Scoring: +2 pts per correct answer",
      "-------------------------------",
      "General Rules",
      "-------------------------------",
      "   • Team Size: 2",
      "   • Only the receiver writes the decoded message",
      "   • Judges’ decision is final",
      "   • Cheating → 0 points for that round",
      "   • Time limits strictly enforced",
    ],
  },
  {
    id: "ChalChitra",
    img: "/Posters/NonTech_ChalChitra.jpg",
    tagline: "🎬 Lights Camera Action",
    formLink: "https://forms.gle/chalchitra123",
    rules: [
      "-------------------------------",
      "🎬 Round 1: Movie Quiz",
      "-------------------------------",
      "   • Task: Test your cinema knowledge through a set of quiz questions",
      "   • Format: Objective and rapid-fire questions related to movies",
      "   • Qualification: Top scoring teams proceed to Round 2",
      "--------------------------------",
      "🎭 Round 2: Scene Reenactment",
      "--------------------------------",
      "   • Task: Perform iconic movie scenes",
      "   • Rules: Creativity, dialogue delivery, and expression will be evaluated",
      "   • Qualification: Best performers proceed to Round 3",
      "--------------------------------",
      "🎥 Round 3: Short Film Making",
      "--------------------------------",
      "   • Task: Create your own mini movie within the given time",
      "   • Rules: Originality, storyline, acting, and direction will be judged",
      "   • Submission: Completed short film must be presented before deadline",
      "   • Winners: Top 3 films will be awarded based on creativity and execution",
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
          <Link href={`/rules/${id}`}>
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
