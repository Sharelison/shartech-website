# Build Angular
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -- --configuration production
RUN find dist -name "index.csr.html" -exec sh -c 'cp "$1" "$(dirname "$1")/index.html"' _ {} \;

# Serve app
FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/dist /app/dist

EXPOSE 3000

CMD ["serve", "-s", "/app/dist/shartech-website/browser", "-l", "3000"]