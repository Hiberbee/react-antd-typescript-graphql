ARG nodeVersion=14
FROM node:${nodeVersion}-alpine AS node

FROM node AS template
WORKDIR /usr/local/src
ONBUILD ARG env=production
ONBUILD ENV NODE_ENV=${env}
ONBUILD COPY package.json yarn.lock ./
ONBUILD RUN yarn
ONBUILD COPY . .
ONBUILD RUN yarn test --watchAll=false \
 && yarn build

FROM template
WORKDIR /usr/local/src
COPY --from=build /usr/local/src/build .
EXPOSE 3000
RUN npm i -g serve
ENTRYPOINT ["node"]
CMD ["serve", "-s", ".", "--listen=3000"]
