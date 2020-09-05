import { promises as fs } from 'fs';
const parse = require('himalaya');
const path = require('path');
const publicPath = path.join(__dirname , '../public');


export default async (req, res) => {
    var url :string = JSON.parse(req.body);
    
    var temp = await getData(url)
    res.statusCode = 200
    res.json(temp)
  }
  
  
// handler
async function getData(url){

  var res = await fetch(url);
  var html = await res.text();
  
  await fs.writeFile("./util/cache.html", html);

  var tag = await getTags();
  var tree = await makeTree();
  return {tag:tag , tree:tree};

  };

  var getTags = async function(){
    var response = await fs.readFile('./util/cache.html', 'utf8');
        var items = new Object();
      var rez = response.split("<");
      for (let i of rez) {
        if (i.charAt(0).match(/[a-z]/i)) {
          var div = "";
          for (let j of i) {
            if (j.match(/[a-z]/i)) {
              div += j;
            } else {
              break;
            }
          }
          if (items.hasOwnProperty(div)) {
            items[div] = items[div] + 1;
          } else {
            items[div] = 1;
          }
        }
      }
        return items
  };
  
  var makeTree = async function(){
    var response =  await fs.readFile('./util/cache.html', 'utf8')
      const json = parse.parse(response);
     return json;
  };
  