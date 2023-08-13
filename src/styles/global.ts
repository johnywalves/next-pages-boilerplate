import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    // CSS Variables 
    :root {
        // Colors - Primary
        --color-primary-pure: #e0138c;
        --color-primary-half: #e0138c80;
        // Colors - Secondary
        --color-secondary-pure: #138ae0;
        --color-secondary-half: #138ae080;
        // Colors - Tertiary
        --color-tertiary-pure: #8ae013;
        --color-tertiary-half: #8ae01380;
        // Colors
        --color-danger: #ff0000;
        --color-shadow: #a4a4a480;
        // Colors - Neutral
        --color-neutral-100: #f5f5f5;
        --color-neutral-200: #e6e6e6;
        --color-neutral-300: #d4d4d4;
        --color-neutral-400: #a4a4a4;
        --color-neutral-500: #737373;
        --color-neutral-600: #525252;
        --color-neutral-700: #404040;
        --color-neutral-800: #272727;
        --color-neutral-900: #171717;
        // Sizes
        --2px: 0.125rem;
        --4px: 0.25rem;
        --8px: 0.5rem;
        --14px: 0.875rem;
        --16px: 1rem;
        --18px: 1.125rem;
        --20px: 1.25rem;
        --21px: 1.3125rem;
        --24px: 1.5rem;
        --25px: 1.5625rem;
        --30px: 1.875rem;
        --32px: 2rem;
        --250px: 15.625rem;
        --300px: 18.75rem;
        --320px: 20rem;
        --720px: 45rem;
    }

    // CSS Reset
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    a,
    a:hover,
    a:visited {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: var(--color-primary-pure);
    }

    // Global Container
    html,
    body {
        height: 100vh;
    }

    #__next, 
    #storybook-root {
        overflow-y: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

        background-color: var(--color-neutral-800);
        color: var(--color-neutral-100);

        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--16px);
    }
    
    .docs-story {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: var(--color-neutral-700);
        color: var(--color-neutral-100);
    }

    // Basic Elements
    select {
        padding: var(--4px) var(--16px) var(--4px) var(--4px);
        box-shadow: 0 0 4px 1px var(--color-shadow), 2px 2px 4px 1px var(--color-shadow);
        border: none;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
    }

    // Classes 
    .skeleton {
        background: linear-gradient(110deg, #dcdcdc 20%, #f4f4f4 60%, #dcdcdc 80%);
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;

        color: transparent !important;
        border-color: transparent !important;
        pointer-events: none;
    }

    .spinner {
        background-color: transparent;
        border: 0.25rem solid transparent;
        border-left-color: var(--color-neutral-200);
        border-top-color: var(--color-neutral-300);
        border-radius: 50%;

        width: 1.5rem;
        height: 1.5rem;

        animation: spin 1s linear infinite;
    }

    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`

export default GlobalStyles
