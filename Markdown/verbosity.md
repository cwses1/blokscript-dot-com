# Verbosity

How much output BlokScript gives you.  Error messages are always printed.

## Quiet

BlokScript will not output any messages except for errors.  A script that runs successfully without an errors will have no output.

	be quiet;

## Verbose

BlokScript will tell you what it's doing.  You will receive messages about API calls, how many records are being worked on, and error messages.

	be verbose;

## Debugger

BlokScript will tell you what it's doing in verbose mode and give you additional details useful for developers, such as the requests and responses of API calls.  If there is an error, the stack trace will be shown.

	be debugger;
