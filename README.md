# Comet CSS

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

@import 'bower_components/comet/comet';

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