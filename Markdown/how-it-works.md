# How It Works

The BlokScript interpreter connects to Storyblok's [Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/introduction) and [Management API](https://www.storyblok.com/docs/api/management/getting-started/introduction) to manage spaces and everything in them.

When the interpreter starts it reads the Storyblok personal access token in the `blokscript-env.json` file and uses that to authenticate to the APIs.
