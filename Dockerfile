ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS node

FROM node AS build
WORKDIR /usr/local/src
ARG env=production
ENV NODE_ENV=${env}
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn test --watchAll=false \
 && yarn build

FROM node
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/build .
EXPOSE 3000
RUN npm i -g serve
ENTRYPOINT ["serve"]
CMD ["serve", "-s", ".", "--listen=3000"]
