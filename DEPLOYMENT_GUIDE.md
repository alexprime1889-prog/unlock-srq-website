# 🚀 Production Deployment Guide - Unlock SRQ LLC

Полное руководство по публикации сайта Unlock SRQ LLC для максимальной видимости в Google.

## 📊 Текущая ситуация

### ✅ Что готово:

1. **Pre-rendered файлы созданы** - все 14 страниц с полным HTML
   ```
   Homepage: 77KB полного HTML
   Location pages: 41KB каждая
   Automotive pages: 63KB каждая
   About Us: 39KB
   ```

2. **SEO контент проверен:**
   - ✅ Titles уникальные для каждой страницы
   - ✅ Meta descriptions
   - ✅ Schema.org LocalBusiness разметка
   - ✅ Open Graph теги
   - ✅ H1 заголовки
   - ✅ Географические данные

3. **Инфраструктура готова:**
   - ✅ Pre-rendered файлы копируются в `server/public/` (не симлинк!)
   - ✅ Chrome установлен для Puppeteer
   - ✅ Pre-rendering скрипт работает
   - ✅ Google Analytics настроен

### 🔍 Важно понимать:

**Development vs Production режимы:**

| Режим | Команда | Что отдает сервер | Для кого |
|-------|---------|-------------------|----------|
| **Development** | `npm run dev` | Пустой HTML (`<div id="root"></div>`) | Live preview, hot reload |
| **Production** | `npm start` | Pre-rendered HTML (77KB) | Google, реальные пользователи |

**Почему в dev preview пустой HTML?**
- Development режим нужен для разработки с hot reload
- React рендерится в браузере после загрузки JavaScript
- Это НОРМАЛЬНО для dev preview

**Почему Google увидит полный HTML?**
- При публикации сайт работает в production режиме
- Production режим отдает pre-rendered файлы из `server/public/`
- Pre-render скрипт автоматически копирует файлы (симлинки не работают в deployment)
- Google видит полный HTML сразу, без JavaScript

## 🎯 Шаги для публикации

### ⚠️ ВАЖНО: Pre-rendering запускается ЛОКАЛЬНО!

**Chrome/Puppeteer НЕ доступны в deployment окружении.**  
Pre-rendering должен запускаться **в dev окружении ПЕРЕД deployment**, а не во время deployment.

### Вариант 1: Replit Deployments (рекомендуется)

#### Шаг 1: Подготовка файлов локально (ОБЯЗАТЕЛЬНО)

```bash
# 1. Соберите production версию
npm run build

# 2. Запустите pre-rendering (создаст файлы в server/public/)
node scripts/simple-prerender.js

# 3. Файлы готовы для deployment!
# server/public/ теперь содержит все 14 pre-rendered HTML страниц
```

#### Шаг 2: Deployment в Replit

1. **Убедитесь что `.replit` файл НЕ включает pre-rendering:**
   ```toml
   [deployment]
   build = ["npm", "run", "build"]  # БЕЗ node scripts/simple-prerender.js
   run = ["npm", "run", "start"]
   ```

2. **В Replit UI:**
   - Нажмите кнопку **"Deploy"** в правом верхнем углу
   - Выберите **"Deployment"**
   - Replit автоматически:
     - Запустит `npm run build`
     - Использует готовые файлы из `server/public/` (уже в git)
     - Запустит `npm start` (production режим)
     - Настроит HTTPS
     - Даст вам `.replit.app` домен

3. **После первого deployment:**
   - Настройте custom domain (srqunlock.com)
   - Добавьте SSL сертификат (автоматически)

### Вариант 2: Ручной production режим (для тестирования)

Чтобы проверить как сайт будет выглядеть для Google СЕЙЧАС:

```bash
# 1. Остановить dev сервер (если запущен)
# Нажмите Ctrl+C в терминале

# 2. Собрать production версию
npm run build

# 3. Запустить pre-rendering
node scripts/simple-prerender.js

# 4. Запустить production сервер
npm start
```

**Откройте браузер и "View Source" - вы увидите полный HTML!**

### Вариант 3: Через GitHub + внешний хостинг

Если хотите деплоить через Vercel/Netlify:

1. **Push на GitHub** (следуйте `GITHUB_MIGRATION_GUIDE.md`)

2. **На Vercel/Netlify:**
   - Подключите GitHub репозиторий
   - Build Command: `npm run build && npx puppeteer browsers install chrome && node scripts/simple-prerender.js`
   - Output Directory: `dist/public`
   - Install Command: `npm install && npx puppeteer browsers install chrome`

3. **Environment Variables:**
   ```
   DATABASE_URL=your-postgres-url
   SESSION_SECRET=random-secret-here
   NODE_ENV=production
   ```

## 🔄 Workflow обновлений

### Когда вы изменяете контент:

```bash
# 1. Сделайте изменения в коде
# (например, обновили текст на homepage)

# 2. Пересоберите production версию
npm run build

# 3. ОБЯЗАТЕЛЬНО: Обновите pre-rendered файлы ЛОКАЛЬНО
node scripts/simple-prerender.js

# 4. ВАЖНО: Pre-rendered файлы теперь в server/public/
#    Они будут автоматически включены в deployment (не в .gitignore)

# 5. Деплой (зависит от платформы)
# - Replit: Нажмите "Redeploy" (файлы уже готовы)
# - Vercel/Netlify: git push (автодеплой)
```

### ⚠️ КРИТИЧЕСКИ ВАЖНО:

**Pre-rendering должен запускаться ЛОКАЛЬНО перед каждым deployment!**

1. ✅ Запустите `node scripts/simple-prerender.js` локально
2. ✅ Файлы создаются в `server/public/`
3. ✅ `server/public/` НЕ в .gitignore (файлы включены в git)
4. ✅ Deployment использует готовые файлы
5. ❌ НЕ запускайте pre-rendering в deployment build команде

### Когда НЕ нужно ре-рендерить:

- ❌ Изменения только в backend коде
- ❌ Добавление новых API routes
- ❌ Обновление environment variables
- ❌ Изменения в database schema

### Когда НУЖНО ре-рендерить:

- ✅ Изменения текста на страницах
- ✅ Новые страницы/routes
- ✅ Изменения meta tags
- ✅ Обновления Schema.org данных
- ✅ Новые изображения или контент

## 📋 Pre-deployment Checklist

Перед каждой публикацией проверьте:

### 1. Build успешен
```bash
npm run build
# Должно завершиться без ошибок
```

### 2. Pre-rendering работает
```bash
node scripts/simple-prerender.js
# Должно создать все 14 файлов
```

### 3. Проверка размеров файлов
```bash
ls -lh dist/public/**/*.html dist/public/*.html
# Homepage должен быть ~77KB
# Location pages ~41KB каждая
```

### 4. Проверка SEO контента
```bash
# Проверьте что title присутствует
grep -o "<title>.*</title>" dist/public/index.html

# Проверьте meta description
grep "meta name=\"description\"" dist/public/index.html

# Проверьте Schema.org
grep "@type.*LocalBusiness" dist/public/index.html
```

### 5. Environment Variables установлены
```bash
echo $DATABASE_URL  # Не должно быть пустым
echo $SESSION_SECRET  # Не должно быть пустым
```

## 🔐 Production Secrets

### Необходимые переменные:

```bash
DATABASE_URL=postgresql://user:pass@host:port/database
SESSION_SECRET=generate-random-32-char-secret
NODE_ENV=production

# Когда настроите:
STRIPE_SECRET_KEY=sk_live_...
CALENDLY_USERNAME=your-username
```

### Генерация SESSION_SECRET:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 📊 Мониторинг после публикации

### 1. Google Search Console

1. Зайдите на https://search.google.com/search-console
2. Добавьте property: `srqunlock.com`
3. Верифицируйте владение
4. Submit sitemap: `https://srqunlock.com/sitemap.xml`

### 2. Проверка индексации

```bash
# Проверьте что Google может видеть ваш сайт
site:srqunlock.com
```

### 3. Rich Results Test

- https://search.google.com/test/rich-results
- Введите URL вашей homepage
- Проверьте что LocalBusiness Schema.org распознается

## 🐛 Troubleshooting

### Проблема: Google показывает пустой snippet

**Причина:** Google кешировал старую версию

**Решение:**
1. Google Search Console → URL Inspection
2. Введите URL страницы
3. "Request Indexing"

### Проблема: Pre-rendering падает с ошибкой Chrome

**Причина:** Chrome не установлен для Puppeteer

**Решение:**
```bash
npx puppeteer browsers install chrome
```

### Проблема: Production сервер не стартует

**Причина:** Нет собранных файлов

**Решение:**
```bash
npm run build
```

### Проблема: 404 на некоторых страницах

**Причина:** Pre-rendering не создал эти страницы

**Решение:**
```bash
node scripts/simple-prerender.js
# Проверьте лог - все 14 страниц должны быть созданы
```

## 📈 Performance Tips

### 1. Image Optimization

Все изображения уже в WebP формате и оптимизированы.

### 2. Caching

После deployment настройте cache headers:
```
Cache-Control: public, max-age=31536000, immutable  # Для /assets/*
Cache-Control: public, max-age=3600  # Для HTML файлов
```

### 3. CDN (опционально)

Для лучшей производительности можно использовать:
- Cloudflare (бесплатный план)
- Vercel Edge Network (встроенный)

## 🎯 Next Steps

После успешной публикации:

1. ✅ **Submit to Google Search Console**
   - Sitemap: https://srqunlock.com/sitemap.xml
   - Request indexing для homepage

2. ✅ **Set up Google Business Profile**
   - Добавьте все локации (North Port, Port Charlotte, etc.)
   - Свяжите с сайтом

3. ✅ **Configure Calendly**
   - Обновите username в коде
   - Протестируйте booking integration

4. ✅ **Set up Stripe**
   - Добавьте STRIPE_SECRET_KEY
   - Протестируйте payment flow

5. ✅ **Monitor Analytics**
   - Google Analytics: G-R0JFDJZ0MW
   - Проверяйте посещаемость еженедельно

## 📞 Support

Вопросы по deployment:

1. Replit Docs: https://docs.replit.com/hosting/deployments
2. Vercel Docs: https://vercel.com/docs
3. Email: info@srqunlock.com

---

**Готово к публикации! 🚀**

*Последнее обновление: Ноябрь 2025*
