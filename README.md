smartCheckbox
=============

A simple jQuery plugin that groups checkboxes together to one or more parent checkbox, thus creating smart checkbox groups that select/deselect as the conditions call for. Parent checkboxes will be selected automatically when all of its children are selected, and conversely, will deselect if one of its children is not selected. Selection of a parent checkbox will select all of its children.

### How it works

The plugin takes a parent checkbox (or checkboxes), adds a click event to select/deselect its children and adds a change event to the
children to set the appropriate state on the parent based on all the children.

View a live demo of the latest version at [http://smartcheckbox.jeffmclennan.com](http://smartcheckbox.jeffmclennan.com "smartcheckbox.jeffmclennan.com")

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