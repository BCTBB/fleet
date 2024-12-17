# Custom packages tests

## Maintained apps list

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

## 1Password

### pkg

✅ https://downloads.1password.com/mac/1Password.pkg
- Bundle Identifier: 'com.1password.1password'
- Name: '1Password.app' (matches osquery's apps.name)
- Package IDs: 'com.1password.1password'

### exe

❌ https://downloads.1password.com/win/1PasswordSetup-latest.exe
- Default installer script didn't work.
- Running `1PasswordSetup-latest.exe --silent` on the `cmd` works, but not via Fleet because the installer is per-user, whereas the MSI is system-wide, see https://support.1password.com/deploy-1password/.
Extracted metadata:
- Name: '1Password'
- Package IDs: '1Password'

### msi

✅ https://downloads.1password.com/win/1PasswordSetup-latest.msi
- Name: '1Password' (matches osquery's `programs.name`)
- Package IDs: '{321BD799-2490-40D7-8A88-6888809FA681}' (matches osquery's `programs.identifying_number`)

### deb

✅ https://downloads.1password.com/linux/debian/amd64/stable/1password-latest.deb
- Name: '1password' (matches osquery's `deb_packages.name`)
- Package IDs: '1password'

### rpm

✅ https://downloads.1password.com/linux/rpm/stable/x86_64/1password-latest.rpm
- Name: '1password' (matches osquery's `rpm_packages.name`)
- Package IDs: '1password'

## Adobe Acrobat Reader

### pkg

N/A (they have .dmg)

### exe

❌ https://ardownload2.adobe.com/pub/adobe/acrobat/win/AcrobatDC/2400520320/AcroRdrDCx642400520320_en_US.exe
- Name: 'Adobe Self Extractor' (osquery reports `Adobe Acrobat (64-bit)` in `programs.name`)
- Package IDs: 'Adobe Self Extractor'

### msi

N/A

### deb

N/A

### rpm

N/A

## Box Drive

### pkg

✅ https://e3.boxcdn.net/desktop/releases/mac/BoxDrive.pkg
- Name: 'Box.app' (matches osquery's `apps.name`)
- Bundle Identifier: 'com.box.desktop'
- Package IDs: 'com.box.desktop.installer.autoupdater,com.box.desktop.installer.desktop,com.box.desktop.installer.local.appsupport'

### msi

✅ https://e3.boxcdn.net/desktop/releases/win/BoxDrive.msi
- Name: 'Box' (matches osquery's `programs.name`)
- Package IDs: '{9ACD1AAB-DCE9-480D-A7A4-5470D5E4E10F}' (matches osquery's `programs.identifying_number`)

### exe

N/A

### deb

N/A

### rpm

N/A

## Brave Browser

### pkg

✅ https://github.com/brave/brave-browser/releases/download/v1.73.101/Brave-Browser-universal.pkg
- Name: 'Brave Browser.app' (matches osquery's `apps.name`)
- Bundle Identifier: 'com.brave.Browser'
- Package IDs: 'com.brave.Browser,com.brave.Browser.helper.renderer,com.brave.Updater,com.brave.Keystone,com.brave.Browser.framework,com.brave.Browser.helper,com.brave.Browser.helper.plugin,org.sparkle-project.Sparkle,org.sparkle-project.Sparkle.Autoupdate,com.brave.Keystone.Agent,com.brave.Browser.framework.AlertNotificationService'

### exe

❌ https://referrals.brave.com/latest/BraveBrowserSetup.exe
- Default installer script doesn't work.
- Name: 'BraveSoftware Update' (does not match osquery's `programs.name`, which is 'Brave')
- Package IDs: 'BraveSoftware Update'

### msi

N/A

### deb

✅ https://github.com/brave/brave-browser/releases/download/v1.73.101/brave-browser_1.73.101_amd64.deb
- Default installer script doesn't work.
- Name: 'brave-browser' (matches osquery's `deb_packages.name`)
- Package IDs: 'brave-browser'

### rpm

✅ https://github.com/brave/brave-browser/releases/download/v1.73.101/brave-browser-1.73.101-1.x86_64.rpm
- Default installer script doesn't work.
- Name: 'brave-browser' (matches osquery's `rpm_packages.name`)
- Package IDs: 'brave-browser'

## Cloudflare WARP

### pkg

✅ https://appcenter-filemanagement-distrib5ede6f06e.azureedge.net/e638644a-02a2-4a21-aa30-8a9a1bf774ce/Cloudflare_WARP_2024.11.309.0.pkg
- Name: 'Cloudflare WARP.app' (matches osquery's `apps.name`)
- Bundle Identifier: 'com.cloudflare.1dot1dot1dot1.macos' 
- Package IDs: 'com.cloudflare.1dot1dot1dot1.macos'

### msi

✅ https://appcenter-filemanagement-distrib3ede6f06e.azureedge.net/679d20da-1684-49df-89e5-e976ec1c010c/Cloudflare_WARP_2024.11.309.0.msi
- Name: 'Cloudflare WARP' (matches osquery's `programs.name`)
- Package IDs: '{2BC6DCCB-7E9D-44D7-A525-6F6C6E83C419}' (matches osquery's `programs.identifying_number`)

### exe

N/A

### deb

✅ https://pkg.cloudflareclient.com/pool/focal/main/c/cloudflare-warp/cloudflare-warp_2024.11.309.0_amd64.deb
- Name: 'cloudflare-warp' (matches osquery's `deb_packages.name`)
- Package IDs: 'cloudflare-warp'

### rpm

N/A

## Docker

### pkg

N/A (has dmg, pkg requires admin account in app.docker.com)

### msi

N/A (msi requires admin account in app.docker.com)

### exe

❌ https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe
- Default installer script doesn't work.
- Name: 'Docker Desktop Installer'
- Package IDs: 'Docker Desktop Installer'

### deb

✅ https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb
- Name: 'docker-desktop' (matches osquery's `deb_packages.name`)
- Package IDs: 'docker-desktop'

### rpm

❌ https://desktop.docker.com/linux/main/amd64/docker-desktop-x86_64.rpm
- Default installer script doesn't work on my Fedora 38 VM.

## Figma

### pkg

N/A (needs admin account to download)

### exe

? https://desktop.figma.com/win/FigmaSetup.exe
- Name: 'Figma Desktop'
- Package IDs: 'Figma Desktop'

### msi

ℹ️  Asked Noah/Rachael if they can provide it.

### deb

### rpm

## Firefox

### pkg

✅ https://ftp.mozilla.org/pub/firefox/releases/129.0.2/mac/en-US/Firefox%20129.0.2.pkg

### msi

❌ https://ftp.mozilla.org/pub/firefox/releases/129.0.2/win64/en-US/Firefox%20Setup%20129.0.2.msi
extracted title is `Mozilla Firefox 129.0.2 x64 en-US` and osquery reports name `Mozilla Firefox (x64 en-US)`

## Microsoft Teams

### pkg

✅ https://statics.teams.cdn.office.net/production-osx/enterprise/webview2/lkg/MicrosoftTeams.pkg

## Tailscale

### exe

✅ https://dl.tailscale.com/stable/tailscale-setup-1.72.0.exe
- Name: 'Tailscale' (matches osquery's `programs.name`).
- Package IDs: 'Tailscale'

