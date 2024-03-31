# West Scioly Mockup
This is a test (or as I like to call it, a mockup) of the official west science olympiad website.

It is currently hosted at https://nmd102.github.io/west-scioly-mockup, but will be eventually moved to http://westscioly.org when I finish fixing everything.
## Contributing
You can contribute by create a pull request. Please note that the images will be broken when you run the dev server, we know this, and the images work fine on the website. For testing the blog, you will need to go to `layout.js` and comment out these 2 lines:
```javascript
export const dynamic = 'force-static'
export const dynamicParams = false;
```
For some reason these break the blog `[id]` pages on the dev server, but they work fine on the website. Please remember to uncomment these lines when you create a pull request.

Some bugs you may want to fix are:
- [x] The description of the home page is current `[object Object]`, you can see if you can fix that 
- [ ] The links just below the title on the home pages are really tiny, you can see if you can make them bigger

