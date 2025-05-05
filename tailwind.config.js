// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      'bg-background',
      'text-foreground',
      'bg-card',
      'text-card-foreground',
      'bg-primary',
      'text-primary-foreground',
      'bg-secondary',
      'text-secondary-foreground',
      'bg-muted',
      'text-muted-foreground',
      'bg-accent',
      'text-accent-foreground',
      'border-input',
      'border-border',
      'ring-ring',
      'bg-sidebar',
      'text-sidebar-foreground',
      'bg-sidebar-primary',
      'text-sidebar-primary-foreground',
      'bg-sidebar-accent',
      'text-sidebar-accent-foreground',
      'border-sidebar-border',
      'ring-sidebar-ring',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  