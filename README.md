# Battlefy Weather

Website developed for Battlefy's interview process

## Getting Started

### Prerequisites

0. Install [node lts](https://nodejs.org/en) and [pnpm](https://pnpm.io/installation)
1. Generate an [OpenWeather Api](https://openweathermap.org/appid) key
2. Copy `.env.example` into `.env.local`
3. Add your OpenWeather Api to `OPEN_WEATHER_API_KEY` in `.env.local`

### Running locally

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
# start dev server
pnpm dev

# compile code
pnpm build

# run the build code
pnpm start

# run lint
pnpm lint

# run tests
pnpm test
```
