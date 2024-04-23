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
