import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function App() {
  return (
    <a href="./blogs/transformers/05_transformer">
    <Card className="max-w-xs"> {/* Adjust width, remove centering */}
      <CardHeader className="px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Recent Article</p>
        <h4 className="font-bold text-large">Transformers</h4>
      </CardHeader>
      <CardBody className="overflow-visible ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src='https://image.lexica.art/full_webp/22ac94c2-86aa-4690-9bd3-147e0a8fbb2c'
          width={270}
        />
      </CardBody>
    </Card>
  </a>
  )
}