# `delete stories`

This statement deletes stories in the specified space.

Delete all stories in a space:

	delete stories in space '1234567';

Delete a single story with a specific URL:

	delete stories where url = '/article1' in space '1234567';

Delete a couple of stories using the URL:

	delete stories where url = '/article1' or url = '/article2' in space '1234567';

You can also use the `in` constraint to delete stories.  The following is equivalent to the above statement, and is a little shorter:

	delete stories where url in ('/article1', '/article2') in space '1234567';

