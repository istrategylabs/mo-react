# Mo React

Mo-react is a React-powered static project template. It's based off `create-react-app`, but fully supports "server" rendered content as part of the build process.


## Features

* TODO


## Usage

Create a new project from the mo-react template using [cookiecutter](https://github.com/audreyr/cookiecutter):

```
brew install cookiecutter
cookiecutter gh:istrategylabs/mo-react
```

Follow the prompts to configure your project with the available options. When
finished, `cd` into your project, installed dependencies with `yarn`, and
quickly get started by running `yarn start`. There is extended documentation
for the project itself in the [project README.md](https://github.com/istrategylabs/mo-react/blob/master/%7B%7B%20cookiecutter.repo_name%20%7D%7D/README.md).


## What to change

### Favicon

Two favicon files are included and should be changed to be appropriate for the project.
Follow the [Favicon Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet) for
best practices, and create at [least these images](https://github.com/audreyr/favicon-cheat-sheet#the-images):

| Sizes | Name | Purpose |
|---|---|---|---|---|
| 16x16 & 32x32 | favicon.ico | Default required by IE. Chrome and Safari may pick ico over png, sadly. |
| 152x152 | favicon-152.png | General use iOS/Android icon, auto-downscaled by devices. |

You can use ImageMagick to generate `.ico` files for you which is detailed in
the [Helpful Tools](https://github.com/audreyr/favicon-cheat-sheet#helpful-tools) section.


### Structured Data

* TODO

### Facebook Open Graph Tags

* TODO

### Twitter Card Tags

* TODO

### robots.txt

By default, the `robots.txt` file is configured allow search spiders. Depending on your project, you
should change this to meet your needs, see [robotstxt.org](http://www.robotstxt.org/robotstxt.html).

### humans.txt

By default, the `humans.txt` file only lists ISL as a contributor. You should add project contributors
to this list. Also, you should add any special thanks, and update the technology colophone to be appropriate
for the project, see [humanstxt.org](http://humanstxt.org/Standard.html).

