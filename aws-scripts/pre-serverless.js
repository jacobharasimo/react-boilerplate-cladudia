const { remove, ensureDir, copy } = require('fs-extra');

remove('./dist');
ensureDir('./dist');
copy('./build', './dist');
