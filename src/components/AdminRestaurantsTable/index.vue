<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th scope="col" width="300">
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link class="btn btn-link" :to="{name: 'adminrestaurant',params: { id: restaurant.id }}">
            Show
          </router-link>
          <router-link :to="{name:'admin-restaurant-edit',params:{id:restaurant.id}}" class="btn btn-link"> Edit</router-link>
          
          <button type="button" class="btn btn-link" @click="deleteRestaurant(restaurant.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  // ... 請貼上 API 資料
  "restaurants": [
    {
      "id": 1,
      "name": "Jarrell Marvin",
      "tel": "095.959.6098",
      "address": "4831 Jacobi Harbors",
      "opening_hours": "08:00",
      "description": "Beatae dolorem autem doloremque deleniti qui aliquid odit voluptatum voluptate.\nMaiores eum aspernatur reprehenderit maxime eaque consequatur rerum sed non.\nQui ab accusamus sint.\nAutem perspiciatis neque neque.\nEaque amet animi enim distinctio maxime corporis omnis quo voluptatem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.098135662769796",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 2,
      "name": "Ari Lynch",
      "tel": "574.451.2677 x4983",
      "address": "887 Oswaldo Isle",
      "opening_hours": "08:00",
      "description": "Dolorum iusto corrupti sapiente est vel. Harum et ea aperiam voluptatum quia aliquam.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.141898843376287",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 3,
      "name": "Marlin Mosciski",
      "tel": "1-350-424-2998 x01726",
      "address": "68864 Hipolito Fall",
      "opening_hours": "08:00",
      "description": "Quibusdam optio inventore laboriosam necessitatibus consequatur voluptatem veritatis.\nReiciendis molestiae explicabo itaque minus exercitationem ut alias dolores libero.\nEst ut ut assumenda placeat quasi enim et dolorum.\nVoluptatem tempore fugiat aut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.003482249718466",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 4,
      "name": "Lee Senger",
      "tel": "(391) 153-6272 x90887",
      "address": "46694 Tiana Parkway",
      "opening_hours": "08:00",
      "description": "repellat",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.87880973886001",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 5,
      "name": "Pearlie Tromp",
      "tel": "1-767-867-7853 x02605",
      "address": "050 Earl Field",
      "opening_hours": "08:00",
      "description": "eos necessitatibus aut",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.175099265063764",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 6,
      "name": "Anais McLaughlin",
      "tel": "(791) 039-3554 x0859",
      "address": "848 Carissa Drives",
      "opening_hours": "08:00",
      "description": "est et explicabo",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.93032847890821",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 7,
      "name": "Tiffany Bradtke",
      "tel": "1-847-209-4459 x9318",
      "address": "4616 Emile Turnpike",
      "opening_hours": "08:00",
      "description": "Dolores repellendus sequi. Accusantium veniam voluptas voluptates rerum in dicta suscipit consequatur molestias. Suscipit id consequuntur.\n \rDeleniti consequatur quia ex qui quia dolores. Ut quis eos quis assumenda. Ut quam possimus iusto possimus et vero aut quia. Ducimus consectetur praesentium eligendi vero. Quia quam aut vel id.\n \rEst magni officiis mollitia delectus deleniti quos. Est eum sit repellendus similique nihil corporis. Eligendi voluptas qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.79931036360497",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 8,
      "name": "Dr. Ethel Grimes",
      "tel": "868.118.2795",
      "address": "75756 Veum Pines",
      "opening_hours": "08:00",
      "description": "vel est aut",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.19387394102385",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 9,
      "name": "Dr. Dawn Nolan",
      "tel": "224.400.6201",
      "address": "740 Bernier Valleys",
      "opening_hours": "08:00",
      "description": "Architecto necessitatibus necessitatibus corrupti blanditiis voluptatem commodi ut.\nPerferendis vero voluptatem omnis rerum quis amet.\nEnim cum sed numquam mollitia repellendus nemo architecto possimus.\nEarum voluptatem est dolores accusantium esse autem.\nNatus nulla aut quisquam qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=64.19564227821253",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 10,
      "name": "Ms. Ivy Bechtelar",
      "tel": "384-291-7724",
      "address": "8790 Dariana Plaza",
      "opening_hours": "08:00",
      "description": "distinctio qui delectus",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.17668874316606",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 11,
      "name": "Dasia Veum",
      "tel": "959.213.3935",
      "address": "862 Emmy Forks",
      "opening_hours": "08:00",
      "description": "Reprehenderit repellat possimus error itaque quisquam voluptatem. Et dolore pariatur et earum perferendis qui. Enim quibusdam occaecati reprehenderit. Repellendus nesciunt cupiditate.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.80078400264097",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 12,
      "name": "Tyree Daugherty",
      "tel": "(243) 393-4346 x4474",
      "address": "17280 Estelle Lock",
      "opening_hours": "08:00",
      "description": "veritatis aut neque",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.99298714095276",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 13,
      "name": "Lavonne Runte",
      "tel": "(754) 227-6509",
      "address": "8773 Green Square",
      "opening_hours": "08:00",
      "description": "aut et incidunt",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.36794121359274",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 14,
      "name": "Efrain Douglas",
      "tel": "622.667.2858",
      "address": "775 Lamar Gardens",
      "opening_hours": "08:00",
      "description": "Sunt eum laborum nam id facilis aut at. Tempora non sint reiciendis occaecati libero voluptate quos quisquam officiis. Possimus aut fuga eius eum est natus eligendi voluptas atque. Sint qui sit itaque. Sed vel quae.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.70783307720067",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 15,
      "name": "Kenya Cormier",
      "tel": "812-923-4574 x26697",
      "address": "20567 Lue Place",
      "opening_hours": "08:00",
      "description": "Cupiditate soluta voluptatem in molestiae et facere doloremque dolorem velit. Voluptas expedita distinctio quisquam esse facilis aliquid laborum et. Qui et quod quia fugiat.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.7906670750474",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 16,
      "name": "Erwin Bernier",
      "tel": "1-047-937-2713",
      "address": "6011 Hudson Parkway",
      "opening_hours": "08:00",
      "description": "Dolor rerum qui molestias.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.063031239794902",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 17,
      "name": "Sibyl Kub",
      "tel": "968-820-8573 x2540",
      "address": "7200 Astrid Shoals",
      "opening_hours": "08:00",
      "description": "Fugit ipsam et et magnam aut eos vero. Voluptas ut tenetur numquam harum aliquid minus nulla iste. Dignissimos illo assumenda non quia dolores.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.70912896151971",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 18,
      "name": "Leopoldo Labadie",
      "tel": "(063) 384-2690 x52239",
      "address": "698 Norberto Street",
      "opening_hours": "08:00",
      "description": "Ea ullam blanditiis officia.\nAsperiores voluptate quia repellat dicta vel a.\nAut modi facilis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.05378792371751",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 19,
      "name": "General Keebler",
      "tel": "1-435-807-8774",
      "address": "79989 Paige Locks",
      "opening_hours": "08:00",
      "description": "itaque et voluptatem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.51935634651184",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 20,
      "name": "Carmen Jacobson",
      "tel": "(222) 270-4687 x3522",
      "address": "432 Gloria Island",
      "opening_hours": "08:00",
      "description": "Voluptas omnis ut totam laudantium velit laudantium voluptatem aut.\nPerspiciatis nemo eos quidem esse sit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.63008264104475",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 21,
      "name": "Kelley Mosciski",
      "tel": "1-891-779-2259",
      "address": "369 Williamson Centers",
      "opening_hours": "08:00",
      "description": "nostrum",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.81614044741134",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 22,
      "name": "Lauriane Langworth",
      "tel": "1-152-621-9442",
      "address": "68421 Davis Isle",
      "opening_hours": "08:00",
      "description": "et quasi perferendis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.186203997457284",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 23,
      "name": "Waylon Jakubowski",
      "tel": "1-156-471-9899 x99819",
      "address": "14537 Jett Junction",
      "opening_hours": "08:00",
      "description": "Dolor est deleniti amet soluta aliquid.\nSunt et error incidunt inventore excepturi magni minima consectetur nemo.\nHarum at excepturi.\nLibero molestiae voluptates et dolor est est sapiente.\nEst repellendus ex inventore inventore possimus necessitatibus et.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.67638527868927",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 24,
      "name": "Dudley Daugherty",
      "tel": "(089) 932-7585 x2826",
      "address": "8317 Hortense Village",
      "opening_hours": "08:00",
      "description": "iste voluptatum nulla",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.699478925618116",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 25,
      "name": "Junior Koepp",
      "tel": "1-928-745-2495",
      "address": "17840 Bartell Track",
      "opening_hours": "08:00",
      "description": "Animi ut voluptas quia excepturi dolor sit et. Incidunt sequi velit eligendi maiores quis quos expedita nesciunt in. Assumenda itaque dolor nisi ut sunt illo ut quod. Sed culpa est et dicta. Quaerat praesentium labore odit officia ut vel. Quo suscipit delectus et nisi quibusdam omnis rem laboriosam ex.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.69581715042462",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 26,
      "name": "Nadia Cassin",
      "tel": "024.160.5400 x93138",
      "address": "20197 Alvina Causeway",
      "opening_hours": "08:00",
      "description": "Quasi esse dolorem eius nisi nulla tempore iste. Ipsam laborum et ad. Praesentium et repellat sit dolorum sapiente nihil et.\n \rEt quam sit iste excepturi consequatur. Minima quae hic rerum officiis omnis. Laudantium debitis adipisci iure consectetur odio et. Est velit minus consequuntur. Enim aliquid mollitia in aut. Quam et qui.\n \rNemo laborum architecto earum aut commodi odio. Et et quia perferendis consequatur eos sed consequatur aliquid. Distinctio reiciendis quod voluptatem labore ratione quod. Cum accusantium delectus fugiat voluptatem quasi nemo qui sed asperiores.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.966915290613606",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 27,
      "name": "Rolando Ward Jr.",
      "tel": "(246) 173-3943 x0843",
      "address": "231 Alexandria Loop",
      "opening_hours": "08:00",
      "description": "Omnis occaecati consequuntur dignissimos magni aut. In ut quidem non eius corrupti repudiandae cum quos sunt. Quibusdam quam corporis labore dicta. Itaque atque qui.\n \rDoloribus ut et rerum rerum modi. Laudantium architecto voluptas rerum beatae fugit distinctio ut nihil provident. Dolor cum nisi ea quasi minima quo qui.\n \rNisi molestias sunt soluta ea dolorem consequatur quidem. Quam est animi. Enim praesentium ipsum dolore.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.90481432313835",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 28,
      "name": "Chandler Senger",
      "tel": "(343) 782-1675",
      "address": "1639 O'Keefe Greens",
      "opening_hours": "08:00",
      "description": "maxime",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.28399249243442615",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 29,
      "name": "Bernie Conroy",
      "tel": "773.282.2666 x468",
      "address": "38277 Thelma Plain",
      "opening_hours": "08:00",
      "description": "Officiis qui consectetur adipisci qui non assumenda omnis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.00106394188595",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 30,
      "name": "Brooks Yost",
      "tel": "1-125-207-2176 x317",
      "address": "78297 Padberg Fork",
      "opening_hours": "08:00",
      "description": "Dolorem dolores quam. Tenetur sapiente soluta et molestiae dolores adipisci aut non. Quam aliquam itaque. Ea nam dolores nulla sit sunt nulla ut autem ipsa. Unde omnis voluptates qui cupiditate fugit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.09793531920116",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 31,
      "name": "Brenda Ryan",
      "tel": "485-782-7134 x99007",
      "address": "9695 Barton Harbor",
      "opening_hours": "08:00",
      "description": "Voluptates veniam vel qui et rerum facilis ut quis iusto.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.19952662220191",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 32,
      "name": "Kenny Bashirian",
      "tel": "255.452.7021 x2898",
      "address": "670 Irma Meadows",
      "opening_hours": "08:00",
      "description": "Molestiae quia sapiente harum accusamus enim. Deleniti doloremque quia atque voluptas et mollitia. Voluptate tempore quia dolorem nobis ipsa et architecto aut deleniti.\n \rAsperiores ratione recusandae sint dolor ut illo deserunt aut. Aut debitis qui quos reprehenderit repellendus nihil molestiae tempora. Voluptatem inventore quos inventore incidunt omnis. Et sed quos est minus dolore eum explicabo.\n \rVoluptas culpa nisi cupiditate libero tenetur sit dolore quia. Eaque officiis temporibus. Laborum quae voluptatem a dicta et. Dolorem sit qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.130915968192554",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 33,
      "name": "Monserrate Reichel",
      "tel": "116.266.9211",
      "address": "1865 Marvin Flats",
      "opening_hours": "08:00",
      "description": "Qui laboriosam voluptatem mollitia aut corporis eos quia voluptates. Ab iusto minus nostrum. Qui ipsum quibusdam harum eaque eveniet consequuntur inventore velit. Id sint porro sit. Eos est et unde ipsum corrupti earum autem sunt.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.74701147189325",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 34,
      "name": "Lucas Durgan",
      "tel": "267.964.4194",
      "address": "316 Rice Glens",
      "opening_hours": "08:00",
      "description": "Blanditiis beatae necessitatibus voluptas ea impedit quibusdam eum. Id ad voluptatem. Magnam sapiente eum temporibus asperiores aut id. Illo ea ad natus dolore dolores consectetur velit. Veritatis in sed eveniet aliquam ad consectetur et voluptatem sed. Sunt repellendus rerum quia numquam libero omnis laborum quod.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.06051643091187",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 35,
      "name": "Ryder Fay",
      "tel": "1-838-305-0126",
      "address": "84859 Gayle Avenue",
      "opening_hours": "08:00",
      "description": "Et praesentium ut non.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.152962515897103",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 36,
      "name": "Miss Marilyne Leuschke",
      "tel": "(626) 465-5638 x2186",
      "address": "11119 Morar Walk",
      "opening_hours": "08:00",
      "description": "Eaque velit similique sit necessitatibus reiciendis debitis in.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.78169650364529",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 37,
      "name": "Shane Miller",
      "tel": "334.629.7022",
      "address": "04286 Mohr Ports",
      "opening_hours": "08:00",
      "description": "Laborum nisi debitis maxime aliquam enim id sunt. Aperiam quo consequatur. Sequi non repellat et rerum nostrum repellat ut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.250254218395483",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 38,
      "name": "Carleton Simonis",
      "tel": "136-415-7594 x076",
      "address": "2759 Blanda Pass",
      "opening_hours": "08:00",
      "description": "Aspernatur ipsam quo eum qui assumenda modi temporibus natus ut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.62218545115973",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 39,
      "name": "Kurtis Kertzmann",
      "tel": "(760) 648-6905",
      "address": "735 Francis Dam",
      "opening_hours": "08:00",
      "description": "Deleniti voluptates assumenda explicabo enim natus nisi et quaerat. Est dolor tempora eos voluptatem et consequatur voluptates. Amet est deleniti tenetur deserunt aut fugit facilis laborum natus.\n \rSequi doloribus dolor autem nihil dolorem et. Dicta qui velit accusantium mollitia neque est similique delectus consequatur. Repellat asperiores consequatur nulla et ad praesentium odio enim molestiae. Ipsa qui quasi recusandae pariatur. Animi mollitia tempore.\n \rQuis eos dolorem voluptatem. Omnis perspiciatis placeat molestiae eius saepe officiis sunt vitae. Eos sunt velit aut inventore.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.88158104268867",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 40,
      "name": "Christina Wolf DDS",
      "tel": "493-899-5318 x03401",
      "address": "7067 Jacobs Mews",
      "opening_hours": "08:00",
      "description": "Quod explicabo saepe.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.83234579328099",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 41,
      "name": "Filiberto Gleason",
      "tel": "841-864-9390 x30229",
      "address": "853 Myrna Park",
      "opening_hours": "08:00",
      "description": "voluptatem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.6417859793801",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 42,
      "name": "Lexie Kreiger",
      "tel": "716-876-5475 x669",
      "address": "8545 Roderick Knoll",
      "opening_hours": "08:00",
      "description": "Quo dolorem ab fugit odio et voluptas. Rem enim dicta suscipit dolores maiores dolorum consectetur dolorem sint. Quo facilis fuga.\n \rConsequatur sapiente suscipit labore nobis ullam. Similique fugiat totam voluptatem molestias asperiores ut consectetur qui. Est sequi nesciunt impedit sequi assumenda tenetur qui omnis. Ea laborum quia eum voluptatem aut. Quia voluptate harum ex quis officia. Aut vel quia quibusdam occaecati vel.\n \rNihil at velit quis voluptatibus illum impedit facilis. Ut asperiores fugiat. Rem animi qui. Omnis dicta et ut sit vero aut culpa alias dolores.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.405859962036489",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 43,
      "name": "Gregory Daniel",
      "tel": "(325) 525-8723 x0209",
      "address": "644 Audrey Trail",
      "opening_hours": "08:00",
      "description": "assumenda iste dolores",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.39652497356831",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 44,
      "name": "Minerva Bernhard",
      "tel": "1-287-846-7615 x3128",
      "address": "8668 Kilback Ferry",
      "opening_hours": "08:00",
      "description": "Vero tenetur explicabo commodi voluptatem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.8063687353805378",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 45,
      "name": "Felipe Parisian",
      "tel": "1-844-656-9082 x125",
      "address": "43054 Melody Brook",
      "opening_hours": "08:00",
      "description": "Et expedita molestiae. At qui sed totam cupiditate eius magni voluptas. Beatae ea qui nihil. Id sunt maiores similique architecto molestiae voluptatem quia est. Aut soluta et hic enim. Vitae explicabo in sunt cupiditate temporibus qui necessitatibus.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.316214924247586",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 46,
      "name": "Wilhelmine Kiehn",
      "tel": "835.140.1683 x32763",
      "address": "83488 Blanda Pass",
      "opening_hours": "08:00",
      "description": "Sunt ratione commodi eveniet sequi explicabo praesentium. Nam voluptas dolorum. Asperiores omnis qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.96776707832954",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 47,
      "name": "Alta Kemmer",
      "tel": "(744) 981-5285 x0509",
      "address": "0999 Terrance Ville",
      "opening_hours": "08:00",
      "description": "Itaque quidem at velit voluptatem adipisci aut fugit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.45690790137339",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 48,
      "name": "Emma Lesch",
      "tel": "(050) 423-4580",
      "address": "616 Karlie Junctions",
      "opening_hours": "08:00",
      "description": "Aut ut in nihil voluptates.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.766476117387533",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 49,
      "name": "Herminio Huel",
      "tel": "(263) 853-7593 x87322",
      "address": "68210 Weimann Circles",
      "opening_hours": "08:00",
      "description": "Quia reprehenderit assumenda aspernatur. Ipsum velit deleniti eius mollitia enim repellat. Molestias ducimus quos nobis quaerat.\n \rQuas voluptatem pariatur aliquam quis. A tenetur soluta qui. Neque labore explicabo deserunt. In deleniti vero porro delectus nobis et ut. Quisquam exercitationem natus vitae necessitatibus ut consequatur. Quae odit quam.\n \rDoloribus sit repellendus voluptatem ipsa possimus iusto pariatur quia. Cumque quia consequatur omnis assumenda quis vel delectus. Tenetur quidem repellat cupiditate amet officiis laudantium. Modi aut cumque eligendi sunt incidunt aut quos. Sapiente nesciunt dolores.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.78161821130536",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    },
    {
      "id": 50,
      "name": "Armani Rowe",
      "tel": "924-712-9149 x482",
      "address": "89614 Webster Field",
      "opening_hours": "08:00",
      "description": "voluptatum sed suscipit",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.969439777409054",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z"
      }
    }
  ]
}
export default {
  name: 'AdminRestaurantsTable',
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  }

}
</script>