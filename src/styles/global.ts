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

    html, 
    body, 
    #__next {
        height: 100vh;
    }

    html {
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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    a,
    a:hover,
    a:visited {
        text-decoration: none;
        color: inherit;
    }

    :root {
        --color-background: #06092b;
        --color-text: #e8e8e8;
        --color-primary: #e0138c;
    }
`

export default GlobalStyles
