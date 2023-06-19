//Function to simulate an asynchronous request
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                resolve('Data Fetched');
            }else{
                reject('Error fetching data');
            }
        }, 2000);
    })
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

const fetchDataAsync = async () => {
    try{
        const result = await fetchData();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

// fetchDataAsync;

