FROM node:lts-alpine as base

WORKDIR /app

ARG database_url
ARG next_auth_secret
ARG next_auth_url
ARG git_id
ARG git_secret

ENV DATABASE_URL $database_url
ENV NEXTAUTH_SECRET $next_auth_secret
ENV NEXTAUTH_URL $next_auth_url
ENV GIT_ID $git_id
ENV GIT_SECRET $git_secret

RUN npm install -g pnpm

FROM base as dependencies

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY prisma ./
RUN pnpm install --frozen-lockfile

FROM base as build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN pnpm prisma generate
RUN pnpm build

FROM base as deploy

WORKDIR /app

COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node","server.js"]