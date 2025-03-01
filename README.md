dWdnY2Y6Ly9iY3JhLmZjYmd2c2wucGJ6L2dlbnB4LzVwc2tIZ1B4Y3hQVkVlWGxxVVhGb1kgcm90MTM= </br>
6 28 15 26 15<br> {/\_\_/}</br>( - . -)</br>/ > 🤍

<h1 align="center">Discord Log Bot</h1>

<p align="center">

[![Toplam Görüntüleme](https://hits.sh/github.com/Mid0aria/discord-log-bot.svg?view=today-total&label=Repo%20Today/Total%20Views&color=770ca1&labelColor=007ec6)](https://github.com/Mid0aria/discord-log-bot)
[![Son Taahhüt](https://img.shields.io/github/last-commit/mid0aria/discord-log-bot)](https://github.com/Mid0aria/discord-log-bot)

## Türkçe içerik.
[Türkçe içeriğe ulaşmak için tıkla.](https://github.com/TexaPY/discord-log-bot/blob/main/benioku.md)

## Yardıma mı ihtiyacınız var?

Bir öğreticiye mi ihtiyacınız var? [Youtube Video İzle](https://www.youtube.com/watch?v=QYC9apZHG5o)

Yardıma ihtiyacınız varsa, [Discord sunucusuna buradan](https://discord.gg/WzYXVbXt6C) katılın

</p>

# İçindekiler

[⭐・ Yıldız Tarihi](#star-history)<br>
[👑・Özellikler](#özellikler)<br>
[⚙・Config.json örneği](#configjson-example)<br>
[🔗・Gerekli Bağlantılar](#required-links)<br>
[🎈・Kurulum](#Kurulum)<br>

## ⭐・ Yıldız Tarihi

<h2 align="center">Hedef: <a href="https://github.com/Mid0aria/discord-log-bot/stargazers"><img src="https://img.shields.io/github/stars/Mid0aria/discord-log-bot" /></a> / 512</h2>
⭐⭐⭐ Bu depoya bir yıldız da verebilirsiniz, böylece diğerleri güvenilir olduğumuzu bilir!<br>

[![Yıldız Tarih Çizelgesi](https://api.star-history.com/svg?repos=Mid0aria/discord-log-bot&type=Date)](https://star-history.com/#Mid0aria/discord-log-bot&Date)

## 👑・Özellikler

- Neredeyse tüm uyumsuzluk olaylarının günlüklerini ayarladığınız kanala atar
- Bağımlılıkları Otomatik Yükleme
- Çarpışma Önleyici
- Çoklu Veritabanı Desteği
    - JSON
    - MYSQL
    - MONGODB

## ⚙・config.json örneği

```
{
    "bot": {
        "token": "xxx" / discord bot token'ınız
    },
    "db": {
        "type": "x", / tercih ettiğiniz veritabanı türü (json, mysql, mongodb)
        "mysql": {
            "MYSQL_HOST": "xxx", // mysql'i tercih ettiyseniz bu bölümü doldurun
            "MYSQL_USER": "xxx", // mysql'i tercih ettiyseniz bu bölümü doldurun
            "MYSQL_PWD": "xxx", // mysql'i tercih ettiyseniz bu bölümü doldurun
            "MYSQL_DB": "logger" // buna dokunmayın
        },
        "mongo": {
            "MONGO_TOKEN": "mongodb+srv://xxx" // mongodb'yi tercih ettiyseniz bu bölümü doldurun
        }
    }
}

```

## 🔗・Gerekli Bağlantılar

[NodeJS](https://nodejs.org/en/)<br>
[Terminal](https://apps.microsoft.com/detail/9n0dx20hk701)<br>
[Bot ZIP Dosyası](https://github.com/Mid0aria/discord-log-bot/archive/refs/heads/main.zip)

## 🎈・Kurulum

### 🖥️・ Windows / Linux

```bash
# Node.js sürümünü kontrol edin:
düğüm -v

# Dosyaları git ile klonlayın:
git clone https://github.com/Mid0aria/discord-log-bot
# İsteğe bağlı olarak https://github.com/Mid0aria/discord-log-bot/archive/refs/heads/main.zip adresindeki github'dan da indirebilirsiniz

# Klonlanmış dizine girin:
cd discord-log-bot

# Botu yapılandırın
notepad config.json # Windows üzerinde
nano config.json # Linux'ta, tercih edilen başka bir dosya yazma yazılımını da kullanabilirsiniz

# Botu çalıştırın:
node bot.js
```
