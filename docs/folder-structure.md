## Folder Structure

React is a lib that doesn't provide a guide about how you should structure your project

This doc will describe the folder structure followed in this project, and the definiton of some folder names

## Folder names

**📂 `src` directory**

- [ ] It contains all the code of project, including images that will be imported in React Components

**📂 `app` directory**

- [ ] This directory contains our application routes. It is a strategy for handling routes and rendering views in Next.js.

> Aprenda mais sobre o App directory e Routing seguindo [este guia](https://nextjs.org/docs/pages/building-your-application/routing)

**📂 `components` directory**

- [ ] It contains all the shared components and it's styles. Each component will be inside a folder with the component name, together with it's style.
Components can be split into subfolders by function; e.g., have a folder for `form components`, or one for `profile components`, etc

**📂 `public` folder**

- [ ] It contains store static assets that can be directly accessed by the browser. It typically contains files such as images, fonts, videos, or any other static resources that are necessary for your web application. When you build your Next.js application, the contents of the "public" folder are copied as-is to the root of the build output.

**📂 `styles` directory**

- [ ] It contain the ```global.scss``` file, and may contain others related style files in future(like `_root.scss` or `_Montserrat.scss`)

**📂 `assets` directory**

- [ ] This folder is commonly used to store static files or resources that are used in your application, such as images, fonts, icons, or other media files. These assets are typically referenced by your HTML, CSS, or JavaScript files.

**📂 `lib` folder**

- [ ] The "lib" folder, short for "library", is often used to store external or third-party libraries, modules, or code that your application depends on. It can also contain custom libraries or modules that you have created and want to reuse across different parts of your application. This folder is generally used for code that is not specific to a particular domain or functionality but serves as a general-purpose library or set of functions.

**📂 `utils` folder**

- [ ] This folder is short for "utilities" and is typically used to store utility functions or helper files that are used throughout your application. These files often contain reusable code snippets that provide common functionality, such as date formatting, string manipulation, API requests, or other commonly used operations. Placing these functions in a separate "utils" folder helps keep your code organized and makes it easier to maintain and reuse these utility functions across different parts of your application.

**📂 `services` folder**

- [ ] It's typically used to store files that contain the logic for interacting with external services or APIs. These services can include databases, external APIs, authentication systems, email providers, or any other external systems that your application needs to communicate with.
