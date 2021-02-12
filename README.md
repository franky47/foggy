# 🌁 Foggy

[![MIT License](https://img.shields.io/github/license/47ng/cloak.svg?color=blue)](https://github.com/47ng/cloak/blob/next/LICENSE)
[![Depfu](https://badges.depfu.com/badges/9db2edf08202152d1fe7dfe8c944150b/count.svg)](https://depfu.com/github/franky47/foggy?project_id=22353)

> Generate OpenGraph images from Figma designs in one click

https://usefoggy.vercel.app

## How it works

The [Figma API](https://www.figma.com/developers/api) provides an [endpoint to generate images](https://www.figma.com/developers/api#get-images-endpoint) from a Frame URL.
Images are saved on an Amazon S3 bucket with a public URL.

This project provides a thin API layer to resolve to those public URLs
by slightly modifying the Figma URL.

The project is made with [Next.js](https://nextjs.org/), and hosted on [Vercel](https://vercel.com).

## Self-hosting

You can deploy this project to your own Vercel account:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ffranky47%2Ffoggy&env=FIGMA_ACCESS_TOKEN&envDescription=Create%20a%20personal%20access%20token%20for%20Figma&envLink=https%3A%2F%2Fwww.figma.com%2Fdevelopers%2Fapi%23authentication)

### Environment Variables

- `FIGMA_ACCESS_TOKEN`: [Create a personal access token](https://www.figma.com/developers/api#access-tokens) in your Figma account settings.
- `SENTRY_DSN` _(optional)_: Pass in a DSN to enable error monitoring with [Sentry](https://sentry.io).

## Misc

_Why Foggy?_ Figma Open Graph Generator, Yay !

License: [MIT](https://github.com/47ng/cloak/blob/master/LICENSE) - Made with ❤️ by [François Best](https://francoisbest.com).

Using this at work ? [Sponsor me](https://github.com/sponsors/franky47) to help with support and maintenance.
