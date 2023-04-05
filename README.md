# TARIAP 
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKawaeee%2Ftariap)

This repository represent how I learn how to [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/) and [tsparticles](https://github.com/matteobruni/tsparticles) by create a meme web application.

## Project Setup
```bash
npm install
```

### Compile and Hot-Reload for Development
```bash
npm run dev
```

### Type-Check, Compile and Minify for Production
```bash
npm run build
```

#### Note:
- Whenever you deploy this repository on Vercel, don't forget to change output directory to `./dist`
- tsparticles on Next.js does not fully support yet, so I did the ignoreBuildErrors typescript to skip the issues.