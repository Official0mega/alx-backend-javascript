// Returning a Promise//
// 0. Keep every promise you make and only make promises you can keep
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const success = true;  // Simulate success or failure condition

            if (success) {
                resolve('API resolve data');
            } else {
                reject('Failed to fetch data from the API')
            }
        }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
    });
};