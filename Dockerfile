### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:10-alpine as builder
COPY package.json package-lock.json ./
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app
WORKDIR /ng-app
COPY . .

FROM builder as development
ARG ENV=--development
ARG NODE_ENV=development
CMD ["npm", "run", "start"]

FROM builder as release
ARG NODE_ENV=production
## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build-release
### STAGE 2: Setup ###

FROM nginx:1.17.1-alpine as production
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=release /ng-app/dist/ace /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]