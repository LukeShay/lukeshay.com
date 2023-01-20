const base = require("@lshay/prettier-config");

module.exports = {
	...base,
	plugins: [...base.plugins, require.resolve("prettier-plugin-astro")],
};
