const mix = require('laravel-mix');

mix.copy('vendor/twbs/bootstrap-icons/icons', 'resources/svg');
mix.copy('node_modules/bootstrap-icons/icons', 'resources/svg');
