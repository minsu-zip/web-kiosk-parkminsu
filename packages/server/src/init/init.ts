import { Category } from '@src/categories/entities/category.entity'
import { Menu } from '@src/menus/entities/menu.entity'
import { Option } from '@src/options/entities/option.entity'
import { OptionDetail } from '@src/options/entities/optionDetail.entity'
import dataSource from './dataSource'
import categoriesData from './categoriesData.json'
import optionData from './optionData.json'

async function migrate() {
  const options: Option[] = []
  for (const mockOption of optionData) {
    const option = new Option()
    option.name = mockOption.name
    options.push(option)
    await dataSource.getRepository('option_table').save(option)

    for (const mockOptionDetail of mockOption.details) {
      const optionDetail = new OptionDetail()
      optionDetail.name = mockOptionDetail.name
      optionDetail.price = mockOptionDetail.price
      optionDetail.option = option
      await dataSource.getRepository('option_detail').save(optionDetail)
    }
  }

  for (const mockCategory of categoriesData) {
    const category = new Category()
    category.name = mockCategory.name
    await dataSource.getRepository('category').save(category)

    for (const mockItem of mockCategory.menu) {
      const menu = new Menu()
      menu.name = mockItem.name
      menu.imgUrl1 = mockItem.imgUrl1
      menu.imgUrl2 = mockItem.imgUrl2
      menu.price = mockItem.price
      menu.sellCount = mockItem.sellCount
      menu.category = category
      menu.options = options
      await dataSource.getRepository('menu').save(menu)
    }
  }
}

async function init() {
  await dataSource.initialize()
  await migrate()
  await dataSource.destroy()
  console.log('마이그레이션 완료')
}

init()
