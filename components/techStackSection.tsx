import { Card, CardFooter, Chip, Image, Tab, Tabs } from '@nextui-org/react'
import { TECHS } from '@/config/constant'
import React from 'react'
import { TechType } from '@/config/type'

const techStackSection = () => {
  return (
    <section id="tech-stack" className='min-h-[100vh]'>
      <Tabs
        aria-label="Dynamic tabs"
        color='secondary'
        className='flex place-content-center width-[100%] align-stretch mt-8'
        items={Object.values(TechType).map(t => ({ id: t }))}
      >
        {Object.values(TechType).map((t, index) => {
          const items = TECHS.filter(te => te.type === t)
          return (
            <Tab
              key={index}
              title={
                <div className="flex items-center space-x-2">
                  <span className='capitalize'>
                    {t}
                  </span>
                  <Chip size="sm" variant="faded">
                    {items.length}
                  </Chip>
                </div>
              }
            >
              <div className="gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {items.map((item, idx) =>
                  <Card shadow="sm" key={idx} isPressable onPress={() => console.log("item pressed")}>
                    <Image
                      shadow="sm"
                      alt={item.title}
                      className="object-contain aspect-[1/1] p-1"
                      src={item.img}
                    />
                    <CardFooter className="text-small justify-between">
                      <b>{item.title}</b>
                      <p className="text-default-500 capitalize">
                        {item.type}
                      </p>
                    </CardFooter>
                  </Card>
                )}
              </div>
            </Tab>
          )
        })}
      </Tabs>
    </section>
  )
}

export default techStackSection