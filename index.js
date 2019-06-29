/**
 *
 *
 * @returns {string}
 */
module.exports = () => {
	delete require.cache[module.parent.filename];
	delete require.cache[__filename];
  var parent = module.parent.parent;
  while (parent) {
    try {
      return parent.filename;
    } catch(ex) {
    }
    parent = parent.parent
  }
  throw new Error(`Module: ${module.parent.filename} is not required by a parent module.`);
};
