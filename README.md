[![npm version](https://badge.fury.io/js/verid_utils.svg)](https://badge.fury.io/js/verid_utils)

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

The template comparison function returns a score roughly between 0.0 (totally different faces) and 5.0 or higher (identical faces).

The similarity threshold for faces will vary slightly depending on the use case. 4.0 is a good all-purpose threshold that minimises false rejection while maintaining low false acceptance. 4.5 should nearly rule out false acceptance in most scenarios.

~~~javascript
// Templates may be Base64-encoded strings or arrays or floating point integer values
var template1 = "..."; // Face template 1
var template2 = "..."; // Face template 2
var score = veridUtils.compareFaceTemplates(template1, template2);
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