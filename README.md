# Comet CSS

[![Build Status](https://travis-ci.org/briward/comet.svg?branch=master)](https://travis-ci.org/briward/comet) [![Bower Version](https://img.shields.io/badge/bower-v0.0.6-yellow.svg)](https://travis-ci.org/briward/comet)

Comet is a clean and simple SASS wrapper for the Pure Grid framework ([http://purecss.io/grids](http://purecss.io/grids)). All credit goes to the Pure CSS team at Yahoo, I'm merely standing on the shoulders of giants.

## Installation

Bower: `bower install comet`

## What does Comet do?

Comet provides two mixins: `comet-container()` and `comet-unit($numerator, $denominator)`. 

### comet-container()

The `comet-container()` mixin is the same as adding the `.pure-g` class (just like you would do if you were just using the base framework).

### comet-unit($numerator, $demoninator)

The `comet-unit()` mixin provides a simple way to add grid classes to any element in the DOM without the need to embed the classes within your HTML. All unit elements must be direct children of container elements (This is good practice but is not enforced). Unit's do not require a denominator, if you would like `width: 100%` just ignore the second parameter.

## Example usage

```css
/* main.scss */

@import 'bower_components/comet/dist/comet';

.container {

  @include comet-container(); /* .pure-g */

  .unit {

    @include comet-unit(1, 2); /* .pure-u-1-2 */

    .inner {
      background: #ddd;
      margin: 1em;
    }

  }
}
```

## Browser support and testing

The Pure CSS framework is tested and works in:

IE 8+
Latest Stable: Firefox, Chrome, Safari
iOS 6-8
Android 4.x

## Contributing

See the CONTRIBUTING file for information on how to contribute to Comet.

## License

#### Comet License

Copyright (c) Bri Ward

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Pure CSS License

Copyright 2013 Yahoo! Inc. All rights reserved.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL YAHOO! INC. BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.