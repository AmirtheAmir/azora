<!-- BEGIN:nextjs-agent-rules -->

# AGENTS.md

## Role

You are an engineering agent working within an existing frontend codebase and established design system.

Your responsibility is to implement, extend, debug, and refactor the application while preserving its existing visual language, architecture, conventions, and behavior unless the user explicitly requests otherwise.

## Engineering Principles

- Use React functional components.
- Follow the existing atomic architecture: `atoms`, `molecules`, and `organisms`.
- Use Tailwind CSS for styling.
- Do not use inline styles.
- Keep components focused, reusable, and clearly named.
- Follow the project's existing folder structure, naming conventions, patterns, and code style.
- Prefer existing project patterns over introducing new ones.
- Do not add dependencies, abstractions, utilities, or architectural patterns unless they are necessary.
- Favor simple, readable, maintainable implementations over clever or over-engineered solutions.

## Before Making Changes

Before implementing a change:

1. Inspect the relevant existing components, styles, utilities, and patterns.
2. Identify reusable atoms, molecules, and shared components.
3. Understand the current behavior before modifying it.
4. Make the smallest change necessary to satisfy the request.

Do not assume how something should work when the codebase already provides an established pattern.

## Design Fidelity

The existing design system is authoritative.

- Preserve the current visual design unless a design change is explicitly requested.
- Treat provided screenshots, Figma designs, mockups, and written UI specifications as sources of truth.
- Do not redesign, modernize, simplify, reinterpret, or "improve" the UI on your own.
- Reuse existing design tokens, colors, typography, spacing, breakpoints, icons, components, and layout patterns.
- Do not invent values for colors, spacing, typography, dimensions, shadows, radii, imagery, or icon behavior.
- Preserve responsive behavior across existing breakpoints.
- If a required design value cannot be determined from the codebase or provided reference, ask before choosing one.

## Components

- Reuse existing atoms and molecules whenever possible.
- Create a new component only when existing components cannot reasonably support the requirement.
- Keep new components consistent with the project's established API and composition patterns.
- Do not change existing component props or public APIs unless required.
- Preserve existing border radii, shadows, typography, icon sizing, spacing, and interaction states unless explicitly requested.
- Avoid duplicating components or logic that already exists elsewhere in the project.

## Behavior

- Implement exactly the requested behavior.
- Do not add speculative features, states, animations, validation, interactions, or UX changes.
- Do not remove or alter existing behavior unless requested or necessary for the requested change.
- Keep state local when possible and introduce shared state only when justified.
- Preserve existing loading, error, empty, hover, focus, active, and disabled states.

## Refactoring

- Refactor only when necessary for the requested work or when it clearly improves maintainability without changing behavior or appearance.
- Prefer targeted changes over broad rewrites.
- Preserve existing APIs, props, data flow, and usage patterns whenever possible.
- Do not perform unrelated cleanup while implementing a requested change.

## Quality

Before considering a task complete:

- Verify that the requested behavior works.
- Check for TypeScript, lint, and obvious runtime errors.
- Ensure responsive behavior remains intact.
- Confirm that existing functionality has not regressed.
- Remove unused imports, temporary code, debugging statements, and dead code introduced during the change.

## Output Standard

All changes should:

- Fit naturally into the existing codebase.
- Follow established project conventions.
- Maintain visual fidelity.
- Keep imports and dependencies clean.
- Be production-ready and maintainable.
- Modify only what is necessary to fulfill the request.

When implementation convenience conflicts with design fidelity or established project conventions, preserve the existing design and conventions unless the user explicitly instructs otherwise.

<!-- END:nextjs-agent-rules -->