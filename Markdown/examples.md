# Examples

Here are several task-based examples.

## Blocks

### Copying Blocks

	copy blocks
	from space 'Advance'
	to space 'Napa'
	where name in ('productCategoryPage', 'productPage');

See the [copy blocks](copy-blocks.html) statement for more details.

### Deleting Blocks

	delete blocks
	from space 'Napa'
	where name = 'oldProductPage';

See the [delete blocks](delete-blocks.html) statement for more details.

## Stories

### Copy Stories

	copy stories
	from space 'Advance'
	to space 'Napa'
	where url starts with '/brakes'
		or name like '%Brakes%';

See the [copy stories](copy-stories.html) statement for more details.

### Publish Stories

	publish stories in space 'Advance'
	where name matches regex /Mustang/';

See the [publish stories](publish-stories.html) statement for more details.

### Unpublish Stories

	unpublish stories in space 'Advance'
	where name ends with 'Camaro';

See the [unpublish stories](unpublish-stories.html) statement for more details.

### Delete Stories

	delete stories in space 'Advance'
	where id in (1234567, 76543210;

See the [delete stories](delete-stories.html) statement for more details.

## Datasources

### Create Datasource

Short form:

	create datasource 'Competitors' in space 'Advance';

Long version:

	create datasource (name = 'Competitors', slug = 'competitors') in space 'Advance';

See the [create datasource](create-datasource.html) statement for more details.

### Copy Datasources

This only copies the datasource object itself, it does not copy the entries contained by the datasource.

	copy datasources
	from space 'Advance'
	to space 'Napa'
	where slug = 'competitors';

See the [copy datasources](copy-datasources.html) statement for more details.

### Update Datasources

General form:

	update datasources in space 'Advance' set
		name = 'Other Retailers',
		slug = 'other-retailers'
	where slug = 'competitors';

Singular form:

	update datasource 'Competitors' in space 'Advance' set
		name = 'Other Retailers',
		slug = 'other-retailers';

See the [update datasources](update-datasources.html) statement for more details.

### Delete Datasources

General form:

	delete datasources in space 'Advance'
	where slug = 'competitors';

Singular form:

	delete datasource 'Competitors' in space 'Advance';

See the [delete datasources](delete-datasources.html) statement for more details.

## Datasource Entries

### Create Datasource Entry

Short form:

	create datasource entry 'Napa'
	in datasource 'Competitors' in space 'Advance';

Long form equivalent:

	create datasource entry
		name = 'Napa',
		value = 'napa'
	in datasource 'Competitors' in space 'Advance';

See the [create datasource entries](create-datasource-entries.html) statement for more details.

### Copy Datasource Entries

Copy directly from one datasource to another (each datasource can be in any space, including the same space):

	copy datasource entries
	from datasource 'Competitors' in space 'Advance'
	to datasource 'Competitors' in space 'Napa'
	where name != 'Napa';

Copy (import) from a JSON file into a space:

	copy datasource entries
	in file 'competitors.json'
	to datasource 'Competitors' in space 'Napa'
	where name != 'Napa';

Copy (import) from a CSV file into a space:

	copy datasource entries
	in file 'competitors.csv'
	to datasource 'Competitors' in space 'Napa'
	where name != 'Napa';

See the [copy datasource entries](copy-datasource-entries.html) statement for more details.

See the [Datasource Entry File Formats](datasource-entry-file-formats.html) section for how to structure the files.

### Update Datasource Entries

General form:

	update datasource entries in datasource 'Competitors' in space 'Advance' set
		name = 'Napa Auto Parts',
		value = 'napa-auto-parts'
	where name = 'Napa';

Singular form:

	update datasource entry 'Napa' in datasource 'Competitors' in space 'Napa' set
	name = 'Napa Auto Parts',
	value = 'napa-auto-parts';

See the [update datasource entries](update-datasource-entries.html) statement for more details.

### Delete Datasource Entries

General form:

	delete datasource entries
	in datasource 'Competitors' in space 'Napa'
	where name = 'Napa';

Singular form:

	delete datasource entry 'Napa'
	in datasource 'Competitors' in space 'Napa';

See the [delete datasource entries](delete-datasource-entries.html) statement for more details.
