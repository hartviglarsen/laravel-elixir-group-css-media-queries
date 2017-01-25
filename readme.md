## laravel-elixir-group-css-media-queries

### Install

```sh
$ npm install laravel-elixir-group-css-media-queries --save-dev
```

### Example

```javascript
var elixir = require('laravel-elixir');

var gcmq = require('laravel-elixir-group-css-media-queries');

elixir(function (mix) {
    var options = {};
    mix.gcmq('path/style.css', 'outputDirectory', options);
});
```
