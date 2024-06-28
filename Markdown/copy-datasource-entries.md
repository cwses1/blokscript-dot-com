# `copy datasource entries`

Copy datasource entries from a datasource or file to another datasource or file.  Datasources can be in the same space or a different space.  You can add a `where` clause if you would like to constrain which datasource entries are copied.

The target datasource must exist or the copy operation will fail.  See [create datasource](create-datasource.html) on how to create a datasource using BlokScript.

## Copy entries from a datasource in one space to another datasource in a different space

	copy datasource entries
	from datasource 'Competitors' in space 'Advance'
	to datasource 'Buddies' in space 'Napa'
	where name != 'Napa';

## Copy entries between two datasources in the same space

	copy datasource entries
	from datasource 'Competitors' in space 'Advance'
	to datasource 'Subsidiaries' in space 'Advance';

## Copy entries from a JSON file to a datasource

The file format is automatically detected by the file's extension.  You must structure your JSON file as described in [Datasource Entry File Formats](datasource-entry-file-formats.html).

	copy datasource entries
	in file 'competitors.json'
	to datasource 'Competitors' in space 'Napa'
	where name != 'Napa';

## Copy entries from a datasource to a JSON file

The file format is automatically detected by the file's extension.  The resulting JSON file will be structured as described in [Datasource Entry File Formats](datasource-entry-file-formats.html).

	copy datasource entries
	from datasource 'Competitors' in space 'Napa'
	to file 'competitors.json'
	where name != 'Napa';

## Copy entries from a CSV file to a datasource

The file format is automatically detected by the file's extension.  You must structure your CSV file as described in [Datasource Entry File Formats](datasource-entry-file-formats.html).

	copy datasource entries
	in file 'competitors.csv'
	to datasource 'Competitors' in space 'Napa'
	where name != 'Napa';

## Copy entries from a datasource to a CSV file

	copy datasource entries
	from datasource 'Competitors' in space 'Napa'
	to file 'competitors.csv'
	where name != 'Napa';

## Copy entries from a JSON file to another JSON file

	copy datasource entries
	from file 'competitors_1.json'
	to file 'competitors_2.json'
	where name != 'Napa';

## Copy entries from a JSON file to a CSV file

	copy datasource entries
	from file 'competitors.json'
	to file 'competitors.csv'
	where name != 'Napa';

## Copy entries from a CSV file to a JSON file

Here's an easy way to convert between file formats.  You can still use the `where` clause to constrain.

	copy datasource entries
	from file 'competitors.csv'
	to file 'competitors.json'
	where name != 'Napa';

## Copy entries from a CSV file to a CSV file

Same file format, but you can still use the `where` clause to extract the entries you want.

	copy datasource entries
	from file 'competitors_All.csv'
	to file 'competitors_A.csv'
	where name starts with 'A';

## `where` clause

You can use the `where` clause to constrain datasource entries by `id`, `name`, and `value`.

### `id`

Constrain datasource entries by `id`.  The `id` value must be an integer expression (`int`).  The following operators are available for `id`: `=`, `!=`, `in`, `not in`.

#### `=`

	copy datasource entries
	from datasource 'A' in space 'A'
	to datasource 'B' in space 'B'
	where id = 1234567;

####  `!=`

	copy datasource entries
	from datasource 'A' in space 'A'
	to datasource 'B' in space 'B'
	where id != 1234567;

#### `in`

	copy datasource entries
	from datasource 'A' in space 'A'
	to datasource 'B' in space 'B'
	where id in (1111111, 2222222, 3333333);

#### `not in`

	copy datasource entries
	from datasource 'A' in space 'A'
	to datasource 'B' in space 'B'
	where id not in (1111111, 2222222, 3333333);


### `name`

Constrain datasource entries by `name` using the following operators:

* `=`
* `!=`
* `in`
* `not in`
* `matches`
* `does not match`
* `like`
* `not like`
* `starts with`
* `does not start with`
* `ends with`
* `does not end with`.

A datasource entry `name` is treated as a string type.  Depending on the constraint operator, the parameter(s) must be a `string` or `regex` expression.

### `value`

Constrain datasource entries by `value` using the following operators:

* `=`
* `!=`
* `in`
* `not in`
* `matches`
* `does not match`
* `like`
* `not like`
* `starts with`
* `does not start with`
* `ends with`
* `does not end with`.

A datasource entry `value` is treated as a string type.  Depending on the constraint operator, the parameter(s) must be a `string` or `regex` expression.


## See Also

* [create datasource](create-datasource.html)
* [Datasource Entry File Formats](datasource-entry-file-formats.html) 
