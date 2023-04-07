# Cats Service

## 🧱 Local development
### Installation

```bash
$ npm install
```

### Running the app

Create a `.env` file with the following variables
```bash
SESSION_SECRET={uuid}
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🚀 Deployment

The API and its documentation are live at where the endpoints can be tested [https://cats-service-production.up.railway.app/api](https://cats-service-production.up.railway.app/api)

## 👎🏾 What are the limitations/problems with this solution?

1. There isn't much error handling for the API
2. There aren't many useful logs for debugging
3. There is no database, however favourites are reloaded from the client if the server restarts and no longer holds that data
4. The API could be improved; having separate controllers for `.../cats` and `.../favourites` might not be the most intuitive
5. No ability to remove a cat from favourites
6. ~~Images are stored in the file system~~
7. Testing is poor

## ⏳ With more time

1. I would address the issues mentioned above
2. Create a Ci/CD pipeline
3. Use a database and enable user image uploads
4. Learn more about Nest's features and best practices to improve the robustness and functionality of the API
