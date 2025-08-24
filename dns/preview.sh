#!/bin/sh
docker run --rm -it -v "$(pwd):/dns"  ghcr.io/stackexchange/dnscontrol preview --creds creds-local.json