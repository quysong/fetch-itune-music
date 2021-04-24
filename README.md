# **Assignment for Frontend Position**

#

# Introduction

For the coding challenge, you are tasked to build an application that will fetch music results from iTunes api and display the results according to the design requirements. The app is required to have search and filter functionalities. Below is the preview of the design, you can find the design files hosted on [Figma](https://www.figma.com/file/o1KQ1vN8Zms4vhFeQihN5A/Hiring-Test?node-id=0%3A1).

![](./home-screen.png)

#

# Tasks

Build a responsive single page application that uses iTunes search API to fetch information within the iTunes Store based on the user&#39;s search query. Information about the API can be found at [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) page. Create a &quot;discover&quot; page following the the design (pixel perfect) with the following features:

- Search
  1. Users can type in any phrase they like
- Filter by genre
  1. Users can click on any of the existing Genre present in the Filter Genre section to fetch results for the particular genre
- Show music result
  1. Once results are returned successfully from the api request, display the results and the count according to the design specifications
- Implement your own design when no results are returned from the api call

#

# Requirements

- Use React as the UI library. Ensure the page is responsive and pixel perfect
- Use redux (or equivalent state management libraries) for state management (saving music categories i.e. genres, loading and error states). Nice to have redux-saga, redux persist implemented
- You can use any UI library for React, but [Ant Design](https://ant.design/) is preferred
- SCSS is preferred. But feel free to use whichever suits you best. Tune the build system as needed to allow for it.
- Unit tests for react components and other logic you might have in your application
- End to end (E2E) tests using Cypress or equivalent tools
- We will review variable naming, code style, folder structure, separation of concerns etc

#

# Submission

- [GitHub](https://github.com/)
- others (E.g. [Bitbucket](https://bitbucket.org/), [Gitlab](https://about.gitlab.com/), [CodeSandbox](https://codesandbox.io/))
