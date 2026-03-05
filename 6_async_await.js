//  An async function always returns a Promise.
// await does two things:
// 1. Pauses the function execution until the Promise resolves
// 2. Unwraps the Promise and gives you the value
// NOTE: await makes async code look and feel synchronous, but it's still non-blocking.

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

async function handleDataSuccess() {
    try {
        const result = await getDataSucces();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
// Function starts executing
// Hits await → pauses execution for 5 seconds
// Promise resolves with "data fetched"
// Execution resumes
// result contains "data fetched"
// Logs the result
// catch block is skipped (no error)

async function handleDataFailed() {
    try {
        const result = await getDataFail();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
// Function starts executing
// Hits await → pauses execution for 5 seconds
// Promise rejects with "server error"
// Throws an error (jumps to catch block)
// Rest of try block is skipped
// catch block executes with the error

handleDataSuccess();
handleDataFailed();
console.log("waiting...");

// The best error handling for sequential asynchronous steps
try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    console.log(comments);
} catch (error) {
    console.error(error);
}
