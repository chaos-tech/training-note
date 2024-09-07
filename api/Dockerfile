# syntax=docker/dockerfile:1

FROM golang:1.23 AS builder
WORKDIR /app
RUN --mount=type=cache,target=/go/pkg/mod/,sharing=locked \
    --mount=type=bind,source=go.sum,target=go.sum \
    --mount=type=bind,source=go.mod,target=go.mod \
    go mod download -x
RUN --mount=type=cache,target=/go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    --mount=type=bind,target=. \
    go build -o /bin/server

FROM gcr.io/distroless/base-nossl-debian12
COPY --from=builder /bin/server /server
CMD ["/server"]
