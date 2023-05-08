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
        --color-text: #e8e8e8;
        --color-background: #031726;
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

    body, 
    #storybook-root {
        overflow-y: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

        background-color: var(--color-background);
        color: var(--color-text);
        width: 100%;
        min-height: 100%;
        padding: var(--30px);
        text-align: center;

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
`

export default GlobalStyles
