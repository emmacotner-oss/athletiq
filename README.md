# AthletIQ

An AI-powered sports training planner that generates personalized workout plans tailored to your sport, goals, and schedule.

## Features

- 🏀 **16 Sports Supported** - Basketball, Soccer, Tennis, Swimming, Running, and more
- 🎯 **Goal-Focused Training** - Pick up to 3 specific areas to improve
- 📅 **Flexible Scheduling** - Choose 2-6 training days per week
- 🤖 **AI-Powered Plans** - GPT-4 generates customized workout routines
- 💪 **Experience Levels** - Beginner, Intermediate, or Advanced
- 🎬 **Smooth Animations** - Professional Framer Motion transitions and interactions
- 📱 **Fully Responsive** - Mobile-first design that works perfectly on all devices
- 💾 **Plan History** - Automatically saves your last 5 workout plans
- 🖨️ **Print/PDF Export** - Save your plan as a PDF with optimized print styles
- 🔗 **Share Functionality** - Share your plan via native share or copy link

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **AI:** OpenAI GPT-4
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/athletiq.git
cd athletiq
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Then edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=your_actual_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your `OPENAI_API_KEY` environment variable in the Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/athletiq)

## Project Structure

```
athletiq/
├── app/
│   ├── api/
│   │   └── generate-plan/
│   │       └── route.ts          # OpenAI API integration
│   ├── components/
│   │   ├── BackButton.tsx
│   │   └── ProgressBar.tsx
│   ├── context/
│   │   └── PlanContext.tsx       # State management
│   ├── generate/
│   │   └── page.tsx              # Loading state
│   ├── goals/
│   │   └── page.tsx              # Goal selection
│   ├── results/
│   │   └── page.tsx              # Workout plan display
│   ├── schedule/
│   │   └── page.tsx              # Days & experience
│   ├── sport/
│   │   └── page.tsx              # Sport selection
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                  # Landing page
│   └── types.ts                  # TypeScript types
├── public/
├── .env.example
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |

## Features in Detail

### Sport Selection
Choose from 16 popular sports or enter your own custom sport.

### Goal Selection
Pick up to 3 sport-specific goals. Each sport has tailored options:
- Basketball: Shooting accuracy, Ball handling, Vertical leap, etc.
- Soccer: Dribbling, Shooting power, Speed & agility, etc.
- And more...

### Customization
- Select training frequency (2-6 days per week)
- Choose your experience level (Beginner/Intermediate/Advanced)
- AI adapts the plan complexity accordingly

### AI-Generated Plans
Each plan includes:
- 8-week program structure
- 5-7 exercises per workout day
- Sets, reps, and rest periods
- Sport-specific drills + strength training
- Pro tips for optimal results

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- UI inspired by modern dark themes and sports training apps

---

**Made with 💪 for athletes everywhere**
