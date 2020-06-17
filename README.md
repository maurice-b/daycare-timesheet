source article: https://dev.to/hugoblanc/create-a-deno-rest-api-a-promising-start-with-alosaur-and-typeorm-n28

launch Postgres docker image: `docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=pwd -d postgres`
launch Mysql docker image: `docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=pwd -d mysql:8.0`


run deno in terminal: `deno run --inspect --allow-net --allow-read --config ./tsconfig.json src/app.ts`

reload all packages: `deno run --inspect --allow-net --allow-read --allow-write --unstable --allow-plugin --reload --config ./tsconfig.json src/app.ts`


-------------
https://github.com/alosaur/alosaur/tree/master


// denon (like nodemon)
run `denon run --inspect --allow-net --allow-read --config ./tsconfig.json src/app.ts`


docker run --name some-mongo -p 27017:27017 -d mongo 