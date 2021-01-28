# 🌁 Foggy

> Generate OpenGraph images from Figma designs in one click

https://usefoggy.vercel.app

## How it works

The [Figma API](https://www.figma.com/developers/api) provides an [endpoint to generate images](https://www.figma.com/developers/api#get-images-endpoint) from a Frame URL.
Images are saved on an Amazon S3 bucket with a public URL.

This project provides a thin API layer to resolve to those public URLs
by slightly modifying the Figma URL.

The project is made with [Next.js](https://nextjs.org/), and hosted on [Vercel](https://vercel.com).

> Todo: add "Deploy on Vercel" button for self-hosting.

## Misc

_Why Foggy?_ Figma Open Graph Generator, Yay !

Made with ❤️ by [François Best](https://francoisbest.com).

Using this at work ? [Sponsor me](https://github.com/sponsors/franky47) to help with support and maintenance.
