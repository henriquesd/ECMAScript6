const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded!");
        }, 3000) // takes three seconds to run;
    })
    
    // in line 12, will not move to the next lines, until the promise (uploadStatus) is resolved;
    // it will wait for the promise (uploadStatus), to get resolved, and then should be able to call line 15..
    let result = await uploadStatus;

    console.log(result);
    console.log(photos.length);
}

photoUpload();
// Result (after three seconds):
// Photo Uploaded
// 1



// --------- Not async:

// JS runs synchronously, and because of that, the promise "uploadStatus" is still not resolved when
// the code is running in the first moment, because it takes 3 seconds. The output will be:
// Promise
// 0

// function photoUpload() {
//     let uploadStatus = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             photos.push("Profile Pic");
//             resolve("Photo Uploaded!");
//         }, 3000) // takes three seconds to run;
//     })
    
//     let result = uploadStatus;

//     console.log(result);
//     console.log(photos.length);
// }

// photoUpload();


