#!/usr/bin/env node
'use strict';

var _fsExtra = require('fs-extra');

var _fs = require('fs');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

require('colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = console.log;

var serverdir = _path2.default.resolve(__dirname, '../server');

_prompt2.default.message = '';
_prompt2.default.delimiter = '';
_prompt2.default.start();

_prompt2.default.get({ name: 'name', description: 'Application Name'.blue, required: true }, function (err, res) {
	var name = res.name;

	_prompt2.default.get({ name: 'dir', description: 'Directory'.blue, default: name, required: true }, function (err, res) {
		var dir = _path2.default.resolve(res.dir);
		try {
			log('Copying...'.green);
			(0, _fsExtra.copy)(serverdir, dir, function (err) {
				if (err) throw err;
				var packagenam = dir + "/package.json";
				(0, _fs.readFile)(packagenam, function (e, f) {
					if (e) throw e;
					var x = JSON.parse(f);
					log(x);
					x.name = name;
					(0, _fs.writeFile)(packagenam, JSON.stringify(x), function (err) {
						if (err) throw err;
						process.exit(0);
					});
				});
			});
			log('Populating...'.green);
			log('Done.'.magenta);
		} catch (err) {
			log('Error: '.red + err);
		}
	});
});