`npm install --save-dev node-sass`
`npm install --save-dev postcss-cli autoprefixer`

Add in package json to run commands from CLI

```
  "scripts": {
    "scss": "node_modules/.bin/node-sass --output-style compressed -o static/css/ static/css/styles.css",
    "autoprefixer": "node_modules/.bin/postcss -u autoprefixer -r static/css/*"
  },
```
* Since the modules are installed locally, we need to call them as `node_modules/.bin/<package_name>`
    * node-sass
        * node-sass [options] <path_to_file_to_build> <path_from_file_to_build_from>
        * `npm run scss` as per the key_name under scripts

* Postcss:
    * -u: flag means to use [autoprefixer]
    * -r: flag means to replace any '.css' files in 'static/css' with vendor prefixes.

[Article and contains how to compress images](https://css-tricks.com/why-npm-scripts/)

[Node Sass](https://github.com/sass/node-sass#command-line-interface)

# Responsive Layout Using Media Queries 

## Media queries look at:
* Width and height of the viewport
* Page orientation
* Resolution 

Use the @media rule for media queries, which define the 
different style rules for various media types and devices:
* screen
* print 
* handheld
* max-width 
* device-width 
* orientation
* color 

## Using Style Guides to Set Up Your Base CSS

* It saves time and work, while ensuring a consistent feel and look.
* Identify design patters
* Common element styles
* colors
* paddings
* margins
* page layout

Base rule styles include setting:
* heading sizes
* default link styles
* default font styles 
* body backgrounds 

Your style guide will be comprised of:
* A template: contains the basic elements that serve as the foundation
for your web page, such as color palette, fonts, headers, footers,
body text, navigation, widgets, and grid layouts.
* Patterns: The patterns for your web page include buttons, logos, images,
the font icon library, and form styles.
* Documentation: It's a record of the style and development pattern of your
web page. You can add comments in your code that serve as the style 
guide or use interactive modals or tool tips.

---

## Media Queries

```
// CSS to hide mobile toggle button for desktop devices 
@media screen and (min-width: 768px) {
    .btn-mobile-toggle {
        display: none;
    } 
}
```

**Media queries look at the capability of the device to check**
* Width and height of the viewport
* Width and height of the device 
* Page orientation 
* Resolution 

_using relative units for measurement simplifies layouts and prevents
from accidentally creating components that are too big for the 
viewport._ In addition, using 
[relative units](https://css-tricks.com/building-resizeable-components-relative-css-units/) 
allows browsers to render content, based on the user's zoom level, 
without the need for adding horizontal scroll bars to the page. 

Most commonly used media queries are:
* min-width: Rules applied for any browser width over the value
defined in the query.
* max-width: Rules applied for any browser width below the value 
defined in the query.
* min-height: Rules applied for any browser height over the value
defined in the query.
* max-heigth: Rules applied for any browser height below the value 
defined in the query.
* orientation:portrait Rules applied for any browser where the height 
is greater than or equal to the width. 
* orientation:landscape Rules for any browser where the width is 
greater than the height. 

**Note:** There is an important difference between min-width and 
min-device-width. The value for min-width is based on the the _size_ of 
the **browser window**, while the value for min-device-width _size_ of 
the **display screen for the device**. 


---
---
## Device Breakpoints

Breakpoints can be divided into two different types; major and minor. 
Major breakpoints are usually based on the most classic device sizes 
being used by people, and minor are breakpoints used to fix content 
issues between major breakpoints. You should always incorporate a fluid
layout structure by using percentage widths to account for all 
widths between major breakpoints.

Example of a set of major device breakpoints.

```
/* Extra small devices (phones, up to 480px) */
@media screen and (max-width: 767px) {

}

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {

}

/* Tablets/desktops and up */
@media (min-width: 992px) and (max-width: 1199px) {

}

/* large like desktops and up */
@media screen and (min-width: 1200px) {

}
```

For devices with large screens, it's best to limit the maximum width
of the container panel so that it doesn't consume the whole screen 
width.
```
// css for main container 
.container {
    max-width: 62.5rem;
}
```

Instead of using pixels to declare breakpoints, use relative units,
which allows browsers to adjust the design, based on the user's zoom
level.


---
---
## Working with images 

Before adding images to your website, first prepare the images for the 
Web using an image editing program. There are three steps:
* Resampling the image so that it is at the proper resolution for the Web.
* Resizing or cropping the image so that it is the right size on your web page.
* Saving the image in one of the three Web image graphics formats: JPEG,
PNG, or GIF. _Tip:_ For images, JPEG is the best overall option.

Every image is comprised of pixels. The more pixels per inch the image has,
the sharper and more detailed it will appear. Most images on the Web are 
**72 and 100 pixels** per inch. 

```
<img height="##" width="##" src="image.gif">
```
Replace the "##" with the corresponding number of pixels for the image's 
height and width. By specifying the actual dimensions of the image, 
the web page will load with the correct amount of space allocated to the 
image. Otherwise, the image will download, causing the page to move 
down and rearrange for every image that subsequently downloads.

To make an image responsive to the container it is in, set the 
width to 100%.

```
img {
    max-width: 100%;
    height: auto;
} 
```
# Making your CSS Modular 

In CSS, it describes a consistent approach or creating CSS that 
is broken down into smaller parts. A.K.A Components, Objects, 
or Web Parts. They are a collection of re-usable building blocks. The core 
concept present throughout the various guidelines is how to identify the smaller 
parts that make up a page and then how to construct them using a consistent 
naming pattern.

Typically, modules are used inside layout containers, and a module may also 
be placed within other modules as well. Each modules should be designed as a 
stand-alone component that you modify with additional CSS classes - this creates 
a more flexible and scalable approach. These parts are self-contained, de-coupled 
from their parents, and portable. 

### CSS Modules are:
* Generic, self-contained, and reusable.
* Modifiable, combinable, and scalable.
* Can contain or be contained by other modules but stay independent.

Common modules: .nav, .search, .logo, .breadcrumbs, .title, .button, etc.

```CSS
/* What does a module NOT look like? */
.content-area .btn {
    // style rules
}

/* The button should be independent and 
not coupled to .content-area. */
```

```CSS
/* What does a module look like? */
.btn {
    padding: .5em 1em;
    text-decoration: none;
    border: 1px gray solid;
    display: inline-block; //helps anchors and 
                           //other inline elements
}
```

```HTML
<!-- Buttons with various elements -->
<div class="btn">Button Text</div>

<a class="btn">Button Text</a>

<button class="btn">Button Text</button>
```

To create the variation we need for .content-area, we can create a sub-module 
like below.

```CSS
// Button sub-module 
.btn-content {
    background: blue;
    color: white;
}
```
Then we simply add our button variation to the element. 

# Building a Semantic HTML and CSS Foundation 

*In summary:* 
1. Use a simple wireframes to plan for the requirements of the layout.
2. Build a Semantic HTML and CSS Foundation.
3. Use *Style Guides* to reference when creating the base styles in the stylesheet.
4. 

* Plan and Design a Layout.
   * Start to plan how you would build a layout with CSS after having looked at the design.
* Build a Semantic HTML and CSS Foundation 
   * Implement a CSS reset that defines some base styles.Start building a 
   layout based on the wireframe designs. 
* Analyze Style Guides to Build your Base CSS.
   * Identify the elements and styles that you should add to the base. After that,
   create base styles for body, headings, and other elements.
* Use Media Queries to Create a Responsive Grid System.
   * Add containers, rows, columns and implement a responsive solution that will 
   flip columns when the window displaying your page changes size.

___ 
___

* In the css stylesheet:
```
@import 'normalize.css';
```

* Followed by setting all elements to border box;

```
html {
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
}
```

* Under the */Theme Styles */ start building based on the wireframe design.
* Temporarily theme the website in representation of the wireframe diagram.
```
.background-primary {
    background:  #F7941E; /* Orange */
} 

.background-secondary {
    background: #00AEEF; /* Blue */
}

.background-tertiary {
    background: #8DC63F; /* Green */
}

/*Color List: can be placed at the top.
- light blue = 00AEEF;
- dark blue = 1C75BC
- green = 8DC63F
- dark green = 009444
- orange = F7941E
- dark orange = F15A29
- brown = 594a42; */
```

* Under the Base Styles, create styles for the body, headings and other elements.
```
body {
    color: #414042;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
}

h1, h2, h3 {
    font-weight: bold;
}

a {
    color: #8dc63f;
}
a:hover {
    text-decoration: underline;
}
```

___
## Create a Main Container 

* Under /* Layout Styles */ create a container in your css 
```
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1170px;
} 
```
* It pads left and right 15px, creating a 30px grid gutter for our base.
* Sets the margins to auto to center the container on the screen.
* Sets max-width: 1170px, because when you add left and right padding with max-width, 
  you get 1200px which is our large device breakpoint. Keep in mind we set border-box.

  ## Configuring node-sass
When it is installed locally, then the command can be called
`node_modules/.bin/node-sass` from .vscode tasks.json file.

Creating a package json.
```bash
npm init
# for automatic package creation use --yes or -y
npm init --yes

npm install node-sass
```

[Using package.json](https://docs.npmjs.com/getting-started/using-a-package.json)

---
To configure the Task Runner to use node-sass:
`Ctrl+Shift+P` and search for **Configure Task Runner**,
then select Other.

```
{
    "version": "0.1.0",
    "command": "node_modules/.bin/node-sass",
    "isShellCommand": true,
    "args": ["Mod3Lab/test.scss", "test.css"]
}

# another example of args:
    "args": ["Mod4Lab/scss/styles.scss", 
             "Mod4Lab/css/styles.css"]
```
the command option is where the node-sass module is located
while args denotes where the file is located and where
should the output go.

---
## Variables

```SCSS
// Variable Example in SCSS
$primary-background-color: #666666;
```

## Nesting
It allows you to specify properties to selectors within
other selectors. Providing a visual hierarchy when 
working with child selectors.

```SCSS
// Nesting Example in SCSS
.button {
    .span {
        font-weight: bold;
    }
    &:hover {
        background: $primary-background-color;
    }
}
```

## Mixins
It allows you to define common properties once, and 
then reuse them throughout the rest of your CSS. For 
example, you can use mixins to write cross-browser background 
gradients or CSS arrows.
```SCSS
// Mixin Example in SCSS
@mixin title ($color, $size){
    color: $color;
    cont-size: $size;
}
```
The Following code includes the mixin into a .title-page class.
```SCSS
.tittle-page {
    @include title(gray, 2.5rem);
}
```
Files using this syntax have the .scss extension
```SCSS
// SCSS Example
$text-color: #333333;
body {
    color: $text-color;
}
```

```bash
# check Sass version
> sass -v

# run Sass to compule a .scss file into a .css file
> sass input.scss output.css

# Command Sass to watch a .scss file for changes then 
# create the .css file
> sass --watch input.scss:output.css

# Files can be automatically converted from one syntax to the 
# other using the following -> sass-convert 

# To convert Sass to SCSS, type the following:
> sass-convert style.sass style.scss
```

```bash
> npm install node-sass
```
The directory where your Sass/SCSS files live is called the input
folder. Your processed CSS files are save to the output folder.
These folders can be set up however you like, even nested inside one
another. A typical pattern is for the input folder (labeled scss,
in this example) to reside with your site's regular style sheets
folder.

```
my_project/
    index.html
    css/
        main_style.css
    scss/
        main_style.scss
        _mixins.scss
        _colors.scss
```
---
## Sass Features In-Depth

**Ampersand:** One of the basic features is the ampersand(&). 
When you prepend an ampersand to a parameter in a nested selector, 
that selector becomes attached to the parent selector, instead
of being nested below it. This is immediately useful for pseudo
class selectors such as :hover or :after that need to be associated
with a selector.

```SCSS
.parent {
    &:before {...}
}

/* Is the same as the following CSS */

.parent:before {...}
```
**Combinatorial Explosion:** Use it to add space between elements
that are direct siblings (the + selector) and direct descendants 
(the > selector).

* Example: This code sample adds a top margin to any paragraph 
that is a direct sibling of another paragraph.

```SCSS
p {
    + p {
        margin-top: 16px;
    }
}

/* Which is the same as the following CSS */
p + p {
    margin-top: 16px;
}
```
Sass has inline comments -> `//`

---

**Variable:** Sass uses the `$` symbol to create a variable.

```scss
$font-primary: "Times New Roman", Georgia;
```

**Extended/Inheritance:** Use the extend command, `@extend`, to
share a set of CSS properties from one selector to another. This
helps you avoid writing multiple class names on HTML elements, 
and allows for semantic names in your CSS instead. 

```scss
// Container Rules
.container {
    max-width: 1024px;
    padding: 0 15px;
    margin: 0 auto;
}

// Container 2 rules 
.container-2 {
    @extend .container;
    padding: 0 45px;
}
```
**Import:** The CSS import option allows you to divide your 
CSS into smaller, more maintainable portions. Although each 
time you use `@import` in CSS, it creates another HTTP request. 
Sass builds on top of the current CSS `@import`. Instead of 
requiring an HTTP request, Sass takes the file that you 
want to import, and combines it with the file you're 
importing into. This combine function then serves a single 
CSS file to the web browser.
* Note: When you import a file, you don't need to include 
the file extension .scss.

**Nesting:** Nesting provides a visual hierarchy to your code,
similar to HTML, increasing readability.
* Note: Sass lets you nest selectors to help eliminate 
repetitive code, but doing so results in every level of 
nesting creating more selectors in your final CSS.

---
**Mixin:** Mixins allow you to define common properties once,
and then reuse them throught the rest of your CSS. You use 
the `@mixin` directive and give it a name. 

```scss
// Clearfix Mixin
@mixin clearfix() {
    &:before,
    &:after {
        content: "",
        display: table;
    }
    &:after {
        clear: both;
    }
}

// Add Clearfix to row
.row {
    @include clearfix();
}
```
**Operations:** Sass contains standar math operators like `+, -,
*, /,` and `%`; use them to convert pixel values to percentages.

```scss
// Font-size Mixin for px to rem conversion
@mixin font-size($size) {
    font-size: $size * 1px;
    font-size: $size * 0.1rem;
}

// To use the font-size mixin
.title {
    @include font-size(24);
}
```
**Partial:** `_partial.scss` The underscore tells Sass that the 
file is only a partial file, and that is should not be generated 
into a CSS file. Sass partials are used with the @import directive.

**Root Directive:** Use the root directive reference to move 
anythin below it to the root level, so that it won't inherit
the selector under which it's nested.
