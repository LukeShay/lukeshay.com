module.exports = {
    ...require('prettier-config-get-off-my-lawn'),
    plugins: [require('prettier-plugin-tailwindcss'), require('prettier-plugin-packagejson')],
};
