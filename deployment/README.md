# Настройки действующего VPS

Это копии проверенных конфигураций сервера `tyumen-factory.ru`, без приватных ключей, хеша пароля и файлов с секретами. Схема размещения и обслуживание описаны в [SERVER-DEPLOYMENT.md](../SERVER-DEPLOYMENT.md).

## Соответствие путей

- `nginx/http.conf` → `/etc/nginx/conf.d/tfm-http.conf`
- `nginx/headers.conf` → `/etc/nginx/snippets/tfm-headers.conf`
- `nginx/proxy.conf` → `/etc/nginx/snippets/tfm-proxy.conf`
- `nginx/site.conf` → `/etc/nginx/sites-available/tyumen-factory.ru`
- `nginx/default.conf` → `/etc/nginx/sites-available/tfm-default`
- `systemd/*.service`, `systemd/*.timer` → `/etc/systemd/system/`
- `fail2ban/jails.conf` → `/etc/fail2ban/jail.d/tfm.conf`
- `fail2ban/admin-filter.conf` → `/etc/fail2ban/filter.d/tfm-admin.conf`
- `fail2ban/probes-filter.conf` → `/etc/fail2ban/filter.d/tfm-probes.conf`
- `backup/tfm-backup.sh` → `/usr/local/sbin/tfm-backup`, режим `0750`, владелец root.

Нужны Ubuntu 24.04, Nginx, актуальная Node.js, fail2ban, nftables и age. `nftables` предоставляет команду `nft`, необходимую выбранному действию Fail2ban; наличие только iptables недостаточно. Службу `nftables.service` с отдельным набором правил включать не требуется: правила создают UFW и Fail2ban.

Окружение Node.js хранится в приватном `/etc/tfm/site.env`. В нём настроены `PUBLIC_ORIGIN`, `SITE_ROOT`, `BLOG_DATA_DIR`, `ADMIN_AUTH_FILE`, `ADMIN_SECURE_COOKIE=true`, `TRUST_PROXY=true`, `HOST=127.0.0.1`, `PORT=8484` и `NODE_OPTIONS=--max-old-space-size=128`. Приложение работает от `tfm-site` с группой `www-data`; приватный подкаталог имеет режим `0700`. Код принадлежит root.

Конфигурации не являются универсальным установщиком: пути, существующие виртуальные хосты, сертификаты, ключи доступа и владельцев каталогов нужно сверять перед применением. Проверяйте `nginx -t`, `fail2ban-client -t` и `systemd-analyze verify` до перезапуска служб. SSH отключает пароль только после проверки ключа владельца; готовую SSH-конфигурацию с неподтверждённым доступом не применяйте.

При смене хостинга или домена измените пути к сертификату, имена серверов, окружение и программу резервного копирования. При добавлении SMTP нужно пересмотреть ограничение исходящей сети Node.js и разрешить необходимый SMTP-адрес.
