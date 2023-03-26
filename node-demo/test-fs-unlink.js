import { unlink } from 'node:fs/promises';

try {
    await unlink('tmp/new.txt');
    console.log('successfully deleted tmp/new.txt');
  } catch (error) {
    console.error('there was an error:', error.message);
  }
