# Lorem Ipsom CMS

Lorem Ipsom CMS is a proof of concept content management system for a seller on a marketplace. It allows the user to:

- view some basic stats about their own shop
- create new listings, edit their listing
- preview how their item would appear to potential shopper.

All user content displayed is managed by requests to a server. It is built in React with Chakra UI and Tailwind CSS for styling. The backend is created with json-server for this proof of concept.

You can view the live build version [here](https://phase-2.vercel.app/welcome)

## Installation

This [repo](https://github.com/Paper-Byte/json-server-cms) is responsible solely for the backend. This is **REQUIRED** if you wish to view and modify the content in a development environment.

In both projects, run this command in their terminal to ensure you properly install all dependencies.

```bash
npm install
```

You will need to set these `.env` variables in your own environment.

- `REACT_APP_LOGO` : Logo for the site tab and navigation bar.
- `REACT_APP_API_CATALOGUE`: URL to your API endpoint for /catalogue
  _ex. http://localhost:4000/catalogue for development_
- `REACT_APP_API_USERS`: URL to your API endpoint for /users
  _ex. http://localhost:4000/users for development_

To run it in a development environment, fork and clone both this repo and the one linked above. Once both are installed, edit the `dev` command located in this repo's `package.json` to match your file path to the **json-server-cms** folder. Once modified, you can launch the two projects _concurrently_ in this project's terminal with

```bash
npm run dev
```

You can modify the default data for the application in `json-server-cms`'s `seeds.json` file.

**IMPORTANT:** The data structure and keys are vital to this applications functionality. Modifying key names or structure **WILL** cause compiling to fail.

Once you have modified the data to how you wish run

```bash
npm run seed
```

On application restart, your changes will be applied and visible.

## Usage

_Creating an item_
![https://media1.giphy.com/media/jwtGynBVEL48VvsakJ/giphy.gif?cid=2154d3d78bbac83fd8e9dfc6a1cd48815348f528ae59f4a9&ep=v1_gifs_username_username&rid=giphy.gif&ct=g]

_Deleting a listing_
![https://media4.giphy.com/media/lw6OP0uIj2eD2SlnUW/giphy.gif?cid=2154d3d7618c4a5bf603d85eeebc7f3a8d534e59148b398e&ep=v1_gifs_username_username&rid=giphy.gif&ct=g]

_Previewing Catalogue_
![https://media2.giphy.com/media/m3J2bevnCEL3JhRSkC/giphy.gif?cid=2154d3d78ebba954eb1c9bfa5e9ca5b6711dc74e82a7139a&ep=v1_gifs_username_username&rid=giphy.gif&ct=g]

Full walkthrough of usage of the webb can be found [here](https://youtu.be/8WiAF672UBM)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change. This is a proof of concept. This is planned to be flushed out to offer more functionality. Implementation into a private marketplace application is also planned.
