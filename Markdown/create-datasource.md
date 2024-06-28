# `create datasource`

Creates a new datasource in a space.

## Long Form

Create a datasource and explicitly specify the `name` and `slug`.

	create datasource
	(
		name = 'Competitors',
		slug = 'competitors'
	)
	in space 'Advance';

## Short Form

Create a datasource with name `Competitors` in the space.  BlokScript will automatically *sluggify* the name for you.

	//
	// EQUIVALENT TO THE LONG FORM STATEMENT.
	// CREATES A DATASOURCE NAMED 'Competitors' WITH SLUG 'competitors'.
	//
	create datasource 'Competitors' in space 'Advance';

Another example:

	//
	// NAME: 'Virtual Competitors'
	// SLUG: 'virtual-competitors'
	//
	create datasource 'Virtual Competitors' in space 'Advance';

When we *sluggify* a string we make it lower case and replace the spaces with dashes.

## See also
* [Glossary](glossary.html)