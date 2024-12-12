# Custom packages tests

## Maintained apps list

1password
adobe-acrobat-reader
box-drive
brave-browser
cloudflare-warp
docker
figma
firefox
google-chrome
microsoft-edge
microsoft-excel
microsoft-teams
microsoft-word
notion
postman
slack
teamviewer
visual-studio-code
whatsapp
zoom-for-it-admins

## pkg

✅ https://downloads.1password.com/mac/1Password.pkg
- Bundle Identifier: 'com.1password.1password'
- Name: '1Password.app' (matches osquery's apps.name)
- Package IDs: 'com.1password.1password'

✅ https://statics.teams.cdn.office.net/production-osx/enterprise/webview2/lkg/MicrosoftTeams.pkg

✅ https://ftp.mozilla.org/pub/firefox/releases/129.0.2/mac/en-US/Firefox%20129.0.2.pkg


## msi

❌ https://ftp.mozilla.org/pub/firefox/releases/129.0.2/win64/en-US/Firefox%20Setup%20129.0.2.msi
extracted title is `Mozilla Firefox 129.0.2 x64 en-US` and osquery reports name `Mozilla Firefox (x64 en-US)`

## deb

✅ https://downloads.1password.com/linux/debian/amd64/stable/1password-latest.deb

## rpm

✅ https://downloads.1password.com/linux/rpm/stable/x86_64/1password-latest.rpm

## exe

❌ https://downloads.1password.com/win/1PasswordSetup-latest.exe
- Default installer script didn't work.
- Running `1PasswordSetup-latest.exe --silent` on the `cmd` works, but not via Fleet because the installer is per-user, whereas the MSI is system-wide, see https://support.1password.com/deploy-1password/.
Extracted metadata:
- Name: '1Password'
- Package IDs: '1Password'

✅ https://downloads.1password.com/win/1PasswordSetup-latest.msi
- Name: '1Password' (matches osquery's `programs.name`)
- Package IDs: '{321BD799-2490-40D7-8A88-6888809FA681}' (matches osquery's `programs.identifying_number`)

✅ https://dl.tailscale.com/stable/tailscale-setup-1.72.0.exe
- Name: 'Tailscale'
- Package IDs: 'Tailscale'
Check why osquery returns two entries?...
