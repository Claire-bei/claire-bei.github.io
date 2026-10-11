# Bei Xiao — Academic Portfolio V7 (review-only)

This incremental website rebuild preserves the original GitHub Pages identity (campus header, portrait, information and project sections) and does not update the deployed GitHub site.

## Review

Unzip the archive and open `index.html` in a browser. Keep all `.css`, `.js` and the `assets` directory adjacent to the HTML file. The website is pure static HTML/CSS/JS and has no build step.

## V6 changes

1. Added **reliable local SVG icon assets** before Selected Projects and Research Skills. Original Arial sans-serif typography is unchanged.
2. The preceding V6 used external school seal URLs; **V7 replaces them with local user-supplied PNG files** (see V7 notes).
3. Removed the short explanatory subtitle under Publications.
4. Added an authentic thumbnail from **Figure 2B**, Xiao et al., *International Eye Science* 2024, from the six-page PDF supplied by the user.
5. Replaced the vortex-vein review's text-page screenshot with authentic vortex-vein **Figure 1B from the separate International Eye Science paper** (because the review itself lacks an original clinical figure). Clearly credited in the image title/alt and `IMAGE_CREDITS.md`.
6. Maintained original seven published papers, article/DOI links, publication topic filtering, manuscripts, demo URL and original CV.

## Important limitations

- All four university emblems are **bundled as local files** and do not depend on external image servers. Sources are user-supplied; verify institutional permissions before public deployment.
- Some original published illustrations may require publisher consent or image-reuse compliance before public deployment. The ZIP is a review package, not permission to republish.
- A recent machine-wide Chromium policy currently blocks local page navigation, so this iteration used static renderer inspection, source validation and 32-unit tests of unchanged publication filter logic. **No claim is made that V6 passed live browser click or responsive interaction tests.** Earlier V5 screenshots remain reference material but are not a substitute for V6 browser QA.
- External DOI, public Streamlit demo and remote seal URLs should be checked in a network-enabled browser before deployment.

## Publication filtering contract

- 7 published articles are visible by default.
- Counts are computed from each paper's data-tags.
- Multiple filters combine with AND; selected labels and paper tags highlight together.
- Showing X / 7, clear/reset, empty-state messaging, and separate submitted manuscripts are preserved in `publication-filters.js`.

## Files

- `index.html`, `styles.css`, `final-overrides.css`, `v5-tweaks.css`, `v6-fixes.css`
- `script.js`, `publication-filters.js`
- `assets/` (photos, scientific thumbnails, local title icons, CV)
- `IMAGE_CREDITS.md`, `TEST_REPORT.md`, `ATTRIBUTION.md`

No GitHub main branch changes were made.

## V7: Final supplied school emblems and folder icon

- Replaced all four remote school-emblem image URLs with local PNG files supplied by the user. Southern Medical University uses the new 1080 × 1012 image. Original image pixels are preserved; CSS uses `object-fit: contain` and non-circular transparent wrappers so the full emblem is visible.
- Education: Southern Medical University, Hubei University of Science and Technology.
- Teaching Experience: Guangzhou Xinhua University, Guangzhou Huali College.
- Replaced the developer-oriented code icon in Selected Projects with a restrained local folder-open SVG.
- No changes to the About, Research Experience, Projects text, seven Publications, article thumbnails, topic filter, manuscript status, CV, or demo links. No remote school-emblem dependencies remain.
- The emblem images were provided by the user; provenance / logo permission must still be checked before public deployment.
