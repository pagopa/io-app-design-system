/**
DRAFT for an AUTOMATIC process to generate new icon components 
(`Icon....tsx`) from the SVG files exported from Figma.

Prerequisites:
- The icon must be exported from the 24 × 24 frame
- The icon must be saved with the final name
  - To learn more about naming conventions, please read the local README
*/

// STEPS:

/**
 * 1. Only process the newly added files
 *
 * Suggested path:
 * 1. Files that need to be processed must be in the `svg/originals` folder.
 * 2. Add a new file with the timestamp of the last process run.
 *    The file must be committed along with others.
 * 3. Only files added after that timestamp value will be processed.
 * 4. After the process run, update the new file with the current timestamp.
 */

/**
 * 2. Optimize SVG files with SVGO package (https://github.com/svg/svgo)
 *
 * Suggested path:
 * 1. Add `svgo` to the `package.json` to use it as an executable
 * 2. Configure it with the following parameters:
 *   - removeDimensions
 *   - removeRasterImages
 *   - removeScriptElement
 *   - removeViewBox (disabled)
 * 3. Overwrite the original files
 * 4. Optionally save the old ones in a `tmp` folder, which may be useful
 *    for debugging purposes.
 *    - Consider adding a `--debug' flag to the
 *      command to enable this behavior.
 *    - Add the `tmp` folder to `.gitignore` to keep the folder clean
 *  5. Check the files after the optimizations
 */

/**
 * 3. Create the relative React component (with .tsx)
 *
 * Suggested path:
 * - For every new SVG file:
 *   1. Copy all the code contained in the `<svg>` tag
 *   2. Use the file `_IconTemplate.tsx` as component template
 *      - Replace `IconTemplate` with the original SVG name
 *      - Remove all the comments inserted in the component file
 *   3. Replace the `{SVGContent}` placeholder with the code copied
 *      in the step 1, replacing all the tags with the appropriate
 *      React ones. E.g: `path` becomes `Path` and so on…
 *   4. Replace all the color values, set in hexadecimal format, with the
 *      `currentColor` attribute.
 *      E.g: fill="#CCCCCC" -> fill="currentColor"
 *   5. Save a new file in the `svg` folder with the same filename
 *      of the relative SVG file and extension `.tsx`.
 *      E.g: svg/originals/IconProfile.svg -> svg/IconProfile.tsx
 *   6. Save the list of processed SVG files and corresponding generated
 *      React components to a separate file. Add it to the `.gitignore`
 *      to keep the folder clean.
 */
