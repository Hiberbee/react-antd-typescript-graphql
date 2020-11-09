FROM node:15-alpine AS template
WORKDIR /usr/local/src
ONBUILD COPY package.* ./
ONBUILD RUN npm i --no-progress
ONBUILD COPY . .
ONBUILD RUN npm run test -- --watchAll=false \
         && npm run build

FROM template AS build

FROM nginx:alpine
COPY --from=build /usr/local/src/build /usr/share/nginx/html
