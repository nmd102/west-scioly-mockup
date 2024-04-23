class DateObj {
    constructor(month, day, year) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}
const fs = require('fs');
const files = fs.readdirSync('./src/lib/blog/posts');
let posts = [];
let dates = [];
for (let i = 0; i < files.length; i++){
    const file = files[i];
    fs.readFile(`./src/lib/blog/posts/${file}`,'utf-8', (err, data) => {
        if (err) throw err;
        const id = file.replace('.md', '');
        const lines = data.split('\n');
        const title = lines[0].substring(2);
        const date = lines[1].replaceAll('_', "");
        const body = lines.slice(3).join('\n');
        let post = {}
        post[id] = {
            title: title,
            date: date,
            content: body
        }
        const date_portions = date.split('/');
        const dateObj = new DateObj(
            parseInt(date_portions[0]),
            parseInt(date_portions[1]),
            parseInt(date_portions[2])
        );
        dates.push(dateObj);
        posts.push(post);
        if(i === files.length - 1) {
            let order = []
            for (let i = 0; i < dates.length; i++) {
                let min_idx = i;
                for (let j = i+1; j < dates.length; j++) {
                    if(dates[min_idx].year > dates[j].year) {
                        min_idx = j;
                    } else if(dates[min_idx].year === dates[j].year) {
                        if(dates[min_idx].month > dates[j].month) {
                            min_idx = j;
                        } else if(dates[min_idx].month === dates[j].month) {
                            if(dates[min_idx].day > dates[j].day) {
                                min_idx = j;
                            }
                        }

                    }
                }
                order.push(min_idx);
            }
            let ordered_posts = [];
            let json = {};
            for (let i = 0; i < order.length; i++) {
                ordered_posts.push(posts[order[i]]);
            }
            for (let j = 0; j < ordered_posts.length; j++) {
                if(ordered_posts[j-1] !== undefined) {
                    ordered_posts[j][Object.keys(ordered_posts[j])[0]].previous = Object.keys(ordered_posts[j-1])[0];
                }
                if(ordered_posts[j+1] !== undefined) {
                    ordered_posts[j][Object.keys(ordered_posts[j])[0]].next = Object.keys(ordered_posts[j+1])[0];
                }
                json[Object.keys(ordered_posts[j])[0]] = ordered_posts[j][Object.keys(ordered_posts[j])[0]];
            }
            fs.writeFile('./src/lib/blog/blogs.json', JSON.stringify(json), {
                flag: 'w'
            }, (err) => {
                if (err) throw err;
            });
        }
    })
}