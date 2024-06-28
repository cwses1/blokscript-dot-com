# Datasource Entry File Formats

BlokScript supports JSON and CSV media types for copying datasource entries.  The same Storyblok structure and file formats are used.

## JSON

BlokScript uses the same JSON structure that is returned from the Storyblok API.  The JSON data follows this format:

	{
		"datasource_entries":
		[
			{
			  "id" : 11111,
			  "name" : "Mobil 1",
			  "value" : "mobil-1"
			},
			{
			  "id" : 2222,
			  "name" : "Pennzoil",
			  "value" : "pennzoil"
			}
		]
	}

The `id` field is generally optional.

## CSV

BlokScript uses the same CSV import/export file format as Storyblok.

	name,value
	Mobil 1,mobil-1
	Pennzoil,pennzoil

When you export datasource entries in Storyblok, the above format is returned.

## See also

[`copy datasource entries`](copy-datasource-entries.html)
