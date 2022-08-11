interface TBase {
  id: number
  name: string
}

interface TOptionDetail extends TBase {
  price: number
}

interface TMenuOption extends TBase {
  details: TOptionDetail[]
}

interface TMenu extends TBase {
  imgUrl1: string
  imgUrl2: string
  price: number
  sellCount: number
  options: TMenuOption[]
}

interface TCategory extends TBase {
  menus: TMenu[]
}

interface TSelectedOption {
  optionId: number
  option: TOptionDetail
}

interface TCart extends TBase, TMenu {
  categoryId: number
  count: number
  createdAt?: string
  totalPrice: number
  selectedOption: TSelectedOption[]
}

interface TMenuInfo {
  count: number
  totalPrice: number
  selectedOption?: TSelectedOption[]
}
export type { TCategory, TMenu, TMenuOption, TOptionDetail, TCart, TMenuInfo }
