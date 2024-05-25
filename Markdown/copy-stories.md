# `copy stories`

Copy several stories from one space to another.  You can copy using the story identifier, URL, name or tag.

### `id =`

	copy stories where id = 1111111 from space '1234567' to space '7654321';

### `id in (...)`
	copy stories where id in (1111111, 2222222) from space '1234567' to space '7654321';

### `id not in (...)`

	copy stories where id not in (1111111, 2222222) from space '1234567' to space '7654321';

### `url =`

	copy stories where url = '/penngrade-20w-50' from space '1234567' to space '7654321';

### `url !=`

	copy stories where url != '/pennzoil-gt-25w-50' from space '1234567' to space '7654321';

### `url in (...)`

	copy stories where url in ('/pennzoil-gt-25w-50', '/mobil-1-0w-50-racing-oil') from space '1234567' to space '7654321';

### `url not in (...)`

	copy stories where url not in ('/pennzoil-gt-25w-50', '/mobil-1-0w-50-racing-oil') from space '1234567' to space '7654321';

### `url matches regex`

	copy stories where url matches regex /^\/schaeffer/ from space '1234567' to space '7654321';
	copy stories where url matches regex /^\/penn/ from space '1234567' to space '7654321';

### `url does not match regex`

	copy stories where url does not match regex /^\/penn/ from space '1234567' to space '7654321';

### `url like`

	copy stories where url like 'pennzoil' from space '1234567' to space '7654321';

### `url not like`

	copy stories where url not like 'pennzoil%' from space '1234567' to space '7654321';

### `url starts with`

	copy stories where url starts with '/pennzoil' from space '1234567' to space '7654321';

### `url does not start with`

	copy stories where url does not start with '/pennzoil' from space '1234567' to space '7654321';

### `url ends with`

	copy stories where url ends with '50' from space '1234567' to space '7654321';

### `url does not end with`

	copy stories where url does not end with '50' from space '1234567' to space '7654321';

### Copy By Name Examples
	
	copy stories where name does not end with '50' from space '1234567' to space '7654321';
	copy stories where name ends with '50' from space '1234567' to space '7654321';
	copy stories where name does not start with 'Penn' from space '1234567' to space '7654321';
	copy stories where name starts with 'Penn' from space '1234567' to space '7654321';
	copy stories where name not like 'Penn%' from space '1234567' to space '7654321';
	copy stories where name like 'Penn%' from space '1234567' to space '7654321';
	copy stories where name matches regex /^Penn/ from space '1234567' to space '7654321';
	copy stories where name does not match regex /^Penn/ from space '1234567' to space '7654321';
	copy stories where name not in ('Swepco 306') from space '1234567' to space '7654321';
	copy stories where name not in ('Swepco 306', 'Mobil 1 0W-50 Racing Oil') from space '1234567' to space '7654321';
	copy stories where name in ('Swepco 306', 'Mobil 1 0W-50 Racing Oil') from space '1234567' to space '7654321';
	copy stories where name in ('Swepco 306') from space '1234567' to space '7654321';
	copy stories where name starts with 'Penn' from space '1234567' to space '7654321';
	copy stories where name does not start with 'Penn' from space '1234567' to space '7654321';

### `tag = `

Copy all stories tagged with `walmart`.

	copy stories where tag = 'walmart' from space '1234567' to space '7654321';

Copy all stories tagged with `mobil` or `penngrade`.

	copy stories where tag = 'mobil' or tag = 'penngrade' from space '1234567' to space '7654321';

### `tag in `

### `tag ends with`


	copy stories where tag ends with 'grade' from space '1234567' to space '7654321';


	copy stories where tag in ('mobil', 'penngrade') from space '1234567' to space '7654321';
	copy stories where tag = 'mobil' and tag = 'walmart' from space '1234567' to space '7654321';
	copy stories where tag = 'walmart' or tag = 'autozone' and tag = 'rockauto' from space '1234567' to space '7654321';
	
	
	copy stories where tag = 'diagnostix' from space '1234567' to space '7654321';
	copy stories where any tag = 'diagnostix' from space '1234567' to space '7654321';
	copy stories where tag != 'diagnostix' from space '1234567' to space '7654321';
	copy stories with no tags from space '1234567' to space '7654321';
	copy stories with any tags from space '1234567' to space '7654321';
	copy stories where tag in ('diagnostix') from space '1234567' to space '7654321';
	copy stories where tag in ('diagnostix', 'jerkweed') from space '1234567' to space '7654321';
	copy stories where tag not in ('diagnostix', 'jerkweed') from space '1234567' to space '7654321';
	copy stories where tag not in ('diagnostix') from space '1234567' to space '7654321';
	copy stories where any tag matches regex /^diag/ from space '1234567' to space '7654321';
	copy stories where any tag does not match /^diag/ from space '1234567' to space '7654321';
	copy stories where tag like 'mobil%' from space '1234567' to space '7654321';
	copy stories where tag not like 'mobil%' from space '1234567' to space '7654321';
	copy stories where tag starts with 'penn' from space '1234567' to space '7654321';
	
