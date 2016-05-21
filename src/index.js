#!/usr/bin/env node
const log = console.log;



import { copy as copy} from 'fs-extra';
import { readFile as read, writeFile as write } from 'fs';
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
			copy(serverdir, dir,(err)=>{
				if(err)
					throw err;
				const packagenam = dir + "/package.json";
				read(packagenam,(e,f)=>{
					if(e)
						throw e;
					let x = JSON.parse(f);
					log(x);
					x.name = name;
					write(packagenam,JSON.stringify(x),(err)=>{
						if(err)
							throw err;
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
