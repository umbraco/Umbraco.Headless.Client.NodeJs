import { Content } from '@umbraco/headless-client'

export type Link = {
  url: string
  target?: string
  name: string
}

export type Image = {
  _url: string
}

export type Hero = {
  image?: Image,
  title: string,
  subtitle?: string
}

export type UniqueSellingPoint = {
  image?: Image
  link?: Link
  text: string
  title?: string
}

export type HideInNavigation = {
  umbNaviHide: boolean
}

export type Element = {
  contentTypeAlias: string
}

export type TextAndImage = Element & {
  title: string
  text: string
  image?: Image
  showLargeImage: boolean
}

export type Elements = TextAndImage

export type Frontpage = Content & HideInNavigation & Hero & UniqueSellingPoint & Elements[]
export type Textpage = Content & HideInNavigation & Hero & Elements[]
