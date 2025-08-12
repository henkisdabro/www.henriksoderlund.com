# 🚨 **HYAS → THULITE MIGRATION PLAN**

Based on comprehensive research and validation from multiple sub-agents, here's the **systematic migration plan** that addresses all identified risks and technical concerns:

---

## ⚠️ **CRITICAL FINDINGS FROM VALIDATION**

1. **Hugo v0.146.0 Template System Rewrite** - Major breaking changes to template lookup
2. **Bootstrap SCSS Structural Changes** - Requires specific import order
3. **GTM Server-Side Integration** - Highest complexity, needs dedicated testing
4. **Image Processing Migration** - @hyas/images deprecated, complex replacement
5. **Cloudflare Pages Compatibility** - Requires specific environment configuration

---

## 🎯 **RECOMMENDED MIGRATION STRATEGY**

### **APPROACH: "Staged Migration with Incremental Testing"**
Instead of a single migration, we'll use a **multi-stage approach** to minimize risk:

1. **Stage 1**: Hugo Compatibility Testing (CRITICAL)
2. **Stage 2**: Fresh THULITE Environment Setup  
3. **Stage 3**: Content & Asset Migration
4. **Stage 4**: Template System Migration
5. **Stage 5**: GTM Integration Migration
6. **Stage 6**: Deployment & Production Cutover

---

## 📋 **DETAILED EXECUTION PLAN**

### **STAGE 1: HUGO COMPATIBILITY TESTING** ⚠️ *MUST DO FIRST*

**Why**: Hugo v0.146.0 template system rewrite could break your site

```bash
# Test current site with new Hugo version
git checkout -b hugo-compatibility-test

# Install Hugo 0.148.1 locally
# Update package.json temporarily
npm install hugo-installer@latest
npm run build  # Test if current site builds
```

**Critical Tests**:
- [ ] All templates compile without errors
- [ ] GTM snippets work correctly
- [ ] Image processing functions
- [ ] Shortcodes render properly
- [ ] Build completes successfully

**IF STAGE 1 FAILS**: Fix compatibility issues before proceeding

---

### **STAGE 2: STAGING ENVIRONMENT SETUP**

**2.1 Create Fresh THULITE Project**
```bash
cd ../
npm create thulite@latest henriksoderlund-thulite-staging
cd henriksoderlund-thulite-staging
npm install @thulite/images @thulite/seo
```

**2.2 Cloudflare Pages Staging Setup**
- Create new CF Pages project: `henriksoderlund-staging`
- Environment variables:
  ```
  NODE_VERSION = 20.11.0
  HUGO_VERSION = 0.148.1
  HUGO_ENV = staging
  ```

---

### **STAGE 3: CONTENT & CONFIGURATION MIGRATION**

**3.1 Direct Content Transfer** (Low Risk)
```bash
# Copy content and static assets
cp -r ../www.henriksoderlund.com/content ./content
cp -r ../www.henriksoderlund.com/static ./static
cp -r ../www.henriksoderlund.com/data ./data
cp -r ../www.henriksoderlund.com/assets/images ./assets/
cp -r ../www.henriksoderlund.com/assets/fonts ./assets/
```

**3.2 Configuration Migration** (High Risk)
- [ ] **config.toml**: Migrate Hugo settings, adapt output formats
- [ ] **params.toml**: CAREFULLY migrate GTM configuration
- [ ] **markup.toml**: Update for new Hugo version
- [ ] **module.toml**: Update @hyas/ → @thulite/ mounts

---

### **STAGE 4: TEMPLATE SYSTEM MIGRATION** (Highest Risk)

**4.1 Bootstrap SCSS Migration**
```scss
// Update assets/scss/app.scss with required import order
@import "bootstrap/scss/functions";
@import "common/variables";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";  // NEW REQUIRED IMPORT
@import "bootstrap/scss/bootstrap";
```

**4.2 Template Migration Priority Order**:
1. **baseof.html** - Core template framework
2. **GTM partials** - Most complex integration
3. **Image render templates** - For @thulite/images compatibility
4. **Shortcodes** - Navigation and interactive elements
5. **Layout templates** - Page-specific layouts

**4.3 Critical Template Updates**:
- Update image processing parameters for @thulite/images
- Test template lookup with new Hugo system
- Verify GTM environment switching logic

---

### **STAGE 5: GTM INTEGRATION TESTING** (Dedicated Phase)

**5.1 GTM Configuration Backup**
- Export all GTM containers
- Document custom client templates
- Backup server-side GTM endpoint configuration

**5.2 Staged Testing Approach**:
- [ ] Test basic GTM functionality
- [ ] Verify server-side endpoint: `sgtm.henriksoderlund.com`
- [ ] Test custom library name: `dz4d7tyirczbv.js`
- [ ] Validate environment switching (dev/staging/production)
- [ ] Test data layer population
- [ ] Cross-browser testing

---

### **STAGE 6: DEPLOYMENT & PRODUCTION CUTOVER**

**6.1 Final Staging Validation**
- [ ] Performance baseline comparison
- [ ] Full functionality testing
- [ ] Mobile responsiveness check
- [ ] SEO metadata validation
- [ ] CSP compliance testing

**6.2 Production Migration**
```bash
# Merge to master branch
git checkout master
git merge migration-v3

# Update main Cloudflare Pages project
# Point to master branch
# Same custom domain (henriksoderlund.com)
```

**6.3 Post-Migration Monitoring**
- Monitor for 48 hours
- Check analytics continuity
- Validate GTM data collection
- Performance monitoring

---

## 🔄 **ROLLBACK STRATEGY**

1. **Immediate Rollback**: Cloudflare Pages previous deployment
2. **Branch Rollback**: Keep `hyas-backup` branch ready
3. **DNS Rollback**: No DNS changes needed (same domain)
4. **GTM Rollback**: GTM container version management

---

## ⏰ **REALISTIC TIMELINE**

- **Week 1**: Hugo compatibility testing & staging setup
- **Week 2**: Content migration & template system updates  
- **Week 3**: GTM integration testing & refinement
- **Week 4**: Final testing & production cutover

---

## 🎯 **SUCCESS CRITERIA**

- [ ] All functionality works identically to current site
- [ ] GTM tracking maintains data continuity
- [ ] Performance metrics maintained or improved
- [ ] SEO rankings and metadata preserved
- [ ] Mobile experience unchanged
- [ ] Build process reliable and fast

---

## 🚨 **GO/NO-GO DECISION POINTS**

**After Stage 1**: If Hugo compatibility fails → Fix before proceeding
**After Stage 4**: If templates don't work → Consider staying with HYAS
**After Stage 5**: If GTM breaks → Implement fallback GTM strategy

---

## **FINAL RECOMMENDATION**

This migration is **technically feasible but complex**. Your custom GTM implementation and image processing make this a **high-risk project**. 

**My recommendation**: 
1. **START with Stage 1 Hugo testing** - this will tell us if the migration is viable
2. **Budget 3-4 weeks** for complete migration
3. **Maintain staging environment** throughout process
4. **Have immediate rollback capability** at every stage

---

## **RESEARCH SOURCES**

- THULITE Repository: https://github.com/thuliteio/thulite
- Migration Discussion: https://github.com/orgs/thuliteio/discussions/493
- Official Upgrade Guide: https://docs.thulite.io/guides/upgrade-to/v2/

---

## **TECHNICAL ANALYSIS SUMMARY**

### **Current HYAS Setup**
- Hugo 0.101.0 (requires upgrade to 0.148.1+)
- Node.js 16.16.0 (requires upgrade to 20.11.0+)
- Bootstrap 5.2.0-beta1 (requires stable version)
- Complex GTM server-side integration
- Custom image processing with @hyas/images

### **Key Breaking Changes**
1. Hugo template system rewrite in v0.146.0
2. Bootstrap SCSS import structure changes
3. @hyas/images → @thulite/images migration
4. Package namespace changes (@hyas → @thulite)
5. Module mount configuration updates

### **Deployment Considerations**
- Currently using Cloudflare Pages (not Netlify despite config files)
- Complex CSP headers with GTM domains
- Custom redirects and headers via Hugo output formats
- Environment variable configuration for Node.js/Hugo versions