import {src, dest} from 'gulp';
import markdown from 'gulp-remarkable';
import htmlmin from 'gulp-htmlmin';
//import inject from 'gulp-source-injector';

var markdownFilesDir = '../MarkdownFiles';
var webRootDir = '../WebRoot';

export function buildMd ()
{
	return src(markdownFilesDir + '/*.md')
	.pipe(markdown())
	.pipe(dest('../WebRoot'));
}

export function buildPages ()
{
	return src(webRootDir + '/*.html')
	.pipe(markdown())
	.pipe(dest('../WebRoot'));
}


export function buildProd ()
{
	return src('../MarkdownFiles/*.md')
	.pipe(markdown({gfm: true}))
	.pipe(htmlmin())
	.pipe(dest('../WebRoot'));
}
