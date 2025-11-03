# 🔧 КАК ИСПРАВИТЬ DEPLOYMENT - Пошаговая Инструкция

## Проблема
Google видит пустой HTML потому что Replit deployment НЕ запускает pre-rendering script.

## ✅ Решение (2 минуты)

### Шаг 1: Откройте Deployment Settings

1. В Replit workspace найдите кнопку **"Deploy"** или **"Deployments"** в верхней панели
2. Если deployment уже существует - нажмите на него
3. Найдите **Settings** или **⚙️ Configure** для вашего deployment

### Шаг 2: Измените Build Command

В секции **Build Configuration** или **Build Settings**:

**Текущая команда:**
```
npm run build
```

**Измените на:**
```
sh scripts/build-production.sh
```

### Шаг 3: Сохраните и Redeploy

1. Нажмите **Save** или **Update**
2. Нажмите **Redeploy** или **Deploy** снова
3. Дождитесь окончания deployment (1-2 минуты)

---

## 📋 Проверка После Deployment

1. Откройте https://srqunlock.com
2. Нажмите **Ctrl+U** (View Page Source)
3. Найдите `<div id="root">`

**✅ ПРАВИЛЬНО:**
```html
<div id="root"><div role="region" aria-label="Notifications (F8)" tabindex="-1">
<ol tabindex="-1" class="fixed top-0 z-[100]...
<div class="min-h-screen flex flex-col">
<div class="bg-[#1a3a52] text-white py-2">
```

**❌ НЕПРАВИЛЬНО:**
```html
<div id="root"></div>
```

4. Проверьте размер страницы внизу браузера: должно быть **~80KB**, не 4KB

---

## 🎯 Если не можете найти Build Settings

### Альтернативный способ:

**Перед КАЖДЫМ deployment** запускайте в Shell:
```bash
./scripts/build-production.sh
```

Затем нажимайте "Deploy".

---

## 📊 Текущее состояние проекта

✅ Pre-rendering script создан и работает  
✅ `dist/public/` содержит 14 pre-rendered HTML страниц (78KB каждая)  
✅ Production server локально отдает правильный HTML  
❌ Deployment configuration не запускает pre-rendering  
🔧 **ТРЕБУЕТСЯ:** изменить build command на `sh scripts/build-production.sh`

---

## ⚠️ ВАЖНО

После изменения build command в deployment settings, **КАЖДЫЙ** будущий deployment будет автоматически:
1. Собирать Vite bundle
2. Pre-rendering все 14 страниц
3. Деплоить полный HTML

**Вам больше НЕ нужно будет вручную запускать скрипт!**
