# Casa Brava - Restaurant Website

A fully functional modern restaurant website built with React + Vite for the fictional upscale Mexican restaurant "Casa Brava".

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between color schemes
- **Smooth Scrolling**: Enhanced user navigation
- **Back-to-Top Button**: Easy access to top of page
- **Complete Restaurant Sections**:
  - Navbar with mobile menu
  - Hero section with call-to-action
  - Featured dishes with filtering
  - Full menu with dietary tags
  - Reservation form with validation
  - Tip calculator
  - About section with chef highlight
  - Customer testimonials
  - Photo gallery
  - Daily specials
  - Newsletter signup
  - Contact information with map placeholder
  - Comprehensive footer

## Tech Stack

- React 18 with TypeScript
- Vite for fast development
- CSS Modules for styling
- Responsive design with mobile-first approach
- Form validation with React hooks
- Local state management

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── types/          # TypeScript interfaces
├── utils/          # Utility functions
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Components

### Navbar
- Responsive navigation with mobile hamburger menu
- Dark/light mode toggle
- Smooth scrolling navigation links

### Hero
- Eye-catching hero section with gradient background
- Call-to-action buttons for reservations and menu

### Featured Dishes
- Filterable dish cards by category
- Dietary tags (Vegan, Spicy, Gluten-Free)
- Placeholder images with shimmer effect

### Menu
- Organized by category (Appetizers, Main Dishes, Desserts, Beverages)
- Dietary tags for each item
- Clear pricing

### Reservations
- Comprehensive reservation form
- Form validation for all fields
- Success message on submission
- Indoor/outdoor seating options

### Tip Calculator
- Calculate tip amount based on bill
- Predefined tip percentages (10%, 15%, 18%, 20%)
- Custom tip option
- Split bill functionality
- Real-time calculations

### About
- Restaurant story and history
- Chef highlight with bio
- Opening hours display

### Extras
- Daily special highlight with discount
- Customer testimonials with ratings
- Photo gallery
- Newsletter signup with validation

### Contact
- Contact information (address, phone, email)
- Social media links
- Map placeholder

### Footer
- Restaurant name and description
- Quick navigation links
- Opening hours summary
- Copyright information

## Design Elements

- Warm, elegant color scheme with browns, golds, and beiges
- Playfair Display for headings and Open Sans for body text
- Subtle animations and hover effects
- Card-based layout with shadows
- Consistent spacing and typography
- Accessible form elements with proper labeling

## Customization

To customize the restaurant information:
1. Update the restaurant name in `src/components/Navbar.tsx`
2. Modify menu items in `src/components/Menu.tsx`
3. Update contact information in `src/components/Contact.tsx`
4. Change hours in `src/components/About.tsx` and `src/components/Footer.tsx`
5. Update testimonials in `src/components/Extras.tsx`

## Browser Support

This website supports all modern browsers including:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Accessibility

- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Sufficient color contrast
- Responsive design for all screen sizes

## Performance

- Optimized for fast loading
- Minimal dependencies
- Efficient React component structure
- CSS animations instead of JavaScript where possible

## License

This project is open source and available under the MIT License.