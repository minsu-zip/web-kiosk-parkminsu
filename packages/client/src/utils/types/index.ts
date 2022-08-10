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

export type { TCategory, TMenu, TMenuOption, TOptionDetail }
