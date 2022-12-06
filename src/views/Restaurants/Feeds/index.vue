<template>
  <div class="container py-5">
    <!--NavTabs是子組件  -->
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>


<script>
import NavTabs from '@/components/NavTabs'
import NewestRestaurants from '@/components/NewestRestaurants'
import NewestComments from '@/components/NewestComments'
const dummyData = {
  'restaurants': [
    {
      'id': 49,
      'name': 'Russ Kertzmann',
      'tel': '087-274-1881',
      'address': '6601 Lura Lodge',
      'opening_hours': '08:00',
      'description': 'sed',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 4,
      'Category': {
        'id': 4,
        'name': '墨西哥料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 46,
      'name': 'Jasper Mueller',
      'tel': '254-159-2190',
      'address': '44890 Dominique Wall',
      'opening_hours': '08:00',
      'description': 'dolorem ratione et',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 2,
      'Category': {
        'id': 2,
        'name': '日本料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 47,
      'name': 'Beverly Yundt',
      'tel': '099-398-9865 x7776',
      'address': '27001 Ike Well',
      'opening_hours': '08:00',
      'description': 'Quibusdam ut natus officia porro. Quis eum explicabo architecto sint repudiandae unde. Sunt magni quibusdam ipsa et impedit esse occaecati. Et nemo quaerat saepe delectus. Autem dignissimos corporis sed voluptates suscipit quia fuga. Dolorum ea suscipit.',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=44.588878866397906',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 5,
      'Category': {
        'id': 5,
        'name': '素食料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 48,
      'name': 'Lucie McDermott',
      'tel': '(087) 019-9323 x4728',
      'address': '218 Bennett Street',
      'opening_hours': '08:00',
      'description': 'omnis',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=47.899925023303915',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 4,
      'Category': {
        'id': 4,
        'name': '墨西哥料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 50,
      'name': 'Mrs. Wellington Lehner',
      'tel': '792-886-2864 x53152',
      'address': '4185 Cartwright Green',
      'opening_hours': '08:00',
      'description': 'aspernatur',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.977654953966386',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
      'CategoryId': 3,
      'Category': {
        'id': 3,
        'name': '義大利料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 42,
      'name': 'Melody Koepp',
      'tel': '(774) 342-2533',
      'address': '3318 Feeney Hollow',
      'opening_hours': '08:00',
      'description': 'beatae iste alias',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=71.34426799459621',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.442Z',
      'updatedAt': '2019-07-30T16:24:55.442Z',
      'CategoryId': 2,
      'Category': {
        'id': 2,
        'name': '日本料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 43,
      'name': 'Carrie Robel V',
      'tel': '455.357.0399 x356',
      'address': '33531 Mayert Fall',
      'opening_hours': '08:00',
      'description': 'Quos illum dolorem laboriosam temporibus incidunt non nihil.\nPerspiciatis iusto cumque possimus.',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=41.74175407974987',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.442Z',
      'updatedAt': '2019-07-30T16:24:55.442Z',
      'CategoryId': 5,
      'Category': {
        'id': 5,
        'name': '素食料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 45,
      'name': 'Luther Hickle',
      'tel': '477-667-6528 x320',
      'address': '79381 Bradtke Manor',
      'opening_hours': '08:00',
      'description': 'Esse qui rerum et occaecati quia quo molestiae. Consequuntur rem iste doloribus minus esse ea voluptas atque. Dolore distinctio tempore expedita atque unde aliquam laudantium.\n \rQuaerat est ut. Nulla dolore a error eaque voluptatem quo. Laborum quis reiciendis in ipsa dolores dolor exercitationem itaque deserunt. Rerum ut ab sequi consequatur quae nulla. Consequatur nam aut voluptate amet qui omnis. Voluptatem commodi assumenda quisquam consequatur magni quod repellat ut dolore.\n \rRem nesciunt quia adipisci debitis distinctio est. Odit voluptas autem repellendus commodi a quas voluptatum. At quia modi ut ea earum consequatur facere recusandae.',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=78.10379900896436',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.442Z',
      'updatedAt': '2019-07-30T16:24:55.442Z',
      'CategoryId': 3,
      'Category': {
        'id': 3,
        'name': '義大利料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 44,
      'name': 'Sonny Funk',
      'tel': '093-689-0372',
      'address': '908 Kassulke Landing',
      'opening_hours': '08:00',
      'description': 'Asperiores sequi doloribus. Alias corporis praesentium quas amet. Ad et delectus amet ea reiciendis. Perspiciatis aliquid sapiente doloremque. Ut hic reiciendis velit voluptates atque.',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=88.97383668164223',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.442Z',
      'updatedAt': '2019-07-30T16:24:55.442Z',
      'CategoryId': 2,
      'Category': {
        'id': 2,
        'name': '日本料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    },
    {
      'id': 37,
      'name': 'Ezekiel Gerlach',
      'tel': '1-781-932-3493 x2886',
      'address': '328 Shayne Isle',
      'opening_hours': '08:00',
      'description': 'nostrum',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=26.892961850412213',
      'viewCounts': null,
      'createdAt': '2019-07-30T16:24:55.441Z',
      'updatedAt': '2019-07-30T16:24:55.441Z',
      'CategoryId': 5,
      'Category': {
        'id': 5,
        'name': '素食料理',
        'createdAt': '2019-07-30T16:24:55.429Z',
        'updatedAt': '2019-07-30T16:24:55.429Z'
      }
    }
  ],
  'comments': [
    {
      'id': 121,
      'text': 'Placeat velit corrupti laboriosam ex.',
      'UserId': 1,
      'RestaurantId': 21,
      'createdAt': '2019-07-30T16:24:55.454Z',
      'updatedAt': '2019-07-30T16:24:55.454Z',
      'User': {
        'id': 1,
        'name': 'root',
        'email': 'root@example.com',
        'password': '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
        'isAdmin': true,
        'image': 'https://i.imgur.com/58ImzMM.png',
        'createdAt': '2019-07-30T16:24:54.983Z',
        'updatedAt': '2019-08-01T10:33:51.095Z'
      },
      'Restaurant': {
        'id': 21,
        'name': 'Clovis Mayert',
        'tel': '1-292-930-4113 x0577',
        'address': '3255 Streich Inlet',
        'opening_hours': '08:00',
        'description': 'Nihil occaecati consectetur explicabo sint nobis beatae numquam.\nOdit quo enim officiis est eaque et velit facilis.',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=31.579240610126313',
        'viewCounts': null,
        'createdAt': '2019-07-30T16:24:55.436Z',
        'updatedAt': '2019-07-30T16:24:55.436Z',
        'CategoryId': 3
      }
    },
    {
      'id': 124,
      'text': 'Accusantium repudiandae est hic nihil voluptatem.',
      'UserId': 3,
      'RestaurantId': 24,
      'createdAt': '2019-07-30T16:24:55.454Z',
      'updatedAt': '2019-07-30T16:24:55.454Z',
      'User': {
        'id': 3,
        'name': 'user2',
        'email': 'user2@example.com',
        'password': '$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2',
        'isAdmin': false,
        'image': 'https://i.imgur.com/OezkRwO.jpg',
        'createdAt': '2019-07-30T16:24:55.422Z',
        'updatedAt': '2019-08-01T10:34:36.023Z'
      },
      'Restaurant': {
        'id': 24,
        'name': 'Al Von',
        'tel': '038-326-5052',
        'address': '5559 VonRueden Courts',
        'opening_hours': '08:00',
        'description': 'Aliquid numquam hic. Minima perferendis quia cum tempora amet voluptatem nulla. Accusantium dolorum sequi tempore qui dolore voluptatem illo animi autem. Ut asperiores eum atque impedit. Sint vero maiores ratione minus itaque dolor repellat minus alias.\n \rDoloribus adipisci atque consequatur error aut non magnam nemo. Aliquam ex omnis tempora sint dolorem. Voluptatem omnis magnam occaecati quibusdam nemo et odio molestias. Amet voluptatibus qui et necessitatibus blanditiis sequi quidem ut repellat. Consequatur ratione id libero optio. Dolor ut velit est.\n \rItaque velit aut consequatur dolorem similique quae laudantium. Tempore fugiat quod ratione quis autem quia. Nesciunt voluptatem nobis modi. Molestiae error et nesciunt a ea.',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=37.9512586281334',
        'viewCounts': null,
        'createdAt': '2019-07-30T16:24:55.438Z',
        'updatedAt': '2019-07-30T16:24:55.438Z',
        'CategoryId': 1
      }
    },
    {
      'id': 118,
      'text': 'Voluptatum libero dignissimos unde nulla minus.',
      'UserId': 1,
      'RestaurantId': 18,
      'createdAt': '2019-07-30T16:24:55.454Z',
      'updatedAt': '2019-07-30T16:24:55.454Z',
      'User': {
        'id': 1,
        'name': 'root',
        'email': 'root@example.com',
        'password': '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
        'isAdmin': true,
        'image': 'https://i.imgur.com/58ImzMM.png',
        'createdAt': '2019-07-30T16:24:54.983Z',
        'updatedAt': '2019-08-01T10:33:51.095Z'
      },
      'Restaurant': {
        'id': 18,
        'name': 'Esther Herzog',
        'tel': '497-524-7986',
        'address': '218 Cummings Station',
        'opening_hours': '08:00',
        'description': 'Quis amet sint et libero unde.\nInventore et incidunt nobis iste commodi quidem.',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=99.71540496895199',
        'viewCounts': null,
        'createdAt': '2019-07-30T16:24:55.436Z',
        'updatedAt': '2019-07-30T16:24:55.436Z',
        'CategoryId': 4
      }
    },
    {
      'id': 120,
      'text': 'Illum at sed recusandae laboriosam non molestiae ullam similique.',
      'UserId': 3,
      'RestaurantId': 20,
      'createdAt': '2019-07-30T16:24:55.454Z',
      'updatedAt': '2019-07-30T16:24:55.454Z',
      'User': {
        'id': 3,
        'name': 'user2',
        'email': 'user2@example.com',
        'password': '$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2',
        'isAdmin': false,
        'image': 'https://i.imgur.com/OezkRwO.jpg',
        'createdAt': '2019-07-30T16:24:55.422Z',
        'updatedAt': '2019-08-01T10:34:36.023Z'
      },
      'Restaurant': {
        'id': 20,
        'name': 'Kathlyn Miller',
        'tel': '008.083.2181 x62854',
        'address': '0511 Syble Meadows',
        'opening_hours': '08:00',
        'description': 'Dolor facere asperiores explicabo voluptates voluptates accusantium. Adipisci qui cupiditate et. Voluptatibus odit et consequatur qui quos nisi. Quis quisquam qui reprehenderit.',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=68.5893410293084',
        'viewCounts': null,
        'createdAt': '2019-07-30T16:24:55.436Z',
        'updatedAt': '2019-07-30T16:24:55.436Z',
        'CategoryId': 5
      }
    },

  ]
}
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>

<style>

</style>