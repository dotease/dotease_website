# dotease_website

## Installation

Please use pnpm for this project :
> npm i -g pnpm

Then, install the dependencies :
> pnpm install


## Deployement

Simply use the following docker command :
> docker build -t dotease_website --build_args next_auth_secret=YOUR_SECRET next_auth_url=YOUR_URL

And replace YOUR_SECRET and YOUR_URL with your desire values.

The app is designed to work with a **postgress database**.