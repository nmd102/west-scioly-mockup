import 'dart:io';
import 'dart:convert';

class Date {
  final int year;
  final int month;
  final int day;

  Date(this.month, this.day, this.year);
  String toString() {
    return '${day}/${month}/${year}';
  }
}

void main() async {
  List<String> files = [];
  var dir = Directory('posts');

  try {
    var dirList = dir.list();
    await for (final FileSystemEntity f in dirList) {
      if (f is File) {
        files.add(f.path);
      } else if (f is Directory) {
        print('Found dir ${f.path}');
      }
    }
  } catch (e) {
    print(e.toString());
  }
  var data = [];
  List<Date> dates = [];
  for (final file in files) {
    var f = File(file);
    var text = await f.readAsString();
    final id = file.replaceAll("posts/", "").replaceAll(".md", "");
    var lines = text.split("\n");
    var title = lines[0].replaceAll("# ", "");
    var date = lines[1].replaceAll("_", "");
    var dateList = date.split("/");
    var dateObject = Date(
        int.parse(dateList[0]),
        int.parse(dateList[1]),
        int.parse(dateList[2])
    );
    dates.add(dateObject);
    var body = lines.sublist(3).join("\n");
    var post = {};
    post[id] = {
      'title': title,
      'date': date,
      'content': body
    };
    data.add(post);
  }
  for (int i = 0; i < dates.length-1; i++) {
    var min_idx = i;
    for (int j = i+1; j < dates.length; j++) {
      if (dates[j].year < dates[min_idx].year) {
        min_idx = j;
      } else if (dates[j].year == dates[min_idx].year) {
        if (dates[j].month < dates[min_idx].month) {
          min_idx = j;
        } else if (dates[j].month == dates[min_idx].month) {
          if (dates[j].day < dates[min_idx].day) {
            min_idx = j;
          }
        }
      }
    }
    var temp = data[min_idx];
    data[min_idx] = data[i];
    data[i] = temp;
    var tmp = dates[min_idx];
    dates[min_idx] = dates[i];
    dates[i] = tmp;
  }
  for(var i = 0; i < data.length; i++) {
    if(i != data.length-1) {
      data[i][data[i].keys.first]['next'] = data[i+1].keys.first;
    }
    if(i != 0) {
      data[i][data[i].keys.first]['previous'] = data[i-1].keys.first;
    }
  }
  var json_val = {};
  for (var i = 0; i < data.length; i++) {
    json_val[data[i].keys.first] = data[i][data[i].keys.first];
  }
  final encoded = json.encode(json_val);
  var blogs = File('blogs.json');
  var sink = blogs.openWrite();
  sink.write(encoded);
  await sink.flush();
  await sink.close();
}