# Website Redesign - Implementation Guide

## Overview

This is a comprehensive redesign of your academic website with a **Scientific Minimal** theme featuring:
- **Color Scheme**: Crisp blue (#2563EB), Charcoal (#2D3748), Teal (#14B8A6), and Coral (#F97316)
- **Animated particle.js background** on the hero section
- **Interactive filtering** for research projects and publications
- **Animated statistics counters**
- **Enhanced visual hierarchy** with modern card designs
- **Smooth animations** and hover effects throughout
- **Mobile-responsive** design

---

## Files Included

```
.
├── index.md                      # Enhanced homepage with hero section
├── _pages/
│   ├── cv.md                     # CV with timeline and skill visualizations
│   ├── publications.md           # Publications with filtering and metrics
│   ├── research.md               # Research projects with card grid
│   └── teaching.md               # Teaching experience with philosophy
├── assets/
│   ├── css/
│   │   └── custom.scss           # All custom styles
│   └── js/
│       └── custom.js             # Interactive features and animations
```

---

## Installation Instructions

### Step 1: Backup Your Current Site
Before making changes, backup your existing repository:
```bash
git checkout -b backup-original
git push origin backup-original
```

### Step 2: Upload New Files

1. **Replace `index.md`** in your root directory
2. **Replace all files in `_pages/`** directory
3. **Replace `assets/css/custom.scss`**
4. **Add `assets/js/custom.js`** (new file)

### Step 3: Verify Dependencies

Your `_config.yml` already includes the necessary plugins. Just verify particle.js is loaded by checking that the homepage includes this script tag (it's already in the new `index.md`):

```html
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script src="{{ site.url }}/assets/js/custom.js"></script>
```

### Step 4: Deploy

```bash
git add .
git commit -m "Redesign website with Scientific Minimal theme"
git push origin main
```

Your site will rebuild automatically on GitHub Pages in 2-3 minutes.

---

## New Features

### 🎨 Homepage Features

1. **Animated Hero Section**
   - Particle.js network animation background
   - Large name/title with gradient background
   - Research area tags

2. **Stats Counter**
   - Animated numbers counting up on scroll
   - Publications, years of research, projects, courses taught

3. **Introduction Highlights**
   - Three main research focus areas
   - Icon-based cards with hover effects

4. **Featured Research**
   - Gradient cards showcasing key projects
   - Links to detailed research page sections

5. **Recent News Timeline**
   - Clean, scannable format
   - Date-based organization

### 🔬 Research Page Features

1. **Filter Buttons**
   - Filter projects by: All, Machine Learning, Genomics, HPC
   - Smooth transitions between filters

2. **Enhanced Research Cards**
   - Color-coded icons by category
   - Technology tags
   - Status badges (Active/Completed)
   - Publication links where applicable
   - Award indicators

3. **Impact Section**
   - Highlights research contributions

### 📚 Publications Page Features

1. **Publication Filtering**
   - Filter by: All, Journal Articles, Conference Papers
   - Visual badges for publication type

2. **Enhanced Publication Cards**
   - Clean, modern layout
   - Direct DOI links
   - Award ribbons for recognized work
   - Year indicators

3. **Research Metrics Grid**
   - Visual statistics dashboard
   - Total publications, journals, conferences, awards

4. **Collaboration Network**
   - Interactive institution/topic tags

### 📄 CV Page Features

1. **Visual Timeline**
   - Color-coded markers for each degree/training
   - Expandable content cards
   - Chronological flow

2. **Animated Skill Bars**
   - Programming languages with percentage indicators
   - Smooth fill animation on scroll

3. **Technology Badges**
   - Frameworks, tools, bioinformatics packages
   - Hover effects

4. **Experience Cards**
   - Detailed role descriptions
   - Date ranges
   - Bullet-point responsibilities

5. **Awards Section**
   - Icon-based display
   - Gradient backgrounds

### 👨‍🏫 Teaching Page Features

1. **Teaching Cards Grid**
   - Course-specific cards with icons
   - Role designation
   - Technology tags

2. **Teaching Philosophy**
   - Four core principles
   - Visual icon representation

3. **Impact Statistics**
   - Students taught, courses, lab hours

4. **Student Resources Section**
   - Available support services

---

## Customization Guide

### Changing Colors

Edit the CSS variables in `assets/css/custom.scss`:

```scss
:root {
  --primary-blue: #2563EB;      // Main brand color
  --primary-charcoal: #2D3748;  // Text color
  --accent-teal: #14B8A6;       // Secondary accent
  --accent-coral: #F97316;      // Tertiary accent
  // ... etc
}
```

### Adjusting Particle Animation

Edit the particle.js configuration in `assets/js/custom.js`:

```javascript
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,  // Number of particles (increase/decrease)
      // ...
    },
    // ... other settings
  }
});
```

### Modifying Stats Counter

Change the counter values in `index.md`:

```html
<div class="stat-number" data-target="4">0</div>  <!-- Change "4" to your value -->
```

### Adding Research Projects

Add new projects to `_pages/research.md`:

```html
<div class="research-card-enhanced" data-category="ml">  <!-- Set category: ml, genomics, or hpc -->
  <div class="card-icon ml-icon">
    <i class="fas fa-brain"></i>  <!-- Choose icon -->
  </div>
  <h3>Project Title</h3>
  <!-- ... rest of card content -->
</div>
```

---

## Browser Compatibility

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## Performance

The redesign maintains excellent performance:
- Lazy loading for animations
- Efficient CSS with minimal repaints
- CDN-hosted particle.js library
- Optimized for GitHub Pages

---

## Optional Enhancements

### Dark Mode (Currently Commented Out)

To enable dark mode, uncomment the dark mode section in `assets/js/custom.js` (lines marked with comments).

### Additional Icons

The site uses Font Awesome icons (already included via minimal-mistakes theme). You can browse icons at: https://fontawesome.com/icons

---

## Troubleshooting

### Styles Not Applying
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Verify `custom.scss` is in `assets/css/` directory
3. Check that `assets/css/main.css` imports custom.scss

### Particles Not Showing
1. Check browser console for JavaScript errors
2. Verify CDN link is accessible: https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js
3. Ensure `custom.js` is loading after particle.js

### Animations Not Working
1. Check that `custom.js` is being loaded
2. Verify no JavaScript errors in console
3. Test in different browser

### Filters Not Working
1. Ensure proper `data-filter` and `data-category` attributes
2. Check JavaScript console for errors
3. Verify button class names match script selectors

---

## Support

For questions or issues:
1. Check GitHub Pages build status
2. Review browser console for errors
3. Verify all files are correctly uploaded
4. Compare with original file structure

---

## Credits

**Design Theme**: Scientific Minimal  
**Technologies**: Jekyll, Minimal Mistakes, Particle.js, Font Awesome  
**Color Palette**: Custom designed for bioinformatics/HPC aesthetic

---

## Next Steps

After deployment, consider:
1. Adding a blog section for research updates
2. Creating a publications RSS feed
3. Adding Google Analytics
4. Implementing a search feature
5. Creating downloadable CV PDF (update link in cv.md)

Enjoy your new professional academic website! 🎉
