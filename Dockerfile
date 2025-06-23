FROM  ... as builder


# The final target will copy the resulting dist/ directory from the builder
# container to the target directory where the nginx, caddyserver or other
# http server will serve the files from
FROM ...
COPY --from=builder SOURCE/dist TARGET/dist

