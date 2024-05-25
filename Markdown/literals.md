# Literals

A literal is an expression that identifies a Storyblok object, such as a space or block.  Literals are used in statements and can be assigned to variables.

## Integer Literal

A 32-bit signed integer expression.  Implemented using the .NET type `System.Int32`.

	1234567

Storyblok uses integer values as unique identifiers (the `id` field) for spaces and space objects, so BlokScript supports this directly.  You can identify a space by id like this:

	space 1234567 // This is a space literal.

Declare an integer variable:

	int SpaceId = 1234567; // Explicitly specify the variable type.

or

	var SpaceId = 1234567; // Variable type is implicitly specific by the value.

## String Literal

A string-valued expression in single quotes:

	'Advance'

## Regular Expression (Regex) Literal

Surrounded by forward slashes:

	/^Advance$/

Declare a variable:

	var UrlPattern = /^Advance$/;

Used in a constraint statement:

	copy block from space 'A' to space 'B'
	where name in (/^AutoZone/, /^Napa/);

## Space Literal

You can identify a space using its `id` field:

	space 1234567

You can also use the string equivalent of the space's `id` field: 

	space '1234567'

You can put a hash symbol in front of the space's `id`.  This is useful for when you copy the space identifier in Storyblok and paste it into BlokScript.  That way you don't have to worry abouing t deletthe character or getting an error.  BlokScript will strip the `#` away automatically. It should be noted that the Storyblok CLI will error out if you include the `#` symbol in the space identifier.  BlokScript expects this and will not fail.

	space '#1234567'

The Storyblok API needs an integer identifier for a space but most humans identify spaces using the space name.  BlokScript supports this:

	space 'Advance'

In the above example BlokScript will get the space with this exact name.  It is case sensitive.  BlokScript will automatically trim any whitespace on the ends, so this is an equivalent space literal:

	space '  Advance  '

## Block Literal

A block is contained in a space, so a block literal must also specify the containing space.  A block can be identified by its `id` or name.

	block 1234567 in space 'Advance'
	block '1234567' in space 'Advance'
	block 'productPage' in space 'Advance' // Look for a block named 'productPage' in the Block Library in Storyblok.

## Story Literal

A story is contained in a space, so a story literal must also specify the containing space.  A story can be identifed by its `id`, URL or name.

	story 1234567 in space 'Advance'
	story '1234567' in space 'Advance'
	story '/advance/categories/motor-oil' in space 'Advance'
	story 'Motor Oil Category' in space 'Advance'

## Datasource Literal

A datasouce is contained in a space, so a datasource literal must also specify its containing space.  A datasource can be identifed by its `id`, slug, or name.

	datasouce 1234567 in space 'Advance' // ID as an integer.
	datasouce '1234567' in space 'Advance' // ID as a string.
	datasouce 'Regional Competitors' in space 'Advance' // Name
	datasouce 'regional-competitors' in space 'Advance' // Slug

You can also use a variable wherever an integer or string is expected.

	var Datasource1Id = 1234567;
	var Datasource1 = datasouce Datasource1Id in space 'Advance';

	var Datasource2Id = '1234567';
	var Datasource2 = datasouce Datasource2Id in space 'Advance';

	var Datasource3Name = 'Regional Competitors';
	var Datasource3 = datasouce Datasource3Name in space 'Advance';

	var Datasource3Slug = 'regional-competitors';
	var Datasource3 = datasouce Datasource3Slug in space 'Advance';

## Datasource Entry Literal

A datasource entry is contained by a datasource, so a datasource entry literal must also specify its containing datasource, which in turn must specify its containing space.  A datasource entry can be identifed by its `id' or name.

	datasource entry 1234567 in datasource 'Competitors' in space 'Advance'
	datasource entry '1234567' in datasource 'Competitors' in space 'Advance'
	datasource entry 'Napa' in datasource 'Competitors' in space 'Advance'

