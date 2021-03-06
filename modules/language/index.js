/*
 * language
 * Copyright(c) 2017 Pablo Gutierrez
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */


/**
 * Module exports.
 * @public
 */

/**
 * Parse Cookie header and populate `req.cookies`
 * with an object keyed by the cookie names.
 *
 * @return {lang}
 * @public
 */


exports = module.exports = function (opts) {
    return function language (req, res, next) {
        var defaultLang = 'es_ES';
        req.lang = "";
        if(req.query !== undefined && req.query.lang !== undefined){
            req.lang = req.query.lang;
        }else if(req.cookies !== undefined && req.cookies.lang !== undefined){
            req.lang = req.cookies.lang;
        }else{
            req.lang = defaultLang;
        }
        res.cookie('lang',req.lang, { maxAge: 126144000000 });
        next();
    };
};