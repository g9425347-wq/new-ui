---
name: 'Add Icon to UI Controls Library'
description: 'Create and integrate a new SVG icon into the icon system'
when: 'Adding new icons to the icon library'
---

# Add Icon to UI Controls Library

Reusable workflow for creating and integrating new SVG icons into the uicontrols component system.

## Workflow

### Step 1: Design the Icon SVG Path

-   Create an SVG icon design with a consistent `viewBox="0 0 24 24"` (standard size)
-   Design should follow Material Design or similar icon conventions
-   Ensure the path uses `fill="currentColor"` for theme compatibility

### Step 2: Add Icon to Icons.tsx

**File:** `src/components/IconProvider/icons/Icons.tsx`

1. Find the correct alphabetical position for your icon (search for nearby icon names)
2. Add your icon symbol in **alphabetical order** among other icons:
    ```xml
    <symbol viewBox="0 0 24 24" id="your-icon-name">
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z..." />
    </symbol>
    ```
3. Use kebab-case for the id (e.g., `"environment"`, `"my-icon"`)
4. **CRITICAL:** Icons are organized alphabetically in this file!

### Step 3: Update IconType Union

**File:** `src/components/Icon/IconType.ts`

1. Open the IconType file
2. Add your icon name to the union type in **alphabetical order**
3. Format: `| 'your-icon-name'`

### Step 4: Update Storybook Options

**File:** `src/components/Icon/Icon.stories.tsx`

1. Open the stories file
2. Add your icon name to the `argTypes.name.options` array in **alphabetical order**
3. Format: `'your-icon-name',`

## Checklist

-   [ ] SVG icon path created with `viewBox="0 0 24 24"`
-   [ ] Icon added to Icons.tsx in **alphabetical order**
-   [ ] Icon name added to IconType.ts in **alphabetical order**
-   [ ] Icon name added to Icon.stories.tsx in **alphabetical order**
-   [ ] Icon appears in Storybook dropdown
-   [ ] Icon renders correctly in the UI

## Example

Adding an 'environment' icon:

1. **Icons.tsx**: Added `<symbol viewBox="0 0 24 24" id="environment">` between `id="email"` and `id="error"` (alphabetical order)
2. **IconType.ts**: Added `| 'environment'` between `'email'` and `'error'`
3. **Icon.stories.tsx**: Added `'environment'` to options between `'email'` and `'error'`

## Tips

-   Keep icon ids in kebab-case (lowercase with hyphens)
-   **Maintain alphabetical order in ALL three files:** Icons.tsx, IconType.ts, and Icon.stories.tsx
-   Test the icon in Storybook to verify it renders correctly
-   Use `fill="currentColor"` to allow theme color customization
-   Consistent viewBox size makes icons scale predictably
