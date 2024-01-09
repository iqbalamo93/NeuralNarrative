import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

import './Nextcard.css'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function App() {
  return (

    <Carousel className="w-full custom-carousel"   >

      <CarouselContent className="flex items-center custom-carousel-content">

      <CarouselItem className="pb-0 flex-none">
        <a href="./blogs/transformers/05_transformer">
          <Card className="max-w-xs ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Recent Article</p>
              <small className="text-default-500">Code</small>
              <h4>Transformer</h4>
            </CardHeader>
            <CardBody className="overflow-visible ">
              <Image 
                alt="Card background"
                className="object-cover rounded-xl"
                src='https://image.lexica.art/full_webp/22ac94c2-86aa-4690-9bd3-147e0a8fbb2c'
                width={200}
              />
            </CardBody>
          </Card>
        </a>
      </CarouselItem>
        <CarouselItem className="pb-0 flex-none">
        <a href="./blogs/transformers/05_transformer">
          <Card className="max-w-xs ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Recent Article</p>
              <small className="text-default-500">writeup</small>
              <h4 className="font-bold text-large">Quantisation</h4>
            </CardHeader>
            <CardBody className="overflow-visible ">
              <Image 
                alt="Card background"
                className="object-cover rounded-xl"
                src='https://image.lexica.art/full_webp/22ac94c2-86aa-4690-9bd3-147e0a8fbb2c'
                width={200}
              />
            </CardBody>
          </Card>
        </a>
      </CarouselItem>

      <CarouselItem className="pb-0 flex-none">
        <a href="#project">
          <Card className="max-w-xs ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Other works</p>
              <small className="text-default-500">Code and play</small>
              <h4 className="font-bold text-large">Projects</h4>
            </CardHeader>
            <CardBody className="overflow-visible ">
              <Image 
                alt="Card background"
                className="object-cover rounded-xl"
                src='https://image.lexica.art/full_webp/dd124f91-946f-41c8-9680-0c2c0fe73505'
                width={200}
              />
            </CardBody>
          </Card>
        </a>
      </CarouselItem>

      <CarouselItem className="pb-0 flex-none">
        <a href="./blogs/transformers/05_transformer">
          <Card className="max-w-xs ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Recent Article</p>
              <small className="text-default-500">Code</small>
              <h4 className="font-bold text-large">Four</h4>
            </CardHeader>
            <CardBody className="overflow-visible ">
              <Image 
                alt="Card background"
                className="object-cover rounded-xl"
                src='https://image.lexica.art/full_webp/22ac94c2-86aa-4690-9bd3-147e0a8fbb2c'
                width={200}
              />
            </CardBody>
          </Card>
        </a>
      </CarouselItem>

      <CarouselItem className="pb-0 flex-none">
        <a href="./blogs/transformers/05_transformer">
          <Card className="max-w-xs ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Recent Article</p>
              <small className="text-default-500">Code</small>
              <h4 className="p-0 m-0 font-bold text-large">Five</h4>
            </CardHeader>
            <CardBody className="overflow-visible ">
              <Image 
                alt="Card background"
                className="object-cover rounded-xl"
                src='https://image.lexica.art/full_webp/22ac94c2-86aa-4690-9bd3-147e0a8fbb2c'
                width={200}
              />
            </CardBody>
          </Card>
        </a>
      </CarouselItem>

      <CarouselItem className="pb-0 flex-none">
        <a href="./blogs/transformers/05_transformer">
          <Card className="max-w-xs ">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Recent Article</p>
              <small className="text-default-500">Code</small>
              <h4 className="p-0 m-0 font-bold text-large">six</h4>
            </CardHeader>
            <CardBody className="overflow-visible ">
              <Image 
                alt="Card background"
                className="object-cover rounded-xl"
                src='https://image.lexica.art/full_webp/22ac94c2-86aa-4690-9bd3-147e0a8fbb2c'
                width={200}
              />
            </CardBody>
          </Card>
        </a>
      </CarouselItem>


      </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
  </Carousel>

  )
}