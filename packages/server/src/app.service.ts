import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): any {
    const data = {
      categories: [
        {
          id: 1,
          name: '프로틴',
          menus: [
            {
              id: 1,
              name: '임팩트 웨이 프로틴',
              imgUrl1:
                'https://static.thcdn.com/images/xsmall/webp//productimg/original/10530943-1224889444460882.jpg',
              imgUrl2:
                'https://static.thcdn.com/images/xsmall/webp//productimg/original/10530943-4134889444511789.jpg',
              price: 20000,
              sellCount: 4,
              options: [
                {
                  id: 1,
                  name: '맛',
                  detail: [
                    {
                      id: 1,
                      name: '초코 맛',
                      price: 0,
                    },
                    {
                      id: 2,
                      name: '초코브라우니 맛',
                      price: 1000,
                    },
                  ],
                },
                {
                  id: 2,
                  name: '사이즈',
                  detail: [
                    {
                      id: 1,
                      name: '5 kg',
                      price: 0,
                    },
                    {
                      id: 2,
                      name: '10 kg',
                      price: 15000,
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              name: '클리어 웨이 아이솔레이트',
              imgUrl1:
                'https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12457913-3554790136840897.jpg',
              imgUrl2:
                'https://static.thcdn.com/images/xsmall/webp//productimg/original/12081395-1194954986226116.jpg',
              price: 35000,
              sellCount: 2,
              options: [
                {
                  id: 1,
                  name: '맛',
                  detail: [
                    {
                      id: 1,
                      name: '초코 맛',
                      price: 0,
                    },
                    {
                      id: 2,
                      name: '초코브라우니 맛',
                      price: 1000,
                    },
                  ],
                },
                {
                  id: 2,
                  name: '사이즈',
                  detail: [
                    {
                      id: 1,
                      name: '5 kg',
                      price: 0,
                    },
                    {
                      id: 2,
                      name: '10 kg',
                      price: 15000,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }

    return data
  }
}
