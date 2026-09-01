# Dynasty AI Studio

Next.js AI Studio with a dark blue/black animated interface, 3D starfield, logo system, AI chat, image generation, video generation and TTS.

## Local setup
1. Copy `.env.example` to `.env.local`.
2. Put a NEW xAI API key in `XAI_API_KEY`.
3. Run `npm install` then `npm run dev`.

## Vercel
Import this repository into Vercel and add `XAI_API_KEY` under Environment Variables. Do not put the API key in frontend code or `NEXT_PUBLIC_*` variables.

## Security
The API key previously pasted into chat should be revoked because it has been exposed. Create a new xAI key before deploying.
