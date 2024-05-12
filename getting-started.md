# [Blokscript](/) > Getting Started

### Running The Blokscript Interpreter

Open a shell / console / terminal in a directory and ensure your computer can find the Blokscript Interpreter by running the blokscript command:

	> blokscript

Blokscript will look for the `blokscript-env.json` file in the current working directory and output some help.

	blokscript-env.json not found.
	USAGE:
	blokscript <file>


### Create The Blokscript ENV File

Create `blokscript-env.json` in your current working directory.

	{
		"baseUrl": "https://api-us.storyblok.com",
		"token": "<your_personal_access_token_here>",
		"verbosity": "verbose"
	}

Paste your Storyblok personal access token in the `token` field above.  Go to the [Personal Access Token](https://app.storyblok.com/#/me/account?tab=token) in your Storyblok account to get or generate the token.

You can read more about the `blokscript-env.json` file in the [`blokscript-env.json` File Reference](blokscript-env-json-file-reference.html).

### Create A Script File

Let's save the space JSON to a file.  Create a file named `script.txt` with this line:

	copy space '<your_space_id>' to file;

You can get the space identifier in the Settings section of the Storyblok space, which has a button to copy the space identifier.  Your actual script could look like this:

	copy space '#1527233' to file;

You don't need to include the `#`, either.  Behind the scenes, Blokscript trims the `#` character away from the space identifier anyway, so this is functionally the same:

	copy space '1527233' to file;

Space identifiers are actually integers.  Blokscript also lets you identify a space using an integer, so you don't need to quote a string literal:

	copy space 1527233 to file;

You could also use a variable.  We cover all the details of how to identify spaces in another section.

### Run The Script

Run the following command in your shell / console / terminal:

	>blokscript script.txt

Blokscript tells you what it's doing when in verbose mode.  If everything runs well you should get output that looks like this:

	Verbosity set to verbose.
	1. API GET /v1/spaces/1527233. Copying Space '1527233' to Local Cache.
	2. Copying Space '1527233' to file '1527233.json'

You should have a file with a name of the format `1527233.json` in your current working directory containing the space details.

Congratulations!  You have run your very first Blokscript script.  However, this script isn't very useful by itself.  The real power of Blokscript is demonstrated when you have multiple Storyblok spaces and you need to move stories and components between them.
