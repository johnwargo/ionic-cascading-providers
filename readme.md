Ionic Cascading Providers
=========================

I am working on an Ionic 2 project, and for this project, the application needs to support a variety of data providers: online, offline, localstorage, securestorage. Basically, through a configuration setting or a hard-coded property in the application, the application needs to dynamically switch in the right provider based on the configuraton. To prove one way to implement this, I created this sample project. It exposes a single Ionic provider that abstracts away two other providers. 

