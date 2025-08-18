The ceph storage is disabled since there seem to be quite a few issues with single-node clusters.

The main issue is that whenever the node restarts, the ceph OSD get into broken state and manual intervention is required to fix it.

I have already attempted to follow official Rook documentation to fix this, but it does not seem to resolve issues with OSD breaking and auth keyrings being refreshed.


Here are the commands required to fix broken setup:

```bash
ceph-bluestore-tool repair --path /var/lib/ceph/osd/ceph-0

cat /etc/ceph/keyring
ceph auth export osd.0 -o file.txt

# replcase keyring in file.txt with the one from /etc/ceph/keyring

ceph auth import -i file.txt
```

Then restart all OSDs pods.