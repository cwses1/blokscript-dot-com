# Examples

Here are several task-based examples.

## Blocks

### Copying Blocks

	copy blocks
	from space 'Advance'
	to space 'Napa'
	where name in ('productCategoryPage', 'productPage');

### Deleting Blocks

	delete blocks
	from space 'Napa'
	where name = 'oldProductPage';

## Stories

### Copy Stories

	copy stories
	from space 'Advance'
	to space 'Napa'
	where url starts with '/brakes'
		or name like '%Brakes%';

### Publish Stories

	publish stories in space 'Advance'
	where name matches regex /Mustang/';

### Unpublish Stories

	unpublish stories in space 'Advance'
	where name ends with 'Camaro';

### Delete Stories

	delete stories in space 'Advance'
	where id in (1234567, 76543210;

## Datasources

### Create Datasource

Short version takes a 

	create datasource 'Competitors' in space 'Advance';

Long version:

	create datasource (name = 'Competitors', slug = 'competitors') in space 'Advance';

### Copy Datasources

This only copies the datasource object itself, it does not copy the entries inside the datasource.

	copy datasources
	from space 'Advance'
	to space 'Napa'
	where slug = 'competitors';


### Update Datasources

### Delete Datasources

## Datasource Entries

### Copy Datasource Entries

### Create Datasource Entries

### Update Datasource Entries

### Delete Datasource Entries
