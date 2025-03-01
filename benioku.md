dWdnY2Y6Ly9iY3JhLmZjYmd2c2wucGJ6L2dlbnB4LzVwc2tIZ1B4Y3hQVkVlWGxxVVhGb1kgcm90MTM= </br>
6 28 15 26 15<br> {/\_\_/}</br>( • . •)</br>/ > 🤍

### **Discord Log Bot**  

#### **Yardıma mı ihtiyacın var?**  

Bir öğreticiye mi ihtiyacın var? [YouTube videosunu izle](https://www.youtube.com/watch?v=QYC9apZHG5o)  

Eğer yardım gerekiyorsa, [buradaki Discord sunucusuna katıl](https://discord.gg/WzYXVbXt6C).  

---

## **İçindekiler**  

- [⭐・Yıldız Geçmişi](#yıldız-geçmişi)  
- [👑・Özellikler](#özellikler)  
- [⚙・config.json Örneği](#configjson-örneği)  
- [🔗・Gerekli Bağlantılar](#gerekli-bağlantılar)  
- [🎈・Kurulum](#kurulum)  

---

## **⭐・Yıldız Geçmişi**  

**Hedef:** [![GitHub Yıldızları](https://img.shields.io/github/stars/Mid0aria/discord-log-bot)](https://github.com/Mid0aria/discord-log-bot/stargazers) / **512**  

⭐⭐⭐ Bu depoya bir yıldız verebilirsin, böylece diğerleri güvenilir olduğumuzu anlar!  

[![Yıldız Geçmişi Grafiği](https://api.star-history.com/svg?repos=Mid0aria/discord-log-bot&type=Date)](https://star-history.com/#Mid0aria/discord-log-bot&Date)  

---

## **👑・Özellikler**  

- Çoğu uyumsuz olayın günlüklerini belirlediğin kanala atar  
- Bağımlılıkları otomatik yükler  
- Çökme koruması  
- Çoklu veritabanı desteği:  
  - JSON  
  - MySQL  
  - MongoDB  

---

## **⚙・config.json Örneği**  

```json
{
    "bot": {
        "token": "xxx" // Discord bot token'ını buraya gir
    },
    "db": {
        "type": "x", // Kullanmak istediğin veritabanı türü (json, mysql, mongodb)
        "mysql": {
            "MYSQL_HOST": "xxx", // MySQL kullanıyorsan bu bölümü doldur
            "MYSQL_USER": "xxx",
            "MYSQL_PWD": "xxx",
            "MYSQL_DB": "logger" // Bu değeri değiştirme
        },
        "mongo": {
            "MONGO_TOKEN": "mongodb+srv://xxx" // MongoDB kullanıyorsan bu bölümü doldur
        }
    }
}
```

---

## **🔗・Gerekli Bağlantılar**  

- [NodeJS](https://nodejs.org/en/)  
- [Terminal](https://apps.microsoft.com/detail/9n0dx20hk701)  
- [Bot ZIP Dosyası](https://github.com/Mid0aria/discord-log-bot/archive/refs/heads/main.zip)  

---

## **🎈・Kurulum**  

### **🖥️・Windows / Linux**  

```bash
# Node.js sürümünü kontrol et:
node -v

# Git ile dosyaları klonla:
git clone https://github.com/Mid0aria/discord-log-bot
# Alternatif olarak, şu bağlantıdan da indirebilirsin:
# https://github.com/Mid0aria/discord-log-bot/archive/refs/heads/main.zip

# Klonlanan dizine gir:
cd discord-log-bot

# Botu yapılandır:
notepad config.json # Windows için
nano config.json # Linux için (veya farklı bir düzenleyici kullanabilirsin)

# Botu çalıştır:
node bot.js
```
