# Language & Interpreter Design Goals

## Domain Specific

BlokScript is a Domain Specific Language (DSL) designed to make managing Storyblok easier.  Storyblok native concepts have first-class support via BlokScript types (space, block, datasource, etc.) and operations (create, update, copy, delete, publish, etc.).  Here are some examples:

Declare a **block** variable, which represents a block (sometimes called a component) in StoryBlok:

	var PageBlock = block 'StandardPage' in space 'Advance';

Create a **datasource entry** in Storyblok (an item in a datasource):

	create datasource entry 'AutoZone'
		in datasource 'Competitors'
		in space 'Advance';

## Solution Driven

BlokScript exists because we needed to "move things around easier" in Storyblok.  Therefore, the language is more on the declarative side such that the language expresses the intent of ***what*** needs to happen, but ***not how*** it happens.

What do you think the following statement does?

	publish stories in space 'Napa'
	where any tag ='product';

## Explicit & Easy Readable

Every statement in BlokScript is designed to express intent clearly and fully.  For example, anyone that works with Storyblok should be able to understand this statement:

	copy stories
		from space 'Advance'
		to space 'Napa'
	where url starts with '/penn'; 

That means BlokScript has a lot of keywords such as `copy`, `stories`, `from`, `space`, `where`, `url`, `starts`, and `with` - and that's all in just the above statement.  However, the above statement is very easy to read at the cost of being “noisy” to write.

We could have made BlokScript very terse.  The terse version of the above (which is not valid syntax) could have looked like this:

	copy stories 'Advance' 'Napa' '/penn'

But that is less readable and the intent is not clear.

## SQL-like

BlokScript has several similaries to the SQL language (another DSL) in that we need to create, update, and delete things, as well as constrain records that we operate on.  In addition, a Storyblok space contains a schema that defines types just like a traditional relational database schema.  BlokScript adopts the same type of "do something by constraint" syntax that SQL has.

	copy blocks
		from space 'Advance'
		to space 'Napa'
	where name like 'oil%';


This similar gives a user that is familiar with SQL the ability to "guess" the synax.

## Larger User Audience

BlokScript connects to the Storyblok API for you, so you don't need to understand the API yourself.  That, along with BlokScript's expressive syntax gives a lower barrier of entry to users that wish to manage Storyblok.

That's not to say that we hide the fact that there is an API.

## Informative

BlokScript gives you stats & tells you what it's doing.  If you run this command:

	delete stories in space 'Napa';

then you might get console / terminal / shell output that looks like this:

	1. API GET /v1/spaces. Caching all spaces.
	2. API GET /v1/spaces/1019176. Caching space 'Napa (1019176)' data.
	3. API GET /v1/spaces/1019176/stories. Caching stories in space 'Napa (1019176)'.
	Cached 4 stories in space 'Napa (1019176)'.
	Deleting 4 stories in space 'Napa (1019176)'.
	4. API DELETE /v1/spaces/1019176/stories/6943919. Deleting story 'Pennzoil GT 25w-50 (/pennzoil-gt-25w-50)' in space 'Napa (1019176)'.
	5. API DELETE /v1/spaces/1019176/stories/6943920. Deleting story 'PennGrade 20w-50 (/penngrade-20w-50)' in space 'Napa (1019176)'.
	6. API DELETE /v1/spaces/1019176/stories/6943930. Deleting story 'Schaeffer Racing oil (/schaeffer-racing-oil)' in space 'Napa (1019176)'.
	7. API DELETE /v1/spaces/1019176/stories/6943940. Deleting story 'Mobil 1 0W-50 Racing Oil (/mobil-1-0w-50-racing-oil)' in space 'Napa (1019176)'.

The output of the above delete statement tells you exactly what API calls were made, which spaces were being worked on, how many stories were in the space, and how many stories were deleted.  This can be very useful when you get a result you were not expecting.  For example, if we were trying to delete stories and BlokScript told us that 0 stories were deleted, we might see that there were no stories in the space to begin with, or if there were stories in the space perhaps our constraint logic was off.
