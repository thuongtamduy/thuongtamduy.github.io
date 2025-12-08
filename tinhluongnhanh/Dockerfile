# Multi-stage build để convert images
FROM alpine:latest AS builder

# Cài đặt ImageMagick và librsvg để convert SVG sang PNG/ICO
RUN apk add --no-cache imagemagick librsvg

# Copy các file SVG cần convert
WORKDIR /build
COPY favicon.svg .
COPY apple-touch-icon.svg .
COPY og-image.svg .

# Convert SVG sang PNG và ICO
RUN convert -background none favicon.svg -resize 16x16 favicon-16.png && \
    convert -background none favicon.svg -resize 32x32 favicon-32.png && \
    convert -background none favicon.svg -resize 48x48 favicon-48.png && \
    convert favicon-16.png favicon-32.png favicon-48.png favicon.ico && \
    convert -background none apple-touch-icon.svg -resize 180x180 apple-touch-icon.png && \
    convert -background none og-image.svg -resize 1200x630 og-image.png

# Stage 2: Nginx để serve
FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY config.js /usr/share/nginx/html/

# Copy các file SVG gốc
COPY favicon.svg /usr/share/nginx/html/
COPY apple-touch-icon.svg /usr/share/nginx/html/
COPY og-image.svg /usr/share/nginx/html/

# Copy các file đã convert từ builder stage
COPY --from=builder /build/favicon.ico /usr/share/nginx/html/
COPY --from=builder /build/apple-touch-icon.png /usr/share/nginx/html/
COPY --from=builder /build/og-image.png /usr/share/nginx/html/

# Copy các file khác
COPY manifest.json /usr/share/nginx/html/
COPY robots.txt /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/
COPY 404.html /usr/share/nginx/html/
COPY README.md /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Nginx sẽ tự động chạy khi container start
CMD ["nginx", "-g", "daemon off;"]
