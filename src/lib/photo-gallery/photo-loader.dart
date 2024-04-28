import 'dart:convert';
import 'dart:io';

void main() async {
  var file = await File('base-photos.json').readAsString();
  var jsonObj = json.decode(file);
  var ids = {};
  for (var id in jsonObj.keys) {
    ids[id] = {};
    var photos = jsonObj[id]["photos"];
    for (var i = 0; i < photos.length; ++i) {
      ids[id][photos[i]["id"]] = i;
      if (i != 0) {
        photos[i]["previous"] = photos[i - 1]["id"];
      }
      if (i != photos.length - 1) {
        photos[i]["next"] = photos[i + 1]["id"];
      }
    }
    jsonObj[id]["photos"] = photos;
  }
  var ids_file = File("ids.json");
  var ids_str = json.encode(ids);
  var ids_sink = ids_file.openWrite();
  ids_sink.write(ids_str);
  await ids_sink.flush();
  await ids_sink.close();
  var photos_file = File("photos.json");
  var photos_str = json.encode(jsonObj);
  var photos_sink = photos_file.openWrite();
  photos_sink.write(photos_str);
  await photos_sink.flush();
  await photos_sink.close();
}
