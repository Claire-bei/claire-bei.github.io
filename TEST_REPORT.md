# V6 implementation & verification — 2026-10-11

## Passed — static/source tests
- All seven published publications found in DOM and all seven have present local thumbnail assets.
- All titles and DOI/Article destinations preserved.
- Both title icons use existing, local SVG images.
- Education entries have university-official remote seal URLs plus fallback text, without AI-generated crests.
- Publications explanatory subtitle removed.
- Original International Eye Science Figure 2B and vortex-vein Figure 1B from the same source paper are correctly attributed.
- Existing publication-filter.js compiled successfully. Topic count and 32 subsets of five topics passed AND-logic checks using exact DOM article tags.
- Existing JS file for navigation/copy email compiled successfully.
- All remaining relative img, CSS, JS and download paths resolve to packaged local files.
- Original publication filter controls, clear button, reset button, empty placeholder and separately listed manuscripts remain in DOM.
- Static renderer output inspected for key sections.

## Not fully verified
- Browser-style layout and mouse/keyboard click tests of **this V6** could not be completed: Chrome administrator URL access policy blocked both file:// and localhost pages in this runtime.
- Offline university logo loading is not supported: official university logo files could not be retrieved. URLs remain online links with fallback text.
- Third-party DOI links, live demo, and school hotlink images require normal internet browser verification.
- Please verify publisher rights and patient privacy before uploading scientific figures publicly.

## Deployment state
- Review ZIP only. GitHub branch and live public website left untouched.

## V7 targeted changes

- Local university emblems for all four education/teaching entries, with `object-fit: contain` (no crop) and no hotlinked logo images.
- Selected Projects uses a local folder SVG; unchanged Research Skills icon.
- Check completed with static markup and asset existence assertions; browser validation to be recorded separately.

## V7 verified (inline-assets Chromium headless)

The current execution environment blocks direct `file://` browser navigation. To test the exact HTML/CSS/JavaScript behaviour, the local CSS, JS, and images were inlined into the HTML for an offline browser rendering run. This is not a test of external network links.

- Headless Chromium preview rendered Education, Teaching, Selected Projects at 1440 px and the first two sections at 375 px. All four local emblem images loaded after lazy-loading was triggered.
- No horizontal document overflow at widths 320, 375, 768, 1024, 1440 px.
- Selected Projects folder SVG rendered with 28px intrinsic display width.
- All seven published articles visible on initialization, five topic selectors appeared, and every one of the 32 possible AND filter combinations returned its expected count; Clear filters restored seven. Seven article titles retained external article URLs.
- New local emblem paths verified in the actual ZIP packaging.

**Not tested:** opening any external DOI/Streamlit links or network deployment.
