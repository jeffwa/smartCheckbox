smartCheckbox
=============

Smart Checkbox, a jQuery plugin that sets up parent and child checkboxes.

### How it works

The plugin takes a parent checkbox (or checkboxes), adds a click event to select/deselect its children and adds a change event to the
children to set the appropriate state on the parent based on all the children.

### Usage

There are currently no options for smartCheckbox, so simply find the parent checkboxes and pass them to a smartCheckbox() call:

`$(".smartCheckbox").smartCheckbox();`

smartCheckbox() will automatically discard any matching elements that are not checkboxes.

#### HTML

##### Parent Checkbox

The HTML for the parent checkbox is valid HTML:

`<input type='checkbox' id='parent' name='parent' class='smartCheckbox' value='value' />`

The ID of the parent checkbox is used as a class for it's children in order to tie them together.

##### Child Checkbox

For the children, also use simple, valid HTML:

`<input type="checkbox" name="child" id="child1" class="parent1" value="child1">`

A child may have multiple parents. Just assign the child mulitple classes matching parent checkboxes.

`<input type="checkbox" name="child" id="child1" class="parent1 parent2 parent3" value="child1">`