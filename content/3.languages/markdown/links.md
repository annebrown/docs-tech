---
title: Links
description: MD Link Types
lastModified: '2025-01-08'
---

## HTML Links

Inline link - `[Label Text](https://some.addy.com)`: [Label Text](https://some.addy.com)

Reference link

Can also be used to improve readability by moving URLs to bottom of page:

```markdown
See [Label Text][1] for more info.

Some page content.

Some more page content.

[1]: https://some.addy.com "Verbose Label"
```

Example:

See [Label Text][1] for more info.

[1]: https://some.addy.com "Verbose Label"

## Images

Inline image - `![Alt Text](https://annebrown.ca/logo.svg "Optional Title")`: ![Alt Text](https://annebrown.ca/logo.svg "Optional Title")

For readability - `![Alt Text][logo-ab]`: ![Alt Text][logo-ab]

## Footnotes

A `footnote[^1]`: footnote[^1] does not appear to have native support in Code.

## Comments

Square quoted comments do not hide text as expected -  `[Hidden stuff]()`: [Hidden stuff]()

Also without the link - `[Hidden stuff]`: [Hidden stuff]

## Placeholders

Placeholders like [TODO: Implement Feature X](javascript:void(0)) and [Link Coming Soon](#) are not working in Code.

## Hidden Stuff

[1]: https://some.addy.com "Verbose Label"
[logo-ab]: https://annebrown.ca/logo.svg "Optional Title"
[^1]: "This footnote text is hidden at the bottom.  LOL"
