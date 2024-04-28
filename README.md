# West Scioly Mockup
This is a test (or as I like to call it, a mockup) of the official west science olympiad website.

It is currently hosted at https://nmd102.github.io/west-scioly-mockup, but will be eventually moved to http://westscioly.org when I finish fixing everything.
## Contributing
You can contribute by creating a pull request.
Please note that the images will be broken when you run the dev server,
we know this, and the images work fine on the website.
For testing the blog, you will need to go to `layout.js` and comment out these two lines:
```javascript
export const dynamic = 'force-static'
export const dynamicParams = false;
```
For some reason these break the blog `[id]` pages on the dev server, but they work fine on the website. 
Please remember to uncomment these lines when you create a pull request.
### Adding a blog post

If you want to add a blog post, add a .md file to the posts folder located at `src/lib/blog/posts`. 
The name of the markdown file is the id that it will be located at
(e.g., mit-accepted will be located at /blog/mit-accepted).
The markdown should be in the following format:
```markdown
# Title
subtitle

_date_

content
```
Please make sure you follow this format exactly, otherwise the interpreter will fail.
Date will be in the format `_month/day/year_`. Please be sure to run `blog-loader.dart` to update the blogs.json file.
### Adding photos to the photo gallery
If you would like to add a photo to the photo gallery,
first decide if your photo fits into any of the existing categories.

If it does add it to the photo list in `src/lib/photo-gallery/base-photos.json` under the category you would like
to add it to, following the format you see there, then, run `photo-loader.dart` to update the photos.json file.

If it does not, you can create a new one by:

1. Adding a new object to `items` in `src/lib/photo-gallery.js` with the information about your new category, following the example of the other ones.
2. Add a new key to `src/lib/photo-gallery/base-photos.json` with the key as the id of your category and the value as an object with the data for your category, following the example of the other ones.
3. Run `photo-loader.dart` to update the photos.json file.
