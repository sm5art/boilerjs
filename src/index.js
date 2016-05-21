#!/usr/bin/env node
const log = console.log;



import { copySync as copy, readFile as read, writeFile as write } from 'fs-extra';
import path from 'path';
import prompt from 'prompt';
import 'colors';

const serverdir = path.resolve(__dirname, '../server');

prompt.message = '';
prompt.delimiter = '';
prompt.start();

prompt.get({ name: 'name', description: 'Application Name'.blue, required: true }, (err, res) => {
	const { name } = res;
	prompt.get({ name: 'dir', description: 'Directory'.blue, default: name, required: true }, (err, res) => {
		const dir = path.resolve(res.dir);
		try {
			log('Copying...'.green);
			copy(serverdir, dir);
			log('Populating...'.green);
			const package = serverdir + "/package.json";
			read(package,(e,f)=>{
				if(e)
					throw e;
				let x = JSON.loads(f);
				x.name = name;
				write(package,JSON.parse(x),(err)=>{
					if(err)
						throw err;
				});
			});
			log('Done.'.magenta);
		} catch (err) {
			log('Error: '.red + err);
		}
		process.exit(0);
	});
});
