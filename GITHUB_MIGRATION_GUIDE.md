# 📤 GitHub Migration Guide - Unlock SRQ LLC

Полное руководство по миграции проекта Unlock SRQ LLC на GitHub репозиторий `alexprime1889-prog/unlock-srq-website`.

## 📋 Подготовка к миграции

### Что будет мигрировано

✅ **Исходный код:**
- client/ (React фронтенд)
- server/ (Express бэкенд)
- shared/ (общие типы)
- scripts/ (pre-rendering скрипты)

✅ **Конфигурация:**
- package.json
- tsconfig.json
- vite.config.ts
- drizzle.config.ts
- tailwind.config.ts

✅ **Статические файлы:**
- client/public/ (логотип, изображения, robots.txt, sitemap.xml)
- attached_assets/ (профессиональные фотографии)

✅ **Документация:**
- README.md
- replit.md
- DEPLOYMENT_GUIDE.md
- DOMAIN_SETUP_GUIDE.md
- CONTRIBUTING.md
- design_guidelines.md

❌ **Что НЕ будет в GitHub:**
- node_modules/ (зависимости)
- dist/ (собранные файлы)
- dist/public/ (pre-rendered HTML)
- .env (секреты)
- DATABASE_URL, SESSION_SECRET (переменные окружения)

### Проверка .gitignore

Уже обновлен `.gitignore` для защиты конфиденциальных данных:

```gitignore
node_modules
dist
dist/public
.env
.env.local
.env.production
.env.development
*.pem
*.key
.secrets
logs
*.log
.DS_Store
.vscode/
.idea/
.cache
```

## 🚀 Шаги миграции

### Шаг 1: Создание GitHub репозитория (если не существует)

Если репозиторий `alexprime1889-prog/unlock-srq-website` еще не создан:

1. Зайдите на https://github.com
2. Войдите в аккаунт `alexprime1889-prog`
3. Нажмите кнопку **"New"** или **"+"** → **"New repository"**
4. Введите имя: `unlock-srq-website`
5. Описание: `Professional locksmith website for Unlock SRQ LLC serving Sarasota and surrounding areas in Florida`
6. Выберите **Private** (если вы не хотите публичный репозиторий)
7. **НЕ** добавляйте README, .gitignore, или LICENSE (они уже есть в проекте)
8. Нажмите **"Create repository"**

### Шаг 2: Подключение GitHub Remote

**Важно:** Replit блокирует некоторые git команды для безопасности. Выполняйте эти шаги через Shell в Replit.

1. Откройте **Shell** в Replit (не используйте git инструменты Replit UI)

2. Проверьте текущие remotes:
```bash
git remote -v
```

Вы увидите:
```
gitsafe-backup  git://gitsafe:5418/backup.git (fetch)
gitsafe-backup  git://gitsafe:5418/backup.git (push)
```

3. Добавьте GitHub remote:
```bash
git remote add github https://github.com/alexprime1889-prog/unlock-srq-website.git
```

4. Проверьте что remote добавлен:
```bash
git remote -v
```

Должно быть:
```
github          https://github.com/alexprime1889-prog/unlock-srq-website.git (fetch)
github          https://github.com/alexprime1889-prog/unlock-srq-website.git (push)
gitsafe-backup  git://gitsafe:5418/backup.git (fetch)
gitsafe-backup  git://gitsafe:5418/backup.git (push)
```

### Шаг 3: Проверка статуса Git

Проверьте какие файлы будут закоммичены:

```bash
git status
```

Если есть незакоммиченные изменения:

```bash
git add .
git commit -m "Prepare project for GitHub migration

- Updated .gitignore to exclude secrets and build artifacts
- Updated README.md with comprehensive documentation
- Added pre-rendering solution documentation in replit.md
- Created GITHUB_MIGRATION_GUIDE.md for migration instructions"
```

### Шаг 4: Push на GitHub

**Первый push:**

```bash
git push -u github main
```

Или если ваша ветка называется `master`:

```bash
git push -u github master
```

**Важно:** GitHub может попросить аутентификацию:

1. **Username:** `alexprime1889-prog`
2. **Password:** Используйте **Personal Access Token**, а не обычный пароль

#### Как создать Personal Access Token (PAT):

1. Зайдите на https://github.com/settings/tokens
2. Нажмите **"Generate new token"** → **"Generate new token (classic)"**
3. Дайте имя: `Replit Unlock SRQ Migration`
4. Выберите срок действия: **90 days** или **No expiration**
5. Выберите разрешения:
   - ✅ **repo** (полный доступ к приватным репозиториям)
6. Нажмите **"Generate token"**
7. **Скопируйте токен** (он показывается только один раз!)
8. Используйте токен вместо пароля при git push

### Шаг 5: Проверка миграции

1. Откройте https://github.com/alexprime1889-prog/unlock-srq-website

2. Проверьте что все файлы на месте:
   - ✅ client/
   - ✅ server/
   - ✅ scripts/
   - ✅ shared/
   - ✅ attached_assets/
   - ✅ README.md
   - ✅ package.json
   - ❌ node_modules/ (должно отсутствовать)
   - ❌ dist/ (должно отсутствовать)
   - ❌ .env (должно отсутствовать)

3. Проверьте README.md отображается правильно

## 🔄 Последующие обновления

После первоначальной миграции, для push новых изменений:

```bash
# 1. Проверить изменения
git status

# 2. Добавить файлы
git add .

# 3. Создать commit
git commit -m "Описание изменений"

# 4. Push на GitHub
git push github main
```

## 🔐 Работа с секретами

### Что НЕ должно попасть в GitHub:

❌ `DATABASE_URL` - URL подключения к базе данных  
❌ `SESSION_SECRET` - секрет для сессий  
❌ `.env` файлы  
❌ API ключи (Stripe, Calendly и т.д.)  

### Где хранить секреты:

✅ **Replit Secrets** - для Replit deployment
✅ **GitHub Secrets** - для GitHub Actions CI/CD
✅ **Vercel/Netlify Environment Variables** - для production deployment
✅ **Локально** - в `.env` файле (который в `.gitignore`)

### Как добавить секреты в GitHub (для CI/CD):

1. Зайдите в репозиторий на GitHub
2. Settings → Secrets and variables → Actions
3. Нажмите **"New repository secret"**
4. Добавьте:
   - `DATABASE_URL`
   - `SESSION_SECRET`
   - `STRIPE_SECRET_KEY` (когда настроите)

## 📦 Настройка проекта после клонирования

Если кто-то клонирует репозиторий с GitHub:

```bash
# 1. Клонировать репозиторий
git clone https://github.com/alexprime1889-prog/unlock-srq-website.git
cd unlock-srq-website

# 2. Установить зависимости
npm install

# 3. Создать .env файл
cat > .env << EOF
DATABASE_URL=postgresql://user:password@host:port/database
SESSION_SECRET=generate-random-secret-here
EOF

# 4. Настроить базу данных
npx drizzle-kit push

# 5. Собрать проект
npm run build

# 6. Pre-render для SEO
node scripts/simple-prerender.js

# 7. Запустить dev сервер
npm run dev
```

## 🚨 Troubleshooting

### Проблема: "Permission denied (publickey)"

**Решение:** Используйте HTTPS вместо SSH:
```bash
git remote set-url github https://github.com/alexprime1889-prog/unlock-srq-website.git
```

### Проблема: "Authentication failed"

**Решение:** 
1. Создайте Personal Access Token (см. Шаг 4)
2. Используйте токен вместо пароля

### Проблема: "Updates were rejected because the remote contains work..."

**Решение:**
```bash
# Сначала pull изменения с GitHub
git pull github main --rebase

# Затем push ваши изменения
git push github main
```

### Проблема: "fatal: refusing to merge unrelated histories"

**Решение:**
```bash
git pull github main --allow-unrelated-histories
git push github main
```

## 📊 GitHub Repository Settings

Рекомендуемые настройки репозитория:

### General Settings

- **Description:** `Professional locksmith website for Unlock SRQ LLC serving Sarasota, North Port, Port Charlotte, Englewood, and Bradenton, Florida. Built with React 19, TypeScript, Vite, and PostgreSQL. Features custom SEO pre-rendering solution for Google indexing.`
- **Website:** `https://srqunlock.com` (когда домен настроен)
- **Topics:** `react`, `typescript`, `vite`, `locksmith`, `seo`, `puppeteer`, `pre-rendering`, `florida`, `small-business`

### Branches

- **Default branch:** `main`
- **Branch protection rules:**
  - ✅ Require pull request reviews before merging
  - ✅ Require status checks to pass before merging

### Security

- ✅ Enable **Dependabot alerts**
- ✅ Enable **Dependabot security updates**

## 🎯 Next Steps After Migration

1. **✅ Verify GitHub repository** - Проверить все файлы загружены
2. **⬜ Set up GitHub Actions** - Автоматическое тестирование (опционально)
3. **⬜ Configure branch protection** - Защита main ветки
4. **⬜ Add collaborators** - Добавить членов команды (если есть)
5. **⬜ Create GitHub Pages** - Для документации (опционально)
6. **⬜ Set up automated deployments** - Подключить Vercel/Netlify

## 📞 Support

Если возникли проблемы с миграцией:

1. Проверьте `.gitignore` - убедитесь что секреты исключены
2. Проверьте размер файлов - GitHub имеет лимит 100MB на файл
3. Проверьте аутентификацию - используйте Personal Access Token

**Контакты:**
- Email: info@srqunlock.com
- Phone: (941) 587-5050

---

**Готово! Ваш код теперь безопасно хранится на GitHub** 🎉

*Последнее обновление: Ноябрь 2025*
