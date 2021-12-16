function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let bestRestaurantP = document.querySelector('#bestRestaurant p').textContent;
      let bestRestaurantWorkersP = document.querySelector('#workers p').textContent;
      let input = JSON.parse(document.querySelector('#inputs textarea').value);

      let restaurants = generateRestaurants(input);

      for (const restaurant of restaurants) {
         restaurant.averageSalary = calculateAverageSalary(restaurant);
         restaurant.maxSalary = getHighestSalary(restaurant);
      }

      let bestRestaurant = restaurants
         .reduce((acc, c) => acc.averageSalary > c.averageSalary ? acc : c);

      let bestRestaurantWorkers = bestRestaurant.workers;

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.maxSalary.toFixed(2)}`;

      document.querySelector('#workers p').textContent = bestRestaurantWorkers.reduce((acc, c) => acc += `Name: ${c.name} With Salary: ${c.salary} `, "").slice(0,-1);

      function generateRestaurants(input) {

         let restaurants = [];

         for (const rawRestaurant of input) {
            let restaurant = { workers: [] };

            restaurant.name = rawRestaurant.split(' - ')[0];

            let rawRestourantWorkers = rawRestaurant
               .split(' - ')[1]
               .split(', ');

            for (const worker of rawRestourantWorkers) {
               let [name, salary] = worker.split(' ');
               salary = Number(salary);

               restaurant.workers.push({ name, salary });
            }

            let existingRestaurant = restaurants.find(x => x.name == restaurant.name);

            if (existingRestaurant) {

               let allWorkers = existingRestaurant
                  .workers
                  .concat(restaurant.workers);

               existingRestaurant.workers = allWorkers;
            } else {
               restaurants.push(restaurant);
            }
         }

         return restaurants;
      }

      function calculateAverageSalary(restaurant) {
         let workersCount = restaurant.workers.length;
         let salaries = restaurant.workers.map(x => x.salary);
         return salaries.reduce((acc, c) => acc + (c / workersCount),0);
      }

      function getHighestSalary(restaurant) {

         restaurant.workers.sort(bySalaryDescending);

         return restaurant.workers[0].salary;

         function bySalaryDescending(a, b) {
            return b.salary - a.salary;
         }
      }
   }
}