This is a configuration reference for a K3s cluster management setup. 

# Configuration Files

- `config.yaml` - Main configuration file for the K3s cluster. (`/etc/rancher/k3s/config.yaml`)

# Installation script
```
curl -sfL https://get.k3s.io |  INSTALL_K3S_VERSION=v1.32.7+k3s1 sh -s - server \
  --cluster-init \
  --disable=traefik \
  --node-name="$(hostname -f)"
```