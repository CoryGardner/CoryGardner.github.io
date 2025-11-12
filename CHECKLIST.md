# Implementation Checklist

Use this checklist to ensure smooth deployment of your redesigned website.

## Pre-Deployment

- [ ] **Backup current site**
  ```bash
  git checkout -b backup-original
  git push origin backup-original
  git checkout main
  ```

- [ ] **Create local test branch**
  ```bash
  git checkout -b redesign-test
  ```

- [ ] **Download all redesign files** to your local repository

## File Upload Checklist

### Root Directory
- [ ] Replace `index.md`

### _pages Directory
- [ ] Replace `cv.md`
- [ ] Replace `publications.md`
- [ ] Replace `research.md`
- [ ] Replace `teaching.md`

### assets/css Directory
- [ ] Replace `custom.scss`

### assets/js Directory (New!)
- [ ] Create `js` folder if it doesn't exist: `mkdir -p assets/js`
- [ ] Add `custom.js`

## Content Updates Needed

### index.md
- [ ] Update stats counter values (publications, years, projects, courses)
- [ ] Update recent news section with your latest updates
- [ ] Verify all links work

### _pages/research.md
- [ ] Add any new research projects
- [ ] Update project statuses (Active/Completed)
- [ ] Verify all publication links work
- [ ] Add proper anchors/IDs if referenced from homepage

### _pages/publications.md
- [ ] Ensure all publications are listed
- [ ] Verify DOI links are correct
- [ ] Check publication dates

### _pages/cv.md
- [ ] Update PDF CV link (line 10): `/assets/files/Gardner_CV_1June2025.pdf`
- [ ] Verify timeline dates
- [ ] Update skill percentages if needed
- [ ] Add any new experience or awards

### _pages/teaching.md
- [ ] Update course list if needed
- [ ] Update student statistics
- [ ] Verify all course descriptions

## Testing Checklist

### Local Testing (if using Jekyll locally)
- [ ] Run `bundle exec jekyll serve`
- [ ] Check all pages load without errors
- [ ] Test all internal links
- [ ] Verify animations work
- [ ] Test filtering functionality
- [ ] Check mobile responsiveness

### After GitHub Deployment
- [ ] **Wait 2-3 minutes** for GitHub Pages to rebuild
- [ ] **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Test homepage animations
  - [ ] Particle background loads
  - [ ] Stats counter animates on scroll
  - [ ] Hero section displays correctly
- [ ] Test Research page
  - [ ] Filter buttons work
  - [ ] All projects display
  - [ ] Hover effects work
- [ ] Test Publications page
  - [ ] Filter buttons work
  - [ ] DOI links work
  - [ ] Award badges display
- [ ] Test CV page
  - [ ] Timeline displays correctly
  - [ ] Skill bars animate
  - [ ] PDF download link works
- [ ] Test Teaching page
  - [ ] Cards display properly
  - [ ] Philosophy section readable

### Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android

### Responsive Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

## Common Issues & Solutions

### Issue: Styles not applying
**Solution:**
1. Force refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Check that `custom.scss` is in the correct location
3. Verify `main.css` imports custom styles

### Issue: Particles not showing
**Solution:**
1. Check browser console for errors
2. Verify CDN link is accessible
3. Ensure JavaScript is enabled

### Issue: Animations not working
**Solution:**
1. Verify `custom.js` is loading (check Network tab)
2. Look for JavaScript errors in console
3. Check that particle.js CDN loaded first

### Issue: Filters not working
**Solution:**
1. Verify data attributes match between buttons and cards
2. Check JavaScript console for errors
3. Clear cache and reload

## Post-Deployment

- [ ] Share new site with colleagues for feedback
- [ ] Update CV PDF with link to new site
- [ ] Update LinkedIn/academic profiles with new URL
- [ ] Monitor GitHub Pages build status for any issues
- [ ] Check site analytics after a few days

## Optional Enhancements (Future)

- [ ] Enable dark mode toggle (uncomment in `custom.js`)
- [ ] Add blog section
- [ ] Implement site search
- [ ] Add Google Analytics
- [ ] Create automated publication import from ORCID
- [ ] Add RSS feed for news updates

## Git Commands Reference

```bash
# View changes
git status
git diff

# Stage changes
git add .

# Commit changes
git commit -m "Redesign website with Scientific Minimal theme"

# Push to GitHub
git push origin main

# If you want to merge test branch later
git checkout main
git merge redesign-test
git push origin main

# Delete test branch after merge
git branch -d redesign-test
```

## Quick Customization Tips

### Change primary color:
Edit `--primary-blue` in `assets/css/custom.scss`

### Adjust particle density:
Edit `number.value` in `assets/js/custom.js`

### Add new research project:
Copy existing `.research-card-enhanced` div in `research.md`

### Update stats:
Change `data-target` values in stat cards in `index.md`

---

## Need Help?

1. Check the README.md for detailed documentation
2. Review browser console for error messages
3. Compare your files with the provided files
4. Test in incognito/private window to rule out cache issues

---

**Estimated Time to Deploy:** 30-45 minutes  
**Estimated Time for Full Testing:** 15-20 minutes

Good luck with your deployment! 🚀
