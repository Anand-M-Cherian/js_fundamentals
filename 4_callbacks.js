// A callback is a function passed as an argument to another function, to be executed later (usually after some async operation completes).
function fetchData(shouldFail, callback) {
    setTimeout(() => {
        if (shouldFail) {
            callback(null, "Network error occurred!");
        } else {
            callback("Successfully fetched data!", null);
        }
    }, 5000);
}

// Test success
fetchData(false, (data, error) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Success:", data);
    }
});

// Test failure
fetchData(true, (data, error) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Success:", data);
    }
});

// 1. fetchData doesn't block. JavaScript continues to the next line immediately.
// 2. fetchData Schedules a Timer
// 3. setTimeout tells JavaScript: "Run this function after 5 seconds, but don't wait for it now."
// 4. After 5 Seconds, Callback Executes

// event loop and event queue
// There might be multiple callbacks in the queue and the event loop might pick up something else
// There are chances that your callback is not exactly after the wait time
// It might take more than the wait time

// Nested Callbacks
// ❌ Callback Hell (Pyramid of Doom)
// Fetch user → Fetch their posts → Fetch post comments
fetchUser(userId, (user, error) => {
    if (error) {
        console.error(error);
    } else {
        fetchPosts(user.id, (posts, error) => {
            if (error) {
                console.error(error);
            } else {
                fetchComments(posts[0].id, (comments, error) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log("Finally got comments:", comments);
                        // What if we need to go deeper? 😱
                    }
                });
            }
        });
    }
});

// Deeply nested (hard to read)
// Error handling repeated everywhere
// Difficult to maintain
