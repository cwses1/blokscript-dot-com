# Variables

## Declaration
You can declare variables using the `var` keyword or a type keyword such as `space`, `block`, `story`, or `datasource` which explicitly specifies the type of the variable.

	int AdvanceSpaceId = 1234567;

or

	var AdvanceSpaceId = 1234567;

Wherever a type is expected, you can use a variable of the same type, so we can write statements like this:

	var AdvanceSpaceId = 1234567; // Type: int
	var AdvanceSpace = space AdvanceSpaceId; // Type: space
	var Datasource1Name = 'Competitors'; // Type: string
	var Datasource1 = datasource DatasourceName in AdvanceSpace; // Type: datasource
	var Datasource2 = Datasource1; // Type: datasource
	var NewEntryName = 'Rock Auto'; // Type: string

	copy datasource entry NewEntryName in Datasource1; 

## Examples

### Space Variable Declarations

	space AdvanceSpace = space 1234567;
	var AdvanceSpace = space 1234567;
	space AdvanceSpace = space 'Advance';
	var AdvanceSpace = space 'Advance';


## Type Notes

BlokScript variables are "runtime-permanently-typed."  When a variable is assigned a type, the type assignment is permanent.  You cannot change a variable's type later after its type is determined.

### Explicit Typing

A variable statement can explicitly specify its permanent type when declared, like this.

	space SpaceVar;

Later, you can assign this space a value:

	SpaceVar = space 'Advance';

### Implicit Typing

A variable assignment implicitly specifies its permanent type:

	var AdvanceSpace = space 'Advance'; // Type space permanently.

Variable assignment does not have to occur immediately.  You can write something like this:

	var AdvanceSpace; // Type unknown, no way to know what the type will be.
	...
	AdvanceSpace = space 'Advance'; // Type is now space.

