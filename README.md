# UI CONTROLS

## How to publish and consume package library

1. We are using GITHUB for package repository which is internally using npm package registry.
2. For publishing, we need to create .npmrc file in the library which is getting converted into a package. At this point, we need to create Personal Access Token(PAT) in Github for the account which owns the package.
3. Inside the .npmrc file, place the below content. Here, <PAT> will authorise the user to publish the package. Any user who has PAT can publish the package to Github.

//npm.pkg.github.com/:\_authToken=<PAT>
@alertfusion:registry=https://npm.pkg.github.com

Package name in the package.json should be @<OWNER>/packagename.4. On the consumption side, create .npmrc file and the content of the file can be as below.

//npm.pkg.github.com/:\_authToken=<PAT>
registry=https://npm.pkg.github.com/alertfusion
PAT --> Personal Access Token
alertfusion --> owner of the repository

GitHub Packages: Your packages, at home with their code
With GitHub Packages you can safely publish and consume packages within your organization or with the entire world.
