# ng2-test

A simple web app developed with Angular CLI bundler using Angular2 and bootstrap technologies.

The app consists of three pages that let user to view, add, edit and delete products.

All the product data is stored in localstorage, starts with default bunch of products (GoT castles).
To manipulate data within localstorage app uses 'angular-2-local-storage' module.

Each product includes four fields: title, description, image, price.
Creating/editing a product user can set any strings (with length validation) to title, description and price fields, while setting an image requires to select one from the list.


Approximate time was spent on the development is 16 hours:
- 1h: project initialization and required modules investigation
- 2h: routing development for 3 mentioned pages
- 3h: home page (products-main component)
- 3h: add product page
- 5h: product detail page
- 2h: adding styles and content creation
