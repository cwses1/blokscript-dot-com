# How It Works

When the interpreter starts it reads the Storyblok personal access token in the [`blokscript-env.json`](blokscript-env-json-file-reference.html) file and uses that to authenticate to the APIs.

The BlokScript interpreter connects to Storyblok's [Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/introduction) and [Management API](https://www.storyblok.com/docs/api/management/getting-started/introduction) to manage spaces and everything in them.  [Slide 4](slide-04.html) in the [Slideshow](slide-01.html) illustrates this:

![](slide-04.png)
