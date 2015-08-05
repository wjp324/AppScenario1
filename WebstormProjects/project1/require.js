/**
 * Created by jipwang on 2015/8/4.
 */
require.config({
    paths: {
        jquery: 'jquery-1.7.2'
    }
});

require(['jquery'], function($) {
    alert($().jquery);
});
