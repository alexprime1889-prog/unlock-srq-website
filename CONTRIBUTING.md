# Contributing to Unlock SRQ Website

Thank you for your interest in contributing to the Unlock SRQ website project!

## Development Workflow

### 1. Setting Up Your Environment

```bash
# Clone the repository
git clone https://github.com/alexprime1889-prog/unlock-srq-website.git
cd unlock-srq-website

# Install dependencies
pnpm install

# Set up environment variables (contact project owner for credentials)
# Required variables are listed in README.md

# Initialize database
pnpm db:push

# Start development server
pnpm dev
```

### 2. Making Changes

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards

3. Test your changes thoroughly:
   ```bash
   pnpm type-check
   pnpm lint
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

### 3. Commit Message Guidelines

We follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add online payment integration
fix: resolve mobile menu navigation issue
docs: update deployment instructions
```

### 4. Code Style

- Use TypeScript for all new code
- Follow existing code formatting (Prettier configuration)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### 5. Testing

Before submitting:
- Test on desktop browsers (Chrome, Firefox, Safari)
- Test on mobile devices (iOS and Android)
- Verify all forms work correctly
- Check responsive design at various breakpoints
- Test SEO meta tags

### 6. Pull Request Process

1. Push your branch to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a Pull Request on GitHub

3. Fill out the PR template with:
   - Description of changes
   - Screenshots (if UI changes)
   - Testing performed
   - Related issues

4. Wait for code review

5. Address any feedback

6. Once approved, your PR will be merged

## Project Structure

```
unlock-srq/
├── client/          # Frontend React application
├── server/          # Backend Express + tRPC
├── drizzle/         # Database schema
├── shared/          # Shared types and constants
└── docs/            # Documentation
```

## Key Areas for Contribution

### Frontend
- UI/UX improvements
- Mobile responsiveness
- Accessibility enhancements
- Performance optimizations

### Backend
- API endpoints
- Database queries
- Authentication logic
- Integration with third-party services

### SEO
- Meta tags optimization
- Structured data improvements
- Content optimization
- Performance metrics

### Documentation
- Setup guides
- API documentation
- User guides
- Code comments

## Questions?

If you have questions, please:
1. Check existing documentation
2. Search closed issues
3. Open a new issue with your question

## Code of Conduct

- Be respectful and professional
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

Thank you for contributing to Unlock SRQ!

