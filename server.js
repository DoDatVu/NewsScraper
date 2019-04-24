var express = require ("express");
var mongojs = require ("mongojs");
var mongoose = require ("mongoose");
var cheerio = require ("cheerio");
var axios = require ("axios");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);