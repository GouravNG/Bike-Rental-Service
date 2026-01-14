import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Booking = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Card className="m-8">
          <CardHeader>
            <CardTitle>Booking</CardTitle>
            <CardDescription>Choose the date range</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="range"
              defaultMonth={new Date()}
              selected={{ from: new Date(), to: new Date() }}
              numberOfMonths={2}
            />
          </CardContent>
        </Card>
        <Button>Book now</Button>
      </div>
    </>
  )
}
export default Booking
