# v0.8.0
* Adds the method `offChange` to remove change listeners.

# v0.7.3
* Updates the way we detect node environments for urlstack

# v0.7.0
* Urlhub is now exported as part of the module, so we can `import {router} from 'urlstack'` even before creating a urlstack router, to be accessible to other parts of the apps.
* Routes and strategy are not mandatory now to create a stack router.

# v0.6.4
* Moved into url-navigation repo

# v0.6.1
* Fixes tab stack not preserving keys when navigating

# v0.6.0
* Tabs stack are now always prefilled even if some tabs has not been visited
* Adds visited attribute to the tab items

# v0.5.1
* Node strategy is set checking the document object instead the window one, in order to make it work in react-native.

# v0.5.0
* Urlstack now working in node environments (react-native).
* Added tests for node environment.

# v0.4.0
* Location objects are working ok, tests added for it.

# v0.3.0
* Modal stacks are working now
* Modal stacks can be recursive
* All stacks have the format `{stack, activeIndex}`
* Added more tets

# v0.2.0
* Future screens are unmounted now when the current screen don't share the pathname with the preview one.
* Adds routePath to the stack item.
* Fixes merge of routes.
* Adds tests.
* First version of the readme.
* Adds build.

# v0.1.1
* Fixes router exports

# v0.1.0
* First public version. Even if the code for the navigator is still in here, it will be a stack router.