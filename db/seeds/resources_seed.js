
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({
          url: 'https://janiya.org',
          title: 'Vel veritatis veniam culpa consequatur.',
          description: 'Velit possimus vel cumque voluptatum sit. Qui ut odio ea. Numquam quis porro omnis eius non. Ducimus asperiores itaque doloremque necessitatibus.',
          image_url: 'http://lorempixel.com/640/480/nightlife',
          timestamp: new Date('Thu Aug 23 2018 02:42:00 GMT-0700 (PDT)').toISOString(),
          category_id: '24',
          user_id: '1'
        }),
        knex('resources').insert({
          url: 'http://candace.net',
          title: 'Corrupti velit sapiente architecto veniam asperiores debitis repudiandae perspiciatis.',
          description: 'Veniam rem illo expedita molestiae et ut ipsam ab voluptatem. Incidunt soluta perspiciatis ex quo praesentium. Tempora quasi quas magni ut debitis voluptatibus. Laudantium officia dolorum et nisi accusamus suscipit qui.',
          image_url: 'http://lorempixel.com/640/480/sports',
          timestamp: new Date('Thu Aug 23 2018 08:57:51 GMT-0700 (PDT)').toISOString(),
          category_id: '7',
          user_id: '2'
        }),
        knex('resources').insert({
          url: 'http://tyra.net',
          title: 'Aut enim omnis sit.',
          description: 'Id ducimus veniam. Non corporis fuga possimus asperiores fugit quo. Velit vel perferendis a nemo voluptatem illo iusto quaerat. Aspernatur laborum ut iste. Ad vitae non officia quod blanditiis omnis tenetur at suscipit.',
          image_url: 'http://lorempixel.com/640/480/animals',
          timestamp: new Date('Wed Aug 22 2018 19:10:34 GMT-0700 (PDT)').toISOString(),
          category_id: '15',
          user_id: '7'
        }),
        knex('resources').insert({
          url: 'https://eveline.com',
          title: 'Ab laudantium perspiciatis officia voluptatem nostrum.',
          description: 'Voluptatem voluptatem atque eos et architecto cumque eum consectetur. Nemo accusamus eveniet enim error reprehenderit. Tempore similique quia. Et fugiat unde occaecati. Nihil dolorem est.',
          image_url: 'http://lorempixel.com/640/480/sports',
          timestamp: new Date('Wed Aug 22 2018 20:46:36 GMT-0700 (PDT)').toISOString(),
          category_id: '19',
          user_id: '6'
        }),
        knex('resources').insert({
          url: 'https://maxime.name',
          title: 'Suscipit ratione saepe ut quis atque debitis quia omnis.',
          description: 'Molestias fugiat ut quis ullam nesciunt optio. Dolores recusandae eveniet dolorem quisquam iste fugiat quia reiciendis sequi. Magni beatae eius inventore recusandae fugit.',
          image_url: 'http://lorempixel.com/640/480/transport',
          timestamp: new Date('Thu Aug 23 2018 05:33:00 GMT-0700 (PDT)').toISOString(),
          category_id: '2',
          user_id: '1'
        }),
        knex('resources').insert({
          url: 'http://alexa.biz',
          title: 'Earum aliquid hic.',
          description: 'Blanditiis quibusdam rem vero veritatis aut totam repudiandae voluptatem atque. Nulla saepe quos quibusdam. Quibusdam aliquam at ea omnis vel dolores. Officiis nisi fugit aut ipsam rerum. Animi ut dicta exercitationem iste.',
          image_url: 'http://lorempixel.com/640/480/abstract',
          timestamp: new Date('Wed Aug 22 2018 15:38:31 GMT-0700 (PDT)').toISOString(),
          category_id: '5',
          user_id: '1'
        }),
        knex('resources').insert({
          url: 'https://carmel.net',
          title: 'Voluptatem et harum voluptas et inventore a quo id eaque.',
          description: 'Eum illum modi. Qui adipisci illum temporibus nihil odit eligendi.',
          image_url: 'http://lorempixel.com/640/480/city',
          timestamp: new Date('Wed Aug 22 2018 11:49:26 GMT-0700 (PDT)').toISOString(),
          category_id: '7',
          user_id: '2'
        }),
        knex('resources').insert({
          url: 'https://fidel.net',
          title: 'Blanditiis voluptatum et voluptas.',
          description: 'Qui repellendus nulla ipsa numquam. Nemo iure odio consequatur animi dolorem. Quod quia quam recusandae non est corrupti qui consequatur id. Qui ut placeat blanditiis quo officiis. Eos iure minima enim perferendis voluptates.',
          image_url: 'http://lorempixel.com/640/480/sports',
          timestamp: new Date('Wed Aug 22 2018 19:50:57 GMT-0700 (PDT)').toISOString(),
          category_id: '8',
          user_id: '0'
        }),
        knex('resources').insert({
          url: 'https://camden.com',
          title: 'Nobis expedita sit sint alias est cumque perferendis sunt et.',
          description: 'Neque aut illo veritatis nisi. Temporibus nemo est aut enim accusantium saepe.',
          image_url: 'http://lorempixel.com/640/480/cats',
          timestamp: new Date('Wed Aug 22 2018 19:19:58 GMT-0700 (PDT)').toISOString(),
          category_id: '8',
          user_id: '9'
        }),
        knex('resources').insert({
          url: 'https://caesar.info',
          title: 'Temporibus quia sit aut veritatis.',
          description: 'Et recusandae vel culpa. Dignissimos quod sed quidem porro dolore quo.',
          image_url: 'http://lorempixel.com/640/480/fashion',
          timestamp: new Date('Wed Aug 22 2018 23:06:06 GMT-0700 (PDT)').toISOString(),
          category_id: '6',
          user_id: '2'
        }),
        knex('resources').insert({
          url: 'http://jeffrey.net',
          title: 'Omnis aspernatur quisquam non voluptatum at expedita sint dolorem.',
          description: 'Culpa minus illum. Et nihil ut praesentium. Quis consequatur officiis aspernatur veniam. Expedita eum omnis iste. Quibusdam voluptatem dolorem ipsum et suscipit.',
          image_url: 'http://lorempixel.com/640/480/animals',
          timestamp: new Date('Thu Aug 23 2018 03:47:54 GMT-0700 (PDT)').toISOString(),
          category_id: '13',
          user_id: '1'
        }),
        knex('resources').insert({
          url: 'http://gilbert.name',
          title: 'Voluptatem facilis aut enim.',
          description: 'Ullam esse dolorem fugit adipisci dolores ipsum ut aut nisi. Voluptas vel autem rem dolores rem magni. Corrupti quibusdam ipsum pariatur perspiciatis.',
          image_url: 'http://lorempixel.com/640/480/nature',
          timestamp: new Date('Wed Aug 22 2018 18:58:03 GMT-0700 (PDT)').toISOString(),
          category_id: '16',
          user_id: '9'
        }),
        knex('resources').insert({
          url: 'http://avery.name',
          title: 'Laborum est repellendus omnis repellendus omnis nesciunt.',
          description: 'Consectetur qui quasi. Omnis ratione voluptas vero. Quas est ullam eos alias.',
          image_url: 'http://lorempixel.com/640/480/nightlife',
          timestamp: new Date('Thu Aug 23 2018 08:59:37 GMT-0700 (PDT)').toISOString(),
          category_id: '11',
          user_id: '3'
        }),
        knex('resources').insert({
          url: 'http://bennie.org',
          title: 'Et quam eligendi sunt provident voluptates molestias tenetur.',
          description: 'Molestiae et eum. Itaque qui voluptatem provident voluptatem aut ipsam excepturi voluptate iure.',
          image_url: 'http://lorempixel.com/640/480/cats',
          timestamp: new Date('Thu Aug 23 2018 05:47:38 GMT-0700 (PDT)').toISOString(),
          category_id: '18',
          user_id: '9'
        }),
        knex('resources').insert({
          url: 'https://domingo.net',
          title: 'Velit eveniet qui ipsum occaecati iusto tempora.',
          description: 'Aut et porro. Quos quibusdam sit. Quibusdam sed molestiae dolor veniam ea voluptas non quo. Voluptas minus itaque deserunt ut necessitatibus quaerat.',
          image_url: 'http://lorempixel.com/640/480/people',
          timestamp: new Date('Wed Aug 22 2018 15:47:02 GMT-0700 (PDT)').toISOString(),
          category_id: '3',
          user_id: '7'
        }),
        knex('resources').insert({
          url: 'http://freida.com',
          title: 'Similique quibusdam dolore fugit nihil qui.',
          description: 'Praesentium asperiores voluptas doloremque nihil et a autem numquam. Omnis alias quo quam aut.',
          image_url: 'http://lorempixel.com/640/480/nature',
          timestamp: new Date('Wed Aug 22 2018 14:04:38 GMT-0700 (PDT)').toISOString(),
          category_id: '4',
          user_id: '6'
        }),
        knex('resources').insert({
          url: 'http://summer.info',
          title: 'Consectetur dolorem atque dolor nesciunt et atque ratione.',
          description: 'Quia vero sequi consequuntur distinctio aut. Aut ut ut dolores ipsa illum. Porro eveniet aliquid voluptas consequuntur vero beatae eos nesciunt.',
          image_url: 'http://lorempixel.com/640/480/nightlife',
          timestamp: new Date('Wed Aug 22 2018 23:52:53 GMT-0700 (PDT)').toISOString(),
          category_id: '1',
          user_id: '8'
        }),
        knex('resources').insert({
          url: 'https://marshall.org',
          title: 'Voluptas omnis asperiores.',
          description: 'Hic voluptas esse quis magnam impedit dolor. Illum alias eligendi consequatur qui. Quibusdam officia esse quibusdam quaerat est sint tempore. Et maxime consequatur excepturi.',
          image_url: 'http://lorempixel.com/640/480/abstract',
          timestamp: new Date('Wed Aug 22 2018 23:23:25 GMT-0700 (PDT)').toISOString(),
          category_id: '3',
          user_id: '9'
        }),
        knex('resources').insert({
          url: 'http://rylee.org',
          title: 'Et porro distinctio et odio similique molestiae corporis.',
          description: 'Nihil ea accusantium. Vero cumque itaque fuga ut sed. Ea sit hic sed aspernatur vero eligendi. Pariatur ab nemo aut et aut. Officiis soluta commodi illum et qui dignissimos quibusdam nihil veritatis. Recusandae nulla occaecati temporibus.',
          image_url: 'http://lorempixel.com/640/480/animals',
          timestamp: new Date('Wed Aug 22 2018 23:59:24 GMT-0700 (PDT)').toISOString(),
          category_id: '4',
          user_id: '1'
        }),
        knex('resources').insert({
          url: 'http://emory.com',
          title: 'Quo sint qui saepe autem voluptates.',
          description: 'Et culpa blanditiis quasi dicta at dolorem sunt quis. Perferendis exercitationem enim neque perspiciatis. Et voluptas aut iure tempora qui laudantium voluptatem fuga pariatur. Dolorem voluptatem et ut perferendis qui voluptatem nemo ratione. Voluptates debitis quis. Et blanditiis aperiam nulla rem cumque nihil.',
          image_url: 'http://lorempixel.com/640/480/food',
          timestamp: new Date('Wed Aug 22 2018 13:30:08 GMT-0700 (PDT)').toISOString(),
          category_id: '2',
          user_id: '4'
        }),
        knex('resources').insert({
          url: 'https://kariane.com',
          title: 'Voluptatem ut qui tenetur incidunt ut rem at recusandae.',
          description: 'Qui ut necessitatibus consequatur alias vel quis. Fuga doloribus et illum rerum perspiciatis corrupti quia. Facilis ducimus nihil. Labore ea rem eos id sint totam repellendus et. Perferendis et assumenda quo qui quia distinctio illo.',
          image_url: 'http://lorempixel.com/640/480/abstract',
          timestamp: new Date('Wed Aug 22 2018 22:44:24 GMT-0700 (PDT)').toISOString(),
          category_id: '5',
          user_id: '8'
        }),
        knex('resources').insert({
          url: 'https://robbie.info',
          title: 'Sint non est nulla repellendus distinctio.',
          description: 'Maiores nostrum aliquam. Et sequi consectetur labore non. Quas sint quis assumenda nisi. Eos quia neque asperiores.',
          image_url: 'http://lorempixel.com/640/480/nature',
          timestamp: new Date('Wed Aug 22 2018 22:12:16 GMT-0700 (PDT)').toISOString(),
          category_id: '5',
          user_id: '2'
        }),
        knex('resources').insert({
          url: 'http://heather.net',
          title: 'Tempore adipisci sed eos accusamus et ut molestias pariatur.',
          description: 'Et velit dolorem blanditiis itaque suscipit laboriosam. Recusandae id necessitatibus voluptatem eum magni doloremque ut.',
          image_url: 'http://lorempixel.com/640/480/business',
          timestamp: new Date('Thu Aug 23 2018 05:24:47 GMT-0700 (PDT)').toISOString(),
          category_id: '3',
          user_id: '5'
        }),
        knex('resources').insert({
          url: 'https://lorine.com',
          title: 'Sed quod repellat necessitatibus.',
          description: 'Aspernatur facere ut dolorum officiis consectetur enim. Ab rem nostrum itaque blanditiis non. Porro voluptas ipsam aut pariatur ut nemo voluptatum beatae. Impedit ex quod sunt totam quam enim labore quidem architecto. Veritatis quia a non omnis quibusdam mollitia qui. Id vel nostrum.',
          image_url: 'http://lorempixel.com/640/480/cats',
          timestamp: new Date('Thu Aug 23 2018 06:07:47 GMT-0700 (PDT)').toISOString(),
          category_id: '5',
          user_id: '5'
        }),
        knex('resources').insert({
          url: 'http://emory.net',
          title: 'Eum consequatur rerum a.',
          description: 'Aliquam in alias voluptate quod. Incidunt distinctio omnis.',
          image_url: 'http://lorempixel.com/640/480/abstract',
          timestamp: new Date('Wed Aug 22 2018 19:35:31 GMT-0700 (PDT)').toISOString(),
          category_id: '3',
          user_id: '10'
        }),
        knex('resources').insert({
          url: 'https://arlie.com',
          title: 'Unde tenetur eligendi nisi.',
          description: 'Tenetur dolores non est distinctio cum est sunt deserunt quo. Dolor expedita maiores occaecati. Soluta ut quibusdam laborum. Et nostrum et quia laudantium. Quia sint quis omnis voluptas. Doloribus dolores vel officiis cupiditate rerum.',
          image_url: 'http://lorempixel.com/640/480/people',
          timestamp: new Date('Wed Aug 22 2018 13:21:14 GMT-0700 (PDT)').toISOString(),
          category_id: '12',
          user_id: '8'
        }),
        knex('resources').insert({
          url: 'https://christine.info',
          title: 'Pariatur animi consequatur in ipsam ipsa tenetur vitae.',
          description: 'Minima quidem similique quos error. Expedita accusantium occaecati sint voluptatem.',
          image_url: 'http://lorempixel.com/640/480/technics',
          timestamp: new Date('Thu Aug 23 2018 03:21:09 GMT-0700 (PDT)').toISOString(),
          category_id: '15',
          user_id: '3'
        }),
        knex('resources').insert({
          url: 'http://jennie.com',
          title: 'Iure quas saepe fuga voluptates et enim corporis quia beatae.',
          description: 'Perspiciatis et molestiae natus deleniti eos placeat at dolorum repudiandae. Suscipit rerum vero non ea ex libero recusandae maiores id. Enim ducimus aspernatur ab ea. Incidunt ut rem quam porro similique dolorem cum quod. Eum tempore et qui tenetur.',
          image_url: 'http://lorempixel.com/640/480/technics',
          timestamp: new Date('Thu Aug 23 2018 02:40:04 GMT-0700 (PDT)').toISOString(),
          category_id: '12',
          user_id: '4'
        }),
        knex('resources').insert({
          url: 'https://kasey.info',
          title: 'Minima nobis recusandae dicta occaecati sed iure.',
          description: 'Quis saepe cupiditate. Non sit eveniet voluptatem quisquam officiis.',
          image_url: 'http://lorempixel.com/640/480/technics',
          timestamp: new Date('Thu Aug 23 2018 00:42:19 GMT-0700 (PDT)').toISOString(),
          category_id: '9',
          user_id: '10'
        }),
        knex('resources').insert({
          url: 'http://eulah.org',
          title: 'Iure iure quia consequatur ut ipsa quia eum.',
          description: 'Accusamus qui dolorum. Omnis sequi qui. Et ipsa rerum ut dolorem reiciendis laboriosam necessitatibus dignissimos est. Exercitationem rerum sed in. Omnis quia dolor porro laudantium dolorem cumque est libero.',
          image_url: 'http://lorempixel.com/640/480/sports',
          timestamp: new Date('Thu Aug 23 2018 11:42:54 GMT-0700 (PDT)').toISOString(),
          category_id: '7',
          user_id: '8'
        }),
        knex('resources').insert({
          url: 'http://laverna.biz',
          title: 'Possimus qui dolore.',
          description: 'Sint et facilis iusto sunt laudantium maxime. Exercitationem esse quaerat nobis voluptatibus omnis omnis doloremque. Fuga ut animi quia magni saepe iste facilis. Et similique eum totam reprehenderit cum et molestiae. Ut dolor tempora eos non autem deserunt magnam.',
          image_url: 'http://lorempixel.com/640/480/food',
          timestamp: new Date('Thu Aug 23 2018 02:24:21 GMT-0700 (PDT)').toISOString(),
          category_id: '4',
          user_id: '2'
        }),
        knex('resources').insert({
          url: 'https://aron.com',
          title: 'Aut et iusto iusto alias voluptatem adipisci reprehenderit et.',
          description: 'Et quae est libero tenetur quidem et nemo deleniti. Deleniti dicta eaque. Impedit fugiat illum ut. Quaerat velit sint similique.',
          image_url: 'http://lorempixel.com/640/480/animals',
          timestamp: new Date('Thu Aug 23 2018 08:48:52 GMT-0700 (PDT)').toISOString(),
          category_id: '9',
          user_id: '5'
        }),
        knex('resources').insert({
          url: 'https://scarlett.net',
          title: 'Harum omnis et.',
          description: 'Doloremque officiis nihil dolores. Repellat saepe adipisci tempora nihil aut impedit officiis. Ipsa qui commodi voluptatem. Ea eveniet sit qui non asperiores est deserunt mollitia dolorem.',
          image_url: 'http://lorempixel.com/640/480/sports',
          timestamp: new Date('Wed Aug 22 2018 21:03:37 GMT-0700 (PDT)').toISOString(),
          category_id: '16',
          user_id: '7'
        }),
        knex('resources').insert({
          url: 'https://terrence.net',
          title: 'Delectus eum rem et hic sapiente.',
          description: 'Aut aperiam sit est. Earum veritatis saepe consequatur quia quis nulla unde ut. Rerum consequatur sit porro omnis quis doloremque.',
          image_url: 'http://lorempixel.com/640/480/nature',
          timestamp: new Date('Thu Aug 23 2018 00:20:06 GMT-0700 (PDT)').toISOString(),
          category_id: '2',
          user_id: '4'
        }),
        knex('resources').insert({
          url: 'https://herminio.com',
          title: 'Fuga deserunt qui qui repellendus enim officiis temporibus corrupti ut.',
          description: 'Dolores recusandae qui libero unde. Ullam odit commodi. Voluptate voluptatem sed ut quod. Vitae quia beatae perspiciatis error.',
          image_url: 'http://lorempixel.com/640/480/sports',
          timestamp: new Date('Thu Aug 23 2018 09:41:31 GMT-0700 (PDT)').toISOString(),
          category_id: '2',
          user_id: '10'
        }),
        knex('resources').insert({
          url: 'http://rigoberto.biz',
          title: 'Dicta rerum officiis et minus aliquid fugit.',
          description: 'Accusamus voluptates delectus necessitatibus nobis vel libero reprehenderit. Sed consequuntur quo distinctio. Sed quae sint quo. Quo placeat voluptate.',
          image_url: 'http://lorempixel.com/640/480/food',
          timestamp: new Date('Thu Aug 23 2018 02:02:35 GMT-0700 (PDT)').toISOString(),
          category_id: '8',
          user_id: '5'
        }),
        knex('resources').insert({
          url: 'http://erica.biz',
          title: 'Ut corporis impedit.',
          description: 'Fuga fugit et eum. Laboriosam sapiente corrupti consectetur sint beatae quis. Non eaque aut adipisci recusandae eos aut facere deleniti. Provident vel rerum voluptate aspernatur natus error qui quia rerum. Beatae beatae veniam corrupti expedita corporis aspernatur.',
          image_url: 'http://lorempixel.com/640/480/fashion',
          timestamp: new Date('Thu Aug 23 2018 00:39:53 GMT-0700 (PDT)').toISOString(),
          category_id: '7',
          user_id: '1'
        }),
        knex('resources').insert({
          url: 'https://mireille.org',
          title: 'Incidunt dicta veritatis dolores vero esse reprehenderit.',
          description: 'Quibusdam eum consequatur magnam dignissimos. Qui repudiandae voluptatibus nulla exercitationem.',
          image_url: 'http://lorempixel.com/640/480/people',
          timestamp: new Date('Wed Aug 22 2018 22:56:38 GMT-0700 (PDT)').toISOString(),
          category_id: '13',
          user_id: '10'
        }),
        knex('resources').insert({
          url: 'https://gideon.biz',
          title: 'Distinctio in accusantium autem repellendus placeat eaque.',
          description: 'Inventore neque veritatis nam id. Veniam est rerum dolores corporis sunt. Qui at at iste iusto et dolorem illum amet voluptatem.',
          image_url: 'http://lorempixel.com/640/480/business',
          timestamp: new Date('Thu Aug 23 2018 02:20:55 GMT-0700 (PDT)').toISOString(),
          category_id: '20',
          user_id: '8'
        }),
        knex('resources').insert({
          url: 'http://modesto.name',
          title: 'Vel dolorum nulla ullam voluptatem explicabo expedita sint.',
          description: 'Sit cumque dignissimos numquam ullam quis. In ratione voluptas doloribus explicabo. Voluptatem fugit iste enim eos et perferendis et porro necessitatibus. Vel ut nulla beatae asperiores quis blanditiis voluptas eos et. Non nobis odit delectus modi ea quae consectetur dolor voluptatem.',
          image_url: 'http://lorempixel.com/640/480/fashion',
          timestamp: new Date('Wed Aug 22 2018 12:31:04 GMT-0700 (PDT)').toISOString(),
          category_id: '25',
          user_id: '7'
        }),
        knex('resources').insert({
          url: 'https://joel.net',
          title: 'Perferendis officia vel facere nobis.',
          description: 'Voluptas tempore incidunt asperiores expedita qui atque voluptas. Dolorem aperiam est et quos nesciunt magnam qui est aperiam. Hic facere ipsum. Ut vero at est reprehenderit rem cum consequuntur. Inventore perferendis pariatur animi neque ratione vel dolorem eum. Reprehenderit laudantium omnis.',
          image_url: 'http://lorempixel.com/640/480/business',
          timestamp: new Date('Wed Aug 22 2018 16:59:23 GMT-0700 (PDT)').toISOString(),
          category_id: '17',
          user_id: '8'
        }),
        knex('resources').insert({
          url: 'https://marlin.net',
          title: 'Neque pariatur veniam.',
          description: 'Omnis reiciendis unde totam enim ab maiores error. Qui consectetur vel officia sunt enim autem dolorem nesciunt. Pariatur qui sint ipsam. Optio est non consectetur numquam sit id dolor architecto accusamus. Architecto quis praesentium eligendi sapiente hic ut. Vero ullam ipsam sit quibusdam perspiciatis voluptatibus eum sequi voluptas.',
          image_url: 'http://lorempixel.com/640/480/nightlife',
          timestamp: new Date('Thu Aug 23 2018 08:51:47 GMT-0700 (PDT)').toISOString(),
          category_id: '13',
          user_id: '3'
        }),
        knex('resources').insert({
          url: 'https://domenico.info',
          title: 'Beatae occaecati eveniet incidunt.',
          description: 'Perspiciatis totam eaque sint amet nihil. Harum porro omnis veritatis magnam dolores incidunt. Fugit et porro aut exercitationem ex unde laudantium et animi. Voluptatem beatae blanditiis ducimus dignissimos. Reiciendis dicta iure dolor nobis.',
          image_url: 'http://lorempixel.com/640/480/animals',
          timestamp: new Date('Thu Aug 23 2018 01:04:30 GMT-0700 (PDT)').toISOString(),
          category_id: '14',
          user_id: '9'
        }),
        knex('resources').insert({
          url: 'https://rodolfo.com',
          title: 'Quisquam sint facilis minus et quia accusamus ipsam.',
          description: 'Non non omnis harum exercitationem et voluptatem ipsum. Exercitationem non error odit.',
          image_url: 'http://lorempixel.com/640/480/people',
          timestamp: new Date('Wed Aug 22 2018 15:14:13 GMT-0700 (PDT)').toISOString(),
          category_id: '1',
          user_id: '9'
        }),
        knex('resources').insert({
          url: 'https://marjolaine.org',
          title: 'Nisi nostrum debitis ut consequatur.',
          description: 'Aut laborum impedit. Ea dolorem aut. Nihil aperiam ex consectetur excepturi sequi dicta eaque nostrum.',
          image_url: 'http://lorempixel.com/640/480/technics',
          timestamp: new Date('Wed Aug 22 2018 22:39:47 GMT-0700 (PDT)').toISOString(),
          category_id: '13',
          user_id: '8'
        }),
        knex('resources').insert({
          url: 'https://josefa.net',
          title: 'Vero vero labore necessitatibus velit modi maiores.',
          description: 'Sit repudiandae laboriosam in. Consequatur inventore consectetur et ex.',
          image_url: 'http://lorempixel.com/640/480/business',
          timestamp: new Date('Wed Aug 22 2018 22:24:31 GMT-0700 (PDT)').toISOString(),
          category_id: '18',
          user_id: '7'
        }),
        knex('resources').insert({
          url: 'https://oceane.info',
          title: 'Magni placeat et necessitatibus quidem.',
          description: 'Cupiditate omnis enim dolor ut. Et eum doloremque in aperiam unde molestiae. Beatae sed alias et non nemo non optio earum. Sunt numquam eos. Nesciunt perspiciatis est ad exercitationem.',
          image_url: 'http://lorempixel.com/640/480/nature',
          timestamp: new Date('Thu Aug 23 2018 08:07:08 GMT-0700 (PDT)').toISOString(),
          category_id: '10',
          user_id: '1'
        }),
        knex('resources').insert({
          url: 'https://andres.net',
          title: 'Tenetur repudiandae magnam soluta.',
          description: 'Nulla quia nisi illo occaecati. Veritatis rem neque qui consequatur et corrupti voluptas consequuntur. Autem cum ipsam.',
          image_url: 'http://lorempixel.com/640/480/abstract',
          timestamp: new Date('Thu Aug 23 2018 04:00:47 GMT-0700 (PDT)').toISOString(),
          category_id: '12',
          user_id: '5'
        }),
        knex('resources').insert({
          url: 'http://paula.biz',
          title: 'Sint ratione est voluptate et et.',
          description: 'Est aperiam tenetur. Dolores nisi a dolorum omnis beatae.',
          image_url: 'http://lorempixel.com/640/480/food',
          timestamp: new Date('Wed Aug 22 2018 14:41:06 GMT-0700 (PDT)').toISOString(),
          category_id: '19',
          user_id: '4'
        }),
        knex('resources').insert({
          url: 'https://cole.name',
          title: 'Quia eum qui laborum vel corporis ex rem sunt.',
          description: 'Minima enim ut illum quisquam. Quis est saepe voluptates voluptas ea.',
          image_url: 'http://lorempixel.com/640/480/food',
          timestamp: new Date('Thu Aug 23 2018 03:31:00 GMT-0700 (PDT)').toISOString(),
          category_id: '13',
          user_id: '9'
        }),
      ]);
    });
};
