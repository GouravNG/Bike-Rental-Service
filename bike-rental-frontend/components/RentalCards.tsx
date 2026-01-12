import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { TRentals } from "@/types/bike.types"
import { CircleQuestionMark } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const RentalCards = (data: TRentals) => {
  return (
    <>
      <Card className="shadow-sm hover:shadow-md hover:scale-105 transition-all">
        <CardContent>
          <Image
            alt="vehicle"
            src={"/Scooter.png"}
            height={200}
            width={250}
            className="rounded-xl"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription className="line-clamp-3 min-h-[3.6em]">
            {data.description ?? "No description"}
          </CardDescription>
          <div>
            <div className="flex items-center justify-start gap-2">
              <p className="font-bold text-2xl">₹{data.hourlyRate}</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CircleQuestionMark size={20} className="text-blue-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hourly Rate</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  )
}
export default RentalCards
