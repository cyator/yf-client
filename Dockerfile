# ======= BUILD =========

FROM node:14-alpine3.12 as builder

WORKDIR /usr/src/client

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install 

COPY . ./

ARG BASE_URL
ENV REACT_APP_BASE_URL=${BASE_URL}

RUN yarn build

# ====== RUN =========

FROM nginx

COPY --from=builder /usr/src/client/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443

