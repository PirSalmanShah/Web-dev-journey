const fs = require("fs");

// console.log(fs);

console.log('Call back hell example');
fs.writeFile("test3.txt", "This is third test file", () => {
    console.log('This is third callback');
    fs.readFile("test3.txt", (error, data) => {
        console.log('this is fourth call back in read');
        console.log(error, data);
        console.log(error, data.toString());
    })

    //again

    fs.writeFile("test3.txt", "This is third test file", () => {
        console.log('This is third callback');
        fs.readFile("test3.txt", (error, data) => {
            console.log('this is fourth call back in read');
            console.log(error, data);
            console.log(error, data.toString());
        })

        //again

        fs.writeFile("test3.txt", "This is third test file", () => {
            console.log('This is third callback');
            fs.readFile("test3.txt", (error, data) => {
                console.log('this is fourth call back in read');
                console.log(error, data);
                console.log(error, data.toString());
            })

            //again

            fs.writeFile("test3.txt", "This is third test file", () => {
                console.log('This is third callback');
                fs.readFile("test3.txt", (error, data) => {
                    console.log('this is fourth call back in read');
                    console.log(error, data);
                    console.log(error, data.toString());
                })

                //again

                fs.writeFile("test3.txt", "This is third test file", () => {
                    console.log('This is third callback');
                    fs.readFile("test3.txt", (error, data) => {
                        console.log('this is fourth call back in read');
                        console.log(error, data);
                        console.log(error, data.toString());
                    })

                    //again

                    fs.writeFile("test3.txt", "This is third test file", () => {
                        console.log('This is third callback');
                        fs.readFile("test3.txt", (error, data) => {
                            console.log('this is fourth call back in read');
                            console.log(error, data);
                            console.log(error, data.toString());
                        })

                        //again

                        fs.writeFile("test3.txt", "This is third test file", () => {
                            console.log('This is third callback');
                            fs.readFile("test3.txt", (error, data) => {
                                console.log('this is fourth call back in read');
                                console.log(error, data);
                                console.log(error, data.toString());
                            })

                            //again

                            fs.writeFile("test3.txt", "This is third test file", () => {
                                console.log('This is third callback');
                                fs.readFile("test3.txt", (error, data) => {
                                    console.log('this is fourth call back in read');
                                    console.log(error, data);
                                    console.log(error, data.toString());
                                })

                                //again

                                fs.writeFile("test3.txt", "This is third test file", () => {
                                    console.log('This is third callback');
                                    fs.readFile("test3.txt", (error, data) => {
                                        console.log('this is fourth call back in read');
                                        console.log(error, data);
                                        console.log(error, data.toString());
                                    })

                                    //again

                                    fs.writeFile("test3.txt", "This is third test file", () => {
                                        console.log('This is third callback');
                                        fs.readFile("test3.txt", (error, data) => {
                                            console.log('this is fourth call back in read');
                                            console.log(error, data);
                                            console.log(error, data.toString());
                                        })

                                        //again

                                        fs.writeFile("test3.txt", "This is third test file", () => {
                                            console.log('This is third callback');
                                            fs.readFile("test3.txt", (error, data) => {
                                                console.log('this is fourth call back in read');
                                                console.log(error, data);
                                                console.log(error, data.toString());
                                            })

                                            //again
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})