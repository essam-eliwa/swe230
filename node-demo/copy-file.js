
//https://nodejs.org/api/fs.html
//CJS
//const fs = require('node:fs/promises');

//ESM
import * as fs from 'node:fs/promises';


try {
    await fs.copyFile('tmp/test.txt','tmp/new.txt');;
    console.log('successfully copied file tmp/test.txt');
  } catch (error) {
    console.error('there was an error:', error.message);
  }