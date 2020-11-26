ARG nodeVersion=15
FROM node:${nodeVersion}-alpine
WORKDIR /usr/local/src
ONBUILD ENV PORT=80 \
            REACT_APP_PUBLIC_URL=""
ONBUILD EXPOSE ${PORT}
ONBUILD COPY package.json yarn.lock ./
ONBUILD RUN yarn install --non-interactive --frozen-lockfile
ONBUILD COPY . .
ONBUILD RUN yarn install --non-interactive --production --frozen-lockfile \
         && yarn build
ONBUILD ENTRYPOINT ["yarn"]
ONBUILD CMD ["start"]
