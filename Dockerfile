ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS node-base

FROM node-base AS build
WORKDIR /usr/local/src
ARG env=production
ARG apiUrl=https://api.spotishake.me/graphql
ENV NODE_ENV=${env} \
    API_URL=${apiUrl}
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node-base
WORKDIR /usr/local/src
COPY --from=build /usr/local/src .
EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["start", "--listen=3000"]
