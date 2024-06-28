# `foreach`

Loops through a list of items (e.g. spaces, blocks, datasources, datasource entries, strings, regular expressions, integers) and executes a block for each item.

**General Syntax**

	foreach (<VARIABLE DECLARATION> in <LIST>)
	{
		//
		// DO SOMETHING.
		//
	}

**Spaces Example**

	foreach (space CurrentSpace in all spaces)
	{
		print CurrentSpace;
	}

In the above example:

1. The `CurrentSpace` *iteration variable* of type `space` is created and assigned to.
	* The iteration variable is lexically-scoped to the `foreach` statement and available only in the `foreach` statement and the attached code block.
1. The list of all spaces visible to the Storyblok account is retrieved from the Storyblok API.
	* The Storyblok account is determined by the personal access token in the `blockscript-env.json` file.
1. The attached code block is executed for each space item declared in the list.

BlokScript will enforce the iteration variable type on assignment.

	//
	// THIS WILL FAIL.
	// YOU CANNOT ASSIGN A BLOCK-TYPED VARIABLE TO A SPACE.
	//
	foreach (block BlockVariable in spaces)
	{
		print BlockVariable;
	}

## Space Loops

You use the `spaces` keyword or `all spaces` phrase to generate the list of spaces available to the account.  You can use an explicitly-typed iteration variable like this:

	foreach (space Space in all spaces)
	{
		print Space;
	}


The variable type must match the list type.  The `all` keyword is optional, so this shorthand is equivalent:

	foreach (space Space in spaces)
	{
		print Space;
	}

You can also use the `var` keyword if the list type is obvious.  BlokScript will infer the variable type based on the list type.

	foreach (var Space in spaces)
	{
		print Space;
	}

Restrict the list of spaces using a `where` clause:

	foreach (var Space in spaces where name starts with 'A')
	{
		print Space;
	}

## Block Loops

You use the `blocks` keyword to generate the list of blocks in a space.

**Space Literal Format**

Get the list of blocks for the space directly from the server and iterate through each block:

	foreach (var CurrentBlock in blocks in space 'Advance')
	{
		print CurrentBlock;
	}

**Space Variable Format**

Wherever a space is expected, you can provide any expression that evaluates to be a space:

	var AdvanceSpace = space 'Advance';

	foreach (var CurrentBlock in blocks in AdvanceSpace)
	{
		print CurrentBlock;
	}

**Block File Format, Implicit Type**

You can use an implicitly-typed variable if you specify the file type.  A *block file* contains a list of blocks.

	foreach (var CurrentBlock in block file 'blocks.json')
	{
		print CurrentBlock;
	}

**Block File Format, Explicit Type**

You can use an explicitly-typed variable and not specify the file type.

	foreach (block CurrentBlock in file 'blocks.json')
	{
		print CurrentBlock;
	}

You can always make both the variable and the file explicitly-typed:

	foreach (block CurrentBlock in block file 'blocks.json')
	{
		print CurrentBlock;
	}


## Datasource Loops

	foreach (var CurrentDatasource in datasources in space 'Advance')
	{
		print CurrentDatasource;
	}

### Datasource Entries

	foreach (var Entry in datasource entries in datasource 'Competitors' in space 'Advance')
	{
		print CurrentDatasource;
	}

## Stories

	foreach (var CurrentStory in stories in space 'Advance')
	{
		print CurrentStory;
	}
