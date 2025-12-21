# Portfolio Project Structure

This document explains the refactored component structure of the portfolio application.

## 📁 Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.js           # Top navigation bar
│   ├── CompanyBanner.js        # Company-specific banner
│   ├── Footer.js               # Footer component
│   ├── TechStackMarquee.js     # Scrolling tech stack display
│   ├── HeroStats.js            # Hero section statistics
│   ├── HeroHighlights.js       # Hero section highlights
│   ├── HeroButtons.js          # Hero section action buttons
│   ├── SocialLinks.js          # Social media links
│   ├── ValueProposition.js     # Value proposition card
│   ├── AchievementCards.js     # Achievement cards grid
│   ├── Differentiators.js      # Key differentiators section
│   ├── SkillBar.js             # Individual skill bar
│   ├── SkillsCategory.js       # Skills category container
│   ├── TimelineItem.js         # Timeline item component
│   ├── Timeline.js             # Timeline container
│   ├── ContactCard.js          # Contact information card
│   ├── ContactInfo.js          # Contact info section
│   └── ContactForm.js          # Contact form component
│
├── sections/            # Page sections
│   ├── Hero.js                 # Hero/Landing section
│   ├── About.js                # About section
│   ├── Skills.js               # Skills section
│   ├── Experience.js           # Experience & Education section
│   └── Contact.js              # Contact section
│
├── common/              # Shared utilities and effects
│   ├── CreativeEffects.js      # Reusable UI effects (TypeWriter, Particles, etc.)
│   ├── CreativeEffects.css     # Styles for creative effects
│   ├── DarkModeToggle.js       # Dark mode toggle component
│   ├── hooks.js                # Custom React hooks
│   ├── companyProfiles.js      # Company-specific profile data
│   └── chatbotKnowledge.js     # Chatbot knowledge base
│
├── App.js               # Main application component
├── App.css              # Application styles
├── AIChat.js            # AI Chat component (WebLLM)
├── AIChat.css           # AI Chat styles
├── ChatBot.js           # Simple chatbot component
└── ChatBot.css          # Chatbot styles
```

## 🎯 Component Organization

### Components (`/components`)
Small, reusable UI components that can be used across different sections. Each component has a single responsibility:

- **Navigation.js** - Top navigation with links and dark mode toggle
- **HeroStats.js** - Displays statistics in the hero section
- **SkillBar.js** - Individual skill progress bar
- **TimelineItem.js** - Single timeline entry
- **ContactCard.js** - Contact information card

### Sections (`/sections`)
Larger page sections that compose multiple components:

- **Hero.js** - Landing section with intro, stats, and CTAs
- **About.js** - About section with achievements and differentiators
- **Skills.js** - Skills display with categories
- **Experience.js** - Work experience, education, and certifications
- **Contact.js** - Contact information and form

### Common (`/common`)
Shared utilities, hooks, and effects:

- **CreativeEffects.js** - Reusable UI effects (TypeWriter, ParticleBackground, TiltCard, GradientText, etc.)
- **hooks.js** - Custom React hooks (useScrollReveal)
- **companyProfiles.js** - Company-specific configuration data
- **chatbotKnowledge.js** - Knowledge base for the chatbot

## 🔄 Component Flow

```
App.js
├── CompanyBanner
├── Navigation
│   └── DarkModeToggle
├── Hero (section)
│   ├── ParticleBackground
│   ├── TypeWriter
│   ├── GradientText
│   ├── HeroStats
│   ├── HeroHighlights
│   ├── HeroButtons
│   └── SocialLinks
├── About (section)
│   ├── ValueProposition
│   ├── AchievementCards
│   │   └── TiltCard (for each card)
│   └── Differentiators
├── Skills (section)
│   └── SkillsCategory (x2)
│       └── SkillBar (multiple)
├── Experience (section)
│   └── Timeline (x3)
│       └── TimelineItem (multiple)
├── Contact (section)
│   ├── ContactInfo
│   │   └── ContactCard (x3)
│   └── ContactForm
├── TechStackMarquee
├── Footer
└── AIChat
```

## 💡 Benefits of This Structure

1. **Modularity** - Each component has a single, clear responsibility
2. **Reusability** - Components can be easily reused across different sections
3. **Maintainability** - Easier to find and update specific functionality
4. **Testability** - Small components are easier to test
5. **Readability** - Clear file names and organization
6. **Scalability** - Easy to add new components or sections

## 🛠️ Usage Examples

### Using a Component

```javascript
import HeroStats from '../components/HeroStats';

function MySection() {
  return (
    <div>
      <HeroStats />
    </div>
  );
}
```

### Using Creative Effects

```javascript
import { TypeWriter, GradientText, TiltCard } from '../common/CreativeEffects';

function MyComponent() {
  return (
    <>
      <TypeWriter texts={["Hello", "World"]} speed={100} />
      <GradientText animate>Beautiful Text</GradientText>
      <TiltCard>
        <div>3D Tilt Effect!</div>
      </TiltCard>
    </>
  );
}
```

### Using Custom Hooks

```javascript
import { useScrollReveal } from '../common/hooks';

function MyComponent() {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <div ref={ref}>
      {isVisible && <p>I'm visible!</p>}
    </div>
  );
}
```

## 🎨 Styling

- Component-specific styles remain in their respective CSS files
- Shared styles are in `common/CreativeEffects.css`
- Global styles are in `App.css`

## 📝 Best Practices

1. Keep components small and focused
2. Use props for customization
3. Extract reusable logic into hooks
4. Keep data and configuration in `/common`
5. Use descriptive component names
6. Add PropTypes or TypeScript for type safety (future enhancement)

## 🚀 Future Enhancements

- Add PropTypes or migrate to TypeScript
- Add unit tests for components
- Create Storybook documentation
- Add lazy loading for sections
- Implement code splitting

