// Promise --> object which represents the state of the async operation
// It represents the eventual completion
// A promise starts pending
// It can only transition once (to fulfilled OR rejected)
// Once settled (fulfilled/rejected), it never changes

function getDataSucces() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetched");
        }, 5000);
    });
}
function getDataFail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("server error");
        }, 5000);
    });
}

getDataSucces()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
// Promise starts in pending state
// After 5 seconds, resolve("data fetched") is called
// Promise transitions to fulfilled
// .then() handler executes with "data fetched"
// .catch() is skipped
getDataFail()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
// Promise starts in pending state
// After 5 seconds, reject("server error") is called
// Promise transitions to rejected
// .then() is skipped
// .catch() handler executes with "server error"

// Flat, readable, single error handler
fetchUser()
    .then((user) => fetchPosts(user.id))
    .then((posts) => fetchComments(posts[0].id))
    .then((comments) => console.log(comments))
    .catch((error) => console.error(error)); // ONE error handler!
