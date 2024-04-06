export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]


export type Options = "XYZ" | "YXZ"

export interface ITabMenu {
  options: Array<string>
}




export interface ITabContent {
  title: string,
  description: string,
  image_url: string
}

