
// Default parameter
const leadSinger = (artist = "Someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger("Chris Martin");
leadSinger(); // here will use the default parameter;


// Initial:
// const leadSinger = () => {
//     console.log("Chris Martin is the lead singer of Cold Play");
// }

// leadSinger();