# Use Cases

You can use BlokScript to move stories, blocks, datasources and other Storyblok constructs using a SQL-like syntax.  This gives you fine-grained control over your spaces.

## Move All Blocks & Stories
Let's say we want to push a schema from a DEV environment to a QA environment.  We can write this script to copy every block and story over:

	copy blocks from space '1234567' to space '7654321';
	copy stories from space '1234567' to space '7654321';

That's effective, but the [Storyblok CLI](https://github.com/storyblok/storyblok-cli) has this capability (`storyblok sync`), and what if you have multiple sites that share a space, and you only want to move a subset of blocks and stories over?  Using BlokScript and a little bit of planning, we can move only the "slice" of the space we want.

## Move Selected Blocks & Stories
Let's say we have two CMS apps - Alice and Balin - that share a space, and we want to move only the blocks over for Alice.  If Alice's blocks all start with `alice-` then we can write:

	copy blocks where name starts with 'alice-' from space '1234567' to space '7654321';

This will move Alice's blocks but not Balin's blocks.  Now we have to move only Alice's stories.  We have some options here.  If Alice's stories are tagged with `alice` then we can write:

	copy stories where tag = 'alice' from space '1234567' to space '7654321';

or if the content tree is structured such that Alice's stories are in a different folder than Balin's, then we could write this:

	copy stories where url starts with = '/alice' from space '1234567' to space '7654321';

## Promoting Selected Stories
Sometimes good content is created in a lower environment but needs to be used in a higher environment.  This is another example of slicing a space.  If you can identify the stories you want moved by name, URL, or tag, then you can write something like the following:

Copy stories using the name:

	copy stories where name starts with 'New' from space '1234567' to space '7654321';

Copy stories using the URL:

	copy stories where url starts with '/newArticle' from space '1234567' to space '7654321';

Copy stories using a tag:

	copy stories where tag = '2024-05-14-new' from space '1234567' to space '7654321';

## Back Copying Content

This is a very common CMS scenario where you move content from a production environment "backwards" to a test environment.  That way, you know that your latest application components can render current production content.

You can now probably do this using one line of BlokScript by either moving the whole space or just a slice.  Copy all stories:

	copy stories from space '7654321' to space '1234567';

Copy only stories that are tagged accordingly:

	copy stories where tag = 'balin-app' from space '7654321' to space '1234567';

## Publishing Selected Stories

If you are ready to launch your site and want to move all of your content to `published` from `draft`, but have a large amount of content, you could write this:

	publish stories in space '1234567';
