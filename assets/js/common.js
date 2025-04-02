// -*- coding: utf-8 -*-
//
// Created by Michael Simms
// Copyright (c) 2025 nTessimal, LLC

/// @function unix_time_to_local_string
function unix_time_to_local_string(unix_time) {
    let date = new Date(unix_time);
    return date.toLocaleString();
}

/// @function unix_time_to_utc_string
function unix_time_to_utc_string(unix_time) {
    let date = new Date(unix_time);
    return date.toUTCString();
}

/// @function is_valid_email
function is_valid_email(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

/// @function send_get_request_async
/// Sends an HTTP GET request and waits for the response.
function send_get_request_async(url, content_type, callback) {
    let xml_http = new XMLHttpRequest();

    xml_http.open("GET", url, true);
    xml_http.setRequestHeader('Content-Type', content_type);
    xml_http.setRequestHeader('Access-Control-Allow-Origin', '*');
    xml_http.setRequestHeader('Access-Control-Allow-Methods', 'GET');
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == XMLHttpRequest.DONE) {
            callback(xml_http.status, xml_http.responseText);
        }
    }
    xml_http.send();
}

/// @function send_post_request_async
/// Sends an HTTP POST request and waits for the response.
function send_post_request_async(url, params, content_type, callback) {
    let xml_http = new XMLHttpRequest();

    xml_http.open("POST", url, false);
    xml_http.setRequestHeader('Content-Type', content_type);
    xml_http.onreadystatechange = function() {
        if (xml_http.readyState == XMLHttpRequest.DONE) {
            callback(xml_http.status, xml_http.responseText);
        }
    }
    json_data = JSON.stringify(params);
    xml_http.send(json_data);
}
