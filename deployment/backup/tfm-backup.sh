#!/bin/bash
set -euo pipefail
umask 077
exec 9>/run/tfm-backup.lock
flock -n 9 || exit 0
directory=/var/backups/tfm
test -d "$directory"
recipient=$(age-keygen -y /etc/tfm/backup-age.key)
target="$directory/tfm-$(date -u +%Y%m%d-%H%M%S).tar.gz.age"
trap 'rm -f "$target.partial"' EXIT
# Originals are atomic files; uploaded photos are immutable and retained.
tar -C / -czf - var/lib/tfm/private var/lib/tfm/public srv/tfm/app etc/tfm etc/letsencrypt etc/nginx/snippets/tfm-headers.conf etc/nginx/snippets/tfm-proxy.conf etc/nginx/conf.d/tfm-http.conf etc/nginx/sites-available/tyumen-factory.ru etc/nginx/sites-available/tfm-default etc/systemd/system/tfm-blog.service etc/systemd/system/tfm-backup.service etc/systemd/system/tfm-backup.timer etc/systemd/system/logrotate.timer.d/tfm.conf etc/systemd/journald.conf.d/tfm-limits.conf etc/logrotate.d/nginx usr/local/sbin/tfm-backup etc/ssh root/.ssh/authorized_keys etc/fail2ban/fail2ban.local etc/fail2ban/jail.d/tfm.conf etc/fail2ban/filter.d/tfm-admin.conf etc/fail2ban/filter.d/tfm-probes.conf |
    age -r "$recipient" -o "$target.partial"
mv "$target.partial" "$target"
find "$directory" -maxdepth 1 -type f -name 'tfm-*.tar.gz.age' -mtime +7 -delete
printf 'Encrypted backup: %s\n' "$target"
