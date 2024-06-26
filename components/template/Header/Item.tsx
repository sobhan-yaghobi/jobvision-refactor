import React from "react"

import { CategoryWithCollection, provinceWithCity } from "@/types/utils.type"
import { category_collection as Category_collection, city as City } from "@prisma/client"

import Link from "next/link"

type ItemProps = {
  itemHref: string
  itemName: string
}
const Item: React.FC<React.PropsWithChildren<ItemProps>> = ({ itemHref, itemName, children }) => (
  <li className="overflow-hidden max-h-fit p-2">
    <div className="text-jv-lightGray dana-bold w-full h-full flex flex-col px-3 py-1 hover:text-primary">
      <Link
        href={itemHref}
        className="relative mb-1 after:content-[''] after:absolute after:top-0 after:-right-2 after:w-1 after:h-full after:bg-primary after:rounded-sm"
      >
        {itemName}
      </Link>
      {children}
    </div>
  </li>
)

type CategoryItemProps = { category: CategoryWithCollection }
const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => (
  <Item key={`list-item-${category.id}`} itemHref={`jobs`} itemName={category.name}>
    {category.category_collections.length ? (
      <ul className="w-full px-3 cursor-default dana">
        {category.category_collections.map((collection: Category_collection) => (
          <li
            key={`collection-item-${collection.id}`}
            className="w-full flex items-center mt-2 first:mt-0"
          >
            <Link
              href={`jobs?collection=${collection.id}`}
              className="text-secondary w-full inline-block hover:text-primary hover:underline"
            >
              {collection.name}
            </Link>
          </li>
        ))}
      </ul>
    ) : null}
  </Item>
)

type ProvinceItemProps = { province: provinceWithCity }
const ProvinceItem: React.FC<ProvinceItemProps> = ({ province }) => (
  <Item itemHref={`jobs?province=${province.id}`} itemName={province.name}>
    {province.cities.length ? (
      <ul className="w-full px-3 cursor-default dana">
        {province.cities.map((city: City) => (
          <li key={city.id} className="w-full flex items-center mt-2 first:mt-0">
            <Link
              href={`jobs?city=${city.id}`}
              className="text-secondary w-full inline-block hover:text-primary hover:underline"
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    ) : null}
  </Item>
)

export { Item, CategoryItem, ProvinceItem }
