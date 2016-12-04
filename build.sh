#!/bin/sh
mkdir -p public/vendors;

cp node_modules/angular/angular.min.js public/vendors;
cp node_modules/angular/angular.min.js.map public/vendors;

cp node_modules/angular-route/angular-route.min.js public/vendors;
cp node_modules/angular-route/angular-route.min.js.map public/vendors;

cp node_modules/angular-filter/dist/angular-filter.min.js public/vendors;
cp node_modules/angular-filter/dist/angular-filter.min.js.map public/vendors;

cp node_modules/bootstrap/dist/css/bootstrap.min.css public/vendors;
cp node_modules/bootstrap/dist/css/bootstrap.min.css.map public/vendors;

cp node_modules/angular-ui-bootstrapgit/dist/ui-bootstrap-tpls.js public/vendors;
cp node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css public/vendors;

cp node_modules/ng-file-upload/dist/ng-file-upload-all.min.js public/vendors;

cp node_modules/ui-select/dist/select.min.js public/vendors;
cp node_modules/ui-select/dist/select.min.js.map public/vendors;

cp node_modules/angular-sanitize/angular-sanitize.min.js public/vendors;
cp node_modules/angular-sanitize/angular-sanitize.min.js.map public/vendors;

cp node_modules/ui-select/dist/select.min.css public/vendors;
cp node_modules/ui-select/dist/select.min.css.map public/vendors;

cp node_modules/angular-base64-upload/dist/angular-base64-upload.min.js public/vendors;
cp node_modules/angular-base64-upload/dist/angular-base64-upload.min.js.map public/vendors;
