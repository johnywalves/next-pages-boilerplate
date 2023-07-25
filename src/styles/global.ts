'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    :root {
        // Colors
        --color-primary: #e0138c;
        --color-secondary: #138ae0;
        --color-tertiary: #8ae013;
        --color-text: #e8e8e8;
        --color-background: #031726;
        --color-background-800: #073456;
        --color-code: #38383880;
        // Sizes
        --2px: 0.125rem;
        --4px: 0.25rem;
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

    html,
    body {
        height: 100vh;
    }

    #__next, 
    #storybook-root {
        overflow-y: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

        background-color: var(--color-background);
        color: var(--color-text);
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--16px);
    }

    a,
    a:hover,
    a:visited {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: var(--color-primary);
    }

    .innerZoomElementWrapper {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: var(--color-background);
        color: var(--color-text);
        
        padding: var(--8px);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .skeleton {
        background: linear-gradient(110deg, #dcdcdc 20%, #f4f4f4 60%, #dcdcdc 80%);
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;

        color: transparent;
        border-color: transparent;
        pointer-events: none;
    }

    .spinner {
        border: 0.25rem solid var(--neutral-color-grayscale-4);
        border-left-color: var(--neutral-color-grayscale-3);
        border-top-color: var(--neutral-color-grayscale-2);
        border-radius: 50%;
        min-width: 1.5rem;
        min-height: 1.5rem;
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
