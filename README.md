# Ver-ID Node JS Utilities

Utilities for converting and comparing Ver-ID face templates

## Installation

```npm install verid_utils```

## Usage

### Loading the module

~~~javascript
var veridUtils = require("verid_utils");
~~~

### Face template comparison

~~~javascript
// Templates may be Base64-encoded strings or arrays or floating point integer values
var template1 = "..."; // Face template 1
var template2 = "..."; // Face template 2
var score = veridUtils.compareFaceTemplates(template1, template2);
// Score will range from 0.0 (totally different) to 1.0 (identical)
~~~

### Face template conversion

Convert a template from Base64-encoded string to an array

~~~javascript
var templateBase64String = "..."; // Face template string
var templateArray = veridUtils.base64ToFloat32Array(base64Template);
~~~

Convert a template from an array to a Base64-encoded string

~~~javascript
var templateArray = []; // Face template array
var templateBase64String = veridUtils.float32ArrayToBase64(templateArray);
~~~