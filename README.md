# React Vite Project Setup & Development Conventions

## 🚀 Project Setup

### Prerequisites

- Node.js >= 18.0.0
- Yarn >= 1.22.0

### Initial Setup

```bash
# Заклоньте проект
git clone https://github.com/Falconconsume/volunteer-platform-frontend.git

npm i yarn -g

# Встановлення залежностей
yarn install

# Запуск dev сервера
yarn dev
```

### Recommended Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Basic UI components
│   └── layout/         # Layout components
├── pages/              # Page components
├── hooks/              # Custom hooks
├── services/           # API services
├── utils/              # Utility functions
├── styles/             # Global styles
├── types/              # TypeScript types
└── constants/          # App constants
```

## 📋 Development Conventions

### Git Branch Naming Convention

```
Формат: [type]/[short-description]

Types:
- feature/    - нові функціональності
- bugfix/     - виправлення багів
- hotfix/     - критичні виправлення
- refactor/   - рефакторинг коду
- docs/       - документація
- style/      - стилізація (CSS, UI)
- test/       - тести

Приклади:
✅ feature/user-authentication
✅ bugfix/login-form-validation
✅ refactor/api-service-structure
✅ style/header-responsive-design
❌ fix-bug
❌ new-feature
❌ updates
```

### Commit Message Convention

```
Формат: [type](SCRUM-"8 or another number of task"): [description]

Types:
- feat:     нова функціональність
- fix:      виправлення багу
- refactor: рефакторинг без зміни функціональності
- style:    форматування, відступи (не впливає на код)
- docs:     документація
- test:     додавання або виправлення тестів
- chore:    оновлення build процесу, допоміжні інструменти

Приклади:
✅ feat: add user login form
✅ fix: resolve header alignment issue
✅ refactor: optimize API service methods
✅ style: update button hover animations
✅ docs: update README with setup instructions
❌ added new stuff
❌ fixed things
❌ updated code
```

### Commit Rules

- Описи англійською мовою
- Починати з маленької літери
- Не використовувати крапку в кінці
- Максимум 72 символи в заголовку
- Використовувати imperative mood ("add" не "added")

## 🛠 Development Workflow

### Before Starting Work

1. `git pull origin main` - отримати останні зміни
2. `git checkout -b feature/your-feature-name` - створити нову гілку
3. `yarn install` - переконатися що всі залежності встановлені

### During Development

```bash
# Запуск проекту
yarn dev

# Збірка проекту
yarn build

# Перевірка типів
yarn type-check

# Лінтинг (якщо налаштований)
yarn lint

# Форматування коду (якщо налаштований)
yarn format
```

### Before Committing

1. Переконайтесь що код компілюється: `yarn build`
2. Перевірте типи: `yarn type-check`
3. Зробіть commit з правильним повідомленням
4. Push гілки: `git push origin your-branch-name`

### Merge Process (поки немає CI/CD)

1. Переконайтесь що ваша гілка актуальна з main
2. Створіть Pull Request
3. Попросіть code review у team lead
4. Після схвалення - merge до staging

## 📦 Package Scripts

```json
{
    "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview",
        "type-check": "tsc --noEmit"
    }
}
```

## ⚠️ Important Notes

### Поки немає CI/CD:

- ✅ Завжди тестуйте збірку перед push (`yarn build`)
- ✅ Перевіряйте код локально перед commit
- ✅ Робіть невеликі, атомарні commits
- ✅ Описуйте зміни детально в PR
- ❌ Не пушіть код що не компілюється
- ❌ Не робіть великі commits з множинними змінами

### Code Style Guidelines

- Використовуйте TypeScript для всіх компонентів
- Називайте компоненти у PascalCase
- Використовуйте camelCase для функцій та змінних
- Додавайте типи для всіх props та функцій
- Використовуйте destructuring для props

### File Naming

- Components: `UserProfile.tsx`
- Hooks: `useUserData.ts`
- Utils: `formatDate.ts`
- Types: `user.types.ts`
- Constants: `api.constants.ts`

---

**Питання?** Звертайтесь до тімліда або в загальний чат!
