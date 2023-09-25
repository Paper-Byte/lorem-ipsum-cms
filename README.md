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
[https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnZocnZ1c2E0dG9raWJmczlnMTU1M2VuOGFjdW5iMnZwaTl2cTVubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jwtGynBVEL48VvsakJ/giphy.gif]

_Deleting a listing_
[https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDZieTJianZmbWo3eHhtMXNmYm1peDQ1N3kza2dkZzVocXgxZHlodiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lw6OP0uIj2eD2SlnUW/giphy.gif]

_Previewing Catalogue_
[https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3I4dmYzbzQ4cXB0Yzg1dzIzMjI1d2FzN2cwdmRrNTdvdGR6Y3hqNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m3J2bevnCEL3JhRSkC/giphy.gif]

Full walkthrough of usage of the webb can be found [here](https://youtu.be/8WiAF672UBM)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change. This is a proof of concept. This is planned to be flushed out to offer more functionality. Implementation into a private marketplace application is also planned.
