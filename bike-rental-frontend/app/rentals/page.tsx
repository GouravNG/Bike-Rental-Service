import PLPFilters from "@/components/PLPFilters"
import RentalCards from "@/components/RentalCards"
import { bRes } from "@/dummyData"

export default function RentalsPage() {
  return (
    <PLPFilters>
      <div className="flex items-center justify-center flex-wrap gap-10">
        {bRes.data.items.map((i) => {
          return <RentalCards key={i.id} {...i} />
        })}
      </div>
    </PLPFilters>
  )
}
